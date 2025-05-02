"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { Send, Paperclip, Smile, ArrowLeft, MoreVertical } from "lucide-react";
import Image from "next/image";

// Define types with ObjectId
interface Message {
  id: string; // MongoDB ObjectId as string
  channelId: string; // MongoDB ObjectId as string
  senderId: string; // MongoDB ObjectId as string
  content: string;
  timestamp: Date;
  type: "text" | "image" | "file";
  status: "sent" | "delivered" | "read";
}

interface User {
  id: string; // MongoDB ObjectId as string
  name: string;
  avatar?: string;
}

interface Channel {
  id: string; // MongoDB ObjectId as string
  name?: string;
  type: "direct" | "group";
  members: User[];
}

export default function ChatApp() {
  const { channelId } = useParams<{ channelId: string }>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());
  const [currentUser, setCurrentUser] = useState<User>({
    id: "user-1",
    name: "Current User",
  });
  const [channel, setChannel] = useState<Channel | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Connect to WebSocket
  useEffect(() => {
    if (!channelId) return;

    // Create WebSocket connection
    const ws = new WebSocket(`ws://${window.location.host}`);
    setSocket(ws);

    // Connection opened
    ws.addEventListener("open", () => {
      console.log("Connected to WebSocket server");
      setIsConnected(true);

      // Subscribe to channel
      ws.send(
        JSON.stringify({
          type: "subscribe",
          channelId,
        })
      );
    });

    // Listen for messages
    ws.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);

      switch (data.type) {
        case "subscribed":
          console.log(`Subscribed to channel: ${data.channelId}`);
          break;

        case "history":
          setMessages(data.messages);
          break;

        case "new_message":
          setMessages((prev) => [...prev, data.message]);
          break;

        case "user_typing":
          if (data.isTyping) {
            setTypingUsers((prev) => new Set(prev).add(data.senderId));
          } else {
            setTypingUsers((prev) => {
              const updated = new Set(prev);
              updated.delete(data.senderId);
              return updated;
            });
          }
          break;

        case "message_read":
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === data.messageId ? { ...msg, status: "read" } : msg
            )
          );
          break;
      }
    });

    // Connection closed
    ws.addEventListener("close", () => {
      console.log("Disconnected from WebSocket server");
      setIsConnected(false);
    });

    // Cleanup on unmount
    return () => {
      ws.close();
    };
  }, [channelId]);

  // Fetch channel details
  useEffect(() => {
    if (!channelId) return;

    // In a real app, fetch channel details from your API
    const fetchChannel = async () => {
      try {
        // const response = await fetch(`/api/channels/${channelId}`)
        // const data = await response.json()
        // setChannel(data)

        // Mock data for example
        setChannel({
          id: channelId,
          name: "Chat Channel",
          type: "direct",
          members: [
            { id: "user-1", name: "Current User" },
            { id: "user-2", name: "Jason Susanto" },
          ],
        });
      } catch (error) {
        console.error("Failed to fetch channel:", error);
      }
    };

    fetchChannel();
  }, [channelId]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle typing indicator
  useEffect(() => {
    if (!socket || !isConnected || !channelId) return;

    if (isTyping) {
      socket.send(
        JSON.stringify({
          type: "typing",
          channelId,
          senderId: currentUser.id,
          isTyping: true,
        })
      );

      // Clear previous timeout
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      // Set timeout to stop typing indicator
      typingTimeoutRef.current = setTimeout(() => {
        setIsTyping(false);
        socket.send(
          JSON.stringify({
            type: "typing",
            channelId,
            senderId: currentUser.id,
            isTyping: false,
          })
        );
      }, 3000);
    }

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [isTyping, socket, isConnected, channelId, currentUser.id]);

  // Handle message input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);

    if (!isTyping && e.target.value.length > 0) {
      setIsTyping(true);
    } else if (isTyping && e.target.value.length === 0) {
      setIsTyping(false);
    }
  };

  // Send message
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newMessage.trim() || !socket || !isConnected || !channelId) return;

    // Send message to server
    socket.send(
      JSON.stringify({
        type: "message",
        channelId,
        senderId: currentUser.id,
        content: newMessage,
        messageType: "text",
      })
    );

    setNewMessage("");
    setIsTyping(false);
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    const d = new Date(date);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Get other user in direct chat
  const getOtherUser = () => {
    if (!channel || channel.type !== "direct") return null;
    return channel.members.find((member) => member.id !== currentUser.id);
  };

  const otherUser = getOtherUser();

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b">
        <button className="mr-2 md:hidden">
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </button>

        <div className="flex items-center">
          <div className="relative mr-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <Image
                src={
                  otherUser?.avatar ||
                  `/placeholder.svg?height=40&width=40&text=${
                    otherUser?.name.charAt(0) || "C"
                  }`
                }
                alt={otherUser?.name || "Channel"}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>

          <div>
            <h2 className="font-medium">
              {otherUser?.name || channel?.name || "Chat"}
            </h2>
            {typingUsers.size > 0 ? (
              <p className="text-xs text-gray-500">Typing...</p>
            ) : (
              <p className="text-xs text-gray-500">Online</p>
            )}
          </div>
        </div>

        <div className="ml-auto">
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => {
          const isCurrentUser = msg.senderId === currentUser.id;
          const showDate =
            index === 0 ||
            new Date(msg.timestamp).toDateString() !==
              new Date(messages[index - 1].timestamp).toDateString();

          return (
            <div key={msg.id}>
              {showDate && (
                <div className="text-center my-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">
                    {new Date(msg.timestamp).toLocaleDateString()}
                  </span>
                </div>
              )}

              <div
                className={`flex items-end ${
                  isCurrentUser ? "justify-end" : ""
                }`}
              >
                {!isCurrentUser && (
                  <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-2 flex-shrink-0">
                    <Image
                      src={`/placeholder.svg?height=32&width=32&text=${msg.senderId.charAt(
                        0
                      )}`}
                      alt="User"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                )}

                <div
                  className={`max-w-[75%] p-3 rounded-t-lg ${
                    isCurrentUser
                      ? "bg-purple-600 text-white rounded-bl-lg rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-br-lg rounded-bl-none"
                  }`}
                >
                  <p>{msg.content}</p>
                  <div className="flex items-center justify-end mt-1 space-x-1">
                    <span
                      className={`text-xs ${
                        isCurrentUser ? "text-purple-200" : "text-gray-500"
                      }`}
                    >
                      {formatTime(msg.timestamp)}
                    </span>

                    {isCurrentUser && (
                      <span className="text-xs text-purple-200">
                        {msg.status === "read" ? "✓✓" : "✓"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form
        onSubmit={sendMessage}
        className="border-t p-4 flex items-center gap-2"
      >
        <button type="button" className="text-gray-500 hover:text-gray-700">
          <Paperclip className="h-5 w-5" />
        </button>

        <button type="button" className="text-gray-500 hover:text-gray-700">
          <Smile className="h-5 w-5" />
        </button>

        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="flex-1 py-2 px-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={!isConnected}
        />

        <button
          type="submit"
          className="bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700 disabled:opacity-50"
          disabled={!newMessage.trim() || !isConnected}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}

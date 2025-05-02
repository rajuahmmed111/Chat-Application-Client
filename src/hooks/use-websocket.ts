/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useCallback } from "react";

type WebSocketMessage = {
  type: string;
  [key: string]: any;
};

export function useWebSocket(url: string | null) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null);

  useEffect(() => {
    if (!url) return;

    // Create WebSocket connection
    const ws = new WebSocket(url);
    setSocket(ws);

    // Connection opened
    ws.addEventListener("open", () => {
      setIsConnected(true);
    });

    // Listen for messages
    ws.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      setLastMessage(data);
    });

    // Connection closed
    ws.addEventListener("close", () => {
      setIsConnected(false);
    });

    // Cleanup on unmount
    return () => {
      ws.close();
    };
  }, [url]);

  // Send message function
  const sendMessage = useCallback(
    (message: WebSocketMessage) => {
      if (socket && isConnected) {
        socket.send(JSON.stringify(message));
        return true;
      }
      return false;
    },
    [socket, isConnected]
  );

  return { socket, isConnected, lastMessage, sendMessage };
}

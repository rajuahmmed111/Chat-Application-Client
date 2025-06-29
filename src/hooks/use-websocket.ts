/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Message } from "@/types/chat"
import { useState, useEffect, useRef, useCallback } from "react"

interface WebSocketMessage {
  type: string
  channelId?: string
  message?: any
}

export function useWebSocket(channelId: string) {
  const [connected, setConnected] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const socketRef = useRef<WebSocket | null>(null)

  useEffect(() => {
    if (!channelId) return

    // Close previous connection if exists
    if (socketRef.current) {
      socketRef.current.close()
    }

    // Create new WebSocket connection
    const socket = new WebSocket(`ws://${window.location.host}`)
    socketRef.current = socket

    socket.onopen = () => {
      console.log("WebSocket connected")
      setConnected(true)

      // Subscribe to the channel
      socket.send(
        JSON.stringify({
          type: "subscribe",
          channelId,
        }),
      )
    }

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)

        if (data.type === "subscribed") {
          console.log(`Subscribed to channel: ${data.channelId}`)
        } else if (data.message) {
          setMessages((prev) => [...prev, data.message])
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error)
      }
    }

    socket.onclose = () => {
      console.log("WebSocket disconnected")
      setConnected(false)
    }

    socket.onerror = (error) => {
      console.error("WebSocket error:", error)
    }

    // Cleanup on unmount
    return () => {
      socket.close()
    }
  }, [channelId])

  // Function to send messages through the WebSocket
  const sendMessage = useCallback((message: WebSocketMessage) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify(message))
    } else {
      console.error("WebSocket is not connected")
    }
  }, [])

  return { socket: socketRef.current, connected, messages, sendMessage }
}

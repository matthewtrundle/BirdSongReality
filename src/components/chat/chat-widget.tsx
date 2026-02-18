"use client"

import { useState, useRef, useEffect } from "react"
import { useChat, type Message } from "ai/react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChatMessage } from "./chat-message"
import { ChatPopup } from "./chat-popup"

interface ChatWidgetProps {
  className?: string
}

export function ChatWidget({ className }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "Welcome to Birdsong Realty. I can help you explore Austin neighborhoods, understand market trends, or answer questions about buying and selling. What can I help you with?",
      },
    ],
  })

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  // Show popup after 15 seconds if user hasn't interacted
  useEffect(() => {
    const popupShown = sessionStorage.getItem("chatPopupShown")
    if (popupShown || hasInteracted) return

    const timer = setTimeout(() => {
      if (!isOpen && !hasInteracted) {
        setShowPopup(true)
        sessionStorage.setItem("chatPopupShown", "true")
      }
    }, 15000)

    return () => clearTimeout(timer)
  }, [isOpen, hasInteracted])

  const handleOpen = () => {
    setIsOpen(true)
    setShowPopup(false)
    setHasInteracted(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleDismissPopup = () => {
    setShowPopup(false)
    setHasInteracted(true)
  }

  return (
    <>
      {/* Popup that appears after 15 seconds */}
      <AnimatePresence>
        {showPopup && !isOpen && (
          <ChatPopup onOpen={handleOpen} onDismiss={handleDismissPopup} />
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleOpen}
            className={cn(
              "fixed bottom-6 right-6 z-40 w-13 h-13 rounded-xl bg-primary-900 text-white shadow-lg",
              "flex items-center justify-center hover:bg-primary-800 transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
              className
            )}
            style={{ width: 52, height: 52 }}
            aria-label="Open chat"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              "fixed bottom-6 right-6 z-40 w-[380px] max-w-[calc(100vw-3rem)]",
              "bg-white rounded-xl shadow-2xl border border-neutral-200/80 overflow-hidden",
              "flex flex-col",
              className
            )}
            style={{ height: "min(560px, calc(100vh - 6rem))" }}
          >
            {/* Header */}
            <div className="bg-primary-900 text-white px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-accent-500/20 flex items-center justify-center">
                  <svg className="w-4.5 h-4.5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Birdsong Realty</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <p className="text-xs text-white/60">Online</p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 hover:bg-white/10 rounded-md transition-colors"
                aria-label="Close chat"
              >
                <svg
                  className="w-4.5 h-4.5 text-white/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-neutral-50/80">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-primary-900 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  </div>
                  <div className="px-3.5 py-2.5 bg-white border border-neutral-200 rounded-xl rounded-tl-sm">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              {error && (
                <div className="text-sm text-red-600 bg-red-50 border border-red-100 p-3 rounded-lg">
                  Something went wrong. Please try again.
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-3 border-t border-neutral-200 bg-white shrink-0"
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask about Austin real estate..."
                  className={cn(
                    "flex-1 px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400",
                    "placeholder:text-neutral-400"
                  )}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className={cn(
                    "w-10 h-10 rounded-lg bg-primary-900 text-white flex items-center justify-center",
                    "hover:bg-primary-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                    "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  )}
                  aria-label="Send message"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

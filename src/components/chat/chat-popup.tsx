"use client"

import { motion } from "framer-motion"
import { getRandomFunFact } from "@/lib/chat-context"
import { useState, useEffect } from "react"

interface ChatPopupProps {
  onOpen: () => void
  onDismiss: () => void
}

export function ChatPopup({ onOpen, onDismiss }: ChatPopupProps) {
  const [funFact, setFunFact] = useState("")

  useEffect(() => {
    setFunFact(getRandomFunFact())
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)]"
    >
      <div className="bg-white rounded-xl shadow-xl border border-neutral-200/80 overflow-hidden">
        {/* Header */}
        <div className="bg-primary-900 px-5 py-3.5 text-white relative">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-accent-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-sm">Birdsong Realty Team</p>
              <p className="text-xs text-white/60">Typically replies instantly</p>
            </div>
          </div>
          <button
            onClick={onDismiss}
            className="absolute top-3 right-3 p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Dismiss"
          >
            <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-sm text-neutral-700 leading-relaxed mb-2">
            {funFact}
          </p>
          <p className="text-sm text-neutral-500 mb-5">
            Have questions about Austin real estate? We&apos;re here to help.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpen}
              className="flex-1 px-4 py-2.5 bg-primary-900 text-white text-sm font-medium rounded-md hover:bg-primary-800 transition-colors"
            >
              Start a conversation
            </button>
            <button
              onClick={onDismiss}
              className="px-4 py-2.5 text-neutral-400 text-sm hover:text-neutral-600 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

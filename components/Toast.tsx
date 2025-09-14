"use client"

import { useEffect } from "react"

interface ToastProps {
  message: string
  type?: "info" | "success" | "warning" | "error"
  onClose: () => void
  duration?: number
  className?: string
}

export function Toast({ message, type = "info", onClose, duration = 5000, className = "" }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const colors = {
    info: "text-blue-200 bg-blue-500/20 border-blue-400/30",
    success: "text-green-200 bg-green-500/20 border-green-400/30",
    warning: "text-yellow-200 bg-yellow-500/20 border-yellow-400/30",
    error: "text-red-200 bg-red-500/20 border-red-400/30",
  }

  const baseClasses =
    "backdrop-blur-[20px] border fixed top-4 right-4 p-4 rounded-xl flex items-center justify-between space-x-3 z-50 min-w-[300px] max-w-[500px] animate-in slide-in-from-right-full"

  return (
    <div className={`${baseClasses} ${colors[type]} ${className}`}>
      <span>{message}</span>
      <button onClick={onClose} className="text-current hover:opacity-70 transition-opacity">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

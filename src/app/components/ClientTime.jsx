"use client"

import { useState, useEffect } from "react"

export function ClientTime() {
  const [clientTime, setClientTime] = useState("Loading...")

  // This will update the client time every second
  useEffect(() => {
    // Set initial time
    setClientTime(new Date().toLocaleTimeString())

    const timer = setInterval(() => {
      setClientTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mt-6 border-t border-gray-100 pt-6">
      <h2 className="text-xl font-bold text-gray-900">Client-Side Time</h2>
      <p className="mt-2 text-gray-600">
        This time updates on the client: <span className="font-mono bg-gray-100 p-1 rounded">{clientTime}</span>
      </p>
    </div>
  )
}


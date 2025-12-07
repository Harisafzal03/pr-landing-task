import React from "react"

type Props = {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`rounded-xl bg-white shadow-[0_12px_32px_rgba(14,26,42,0.08)] ring-1 ring-gray-200 ${className}`}>
      {children}
    </div>
  )
}
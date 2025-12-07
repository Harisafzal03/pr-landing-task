import React from "react"

export const StatRow: React.FC<{ label: string; value: string | number }> = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0 border-gray-200">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm font-semibold text-gray-900">{value}</span>
    </div>
  )
}
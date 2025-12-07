import React from "react"
import { theme } from "../../theme"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost"
  full?: boolean
}

export const Button: React.FC<Props> = ({ variant = "primary", full, className = "", children, ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md text-base py-4 px-8 font-semibold"
  const variants = {
    primary: `bg-[${theme.colors.brand.yellow}] text-white hover:bg-[${theme.colors.brand.navyLight}] focus:ring-[${theme.colors.brand.navy}]`,
    secondary: `bg-[${theme.colors.brand.yellow}] text-[${theme.colors.text.primary}] hover:bg-[${theme.colors.brand.yellowDark}]`,
    ghost: `bg-transparent text-[${theme.colors.text.primary}] hover:bg-gray-100 border border-[${theme.colors.border.yellow}]`,
  }
  const width = full ? "w-full" : ""
  return (
    <button className={`${base} ${variants[variant]} ${width} ${className}`} {...props}>
      {children}
    </button>
  )
}
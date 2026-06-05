import type { ReactNode } from 'react'

interface AccentProps {
  children: ReactNode
  className?: string
}

export default function Accent({ children, className = '' }: AccentProps) {
  return <span className={`accent ${className}`}>{children}</span>
}

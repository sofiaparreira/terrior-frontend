import React, { ReactNode } from 'react'

interface ButtonProps {
  text: string
  onClick?: () => void
  icon?: ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({ text, onClick, icon, className }) => {
  return (
    <button
  className={`${className ?? 'w-full'} flex items-center gap-4 py-2 px-8 bg-primary text-white cursor-pointer group`}
  onClick={onClick}
>
  {text}
  {icon && (
    <span className="text-lg group-hover:translate-x-2 transition-all duration-300">
      {icon}
    </span>
  )}
</button>

  )
}

export default Button

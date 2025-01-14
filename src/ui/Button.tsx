import React from "react"

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { children, ...rest } = props

  return <button {...rest}>{children}</button>
}

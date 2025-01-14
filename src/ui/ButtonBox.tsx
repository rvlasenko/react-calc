import React from "react"

export interface IProps {
  children: React.ReactNode
}

export default function ButtonBox(props: IProps) {
  const { children } = props

  return (
    <div className="h-auto m-1 mb-2 w-auto">
      <div className="grid grid-cols-4 gap-2 m-2">{children}</div>
    </div>
  )
}

import React from "react"

interface Props {
  children: React.ReactNode
}

export const Container = ({ children }: Props) => {
  return (
    <div className="bg-magnolia h-screen grid place-content-center" >
      <div className="p-4 w-[768px] max-h-[600px] bg-white rounded-lg shadow-md shadow-gray-light">{children}</div>
    </div>
  )
}
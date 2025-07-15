import React from 'react'

const Heading = ({ children, className }) => {
  return (
    <h2 className={`font-semibold leading-[135%] ${className}`}>{children}</h2>
  )
}

export default Heading

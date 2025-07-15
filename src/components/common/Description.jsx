import React from 'react'

const Description = ({ children,className }) => {
  return (
    <p className={`text-base font-nunito leading-[160%] ${className}`}>{ children}</p>
  )
}

export default Description

import React from 'react'

const Button = ({ children, className }) => {
  return (
    <button className={`${className} px-8 py-4 bg-prime font-nunitosans hover:text-prime-gradient border border-transparent hover:border-black text-base font-semibold rounded-xl cursor-pointer text-white !leading-[137%]`}>
      {children}
   </button>
  )
}

export default Button

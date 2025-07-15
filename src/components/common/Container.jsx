import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`max-w-[1140px] w-full mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container

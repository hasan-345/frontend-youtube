import React from 'react'

const Input = ({
  type = "text",
  className = "",
  ...props
},ref) => {
  return (
    <input ref={ref} type={type} className={`${className}`} {...props} />
  )
}

export default React.forwardRef(Input)
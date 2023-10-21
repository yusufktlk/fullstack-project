import React from 'react'

function Button({buttonText}) {
  return (
    <button 
    className='bg-indigo-500 w-full h-12  rounded-xl p-2 text-white'
    >
      {buttonText}
  </button>
  )
}

export default Button

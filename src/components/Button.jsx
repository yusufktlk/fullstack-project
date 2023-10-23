import React from 'react'

function Button({buttonText, theme}) {
      // theme === "blue" ?  "	rgb(99 102 241)" :  "rgb(220 38 38)" 

  return (
    <button 
    className='bg-indigo-500 w-full h-12  rounded-xl p-2 text-white'
    style={{backgroundColor: theme}}
    >
      {buttonText}
  </button>
  )
}

export default Button

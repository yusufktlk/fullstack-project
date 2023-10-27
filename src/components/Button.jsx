import React from 'react'

function Button(props) {

  return (
    <button 
    className='bg-indigo-500 w-full h-12  rounded-xl p-2 text-white'
    style={{backgroundColor: props.theme}}
    >
      {props.children}
  </button>
  )
}

export default Button;
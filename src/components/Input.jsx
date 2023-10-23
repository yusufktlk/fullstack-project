import React from 'react'

function Input({placeholder, type, id}) {
  return (
    <div>
        <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="block w-full rounded-md placeholder:text-gray-400 p-1 border-2 border-gray-400 placeholder:pl-8"
      />
    </div>
  )
}

export default Input
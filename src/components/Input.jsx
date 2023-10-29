import React from 'react'

function Input(props) {
  return (
    <div>
        <input
        type={props.type}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        className="block w-full rounded-md placeholder:text-gray-400 p-1 border-2 border-gray-400 placeholder:pl-8"
        onChange={props.onChange}
        id={props.id}
      />
    </div>
  )
}

export default Input
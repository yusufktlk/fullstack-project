import React from 'react'
import Sidebar from '../components/Sidebar'

function Create() {
  return (
    <div className='md:flex'>
        <Sidebar  />

        <main>
            <h1>Create a new project!</h1>
        </main>
    </div>
  )
}

export default Create
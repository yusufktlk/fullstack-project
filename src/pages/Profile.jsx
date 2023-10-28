import React from 'react'
import Sidebar from '../components/Sidebar'

function Profile() {
  return (
    <div className='md:flex'>
        <Sidebar />

        <main className='md:ml-20 mt-8 md:mt-20'>
            <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-semibold leading-7 text-gray-900">Profile Information</h3>
                <p className="mt-1 md:mt-4  max-w-2xl text-base  leading-6 text-gray-500">User details</p>
                <hr />
            </div>
            
            <div className="mt-10">
                <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-100 rounded-lg">
                    <dt className="text-sm font-medium leading-6 text-gray-900 ml-2">Full name</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ml-2">Jessy Schwarz</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900 ml-2">Team</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ml-2">Human Resources</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-100 rounded-lg">
                    <dt className="text-sm font-medium leading-6 text-gray-900 ml-2">Username</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ml-2">jessyschwarz@example.com</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900 ml-2">Email address</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 ml-2">jessyschwarz@example.com</dd>
                </div>
                
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 bg-gray-100 rounded-lg">
                    <dt className="text-sm font-medium leading-6 text-gray-900 ml-2">About</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 tracking-wider md:mr-10 ml-2">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                    pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                    </dd>
                </div>
                </dl>
            </div>
        </main>
    </div>
  )
}

export default Profile
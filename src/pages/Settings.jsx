import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Button from '../components/Button'
import Input from '../components/Input'
import { Link } from 'react-router-dom'

function Settings() {
  const [firstName, setFirstName] = useState([])
  const [lastName, setLastName] = useState([])
  const [email, setEmail] = useState([])

  return (
    <div className='md:flex'>
        <Sidebar />

        <main>

            <div className=" px-7 py-5 flex justify-between items-center">
                <h1 className="text-lg font-medium text-gray-900 sm:truncate">Profile Settings</h1>       
                <Link
                  to={"/profile"}
                  type="button"
                  className="order-0 inline-flex items-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 sm:order-1 sm:ml-3"
                >
                  View Profile
                </Link>
            </div>
            
            <hr />

            {/* Settings forms */}
            <div className="">
              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-black">Personal Information</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>


                <form className="md:col-span-2">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:max-w-xl sm:grid-cols-6">
                    <div className="col-span-full flex items-center gap-x-8">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="avatar"
                        className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                      />
                      <div>
                        <Button 
                        theme={"rgb(99 102 241)"} 
                        buttonText={"Change avatar"}
                        />
                        <p className="mt-2 text-xs leading-5 text-gray-400">JPG, GIF or PNG. 1MB max.</p>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-black">
                        First name
                      </label>
                      <div className="mt-2">
                        <Input
                         onChange={(e) => setFirstName(e.target.value)}
                         placeholder={"First Name"}
                         id={"firstName"}
                         type={"text"}
                         />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-black">
                        Last name
                      </label>
                      <div className="mt-2">
                      <Input
                         onChange={(e) => setLastName(e.target.value)}
                         placeholder={"Last Name"}
                         id={"lastName"}
                         type={"text"}
                         />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">
                        Email address
                      </label>
                      <div className="mt-2">
                      <Input
                         onChange={(e) => setEmail(e.target.value)}
                         placeholder={"Email Address"}
                         id={"email"}
                         type={"text"}
                         />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="username" className="block text-sm font-medium leading-6 text-black">
                        Username
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md">
                          <span className="flex select-none items-center pl-3 pr-2 font-bold text-gray-400 sm:text-sm border-2 border-gray-400 mr-1 rounded-md">
                            example.com/  
                          </span>
                          <Input
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder={"Username"}
                            id={"username"}
                            type={"text"}
                            />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="timezone" className="block text-sm font-medium leading-6 text-black">
                        Timezone
                      </label>
                      <div className="mt-2">
                        <select
                          id="timezone"
                          name="timezone"
                          className="block w-full rounded-md border-2 border-gray-400 py-1.5 "                        >
                          <option>Pacific Standard Time</option>
                          <option>Eastern Standard Time</option>
                          <option>Greenwich Mean Time</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex w-40">
                    <Button 
                    theme={"rgb(99 102 241)"}  
                    buttonText={"Save"}
                    />
                  </div>
                </form>
              </div>

              <hr />

              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-4 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-black">Change password</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Update your password associated with your account.
                  </p>
                </div>

                <form className="md:col-span-2">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="col-span-full">
                      <label htmlFor="current-password" className="block text-sm font-medium leading-6 text-black">
                        Current password
                      </label>
                      <div className="mt-2">
                        <Input 
                            id={"current-password"}
                            placeholder={"********************"}
                            type={"password"}
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="new-password" className="block text-sm font-medium leading-6 text-black">
                        New password
                      </label>
                      <div className="mt-2">
                      <Input 
                            id={"new-password"}
                            placeholder={"********************"}
                            type={"password"}
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-black">
                        Confirm password
                      </label>
                      <div className="mt-2">
                      <Input 
                            id={"confirm-password"}
                            placeholder={"********************"}
                            type={"password"}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex w-40">
                     <Button 
                        theme={"rgb(99 102 241)"} 
                        buttonText={"Save"}
                      />
                  </div>
                </form>
              </div>

                <hr />
              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-4 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-black">Log out other sessions</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Please enter your password to confirm you would like to log out of your other sessions across all of
                    your devices.
                  </p>
                </div>

                <form className="md:col-span-2">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                    <div className="col-span-full">
                      <label htmlFor="logout-password" className="block text-sm font-medium leading-6 text-black">
                        Your password
                      </label>
                      <div className="mt-2">
                        <Input 
                          id={"logout-password"}
                          placeholder={"***************"}
                          type={"password"}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex w-40 text-[14px] text-center">
                    <Button
                    theme={"rgb(99 102 241)"} 
                    buttonText={"Log out other sessions"}
                    />
                  </div>
                </form>
              </div>
                <hr />
              <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                  <h2 className="text-base font-semibold leading-7 text-black">Delete account</h2>
                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    No longer want to use our service? You can delete your account here. This action is not reversible.
                    All information related to this account will be deleted permanently.
                  </p>
                </div>

                <form className="flex items-start md:col-span-2 w-40 text-[14px] mt-6">
                  <Button 
                    buttonText={"Yes, delete my account"}
                    theme={"rgb(220 38 38)"}
                    />
                </form>
              </div>
            </div>
          </main>
    </div>
  )
}

export default Settings
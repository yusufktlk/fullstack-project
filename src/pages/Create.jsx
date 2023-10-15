import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'

function Create(props) {
  // const [projectName, setProjectName] = useState("")
  // const [projectInitials, setProjectInitials] = useState("")
  // const [teamName, setTeamName] = useState("")
  // const [totalMembers, setTotalMembers] = useState("")

  // const newProject = {
  //   title: projectName,
  //   initials: projectInitials,
  //   team: teamName,
  //   totalMembers: totalMembers
  // }

  

  // const addProjectList =  () => {
  //   props.projects.push(newProject)
  //   console.log(props.projects)
  // }


  return (
    <div className='md:flex'>

      <Sidebar /> 

      <main className='flex flex-col m-auto  md:ml-[350px]  font-thin mt-12 md:mt-12 bg-gray-200 rounded-xl p-4 md:p-11'>
            <h1 className='text-5xl ml-24 md:m-auto tracking-wider'>Create Project!</h1>
            
            <div className='flex flex-col font-bold gap-y-10 mt-12 md:mt-20'>
                <div className='flex gap-x-4 items-center'>
                    <h1 className='text-xl w-44'>Project Name:</h1>
                    <input 
                      placeholder=' Project name' 
                      className='border-2 border-black rounded-lg  p-2 w-[300px] font-semibold bg-white placeholder-black ' 
                      onChange={(e) => props.setProjectName(e.target.value)}
                      />   
                </div>
                
                <div className='flex gap-x-4 items-center'>
                    <h1 className='text-xl w-44'>Project Initials:</h1>
                    <input 
                      placeholder=' Initials' 
                      className='border-2  border-black rounded-lg  p-2 w-[300px] font-semibold bg-white placeholder-black '
                      onChange={(e) => props.setProjectInitials(e.target.value)}
                      />   
                </div>
                
                <div className='flex gap-x-4 items-center'>
                    <h1 className='text-xl w-44'>Team Name:</h1>
                    <input 
                      placeholder=' Team name' 
                      className='border-2 border-black rounded-lg  p-2 w-[300px] font-semibold bg-white placeholder-black ' 
                      onChange={(e) => props.setTeamName(e.target.value)}
                      />   
                </div>

                <div className='flex gap-x-4 items-center'>
                    <h1 className='text-xl w-44'>Total Members:</h1>
                    <input 
                      placeholder=' Total members' 
                      className='border-2 border-black rounded-lg  p-2 w-[300px] font-semibold bg-white placeholder-black ' 
                      onChange={(e) => props.setTotalMembers(e.target.value)}
                      />   
                </div>

                <div className='flex gap-x-4 items-center'>
                    <h1 className='text-xl w-44'>Members Names:</h1>
                    <input 
                      placeholder=' Seymen, Yusuf' 
                      className='border-2 border-black rounded-lg   p-2 w-[300px] font-semibold bg-white placeholder-black ' 
                      onChange={(e) => props.setTotalMembers(e.target.value)}
                      />   
                </div>

                <button 
                  className='bg-black w-64 h-12 m-auto rounded-xl p-2 mt-2 text-white'
                  onClick={() => props.addProjectList()}
                  >
                    Create Project
                </button>
            </div>

        </main>
    </div>
  )
}

export default Create
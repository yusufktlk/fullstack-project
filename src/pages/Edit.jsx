import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
import PinnedProjects from '../components/PinnedProject'
import Button from '../components/Button'

function Edit() {
  const [project, setProject] = useState({
    projectName: "",
    teamInitials: "", 
    teamName: "", 
    totalMembers: "", 
    members: ""
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setProject(project=> ({
      ...project,
      [name]: value
    }))
  }

  return (
    <div className='md:flex '>
        <Sidebar />

        <main className='flex-1'>
        <div className=" px-7 py-5 ">
            <h1 className="text-lg font-medium text-gray-900 sm:truncate">Edit</h1>            
        </div>
        
        <hr />

        <PinnedProjects />

        <div>
          <h1 className='bg-[#F3F4F6] mt-8 py-3 px-8 border-b-2 border-t-2 font-semibold text-[14px]'>Edit Your Project</h1>
        </div>

        <form className='flex flex-col md:flex-row gap-y-20 md:gap-y-0 md:gap-x-44 mt-12 ml-12 md:ml-20'>
          <div className='flex flex-col gap-y-6'>
            <h1 className='text-xl font-bold underline'>Project Elements</h1>
              <div className='flex '>
                    <h1 className='text-xl w-44 '>Edit Project Name:</h1>
                    <Input 
                      onChange={handleChange}
                      name="projectName"
                      value={project.projectName}
                      placeholder="Project Name"
                      type="text"
                      id="projectName"
                    />
                </div>

                <div className='flex'>
                    <h1 className='text-xl w-44 '>Edit Project Initials:</h1>
                    <Input 
                      onChange={handleChange}
                      name="teamInitials"
                      value={project.teamInitials}
                      placeholder={"Project Initials"}
                      type={"text"}
                      id={"projectInitialsInput"}
                    />
                </div>

                <div className='flex'>
                    <h1 className='text-xl w-44 '>Edit Team Name:</h1>
                    <Input 
                      onChange={handleChange}
                      name="teamName"
                      value={project.teamName}
                      placeholder={"Team Name"}
                      type={"text"}
                      id={"teamNameInput"}
                    />
                </div>
          </div>

          <div className='flex flex-col gap-y-6'>
            <h1 className='text-xl font-bold underline'>Member Elements</h1>
              <div className='flex gap-x-4 items-center'>
                  <h1 className='text-xl w-40 md:w-44'>Edit Total Members:</h1>
                  <Input
                   onChange={handleChange}
                   name="totalMembers"
                   value={project.totalMembers}
                   placeholder={"Total Members"}
                   type={"text"}
                   id={"totalMembersInput"}
                  /> 
              </div>

              <div className='flex gap-x-4 items-center'>
                  <h1 className='text-xl w-40 md:w-44'>Edit Members Names:</h1>
                  <Input
                   onChange={handleChange}
                   name="members"
                   value={project.members}
                   placeholder={"Seymen, Yusuf"}
                   type={"text"}
                   id={"memberNamesInput"} />
              </div>
            </div>
        </form>
        <div className='ml-32 md:ml-[450px] w-[300px] mt-20 mb-8'>
          <Button>
            Edit the Project
          </Button>
        </div>
      </main>
    </div>
  )
}

export default Edit
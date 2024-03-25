import * as React from "react";
import toraboxlogo from '../../public/torabox-logo.png'

export default function About() {
  return (
    <>
      <section id="projects">
        <div className="bg-[url('../../public/tijolos.jpg')] bg-fixed min-w-full min-h-screen">
        <div className='text-white font-bold text-4xl pt-4 text-center mt-10'> PROJECTS</div>
        <div className="flex justify-center mt-10">
        <div className="bg-white m-10 w-1/3 h-80 rounded-lg ">
        <div className='text-black text-center max-w-2xl pt-20'>
                ProjectsProjectsProjectsProjectsProjects
              </div>
        </div>
        <div className="bg-white m-10 w-1/3 h-80 rounded-lg">
        <div className='text-black text-center max-w-2xl pt-20'>
                ProjectsProjectsProjectsProjectsProjects
              </div>
        </div>
        </div>
        <div className="flex justify-center">
        <div className="bg-white m-10 w-1/3 h-80 rounded-lg ">
        <div className='text-black text-center max-w-2xl pt-20'>
                ProjectsProjectsProjectsProjectsProjects
              </div>
        </div>
        <div className="bg-white m-10 w-1/3 h-80 rounded-lg">
            <div className='text-black text-center max-w-2xl pt-20'>
                ProjectsProjectsProjectsProjectsProjects
              </div>
        </div>
        </div>

        </div>
      </section>
    </>
  )
}
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'


const RecentProjects = () => {
  return (
    <div className='py-20' id="projects">
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>my recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-10 gap-x-24 gap-y-8 mt-10'>
        {projects.map(({ id, title, des, img, iconLists, link}) => (
          <div key={id} className='sm:h-[30rem] lg:min-h-[30rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
            <PinContainer 
            title={link} 
            href={link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vg] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img 
                  src={img} 
                  alt={title} 
                  className='z-10 absolute bottom-0' 
                  />
              </div>  
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                
                {/* 
                  This component renders a horizontal list of icons with a flexbox layout.
                  Each icon is displayed in a circular container with a border and background color.
                  The icons are positioned using a transform to create a staggered effect.
                */}

                <div className="flex items-center">
                  {/* Map through the iconLists array to create a div for each icon */}
                  {iconLists.map((icon, index) => (
                    <div
                      key={index} // Unique key for each icon to help React identify which items have changed
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        // Apply a horizontal translation based on the index to stagger the icons
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      {/* Render the icon image with padding */}
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>


              </div>
            </PinContainer>
          </div>
        ) )}
      </div>
    </div>
  )
}

export default RecentProjects
import React from 'react'
import { MacbookScroll } from './ui/MacbookScroll'
import { LampDemo } from './ui/LampEffect'
import { StickyScroll } from './ui/StickyScrollReveal'
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { TracingBeam } from './ui/TracingBeam';


const dummyContent = [
  {
    title: "Technology Speaker",
    description: (
      <>
        <p>
        I love teaching what I have learned in these years of working with technology. I have given talks at AWS, Google, and Microsoft. 
        <br />
         <br />
        Additionally, I have been invited to participate as a speaker in countries such as Chile, Peru, Spain, the United States, and South Korea.
        </p>
      </>
    ),
    image: "/speaker.jpg",
  },
  {
    title: "Running and cycling",
    description: (
      <>
        <p>
        A great way to clear your mind from programming is by engaging in an activity that allows you to enter &quot;the zone&quot;, which is why I love running and cycling.
        <br />
        <br />
        These activities not only provide a physical challenge but also offer a mental escape, allowing me to focus on the present and forget about any coding problems or concerns.
        Additionally, they help me stay active and healthy, which is important for overall well-being.
        </p>
      </>
    ),
    
    image:
      "/bike.png",
  },
  {
    title: "I love drawing",
    description: (
      <>
        <p>
        I have been drawing since I was a child and I have always enjoyed it as a hobby.
        </p>
        <br />
        <p>
        I have a natural talent for drawing, I believe that drawing enhances creativity and this goes very well with programming as it allows me to visualize concepts and ideas more easily.
        Additionally, drawing can help me relax and de-stress, which is beneficial for both my mental and emotional well-being.
        </p>
        <br />
        <p>
        Overall, drawing is a valuable skill that complements my programming abilities and brings a unique perspective to my work.
        </p>
      </>
    ),
    image: "/draw.jpg",
  },
  {
    title: "Crossfit",
    description: (
      <>
        <p>
          I have been practicing CrossFit for a few years now and I have found it to be a great way to stay fit and challenge myself physically.
          <br />
           <br />
          CrossFit involves a variety of exercises that work on strength, endurance, and flexibility, which has helped me improve my overall fitness and athleticism.
          Additionally, CrossFit workouts often involve high-intensity, functional movements that can help improve my performance in other areas of my life.
          <br />
          <br />
          Overall, CrossFit has been a positive addition to my lifestyle and I enjoy the challenge and sense of community that it provides.
        </p>
      </>
    ),
    
    image:
      "/crossfit.png",
  },
  {
    title: "My Family ❤️",
    description: (
      <>
        <p>
          My wife Kyle and my child Ayla are the most important people in my life.
          <br />
           <br />
          I love spending time with them and I am grateful for the love and support they provide.
          <br />
          They are my inspiration and my motivation, and I am grateful to have them in my life.
        </p>
      </>
    ),
    
    image:
      "/family.jpg",
  },
];

const Scroll = () => {
  return (
    <div className='py-20' id='hobbies' >
        {/* <MacbookScroll
        showGradient={true}
        title='Creating the Next Generation of Programming Tools'
        src='/p1.svg'
        /> */}
        
        <h1 className='heading pt-20'>
        Not everything is about programming...{' '}
          <span className='text-purple'>some of my hobbies</span>
        </h1>
        <br />
        <br />
        <TracingBeam className="px-6 pt-10">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
            </h2>
 
            <h1 className="text-3xl font-bold mb-4">
              {item.title}
            </h1>
 
            /**
            * This component renders a styled container for a blog post item.
            * It conditionally displays an image if it exists and shows the description.
            */

            <div className="text-sm border-collapse border border-slate-500 rounded-lg p-4 prose prose-sm dark:prose-invert">
              {/* Check if the item has an image before rendering the Image component */}
              {item?.image && (
                <Image
                  src={item.image} // Source of the image
                  alt="blog thumbnail" // Alternative text for the image
                  height="1000" // Height of the image
                  width="1000" // Width of the image
                  className="rounded-lg mb-10 object-cover" // Styling for the image
                />
              )}
              <div className='text-lg'>
                {/* Display the description of the item */}
                {item.description}
              </div>
            </div>



          </div>
        ))}
      </div>
    </TracingBeam>
        
    </div>
  )
}

export default Scroll
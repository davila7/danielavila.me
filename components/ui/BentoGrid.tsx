'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import GlobeDemo from "./GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { SiCalendly } from "react-icons/si";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

// This code snippet manages the options for a Lottie animation.
// The `copied` state variable likely controls whether the animation should loop and autoplay after being copied.

const [copied, setCopied] = useState(false); // Initialize `copied` state to false, meaning the animation won't loop or autoplay initially.

  const defaultOptions = {
    loop: copied, // Set the `loop` option to the value of `copied`.
    autoplay: copied, // Set the `autoplay` option to the value of `copied`.
    animationData: animationData, // Pass the animation data to the Lottie component.
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Maintain the aspect ratio of the animation while slicing off any excess content.
    },
  };

  const handleCalendly = () => {
    // abre una nueva ventana con una url
    window.open('https://calendly.com/daniel-evu/45min', '_blank');

    setCopied(true)
    // hola
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full'`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover object-center w-full h-full'}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
        >
          a

          {id === 1 && <GlobeDemo />}


          {id == 3 && (

            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {["Laravel", "FastAPI", "React", "Flask", "NextJS"].map((item) => (
                  <span key={item} className="py-2 lg:py4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}


              </div>

              <div className="flex flex-col gap-3 lg:gap-8">
                {["GCP", "AWS", "Azure", "Firebase", "Vercel"].map((item) => (
                  <span key={item} className="py-2 lg:py4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}

              </div>

              <div className="flex flex-col gap-3 lg:gap-8">
                {["PHP", "Python", "C#", "Java", "C++"].map((item) => (
                  <span key={item} className="py-2 lg:py4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}


              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                {["LLMs", "DSPy", "LlamaIndex", "Langchain", "LLMs"].map((item) => (
                  <span key={item} className="py-2 lg:py4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className='absolute -bottom-5 right-0'>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                title={'Go to Calendly'}
                icon={<SiCalendly />}
                position="right"
                otherClasses="text-lg lg:text-lg"
                handleClick={handleCalendly}
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

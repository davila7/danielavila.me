const MagicButton = ({
    title, icon, position, handleClick, otherClasses
} : {
    title: string; icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?: string;
}) => {
  return (
    <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </span>
</button>
    // <button className="relative inline-flex h-12 w-full overflow-hidden rounded-full p-[1px] focus:outline-none md:w-60 md:mt-10">
    //     <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    //     <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
    // {position === 'left' && icon}
    // {title}
    // {position === 'right' && icon}
    //     </span>
    // </button>
  )
}

export default MagicButton
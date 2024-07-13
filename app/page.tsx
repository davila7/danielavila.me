import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Scroll from "@/components/Scroll";
import { FloatingNav } from "@/components/ui/FloatingNav1";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav 
          navItems={navItems}
        /> */}
        <Hero />
        <Grid />
        {/* <Scroll /> */}
        <RecentProjects />
        <Footer />
        <br />
      </div>
    </main>
  );
}

import ProjectCard from "./ProjectCard";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import WeatherImg from "../assets/Weather-pic 2.svg";
import TaskImg from "../assets/Task-page.svg";

gsap.registerPlugin(ScrollTrigger);

function Project() {
  useGSAP(() => {

    gsap.from(".project-head", {
      opacity: 0,
      y: -400,
      duration: 2,
      scrollTrigger: {
        trigger: ".project-head",
        start: 'top +=300',
        end: '+=350',
        scrub: 2,
      },
    });
  });
  return (
    <div id="projects" className="flex flex-col px-5 lg:px-10 xl:px-8 py-24 md:py-20 lg:py-20 xl:py-18  w-full bg-[#FFE3E3] overflow-hidden select-none ">
<div className="project-head flex flex-col items-center">
            <p className="font-['Goldman'] text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-800">See My</p>
            <p className="font-['Goldman'] text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-rose-400">Projects</p>
            </div>
            <div className="project-sec flex flex-wrap gap-5 py-10 justify-center">
<ProjectCard ProjectName="Weather App"  ProjectImg={WeatherImg} GitHubLink="https://github.com/MOHDNEHALKHAN/Weather-App" LiveLink="https://weather-app-rmx8.onrender.com/"/>
<ProjectCard ProjectName="Todolist App"  ProjectImg={TaskImg} GitHubLink="https://github.com/MOHDNEHALKHAN/Todolist-app" LiveLink="https://todolist-app-flame-three.vercel.app/"/>
            </div>

    </div>
  )
}

export default Project
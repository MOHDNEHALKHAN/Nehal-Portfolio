import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  // animation using scrolltrigger when user hit 50% of the page the content will animate
    useGSAP(() => {

    gsap.from(".about", {
      opacity: 0,
      x: 500,
      duration: 2,
      scrollTrigger: {
        trigger: ".about",
        
        scroller : "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      },
    });

    gsap.from(".desc", {
      opacity: 0,
      x: -500,
      duration: 2,
      scrollTrigger: {
        trigger: ".desc",
        
        scroller : "body",
        start: "top 70%", 
        end: "top 40%",
        scrub: 2,
      },
    });
  });

  return (
    <div id="about" className= " about-content flex flex-col px-5 py-24 lg:px-10 xl:px-10  w-full bg-orange-100 overflow-hidden xl:h-dvh select-none">
            <div className="about flex flex-col items-center md:pt-6 lg:pt-6 xl:pt-6">
            <p className="font-['Goldman'] text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-800">Get to know</p>
            <p className="font-['Goldman'] text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-rose-400">About Me</p>
            </div>
            <h6 className="desc sm:tracking-wide md:tracking-wider lg:tracking-wider xl:tracking-wider  py-24 font-['kanit'] font-medium md:font-medium lg:font-bold xl:font-bold text-gray-800  text-xl md:text-2xl lg:text-2xl xl:text-3xl text-center">Welcome to my online portfolio! I&apos;m Mohd Nehal Khan, a fullstack developer and contributor to open-source software. I am a third-year student at MUJ & a self-taught developer, currently dirtying my hands in learning & understanding programming languages and technical tools, exploring every tech field for better knowledge and expanding my network with professionals and enthusiastic developers worldwide.
            Expressing my knowledge whatever I learnt through my projects & technical blogs</h6>
    </div>
  )
}

export default About;
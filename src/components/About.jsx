import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  // animation using scrolltrigger when user hit 50% of the page the content will animate
  useGSAP(() => {
    gsap.from("p", {
      opacity: 0,
      x: 500,
      duration: 2,
      scrollTrigger: {
        trigger: "p",
        markers: true,
        scroller : "body",
        start: "top 50%", // Start the animation when 60% of the Herosection is reached
      },
    });

    gsap.from(".desc", {
      opacity: 0,
      x: -500,
      duration: 2,
      scrollTrigger: {
        trigger: ".desc",
        markers: true,
        scroller : "body",
        start: "top 50%", // Start the animation when 60% of the Herosection is reached
      },
    });
  });

  return (
    <div className= " about-content flex flex-col px-5 py-24 lg:px-10 xl:px-10  w-full bg-orange-100 overflow-hidden">
            <div className="flex flex-col items-center pt-6">
            <p className="font-['Goldman'] text-2xl font-bold text-gray-800">Get to know</p>
            <p className="font-['Goldman'] text-5xl font-bold text-rose-400">About Me</p>
            </div>
            <h6 className="desc tracking-wide py-24 font-['kanit'] font-semibold text-gray-800  text-4xl text-center">Welcome to my online portfolio! I&apos;m Mohd Nehal Khan, a full-stack developer,and contributor to open-source software. I am a second-year student at MUJ & a self-taught developer, currently dirtying my hands in learning & understanding programming languages and technical tools, exploring every tech field for better knowledge and expanding my network with professionals and enthusiastic developers worldwide.
            Expressing my knowledge whatever I learnt through my projects & blogs</h6>
    </div>
  )
}

export default About
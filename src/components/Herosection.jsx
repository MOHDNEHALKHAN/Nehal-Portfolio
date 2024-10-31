import nehalImg from "../assets/Nehal.svg";
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';

gsap.registerPlugin(ScrollToPlugin);

function Herosection() {
  const resumeDownload = () => {
    
    const resumeUrl = '/Nehal_Resume.pdf';  
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Nehal_Resume.pdf'); 
    document.body.appendChild(link);
   
    link.click();
    
    document.body.removeChild(link);
  };


  const scrollToSection = (sectionId) => {
    gsap.to(window, { duration: 2, scrollTo: `#${sectionId}` });
  };
  
  useGSAP(() => {
    // Split the text into spans
    const text = document.querySelector('.animated-text');
    const textContent = text.textContent;
    text.innerHTML = textContent.split('').map(char => `<span>${char}</span>`).join('');

    
    // Animate the spans
    gsap.fromTo('.animated-text span', {
      opacity: 0,
      y: -50,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "expo.inOut",
    });

    //Animate the image

    gsap.from('.nehalImg', {
      opacity: 0,
      x: 50,
      duration: 2,
      delay: 1,
      ease: "expo.inOut",
    });

    //Animate the buttons
    gsap.from('.buttons', {
      opacity: 0,
      x: -50,
      duration: 2,
      delay: 1,
      ease: "expo.inOut",
    }); 

   // Animate the download SVG on click
   const downloadButton = document.querySelector('.download-button');
   const downloadSvg = document.querySelector('.download-svg');

   downloadButton.addEventListener('click', () => {
     gsap.fromTo(downloadSvg, {
       y: 0,
     }, {
       y: 50,
       duration: 0.5,
       ease: "expo.inOut",
       yoyo: true,
       repeat: 1,
       opacity: 0,
       zIndex: -1,
     });
   });

   // Animate the contact SVG on hover
   const contactButton = document.querySelector('.contact-button');
   const contactSvg = document.querySelector('.contact-svg');

   contactButton.addEventListener('mouseenter', () => {
     gsap.to(contactSvg, {
       rotation: 15,
       duration: 0.1,
       ease: "expo.inOut",
       yoyo: true,
       repeat: 5,
     });
   });

   contactButton.addEventListener('mouseleave', () => {
     gsap.from(contactSvg, {
       rotation: 0,
       duration: 0.1,
       ease: "expo.inOut",
     });
   });
  }, []);

  return (
    <div id="home" className="herosection flex flex-col px-5 py-24 lg:py-40 xl:py-40 w-full bg-emerald-200 overflow-hidden xl:h-dvh  ">
      <div className="flex flex-col lg:flex-row xl:flex-row items-center">
        <h1 className="select-none animated-text text-center lg:text-left xl:text-left text-5xl  lg:text-6xl xl:text-8xl font-bold text-gray-800 px-6 lg:px-10 xl:px-10 font-['Kanit'] z-10">
        Hey👋, I&apos;m Fullstack Developer
        </h1>
        <img src={nehalImg} alt="imgboy" className="nehalImg cursor-pointer z-20 px-10 md:px-5 lg:px-10 xl:px-5 py-5  sm:overflow-hidden " />
      </div>
      <div className=" flex flex-col lg:flex-row xl:flex-row mt-5 mx-5 lg:px-10 xl:px-10">
        <button className="download-button buttons flex justify-center flex-row gap-3 items-center bg-slate-600 text-white hover:bg-white hover:text-slate-600 px-5 py-2 rounded-full font-['Goldman'] font-normal mt-5"
       onClick={resumeDownload}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7 download-svg"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Download Resume</span>
        </button>
        <button 
        className="contact-button buttons flex justify-center  gap-3 items-center bg-slate-600 text-white hover:bg-white hover:text-slate-600 px-5 py-2 rounded-full font-['Goldman'] font-normal mt-5 lg:ml-5 xl:ml-5"
        onClick={() => scrollToSection('contactform')}

        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7 contact-svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          <span>Contact Me</span>
        </button>
      </div>
    </div>
  );
}

export default Herosection;

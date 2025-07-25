import { useState } from 'react';
import websiteIcon from "../assets/logo.svg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // here menuOpen is a state variable and setMenuOpen is a function to update the state variable
  
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen); // default value is false, so it will be true 
  };

  const scrollToSection = (sectionId) => {
    gsap.to(window, { duration: 1, scrollTo: `#${sectionId}` });
  };

  let tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".webIcon", {
      duration: 1,
      y:-30,
      opacity:0,
      delay:0.5,
    });

    tl.from(".nav-icon", {
      duration: 1,
      y:-30,
      opacity:0,
      stagger:0.3,
    });
  });

  return (
    <div className="px-5 py-5 lg:px-10 xl:px-10 fixed w-full top-0 z-30">
      <header className="flex left-16 right-16 mx-auto px-10 py-3 md:py-4 lg:py-4 xl:py-4 font-['Goldman'] justify-between items-center bg-rose-400 border-1 border-black opacity-100 rounded-full drop-shadow-xl">
        <img src={websiteIcon} alt="Logo" className="webIcon cursor-pointer" />
        <div className="links gap-10 lg:gap-4 text-white hidden lg:flex xl:flex">
          {["Home","About", "Skills", "Projects", "Blogs"].map((item, index) => (
            <a key={index} 
            className="nav-icon bg-slate-600 border-slate-600 hover:bg-white hover:border-white hover:text-slate-600 text-md font-medium rounded-full border-1 px-5 py-1 cursor-pointer"
            onClick={() => scrollToSection(item.toLowerCase())}
            >{item}</a>
          ))}
        </div>
        {!menuOpen && ( // If menu is not open, show hamburger icon
          <button className="flex lg:hidden xl:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        )}
        {menuOpen && ( // If menu is open, show close icon
          <button className="flex lg:hidden xl:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        )}
        <div className={`flex lg:hidden xl:hidden fixed top-20 flex-col left-0 bg-rose-400 w-full rounded-xl px-6 py-5 gap-1 ${menuOpen ? '' : 'hidden'} drop-shadow-[5px_5px_rgb(252,227,138)]`} >
          {["Home","About", "Skills", "Projects", "Blogs"].map((item, index) => (
            <a key={index} 
            className=" nav-icon select-none hover:border-white text-md font-medium rounded-full px-5 border-1 border-transparent py-1 cursor-pointer"
            onClick={() => { scrollToSection(item.toLowerCase()); toggleMobileMenu(); }}
            >{item}</a>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Navbar;

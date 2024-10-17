import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import LinkedinImg from '../assets/linkedin.svg';
import GithubImg from '../assets/github.svg';
import TwitterImg from '../assets/twitter.svg';

gsap.registerPlugin(ScrollTrigger);

function ContactForm() {
    useGSAP(() => {

        gsap.from(".form", {
            opacity: 0,
            y: -400,
            duration: 2,
            scrollTrigger: {
                trigger: ".form",
                start: 'top +=300',
                end: '+=350',
                scrub: 2,
            },
        });
    }); {
        return (
            <div id="contactform" className="  flex flex-col px-5 lg:px-10 xl:px-8 py-24 md:py-20 lg:py-20 xl:py-20  w-full bg-orange-100 overflow-hidden items-center select-none">
                <div className="form flex flex-col items-center md:pt-6 lg:pt-6 xl:pt-6 py-5">
                    <p className="font-['Goldman'] text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-800">CONTACT ME</p>
                </div> 
                <div className='flex flex-col items-center py-8 px-8 bg-blue-300 gap-10 rounded-3xl  justify-center'>
                    <div className='flex flex-col lg:flex-row xl:flex-row gap-10 '>
                        <div className='flex flex-col gap-9'>
                            <div className='flex flex-col'>
                                <label className='font-[Kanit] font-medium text-xl text-slate-600'>Name*</label>
                                <input type='text' className='rounded-full py-2 px-5 focus:outline-none focus:border-transparent'/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='font-[Kanit] font-medium text-xl text-slate-600'>Email*</label>
                                < input type='email' className='rounded-full py-2 px-5 focus:outline-none focus:border-transparent' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-[Kanit] font-medium text-xl text-slate-600'>Message*</label>
                            <textarea type='text' className='rounded-3xl py-4 px-3 h-[150px] focus:outline-none focus:border-transparent' />
                        </div>
                    </div>
                    <div >
                        <button className='btn bg-gray-600 text-white rounded-full py-2 px-9 font-[Kanit] text-xl '>Send</button>
                    </div>

                </div>
                <footer className='flex flex-col items-center gap-5 px-10 mt-10'>
                <div className='flex flex-row items-center gap-10'>
                    <img src={LinkedinImg} alt="LinkedIn" className='cursor-pointer'/>
                    <img src={GithubImg} alt="GitHub" className='cursor-pointer' />
                    <img src={TwitterImg} alt="Twitter" className='cursor-pointer'/>
                </div>
                <div >
                    <p className='font-[Goldman] text-lg md:text-lg lg:text-xl xl:text-2xl text-center text-gray-800'>Connect With Me</p>
                </div>
            </footer>
            </div>
        )
    }
}

export default ContactForm
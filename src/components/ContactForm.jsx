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
            <div className="  flex flex-col px-5 lg:px-10 xl:px-8 py-24 md:py-20 lg:py-20 xl:py-18  w-full bg-blue-300 overflow-hidden">
                <div className="form flex flex-col items-center md:pt-6 lg:pt-6 xl:pt-6 py-5">
                    <p className="font-['Goldman'] text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-white">CONTACT ME</p>
                </div>
                <div className='flex flex-col items-center py-8 px-5 bg-yellow-300 gap-10 rounded-3xl'>
                    <div className='flex flex-col lg:flex-row xl:flex-row gap-10'>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col'>
                                <label className='font-[Kanit] font-medium text-xl'>Name*</label>
                                <input type='text' className='rounded-full py-2 px-5'/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='font-[Kanit] font-medium text-xl'>Email*</label>
                                < input type='email' className='rounded-full py-2 px-5' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <label className='font-[Kanit] font-medium text-xl'>Message*</label>
                            <textarea type='text' className='rounded-3xl py-12 px-10' />
                        </div>
                    </div>
                    <div >
                        <button className='bg-red-400 rounded-full py-2 px-8'>Send</button>
                    </div>

                </div>
                <footer className='flex flex-col items-center gap-5 px-10 py-5'>
                <div className='flex flex-row items-center gap-10'>
                    <img src={LinkedinImg} alt="LinkedIn" />
                    <img src={GithubImg} alt="GitHub" />
                    <img src={TwitterImg} alt="Twitter" />
                </div>
                <div >
                    <p className='font-[Kanit] text-sm text-center'> © MOHD NEHAL KHAN   All Rights Reserved</p>
                </div>
            </footer>
            </div>
        )
    }
}

export default ContactForm
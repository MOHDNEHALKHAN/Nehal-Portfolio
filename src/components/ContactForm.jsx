import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

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
            <div className="  flex flex-col px-5 lg:px-10 xl:px-8 py-24 md:py-20 lg:py-20 xl:py-18  w-full bg-blue-300 overflow-hidden h-dvh">
                <div className="form flex flex-col items-center md:pt-6 lg:pt-6 xl:pt-6 py-5">
                    <p className="font-['Goldman'] text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-white">CONTACT ME</p>
                </div>
                <div className='flex flex-col items-center py-8 px-5 bg-yellow-300 gap-10 rounded-3xl'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-5'>
                                <label>Name*</label>
                                <input type='text' className='rounded-full'/>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <label>Email*</label>
                                < input type='email' className='rounded-full' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <label>Message*</label>
                            <input type='text' className='rounded-full' />
                        </div>
                    </div>
                    <div >
                        <button className='bg-blue-500 rounded-full py-2 px-6'>Send</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default ContactForm
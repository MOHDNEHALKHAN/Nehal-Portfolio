import { useState, useEffect } from 'react';
import axios from 'axios';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import LinkedinImg from '../assets/linkedin.svg';
import GithubImg from '../assets/github.svg';
import TwitterImg from '../assets/twitter.svg';

gsap.registerPlugin(ScrollTrigger);

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);  // New loading state
    const [errorMessage, setErrorMessage] = useState('');  // New error message state
  
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');  // Clear any previous error message

        // Check for empty fields
        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage('Please enter your full information.');
            setTimeout(() => setErrorMessage(''), 2000);
            return;
        }

        setLoading(true);  // Set loading to true when form submission starts
        try {
            const response = await axios.post('https://nehal-portfolio.onrender.com/api/contact', formData); // http://localhost:5000/api/contact for local test 
            setResponseMessage(response.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setResponseMessage("Failed to send details");
        } finally {
            setLoading(false);  // Reset loading state after response
        }
    };

    useEffect(() => {
        if (responseMessage) {
            const timeoutId = setTimeout(() => setResponseMessage(''), 3000);
            return () => clearTimeout(timeoutId);
        }
    }, [responseMessage]); 

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
    }); 

    return (
        <div id="contactform" className="flex flex-col px-5 lg:px-10 xl:px-8 py-24 md:py-20 lg:py-20 xl:py-20 w-full bg-emerald-200 overflow-hidden items-center select-none">
            <div className="form flex flex-col items-center md:pt-6 lg:pt-6 xl:pt-6 py-5">
                <p className="font-['Goldman'] text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-800">CONTACT ME</p>
                {responseMessage && <p>{responseMessage}</p>}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}  {/* Display error message */}
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center py-8 px-8 bg-blue-300 gap-10 rounded-3xl justify-center'>
                <div className='flex flex-col lg:flex-row xl:flex-row gap-10 '>
                    <div className='flex flex-col gap-9'>
                        <div className='flex flex-col'>
                            <label className='font-[Kanit] font-medium text-xl text-slate-600'>Name*</label>
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange} 
                                className='rounded-full py-2 px-5 focus:outline-none focus:border-transparent font-[kanit]' 
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-[Kanit] font-medium text-xl text-slate-600'>Email*</label>
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='rounded-full py-2 px-5 focus:outline-none focus:border-transparent font-[kanit]' 
                            />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-[Kanit] font-medium text-xl text-slate-600'>Message*</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='rounded-3xl py-4 px-3 h-[150px] focus:outline-none focus:border-transparent font-[kanit]' 
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" className='btn bg-gray-600 text-white rounded-full py-2 px-9 font-[Kanit] text-xl ' disabled={loading}>
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </div>
            </form>
            <footer className='flex flex-col items-center gap-5 px-10 mt-10'>
                <div className='flex flex-row items-center gap-10'>
                    <a href="https://www.linkedin.com/in/mohd482/" target="_blank" rel="noopener noreferrer"><img src={LinkedinImg} alt="LinkedIn" className="cursor-pointer" /></a>
                    <a href="https://github.com/MOHDNEHALKHAN" target="_blank" rel="noopener noreferrer"><img src={GithubImg} alt="GitHub" className='cursor-pointer' /></a>
                    <a href="https://x.com/MOHDNEHAL482" target="_blank" rel="noopener noreferrer"><img src={TwitterImg} alt="Twitter" className='cursor-pointer' /></a>
                </div>
                <div>
                    <p className='font-[Goldman] text-lg md:text-lg lg:text-xl xl:text-2xl text-center text-gray-800'>Connect With Me</p>
                </div>
            </footer>
        </div>
    );
}

export default ContactForm;
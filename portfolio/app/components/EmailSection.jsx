"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Element } from 'react-scroll';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = '/api/send';

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata
        }

    const response = await fetch(endpoint, options)
    
    if (response.status === 200) {
        console.log('Message sent.');
        setEmailSubmitted(true)
    }
    }

    

  return (
    <Element name='contact'>
        <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>
                    Let&apos;s Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best
                    to get back to you!
                    <div className='socials flex flex-row gap-2'>
                        <Link href="https://github.com/chdclar16">
                            <Image 
                                src="/github-icon.svg" 
                                alt='github icon' 
                                width={32} 
                                height={32} 
                            />
                        </Link>
                        <Link href="https://www.linkedin.com/in/chadmanuel/">
                            <Image 
                                src="/linkedin-icon.svg" 
                                alt='linkedin icon' 
                                width={32} 
                                height={32} 
                            />
                        </Link>
                    </div>
                </p>
            </div>
            <div>
                <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label 
                            htmlFor='email' 
                            className='text-white block mb-2 text-sm font-medium'
                        >
                            Your Email
                        </label>
                        <input 
                            type='email' 
                            id='email'
                            name='email' 
                            required 
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='email@email.com'
                    
                        />
                    </div>
                    <div className='mb-6'>
                        <label 
                            htmlFor='Subject' 
                            className='text-white block mb-2 text-sm font-medium'
                        >
                            Subject
                        </label>
                        <input 
                            type='text' 
                            id='subject' 
                            required 
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Say hi!'
                            name='subject'
                        />
                    </div>
                    <div className='mb-6'>
                        <label 
                            htmlFor='Message' 
                            className='text-white block mb-2 text-sm font-medium'
                        >
                            Message
                        </label>
                        <textarea 
                            type='text' 
                            id='message' 
                            required 
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Let&apos;s talk about...'
                            name='message'
                        />
                    </div>
                        <button
                            type='submit'
                            className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>
                                Send Message
                        </button>
                        {
                            emailSubmitted && (
                                <p className='text-green-500 text-sm mt-2'>
                                    Email sent! I&apos;ll get back to you as soon as I can!
                                </p>
                            )
                        }
                </form>
            </div>
        </section>
    </Element>
  )
}

export default EmailSection
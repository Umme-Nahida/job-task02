'use client'
import React, { useState } from 'react';
import frame from '../../../public/Assets/Frame.png'
import benefits from '../../../public/Assets/benefits.png'
import Container from '../Container/page';
import Image from 'next/image';
import { IoMdCheckmark } from "react-icons/io";

const Benefits = () => {
   const [activeIndex,setActiveIndex]= useState(0)
   
    const handleToggle=(index)=>{
        setActiveIndex(activeIndex === index ? null : index)
    }
    return (
        <Container>
            <div className='flex flex-col lg:flex-row items-start justify-between gap-x-20 py-10 '>
                {/* banner text container */}
                <div className='w-full lg:w-1/2 '>
                    <h1 className='text-3xl mb-5'>We provide... </h1>

                    {/* benefits toggle container */}
                    <div className='overflow-hidden lg:pr-20'>

                        {/* toggle 01 */}
                        <div onClick={()=>handleToggle(0)} className='border-t-2 border-gray-200 py-3 cursor-pointer flex items-center gap-x-2 text-left focus:outline-none transition duration-200'>
                            <button className={`${activeIndex === 0 ? 'bg-secondary' : 'bg-slate-400 '} text-white text-sm rounded-full p-1`}><IoMdCheckmark /> </button>
                            <h1>Personalized routine</h1>
                        </div>
                        <div className={`p-10  bg-slate-200 overflow-hidden translate-all duration-300 ease-in-out ${activeIndex === 0 ? 'max-h-screen block' : 'max-h-0 hidden'}`}>
                            <p className='text-sm text-left'>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
                        </div>

                        {/* toggle 02 */}
                        <div onClick={()=>handleToggle(1)} className='border-t-2 border-gray-200 py-3 cursor-pointer flex items-center gap-x-2 text-left focus:outline-none transition duration-200'>
                            <button className={`${activeIndex === 1 ? 'bg-secondary' : 'bg-slate-400 '} text-white text-sm rounded-full p-1`}><IoMdCheckmark /> </button>
                            <h1>Follow-up after completing courses</h1>
                        </div>
                        <div className={`p-10  bg-slate-200 overflow-hidden translate-all duration-300 ease-in-out ${activeIndex === 1 ? 'max-h-screen block' : 'max-h-0 hidden'}`}>
                            <p className='text-sm text-left'>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
                        </div>

                        {/* toggle 03 */}
                        <div onClick={()=>handleToggle(1)} className='border-t-2 border-gray-200 py-3 cursor-pointer flex items-center gap-x-2 text-left focus:outline-none transition duration-200'>
                            <button className={`${activeIndex === 2 ? 'bg-secondary' : 'bg-slate-400 '} text-white text-sm rounded-full p-1`}><IoMdCheckmark /> </button>
                            <h1>Access to additional resources</h1>
                        </div>
                        <div className={`p-10  bg-slate-200 overflow-hidden translate-all duration-300 ease-in-out ${activeIndex === 2 ? 'max-h-screen block' : 'max-h-0 hidden'}`}>
                            <p className='text-sm text-left'>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
                        </div>

                        {/* toggle 04 */}
                        <div onClick={()=>handleToggle(3)} className='border-t-2 border-gray-200 py-3 cursor-pointer flex items-center gap-x-2 text-left focus:outline-none transition duration-200'>
                            <button className={`${activeIndex === 3 ? 'bg-secondary' : 'bg-slate-400 '} text-white text-sm rounded-full p-1`}><IoMdCheckmark /> </button>
                            <h1>Access to additional resources</h1>
                        </div>
                        <div className={`p-10  bg-slate-200 overflow-hidden translate-all duration-300 ease-in-out ${activeIndex === 3 ? 'max-h-screen block' : 'max-h-0 hidden'}`}>
                            <p className='text-sm text-left'>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
                        </div>

                        {/* toggle 04 */}
                        <div onClick={()=>handleToggle(4)} className='border-t-2 border-gray-200 py-3 cursor-pointer flex items-center gap-x-2 text-left focus:outline-none transition duration-200'>
                            <button className={`${activeIndex === 4 ? 'bg-secondary' : 'bg-slate-400 '} text-white text-sm rounded-full p-1`}><IoMdCheckmark /> </button>
                            <h1>Free community support</h1>
                        </div>
                        <div className={`p-10  bg-slate-200 overflow-hidden translate-all duration-300 ease-in-out ${activeIndex === 4 ? 'max-h-screen block' : 'max-h-0 hidden'}`}>
                            <p className='text-sm text-left'>We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.</p>
                        </div>


                        {/* button */}
                        <button className='border border-primary rounded-full px-10 py-3 text-sm text-primary hover:bg-primary hover:text-white transition-colors duration-300 mt-5'>Learn More About Our Services</button>
                    </div>
                </div>

                {/* banner image & content */}
                <div className='w-full lg:w-1/2 '>
                    <div className='relative'>
                        <Image
                            src={benefits}
                            width={500}
                            height={500}
                            alt="Picture of the author" />
                        <Image className='absolute top-32 -inset-10' src={frame} width={80} height={80} alt='frame' />
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Benefits;
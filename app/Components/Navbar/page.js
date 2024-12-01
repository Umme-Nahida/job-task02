"use client"
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import React, { useState } from 'react';
import Container from "../Container/page";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState('')

    // handle toggle dropdown
    const handleDropdown = (menu) => {
        setDropdown(dropdown === menu ? "" : menu);
    };

    return (
        <div className='bg-white shadow-md w-full z-[999]'>

            <Container>
                <nav className="">
                    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                        {/* Logo */}
                        <div className="text-2xl font-bold">
                            <Link href="/">Logo</Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="relative group hidden md:flex space-x-6 ">
                            {/* Dropdowns */}
                            <div className="">
                                <button onClick={() => handleDropdown('courses')} className="hover:text-teal-500 flex items-center gap-x-1">Courses <IoIosArrowDown /> </button>
                                <div className={`absolute left-0 z-50 ${dropdown === 'courses' ? 'group-hover:block' : 'hidden'} bg-white shadow-lg rounded-md max-w-max py-2`}>
                                    <Link href="/course1" className="block px-4 py-2 hover:bg-teal-100">Course 1</Link>
                                    <Link href="/course2" className="block px-4 py-2 hover:bg-teal-100">Course 2</Link>
                                    <Link href="/course3" className="block px-4 py-2 hover:bg-teal-100">Course 3</Link>
                                </div>
                            </div>

                            <div className="">
                                <button onClick={() => handleDropdown('instructor')} className="hover:text-teal-500 flex items-center gap-x-1">Instructors <IoIosArrowDown /></button>
                                <div className={`absolute left-24 z-50 ${dropdown === 'instructor' ? 'group-hover:block' : 'hidden'} bg-white shadow-lg rounded-md py-2`}>
                                    <Link href="/instructor1" className="block px-4 py-2 hover:bg-teal-100">Instructor 1</Link>
                                    <Link href="/instructor2" className="block px-4 py-2 hover:bg-teal-100">Instructor 2</Link>
                                </div>
                            </div>

                            <div className="">
                                <button onClick={() => handleDropdown('blogs')} className="hover:text-teal-500 flex items-center gap-x-1">Blog <IoIosArrowDown /></button>
                                <div className={`absolute left-52 z-50 ${dropdown === 'blogs' ? 'group-hover:block' : 'hidden'} bg-white shadow-lg rounded-md max-w-max py-2`}>
                                    <Link href="/blog1" className="block px-4 py-2 hover:bg-teal-100">Blog 1</Link>
                                    <Link href="/blog2" className="block px-4 max-w-max py-2 hover:bg-teal-100">Blog 2</Link>
                                    <Link href="/blog2" className="block px-4 py-2 hover:bg-teal-100">Blog 3</Link>
                                </div>
                            </div>

                            <Link href="/about" className="hover:text-teal-500">About</Link>
                            <Link href="/contact" className="hover:text-teal-500">Contact</Link>
                        </div>

                        {/* logo and cart */}
                        <div className="flex items-center gap-x-2">
                            <AiOutlineShopping className="text-3xl"></AiOutlineShopping>
                            <button className="text-lg text-white bg-primary px-6 py-2 rounded-full">Login</button>
                        </div>

                        {/* Mobile Menu Icon */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden bg-white shadow-md">
                            <Link href="/" className="block px-4 py-2 hover:bg-teal-100">Home</Link>
                            <div className="relative">
                                <button className="w-full text-left px-4 py-2 hover:bg-teal-100">Courses</button>
                                <div className="pl-4">
                                    <Link href="/course1" className="block px-4 py-2 hover:bg-teal-100">Course 1</Link>
                                    <Link href="/course2" className="block px-4 py-2 hover:bg-teal-100">Course 2</Link>
                                </div>
                            </div>
                            <div className="relative">
                                <button className="w-full text-left px-4 py-2 hover:bg-teal-100">Instructors</button>
                                <div className="pl-4">
                                    <Link href="/instructor1" className="block px-4 py-2 hover:bg-teal-100">Instructor 1</Link>
                                </div>
                            </div>
                            <Link href="/about" className="block px-4 py-2 hover:bg-teal-100">About</Link>
                            <Link href="/contact" className="block px-4 py-2 hover:bg-teal-100">Contact</Link>
                        </div>
                    )}
                </nav>
            </Container>
        </div>

    );
};

export default Navbar;
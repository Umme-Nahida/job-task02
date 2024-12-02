import React from 'react';
import Container from '../Container/page';

const Footer = () => {
    return (
        <footer className="py-20 bg-gray-100">
            <Container>
                <div className='flex flex-col lg:flex-row lg:justify-evenly items-start  gap-x-40 mb-10 px-10 lg:px-0'>
                    {/* category */}
                    <ul className='flex flex-col  space-y-2 '>
                        <li className='mb-3 font-bold'>Category</li>
                        <li>Nutrition and diet</li>
                        <li>Mindfulness</li>
                        <li>Mental health</li>
                        <li>Personal growth</li>
                        <li>Social well-being</li>
                    </ul>

                    {/* about */}
                    <ul className='flex flex-col  space-y-2 '>
                        <li className='mb-3 font-bold'>About</li>
                        <li>About us</li>
                        <li>Our partners</li>
                        <li>Investors</li>
                        <li>Career</li>
                    </ul>

                    {/* Resources */}
                    <ul className='flex flex-col  space-y-2 '>
                        <li className='mb-3 font-bold'>Resources</li>
                        <li>FAQ</li>
                        <li>Refund policies</li>
                        <li>Terms and conditions</li>
                        <li>Cookie</li>
                        <li>Latest posts</li>
                    </ul>

                    {/* support */}
                    <ul className='flex flex-col  space-y-2 '>
                        <li className='mb-3 font-bold'>Support</li>
                        <li>Get in touch</li>
                        <li>Visit our forum</li>
                    </ul>
                </div>
                <div className=" flex flex-col lg:flex-row justify-center items-center lg:justify-between dark:bg-gray-500 dark:text-white py-5 border-dashed border-y-2 border-gray-500">
                    <h5 className="text-2xl font-bold">NavigateUI</h5>
                    <nav className="text-lg">
                        <ul className="flex h-full items-center justify-between gap-3">
                            <li>
                                <a className="cursor-pointer hover:underline">Home</a>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:underline">Contact</a>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:underline">About</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <aside className=" py-5 text-center lg:text-left text-sm dark:bg-gray-800 ">
                    <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
                </aside>
            </Container>
        </footer>
    );
};

export default Footer;
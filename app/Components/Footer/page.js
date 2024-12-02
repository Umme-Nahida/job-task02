import React from 'react';
import Container from '../Container/page';

const Footer = () => {
    return (
        <footer className="py-20 bg-gray-100">
            <Container>
                <div className='flex flex-col lg:flex-row justify-evenly items-start  gap-x-40 mb-10'>
                    {/* category */}
                    <ul className='flex flex-col  space-y-2 '>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                    </ul>

                    {/* about */}
                    <ul className='flex flex-col  space-y-2 '>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                    </ul>

                    {/* Resources */}
                    <ul className='flex flex-col  space-y-2 '>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                    </ul>

                    {/* support */}
                    <ul className='flex flex-col  space-y-2 '>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                        <li>Category</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-around gap-5 bg-gray-300  dark:bg-gray-500 dark:text-white md:flex-row md:gap-0 py-5 border-dashed border-y-2 border-gray-500">
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
                <aside className="bg-gray-500 pl-1 py-5 text-left text-sm text-white dark:bg-gray-800 ">
                    <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
                </aside>
            </Container>
        </footer>
    );
};

export default Footer;
import Image from 'next/image';
import React from 'react';
import bannerIMg from '../../../public/Assets/banner.png'
import Container from '../Container/page';
import frame from '../../../public/Assets/Frame.png'

const Banner = () => {
    return (
        <Container>
            <div className='flex flex-col lg:flex-row items-center justify-between py-10 '>
                {/* banner text container */}
                <div>
                    <p>4.9 (566)</p>
                    <h1>#1 Platform Powering Health and Wellness </h1>
                    <h2>We’re restoring home as the primary place of personal well-being</h2>
                    <p>
                        Health is not just about what you're eating. It's also about what you're thinking and saying
                    </p>
                    <div>
                        <button>Browse Courses</button>
                        <button>Get Started</button>
                    </div>
                </div>

                {/* banner image & content */}
                <div>
                    <div className='relative'>
                        <Image
                            src={bannerIMg}
                            width={500}
                            height={500}
                            alt="Picture of the author" />
                        <Image className='absolute top-32 -inset-10' src={frame} width={80} height={80} alt='frame' />
                    </div>

                    {/* happy learner content */}
                    <div className='flex items-center justify-center'>
                        <div className='absolute bottom-24 w-[480px] mx-auto bg-slate-50 backdrop-blur-xl rounded-xl'>
                            <div className='p-5'>
                                <h1>12,000+</h1>
                                <h3>Happy learners rely on us regularly</h3>
                            </div>
                            <div className='bg-slate-200 backdrop-blur-xl p-5 rounded-xl'>
                                <p>Find your wellbeing</p>
                                <p>By prioritizing self-care and making informed choices, one can enhance their overall quality of life</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;
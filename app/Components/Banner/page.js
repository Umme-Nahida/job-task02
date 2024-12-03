import Image from 'next/image';
import React from 'react';
import bannerIMg from '../../../public/Assets/banner.png'
import Container from '../Container/page';
import frame from '../../../public/Assets/Frame.png'

const Banner = () => {
    return (
        <Container>
            <div className="flex flex-col lg:flex-row items-center justify-items-center py-10 gap-y-10 lg:gap-y-0 gap-x-10 px-5">
                {/* banner text container */}
                <div className="text-center lg:text-left lg:w-1/2 space-y-5">
                    <p className="text-sm lg:text-base text-gray-500">4.9 (566)</p>
                    <h1 className="text-2xl lg:text-4xl font-bold">
                        Platform Powering Health and Wellness
                    </h1>
                    <h2 className="text-lg lg:text-xl text-gray-700">
                        We’re restoring home as the primary place of personal well-being
                    </h2>
                    <p className="text-sm lg:text-base text-gray-500">
                        Health is not just about what you're eating. It's also about what you're thinking and saying
                    </p>
                    <div className="flex flex-col lg:flex-row gap-3 justify-center lg:justify-start">
                        <button className="bg-primary text-white px-6 py-2 rounded-lg shadow-lg hover:bg-primary">
                            Browse Courses
                        </button>
                        <button className="bg-gray-200 text-primary border border-primary px-6 py-2 rounded-lg shadow-lg hover:bg-primary hover:text-white">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* banner image & content */}
                <div className="lg:w-1/2 space-y-10">
                    <div className="relative  mx-auto flex flex-col items-center justify-center">
                        <Image
                            src={bannerIMg}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="rounded-lg shadow-lg"
                        />
                        <Image
                            className="absolute lg:top-20 lg:inset-3"
                            src={frame}
                            width={80}
                            height={80}
                            alt="frame"
                        />

                        {/* happy learner content */}
                        <div className="lg:absolute lg:bottom-5 lg:pl-1 lg:left-14 mt-5 lg:mt-0 flex items-center justify-center">
                            <div className="w-[90%] md:w-[80%] lg:w-[480px] bg-slate-50 backdrop-blur-xl rounded-xl shadow-xl">
                                <div className="p-5 text-center space-y-2">
                                    <h1 className="text-3xl font-bold">12,000+</h1>
                                    <h3 className="text-lg text-gray-600">
                                        Happy learners rely on us regularly
                                    </h3>
                                </div>
                                <div className="bg-slate-200 backdrop-blur-xl p-5 rounded-xl text-center space-y-1">
                                    <p className="text-lg font-semibold">Find your wellbeing</p>
                                    <p className="text-sm text-gray-500">
                                        By prioritizing self-care and making informed choices, one can enhance their overall quality of life
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </Container>
    );
};

export default Banner;
import Image from 'next/image';
import React from 'react';
import bannerIMg from '../../../public/Assets/banner.png'
import Container from '../Container/page';
import frame from '../../../public/Assets/Frame.png'
import './banner.css'

const Banner = () => {
    return (
        <Container>
            <div className="banner-container">
                {/* banner text container */}
                <div className="text-container">
                    <p className="rating">4.9 (566)</p>
                    <h1 className="title">Platform Powering Health and Wellness</h1>
                    <h2 className="subtitle">
                        We&apos;re restoring home as the primary place of personal well-being
                    </h2>
                    <p className="description">
                        Health is not just about what you&apos;re eating. It&apos;s also about what you&apos;re thinking and saying
                    </p>
                    <div className="button-container">
                        <button className="browse-button">Browse Courses</button>
                        <button className="get-started-button">Get Started</button>
                    </div>
                </div>

                {/* banner image & content */}
                <div className="image-container">
                    <div className="image-wrapper">
                        <Image
                            src={bannerIMg}
                            alt="Picture of the author"
                            className="banner-image"
                        />
                        <Image
                            src={frame}
                            alt="frame"
                            className="frame-image"
                        />

                        {/* happy learner content */}
                        <div className="happy-learner-container">
                            <div className="learner-content">
                                <h1 className="learner-title">12,000+</h1>
                                <h3 className="learner-subtitle">Happy learners rely on us regularly</h3>
                            </div>
                            <div className="wellbeing-content">
                                <p className="wellbeing-title">Find your wellbeing</p>
                                <p className="wellbeing-description">
                                    By prioritizing self-care and making informed choices, one can enhance their overall quality of life
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Container>
    );
};

export default Banner;
'use client'
import React, { useState } from 'react';
import frame from '../../../public/Assets/Frame.png'
import benefits from '../../../public/Assets/benefits.png'
import Container from '../Container/page';
import Image from 'next/image';
import { IoMdCheckmark } from "react-icons/io";
import './benefits.css'

const Benefits = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    return (
        <Container>
            <div className="benefits-container">
                {/* <!-- Benefits Text Container --> */}
                <div className="benefits-text">
                    <h1 className="benefits-title">We provide...</h1>

                    {/* <!-- Benefits Toggle Container --> */}
                    <div className="toggle-container">
                        {/* <!-- Toggle 01 --> */}
                        <div className="toggle-header" onClick={() => handleToggle(0)}>
                            <button className="toggle-button" id="toggle-btn-0">
                                <span className="checkmark">&#10003;</span>
                            </button>
                            <h1>Personalized routine</h1>
                        </div>
                        {
                            activeIndex === 0 &&
                            <div className={`button ${activeIndex === 1 ? "button--active" : "button--inactive"}`} id="toggle-content-0">
                                <p>We design personalized routines tailored to your needs to help you achieve your goals effectively and efficiently.</p>
                            </div>
                        }

                        {/* <!-- Toggle 02 --> */}
                        <div className="toggle-header" onClick={() => handleToggle(1)}>
                            <button className={`button ${activeIndex === 2 ? "button--active" : "button--inactive"}`} id="toggle-btn-1">
                                <span className="checkmark">&#10003;</span>
                            </button>
                            <h1>Follow-up after completing courses</h1>
                        </div>
                        {
                            activeIndex === 1 &&
                            <div className="toggle-content" id="toggle-content-1">
                                <p>Our team will check in with you after completing courses to ensure you’re on track with your progress and provide ongoing support.</p>
                            </div>
                        }

                        {/* <!-- Toggle 03 --> */}
                        <div className="toggle-header" onClick={() => handleToggle(2)}>
                            <button className={`button ${activeIndex === 3 ? "button--active" : "button--inactive"}`} id="toggle-btn-2">
                                <span className="checkmark">&#10003;</span>
                            </button>
                            <h1>Access to additional resources</h1>
                        </div>
                        {
                            activeIndex === 2 &&
                            <div className="toggle-content" id="toggle-content-2">
                                <p>We provide exclusive tools, guides, and support materials to enhance your learning experience and results.</p>
                            </div>
                        }

                        {/* <!-- Toggle 04 --> */}
                        <div className="toggle-header" onClick={() => handleToggle(3)}>
                            <button className={`button ${activeIndex === 4 ? "button--active" : "button--inactive"}`} id="toggle-btn-3">
                                <span className="checkmark">&#10003;</span>
                            </button>
                            <h1>Exclusive coaching sessions</h1>
                        </div>
                        {
                            activeIndex === 3 &&
                            <div className="toggle-content" id="toggle-content-3">
                                <p>Benefit from one-on-one coaching sessions to clarify doubts and get personalized guidance from our experts.</p>
                            </div>
                        }

                        {/* <!-- Toggle 05 --> */}
                        <div className="toggle-header" onClick={() => handleToggle(4)}>
                            <button className={`button ${activeIndex === 5 ? "button--active" : "button--inactive"}`} id="toggle-btn-4">
                                <span className="checkmark">&#10003;</span>
                            </button>
                            <h1>Free community support</h1>
                        </div>
                        {
                            activeIndex === 4 &&
                            <div className="toggle-content" id="toggle-content-4">
                                <p>Join a supportive community to connect with others, exchange tips, and stay motivated throughout your journey.</p>
                            </div>
                        }

                        {/* <!-- Learn More Button --> */}
                        <button className="learn-more-button">Learn More About Our Services</button>
                    </div>
                </div>

                {/* <!-- Benefits Image & Content --> */}
                <div className="benefits-image">
                    <div className="image-container">
                        <Image src={benefits}
                            width={600}
                            height={500}
                            alt="Picture of the author" className="main-image" />
                        <Image src={frame}
                            width={80}
                            height={80}
                            alt="frame" className="frame-image" />
                    </div>
                </div>
            </div>


        </Container>
    );
};

export default Benefits;
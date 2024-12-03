'use client'
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Card from './Card/page';
import Container from '../Container/page';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    const sliderRef = useRef()

    useEffect(() => {

        fetch('/FakeData/courses.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCourses(data)
            })
    }, [])


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const slideRight = () => {
        sliderRef.current.slickNext()
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev()
    }


    return (
        <div className="popular-courses-section">
    {/* Courses Content */}
    <Container>
        <div className="courses-header">
            <div className="header-text">
                <h1 className="courses-title">Our popular courses</h1>
                <p className="courses-description">
                    By taking proactive steps to nurture mental health, we can enhance our quality of life, build resilience, and foster a sense of inner peace and balance.
                </p>
            </div>
            <div className="navigation-buttons">
                <button className="arrow-button" onClick={slideLeft}>
                    <IoIosArrowDropleft />
                </button>
                <button className="arrow-button" onClick={slideRight}>
                    <IoIosArrowDropright />
                </button>
            </div>
        </div>

        {/* Courses Card */}
        <div className="courses-slider">
            <Slider ref={sliderRef} {...settings}>
                {courses?.map((item) => (
                    <Card key={item?.id} item={item} />
                ))}
            </Slider>
        </div>
    </Container>
</div>

    );
};

export default Courses;
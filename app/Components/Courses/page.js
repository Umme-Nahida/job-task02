'use client'
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Card from './Card/page';
import Container from '../Container/page';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

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
                    slidesToShow: 3,
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
        <div className='py-20'>
            {/* courses content here */}
            <Container>
                <div className='flex flex-col lg:flex-row items-end justify-between gap-x-5 pb-16'>
                    <div className='lg:w-3/6'>
                        <h1 className='text-lg md:text-xl lg:text-2xl mb-3'>Our popular courses</h1>
                        <p>By taking proactive steps to nurture mental health, we can enhance our quality of life, build resilience, and foster a sense of inner peace and balance</p>
                    </div>
                    <div className='flex items-center gap-x-2 text-3xl'>
                        <button onClick={slideLeft}><IoIosArrowDropleft /> </button>
                        <button onClick={slideRight}><IoIosArrowDropright /> </button>
                    </div>
                </div>


                {/* courses card */}
                <div>
                    <div>
                        <Slider ref={sliderRef} {...settings}>
                            {
                                courses?.map(item => (
                                    <Card key={item?.id} item={item} ></Card>
                                ))
                            }
                        </Slider>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Courses;
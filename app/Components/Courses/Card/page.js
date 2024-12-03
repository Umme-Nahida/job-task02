'use client'
import Image from 'next/image';
import React from 'react';
import { FaClock } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md"

const Card = ({ item }) => {
    console.log(item)
    return (
        <div>
            <div
                className="carousel-item space-y-8 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
                <div>
                    <Image width={400} height={300} className="carousel-image" src={item?.image} alt="card navigate ui" />
                    <div className="info-tags">
                        <p className="info-tag level  ">{item?.level} </p>
                        <p className="info-tag category ">{item?.category}</p>
                    </div>
                    <div className="content">
                        <h3 className="title ">Classic Leather Jacket</h3>
                        <p className="description">Made with genuine leather, our Classic Leather Jacket is the perfect addition to every wardrobe.</p>
                    </div>

                    {/* course rating */}
                    <div className="rating-price ">
                        <h2 className="price ">$199.99</h2>
                        <p className="rating">{item?.rating} ({item?.reviews})</p>
                    </div>
                </div>

                <div>
                    {/* time & lesson */}
                    <div className="time-lesson flex items-center justify-start gap-x-3 mb-3">
                        <h2 className="duration text-center text-lg font-medium flex items-center gap-1"><FaClock />{item?.duration}</h2>
                        <span className="separator">|</span>
                        <p className="lessons">
                            <MdOutlineMenuBook />
                            {item?.lessons} Lessons
                        </p>
                    </div>


                    {/* instructor and course price */}
                    <div className="instructor-price">
                        {/* Avatar image  */}
                        <div className="instructor ">
                            <Image src={item?.instructor?.img || 'https://i.ibb.co.com/FJ71DJ8/user01.png'} width={30} height={30} className="instructor-avatar" alt="card navigate ui" />
                            <div className="instructor-info">
                                <h2 className="instructor-name text-base font-semibold">{item?.instructor}</h2>
                            </div>
                        </div>
                        <h2 className="course-price">{item?.price}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
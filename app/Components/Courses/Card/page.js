'use client'
import React from 'react';
import { FaClock } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md"

const Card = ({ item }) => {
    console.log(item)
    return (
        <div>
            <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-5 shadow-lg dark:bg-[#18181B]">
                <div>
                    <img width={400} height={300} className="h-[300px] w-full rounded-lg bg-gray-600 object-cover" src={item?.image} alt="card navigate ui" />
                    <div className="flex items-end justify-start gap-x-3 mt-5">
                        <p className="rounded-lg bg-yellow-200 p-2 text-center text-sm text-black border border-borderPrimary ">{item?.level} </p>
                        <p className="rounded-lg bg-lime-200 p-2 text-center text-sm text-black border border-light">{item?.category}</p>
                    </div>
                    <div className="flex flex-col space-y-1.5 mt-3">
                        <h3 className="text-2xl font-semibold ">Classic Leather Jacket</h3>
                        <p className="text-sm text-gray-500 dark:text-white/60">Made with genuine leather, our Classic Leather Jacket is the perfect addition to every wardrobe.</p>
                    </div>

                    {/* course rating */}
                    <div className="flex items-center justify-start gap-x-1">
                        <h2 className="text-center text-xl font-medium">$199.99</h2>
                        <p className=" p-2 text-center text-sm">{item.rating} ({item?.reviews})</p>
                    </div>
                </div>

                <div>
                    {/* time & lesson */}
                    <div className="flex items-center justify-start gap-x-3">
                        <h2 className="text-center text-lg font-medium flex items-center gap-1"><FaClock />{item.duration}</h2>
                        |
                        <p className="text-center text-lg flex items-center gap-x-1">
                            <MdOutlineMenuBook />
                            {item?.lessons} Lessons</p>
                    </div>


                    {/* instructor and course price */}
                    <div className="flex items-end justify-between mt-2">
                        <p className="rounded-lg bg-gray-700 p-2 text-center text-sm text-white">Category: Clothing</p>
                        <h2 className="text-center text-2xl font-medium">$199.99</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
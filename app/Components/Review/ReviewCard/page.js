import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";


const ReviewCard = ({ item }) => {
    return (
        <div className='bg-gray-50 p-8 border border-secondary rounded-lg'>
            {/* customer info */}
            <div className='flex items-start justify-between '>
                <div>
                    <Image
                        src={item?.image}
                         className='rounded-full '
                        width={50}
                        height={50}
                        alt="Picture of the author" />
                    <h1 className='text-xl md:text-lg lg:text-xl mt-2'>{item?.name} </h1>
                </div>
                {/* quote */}
                 <FaQuoteLeft className='text-secondary text-xl lg:text-2xl'></FaQuoteLeft>
            </div>

            {/* review text */}
            <div className='text-sm mt-5'>
                <p>{item?.text} </p>
            </div>
        </div>
    );
};

export default ReviewCard;
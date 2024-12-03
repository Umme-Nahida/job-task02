import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import '../review.css'


const ReviewCard = ({ item,data,index }) => {
    return (
        <div
        style={{
            animationDelay: `calc(30s / ${data?.length} * (${data?.length} - ${index + 1}) * -1)`,
          }}
        className='slide'>
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
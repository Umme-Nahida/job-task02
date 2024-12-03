import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import '../review.css'
import './reviewCard.css'


const ReviewCard = ({ item,data,index }) => {
    return (
        <div
        style={{
            animationDelay: `calc(30s / ${data?.length} * (${data?.length} - ${index + 1}) * -1)`,
          }}
        className='slide'>
            {/* customer info */}
            <div className='customer-info'>
                <div>
                    <Image
                        src={item?.image}
                         className='customer-image '
                        width={50}
                        height={50}
                        alt="Picture of the author" />
                    <h1 className='text-xl md:text-lg lg:text-xl mt-2'>{item?.name} </h1>
                </div>
                {/* quote */}
                 <FaQuoteLeft className='customer-name'></FaQuoteLeft>
            </div>

            {/* review text */}
            <div className='review-text'>
                <p>{item?.text} </p>
            </div>
        </div>
    );
};

export default ReviewCard;
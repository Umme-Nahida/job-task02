"use client"
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/page';
import './review.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);
    

    useEffect(() => {
        fetch('/FakeData/review.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })

        
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [])

    

    return (
        <div className='review-section pb-16'>
            <h1 className='review-heading'>Learners love EduPath. See why they rate us 4.9 out of 5</h1>

            {/* review card */}
            <div className='slider'>
            <div  className='slide-track '>
                {
                    reviews.map((item,index) => (
                        <ReviewCard key={item?.id} item={item}  data={reviews} index={index} />
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default Review;
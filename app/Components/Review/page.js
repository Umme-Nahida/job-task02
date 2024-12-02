"use client"
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/page';

const Review = () => {
    const [reviews, setReviews]= useState([]);

    useEffect(()=>{
        fetch('/FakeData/review.json')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-xl md:text-xl lg:text-2xl flex justify-center'>Learners love EduPath. See why they rate us 4.9 out of 5</h1>

            {/* review card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
               {
                reviews.map(item=>(
                    <ReviewCard key={item?.id}  item={item}/>
                ))
               }
            </div>
        </div>
    );
};

export default Review;
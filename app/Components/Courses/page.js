'use client'
import React, { useEffect, useState } from 'react';
import { IoIosArrowDropleft,IoIosArrowDropright } from "react-icons/io";
import Card from './Card/page';
import Container from '../Container/page';

const Courses = () => {
   const [courses,setCourses]=useState([])

   useEffect(()=>{

    fetch('/FakeData/courses.json')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setCourses(data)
    })
   },[])

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
                 <button><IoIosArrowDropleft/> </button>
                 <button><IoIosArrowDropright/> </button>
               </div>
            </div>
            </Container>
            {/* courses card */}
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
               {
                courses?.map(item=>(
                    <Card key={item?.id} item={item} ></Card>
                ))
               }
            </div>
        </div>
    );
};

export default Courses;
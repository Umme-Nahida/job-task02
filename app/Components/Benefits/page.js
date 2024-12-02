import React from 'react';
import frame from '../../../public/Assets/Frame.png'
import benefits from '../../../public/Assets/benefits.png'
import Container from '../Container/page';
import Image from 'next/image';

const Benefits = () => {
    return (
        <Container>
            <div className='flex flex-col lg:flex-row items-center justify-between py-10 '>
                {/* banner text container */}
                <div>
                    <h1 className='text-3xl'>We provide... </h1>
                     
                     {/* benefits toggle container */}
                     
                </div>

                {/* banner image & content */}
                <div>
                    <div className='relative'>
                        <Image
                            src={benefits}
                            width={500}
                            height={500}
                            alt="Picture of the author" />
                        <Image className='absolute top-32 -inset-10' src={frame} width={80} height={80} alt='frame' />
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Benefits;
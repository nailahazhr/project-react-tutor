import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';

const CourseCard = () => {
    return (
        <>
            <div className='w-2/3'>
                <div>
                    <Slider {...settings} ref={(slider) => setSlider(slider)}>
                        {data.map((d) => (
                            <div className="card h-[280px] bg-indigo-600 text-white" key={d.name}>
                                <div className='card-body justify-center'>
                                    <div className="flex rounded-full mb-2">
                                        <img src={d.img} alt="" className='bg-white rounded-full w-14' />
                                    </div>

                                    <div className='flex flex-col gap-4'>
                                        <p className='font-extrabold text-lg'>{d.name}</p>
                                        <p className='font-thin text-sm'>{d.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default CourseCard;

const data = [
    {
        img: 'src/assets/course/courseImg1.svg',
        name: 'Professional Teacher',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.'
    },
    {
        img: 'src/assets/course/courseImg2.svg',
        name: 'Course Certificate',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.'
    },
    {
        img: 'src/assets/course/courseImg3.svg',
        name: 'Interesting Learning',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.'
    },
    {
        img: 'src/assets/course/courseImg4.svg',
        name: '120 Videos Course',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.'
    }
]

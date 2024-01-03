import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import Card from '../../molecoles/Course-cards';

export default function Course() {
    const [slider, setSlider] = useState(null);

    const settings = {
        accessibility: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3
            //     }
            // },
            // {
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //         initialSlide: 2
            //     }
            // },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const goToNextSlide = () => {
        slider.slickNext();
    };

    const goToPrevSlide = () => {
        slider.slickPrev();
    };

    return (
        <>
            <div id="course" className="p-32 min-h-full pt-14 pb-14 bg-white">
                <div>
                    <p className=" text-indigo-500 text-xl w-full pl-4">WHAT WE GIVE</p>

                    {/* CONTENTS */}
                    <div className="hero-content pt-0 pb-0">

                        {/* DESCRIPTION */}
                        <div className="w-1/3 flex items-center flex-col">
                            {/* <p className="py-6 text-indigo-500 text-xl mb-3 w-full">WHAT WE GIVE</p> */}
                            <p className="text-5xl font-extrabold mb-6">What do You Get From Us</p>
                            <p className="mt-3 text-xl text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                        </div>

                        {/* SLIDES OF CARDS */}
                        <div className='w-2/3'>
                            {/* <div className="carousel carousel-center max-w-3xl p-4 space-x-4 rounded-box">
                                <Card/>
                            </div> */}
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

                    </div>

                    {/* BUTTONS */}
                    <div className='flex btn-warning justify-end pt-3 pr-5'>
                        <button onClick={goToPrevSlide} className="btn btn-circle btn-sm text-white m-2">❮</button>
                        <button onClick={goToNextSlide} className="btn btn-circle btn-sm text-white m-2">❯</button>
                    </div>
                </div>

            </div>
        </>
    )
}

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
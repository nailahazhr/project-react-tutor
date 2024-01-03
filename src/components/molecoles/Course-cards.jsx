import React from 'react';

const Card = (props) => {
    const { desc } = props;
    return (
        <>
            <div className='grid grid-flow-col gap-4'>
                    {data.map((d) => (
                        <div className="card h-[280px] flex w-80 bg-indigo-600 text-white" key={d.name}>
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
            </div>
            {/* <div className="card w-96 bg-primary text-primary-content shadow-xl m-5 card-bordered">
                <div className="card-body">
                    {props.children}
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Card;

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

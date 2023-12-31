import React from 'react';

const Card = (props) => {
    const { title } = props;
    return (
        <>
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
            <div className="card w-96 bg-primary text-primary-content shadow-xl m-5 card-bordered">
                <div className="card-body">
                    {/* children */}
                    {props.children}
                    <h2 className="card-title">{title}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

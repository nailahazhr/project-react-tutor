import React from 'react';

const Card = (props) => {
    const {title} = props;
    return (
        <>
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

import React from 'react';

export default function Hero() {
    return (
        <>
            <div id="home" className="hero min-h-full pt-14 pb-14 pl-32 pr-32 bg-slate-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="max-w-xl">
                        <div className="mb-6">
                            <span className="py-6 text-indigo-500 text-xl">Let's </span>
                            <span className="py-6 text-indigo-500 text-xl font-bold"> Begins</span>
                        </div>
                        <div className="mb-3">
                            <span className="text-7xl font-extrabold">Let's Find The Right </span>
                            <span className="text-7xl font-extrabold text-indigo-500">Course </span>
                            <span className="text-7xl font-extrabold">For You </span>
                        </div>
                        <p className="py-6 text-slate-400 text-xl mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                        <div className="gap-6 flex">
                        <button className="btn btn-primary btn-active w-40 text-lg text-white">Register</button>
                        <button className="btn btn-active btn-link w-48 text-lg text-black" style={{ textDecoration: 'none' }}><img src="src/assets/hero/heroPlayButton.svg"></img>Play Video</button>
                        </div>
                    </div>
                    <img src="src/assets/hero/heroImg.svg" className="max-w-screen-2xl ml-14 p-10" />
                </div>
            </div>
        </>
    );
}
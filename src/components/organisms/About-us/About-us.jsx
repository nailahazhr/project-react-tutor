export default function AboutUs() {
    const bggradien = {
        background: 'linear-gradient(to top, #3d2cd3, #5563ed)'
    };

    const data = [
        {
            num: '6,000',
            desc: 'People Views'
        },
        {
            num: '4,000',
            desc: 'Users'
        },
        {
            num: '100',
            desc: 'Courses'
        },
    ]

    return (
        <>
            <div id="about-us" className="hero min-h-full pl-32 pr-32" style={bggradien}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src="src/assets/about-us/aboutImg.svg" className="max-w-screen-2xl p-10" />
                    <div className="max-w-lg ml-14">
                        <p className="text-warning text-lg mb-4">SELECTED COURSE</p>
                        <p className="text-5xl font-extrabold text-white">People Taking Courses</p>
                        <p className="py-6 text-slate-300 text-xl mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                        <div className="flex flex-col w-full lg:flex-row">
                            {data.map((d) => (
                                <div className="grid flex-grow card place-items-center place-content-start">
                                    <p className='font-extrabold text-2xl text-warning'>{d.num}</p>
                                    <p className='text-lg text-slate-300'>{d.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
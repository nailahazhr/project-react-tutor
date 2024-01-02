export default function Article() {
    return (
        <>
            <div id="article" className="hero min-h-full pt-10 pb-10 pl-32 pr-32 bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/3 flex-col lg:flex-row">
                        {data1.map((d) => (
                            <div key={d.name} className="card w-[350px] h-[346px] bg-base-100 shadow-xl mb-10">
                                <figure><img src={d.img} alt="" className="w-screen" /></figure>
                                <div className="card-body flex-col">
                                    <h2 className="card-title text-extrabold text-xl">{d.name}</h2>
                                    <p className="text-slate-400">{d.desc}</p>
                                    <p className="text-primary text-sm">{d.views}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-1/3 flex-col lg:flex-row">
                        {data2.map((d) => (
                            <div key={d.name} className="card w-[350px] h-[346px] bg-base-100 shadow-xl mb-10">
                                <figure><img src={d.img} alt="" className="w-screen" /></figure>
                                <div className="card-body flex-col">
                                    <h2 className="card-title text-extrabold text-xl">{d.name}</h2>
                                    <p className="text-slate-400">{d.desc}</p>
                                    <p className="text-primary text-sm">{d.views}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-1/3 flex flex-col">
                        <p className="text-primary text-lg mb-6">AVAILABLE FOR YOU</p>
                        <p className="text-5xl font-extrabold mb-6">Available Courses</p>
                        <p className="text-slate-400 text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
                        <button className="btn btn-primary btn-active w-40 text-lg text-white">See All</button>
                    </div>
                </div>
            </div>
        </>
    );
}

const data1 = [
    {
        img: 'src/assets/article/articleImg1.svg',
        label: 'Best Course',
        name: 'HTML & CSS',
        desc: '120 Videos   2 Teacher',
        views: '1,500 Views',
        price: '$ 20 USD'
    },
    {
        img: 'src/assets/article/articleImg3.svg',
        label: 'Best Course',
        name: 'Javascript',
        desc: '120 Videos   2 Teacher',
        views: '1,500 Views',
        price: '$ 20 USD'
    }
]

const data2 = [
    {
        img: 'src/assets/article/articleImg2.svg',
        label: 'Best Course',
        name: 'Fotografer',
        desc: '100 Videos   2 Teacher',
        views: '1,500 Views',
        price: '$ 20 USD'
    },
    {
        img: 'src/assets/article/articleImg4.svg',
        label: 'Best Course',
        name: 'Desain Grafis',
        desc: '100 Videos   2 Teacher',
        views: '1,500 Views',
        price: '$ 20 USD'
    },
]
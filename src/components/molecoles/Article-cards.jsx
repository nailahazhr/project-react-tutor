import React from 'react';

const ArticleCards = () => {
    return (
        <>
            <div className="w-2/3 grid grid-cols-2">
                {data.map((d) => (
                    <div key={d.name} className="card w-[350px] h-auto bg-base-100 shadow-xl mb-10">
                        <div className="">
                            <figure className="relative overflow-hidden bg-gradient-to-t">
                                <img src={d.img} alt={d.name} className="w-full h-full object-cover" />

                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>

                                <div className="absolute flex p-0 flex-col w-full h-full">

                                    <div className="flex mt-5">
                                        <span className="flex font-bold text-lg pt-3 pb-3 p-4 bg-indigo-600 text-white">Best Course</span>
                                    </div>

                                    <div className="flex justify-end mt-24">
                                        <span className="font-bold text-2xl mt-6 pt-3 pb-3 p-4 text-white">{d.price}</span>
                                    </div>
                                </div>
                            </figure>
                        </div>
                        <div className="card-body flex-col p-6 ">
                            <div className="grid grid-flow-col gap-4 content-start">
                                <h2 className="card-title text-extrabold text-2xl">{d.name}</h2>
                                <span className="text-primary text-sm text-right m-auto mr-0">{d.views}</span>
                            </div>
                            <div>
                                <span className="text-slate-400 pr-5">{d.numVid}</span>
                                <span className="text-slate-400">{d.numLecture}</span>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ArticleCards;

const data = [
    {
        img: 'src/assets/article/articleImg1.svg',
        label: 'Best Course',
        name: 'HTML & CSS',
        numVid: '120 Videos',
        numLecture: '2 Teacher',
        views: '1,500 Views',
        price: '$ 20 USD'
    },
    {
        img: 'src/assets/article/articleImg2.svg',
        label: 'Best Course',
        name: 'Fotografer',
        numVid: '100 Videos',
        numLecture: '2 Teacher',
        views: '1,500 Views',
        price: '$ 20 USD'
    },
    {
        img: 'src/assets/article/articleImg3.svg',
        label: 'Best Course',
        name: 'Javascript',
        numVid: '120 Videos',
        numLecture: '2 Teacher',
        views: '1,500 Views',
        price: '$ 20 USD'
    },
    {
        img: 'src/assets/article/articleImg4.svg',
        label: 'Best Course',
        name: 'Desain Grafis',
        numVid: '100 Videos',
        numLecture: '2 Teacher',
        views: '1,500 Views',
        price: '$ 20 USD'
    }
]

import ArticleCards from "../../molecoles/Article-cards";

export default function Article() {
    return (
        <>
            <div id="article" className="hero min-h-full pt-10 pl-32 pr-32 bg-white">
                <div className="hero-content">
                    <ArticleCards/>
                    <div className="w-1/3 grid-flow-col h-screen">
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
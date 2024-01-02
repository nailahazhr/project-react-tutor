export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer p-28 pl-32 pr-32 bg-gray-800 text-neutral-content">
                <aside className="w-96 text-base mr-20">
                    <img src="src/assets/footer/footerLogo.svg"></img>
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus. </p>
                    <div className="grid grid-flow-col gap-5 mt-7">
                        <a href=""><img src="src/assets/footer/facebook.svg"></img></a>
                        <a href=""><img src="src/assets/footer/twitter.svg"></img></a>
                        <a href=""><img src="src/assets/footer/linkedin.svg"></img></a>
                        <a href=""><img src="src/assets/footer/instagram.svg"></img></a>
                    </div>
                </aside>
                <nav className="text-base">
                    <header className="text-white font-extrabold text-lg mb-3">Home</header>
                    <a className="link link-hover">Product</a>
                    <a className="link link-hover">Course</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Log in</a>
                </nav>
                <nav className="text-base">
                    <header className="text-white font-extrabold text-lg mb-3">Course</header>
                    <a className="link link-hover">HTML & CSS</a>
                    <a className="link link-hover">Javascript</a>
                    <a className="link link-hover">Fotografer</a>
                    <a className="link link-hover">Desain Grafis</a>
                </nav>
                <nav className="text-base">
                    <header className="text-white font-extrabold text-lg mb-3">Article</header>
                    <a className="link link-hover">New</a>
                    <a className="link link-hover">Old</a>
                    <a className="link link-hover">Trend</a>
                    <a className="link link-hover">Popular</a>
                </nav>
                <nav className="text-base">
                    <header className="text-white font-extrabold text-lg mb-3">Contact Us</header>
                    <a className="link link-hover">Ccdoc123@gmail.com</a>
                </nav>
            </footer>
        </>
    )
}
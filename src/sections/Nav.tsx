const Nav = () => {
    return (
        <>
        <nav className="bg-[#C19B77] p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">Maroko Ekspert</div>
                <div>
                <a href="#hero" className="mx-4">Home</a>
                <a href="#services" className="mx-4">Services</a>
                <a href="#tours" className="mx-4">Tours</a>
                <a href="#about" className="mx-4">About Us</a>
                <a href="#testimonials" className="mx-4">Testimonials</a>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Nav;
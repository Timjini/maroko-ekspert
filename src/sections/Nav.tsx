// import LanguageSwitcher from "../utils/LanguageSwitcher";

const Nav = () => {
    return (
        <>
        <nav className="bg-[#C19B77] p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <img src="https://maroko-ekspert.pl/wp-content/uploads/2024/04/web-lightmaroko-ekspert.png" className="h-12 md:h-18  w-auto" />
                <div>
                {/* <LanguageSwitcher /> */}
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
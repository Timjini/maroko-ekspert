import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../utils/LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  // Define nav items by keys
  const navKeys: readonly string[] = ["services", "tours", "about"];

  return (
    <nav className="bg-gray-900 p-6 text-white absolute z-40 w-full h-24 shadow-lg">
      <div className="px-4 mx-auto flex justify-between items-center">
        <a href="/">
          <img
            src="https://maroko-ekspert.pl/wp-content/uploads/2024/04/web-lightmaroko-ekspert.png"
            className="h-12 md:h-12 w-auto"
            alt="Maroko Ekspert Logo"
          />
        </a>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div className="hidden md:flex pr-12">
          {navKeys.map((key, index) => (
            <a
              key={index}
              href={`#${key}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(key);
              }}
              className="mx-4 hover:text-[#c0c0c0]"
            >
              <span className="text-lg">{t(`nav.${key}`)}</span>
            </a>
          ))}
          <LanguageSwitcher />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 my-4 py-8 w-96 flex flex-col gap-2">
          {navKeys.map((key, index) => (
            <a
              key={index}
              href={`#${key}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(key);
              }}
              className=" py-2 px-4 hover:text-[#C19B77]"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

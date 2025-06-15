import { useState } from "react";

function Hero() {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = ["About", "Services", "Projects", "Contact"];
  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="bg-[url('./src/assets/images/mobile/image-header.jpg')] bg-cover bg-center h-screen w-full relative md:bg-[url('./src/assets/images/desktop/image-header.jpg')]">
      <header className="flex justify-between items-center py-8 px-8">
        {/* Logo */}
        <div>
          <img src="./logo.svg" alt="logo" className="w-32" />
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="md:hidden z-20">
          <img
            src="./icon-hamburger.svg"
            alt="hamburger-icon"
            className="w-6 h-6"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-white uppercase text-sm tracking-widest">
            <li className="text-white barlow uppercase tracking-widest px-4 py-2 hover:bg-white hover:text-black rounded-full transition-all duration-300">
              <a href="#about">About</a>
            </li>
            <li className="text-white barlow uppercase tracking-widest px-4 py-2 hover:bg-white hover:text-black rounded-full transition-all duration-300">
              <a href="#services">Services</a>
            </li>
            <li className="text-white barlow uppercase tracking-widest px-4 py-2 hover:bg-white hover:text-black rounded-full transition-all duration-300">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-white barlow uppercase tracking-widest px-4 py-2 hover:bg-white hover:text-black rounded-full transition-all duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Menu */}
      {showMenu && (
        <nav className="absolute top-20 right-8 bg-white py-8 px-24 rounded shadow-lg md:hidden z-10 text-center">
          <ul className="flex flex-col space-y-2 text-gray-500 text-sm barlow">
            {menuItems.map((item) => (
              <li className="hover:bg-[hsl(51,100%,49%)] hover:text-black rounded-3xl px-8 py-4">
                {" "}
                <a href={`#${item}`}>{item}</a>{" "}
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center text-white mt-20 md:mt-40">
        <h1 className="uppercase text-3xl tracking-[0.3em] mt-8 leading-tight md:text-5xl md:tracking-[0.5em] fraunces">
          We are <span className="block md:inline">creatives</span>
        </h1>
        <img
          src="./icon-arrow-down.svg"
          alt="arrow-down"
          className="w-8 h-28 mt-28 md:mt-12"
        />
      </div>
    </div>
  );
}

export default Hero;

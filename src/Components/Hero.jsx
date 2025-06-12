function Hero() {
  return (
    <div className="bg-[url('./src/assets/images/mobile/image-header.jpg')] bg-cover bg-center h-screen w-full md:bg-[url('./src/assets/images/desktop/image-header.jpg')]">
      <header className="flex justify-between items-center p-6">
        <div>
          <img src="./logo.svg" alt="logo" className="w-32" />
        </div>
        <div>
          <img
            src="./icon-hamburger.svg"
            alt="hamburger-icon"
            className="w-6 h-5 block md:hidden"
          />
        </div>
        <nav className="hidden md:block pt-5">
          <ul className="flex items-center gap-6 text-white font-barlow font-semibold uppercase text-sm tracking-widest">
            <li>
              <a
                href="#about"
                className="hover:bg-white hover:text-black rounded-full transition-all duration-300 px-4 py-3"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:bg-white hover:text-black rounded-full transition-all duration-300 px-4 py-3"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:bg-white hover:text-black rounded-full transition-all duration-300 px-4 py-3"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:bg-white hover:text-black rounded-full transition-all duration-300 px-4 py-3"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl mt-32 md:text-6xl font-black uppercase text-center tracking-[0.2em] leading-tight fraunces">
          <span className="block md:inline">We are</span>{" "}
          <span className="block md:inline">creatives</span>
        </h1>
        <img
          src="./icon-arrow-down.svg"
          alt="arrow-down"
          className="w-8 h-36 mt-20 md:mt-12 md:w-8 md:h-28"
        />
      </div>
    </div>
  );
}

export default Hero;

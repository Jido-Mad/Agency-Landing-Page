function Hero() {
  return (
    <div className="bg-[url('./src/assets/images/mobile/image-header.jpg')] bg-cover bg-center h-screen w-full">
      <header className="flex justify-between items-center p-4">
        <div>
          <img src="./logo.svg" alt="logo" className="w-32" />
        </div>
        <div>
          <img
            src="./icon-hamburger.svg"
            alt="hamburger-icon"
            className="w-5 h-5"
          />
        </div>
        {/*<nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>*/}
      </header>

      <div className="flex-1 flex flex-col items-center justify-center text-white text-center">
        <h1
          className="uppercase text-3xl mt-40 mb-6 fa"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          We are creatives
        </h1>
        <img
          src="./icon-arrow-down.svg"
          alt="arrow-down"
          className="w-8 h-30 mt-20"
        />
      </div>
    </div>
  );
}

export default Hero;

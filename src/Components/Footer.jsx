function Footer() {
  return (
    <>
      <div className="bg-[hsl(167,40%,62%)] text-center p-8">
        <div className="flex justify-center">
          <img src="./logo.svg" alt="logo" className="w-38 m-6 " />
        </div>
        <div>
          <ul className="flex justify-center gap-16 p-12">
            <li>
              <a
                className="text-[hsl(166,33%,34%)] barlow hover:text-white"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-[hsl(166,33%,34%)] barlow hover:text-white "
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-[hsl(166,33%,34%)] barlow hover:text-white"
                href="#projects"
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-6 py-8">
          <a>
            <img
              src="./icon-facebook.svg"
              className="hover:filter hover:brightness-1000"
            ></img>
          </a>
          <a>
            <img
              src="./icon-instagram.svg"
              className="hover:filter hover:brightness-1000"
            ></img>
          </a>
          <a>
            <img
              src="./icon-twitter.svg"
              className="hover:filter hover:brightness-1000"
            ></img>
          </a>
          <a>
            <img
              src="./icon-pinterest.svg"
              className="hover:filter hover:brightness-1000"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;

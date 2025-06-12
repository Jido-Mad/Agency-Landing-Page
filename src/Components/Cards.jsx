function Cards() {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse">
        {/* Image Section - now with aspect ratio control */}
        <div className="md:w-1/2">
          {/* Mobile image (square aspect ratio) */}
          <div className="block md:hidden  w-full overflow-hidden">
            <img
              src="./src/assets/images/mobile/image-transform.jpg"
              alt="Egg img"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Desktop image */}
          <img
            src="./src/assets/images/desktop/image-transform.jpg"
            alt="Egg img"
            className="hidden md:block w-full h-full max-h-[600px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 flex items-center justify-center my-16 md:my-0">
          <div className="max-w-[500px] px-8 md:px-12 text-center md:text-left">
            <h3 className="fraunces text-3xl md:text-4xl font-black text-gray-800 mb-6">
              Transform your brand
            </h3>
            <p className="barlow text-gray-500 mb-8 indent-2">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <h4 className="fraunces font-bold text-gray-900 cursor-pointer hover:underline">
              LEARN MORE
            </h4>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="block md:hidden  w-full overflow-hidden">
            <img
              src="./src/assets/images/mobile/image-stand-out.jpg"
              alt="Stand out image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Desktop image */}
          <img
            src="./src/assets/images/desktop/image-stand-out.jpg"
            alt="Stand out image"
            className="hidden md:block w-full h-full max-h-[600px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 flex items-center justify-center my-16 md:my-0">
          <div className="max-w-[500px] px-8 md:px-12 text-center md:text-left">
            <h3 className="fraunces text-3xl md:text-4xl font-black text-gray-800 mb-6">
              Stand out to the right audience
            </h3>
            <p className="barlow text-gray-500 mb-8 indent-2">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <h4 className="fraunces font-bold text-gray-900 cursor-pointer hover:underline">
              LEARN MORE
            </h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="bg-[url('./src/assets/images/mobile/image-graphic-design.jpg')] md:bg-[url('./src/assets/images/desktop/image-graphic-design.jpg')] min-h-[750px] bg-cover bg-center flex flex-col justify-end pb-10 w-screen">
          <div className=" flex flex-col items-center text-center">
            <h3 className="fraunces text-3xl font-bold mb-6 text-[hsl(167,40%,24%)]">
              Graphic Design
            </h3>
            <p className="barlow max-w-md px-4 text-[hsl(167,40%,24%)]">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential client's
              attention.
            </p>
          </div>
        </div>

        <div className=" bg-[url('./src/assets/images/mobile/image-photography.jpg')] md:bg-[url('./src/assets/images/desktop/image-photography.jpg')] min-h-[750px] bg-cover bg-center flex flex-col justify-end pb-10 w-screen">
          <div className=" flex flex-col items-center text-center">
            <h3 className="fraunces text-3xl font-bold mb-6 text-[hsl(198,62%,26%)]">
              Photography
            </h3>
            <p className="barlow max-w-md px-4 text-[hsl(198,62%,26%)]">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

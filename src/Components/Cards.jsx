function Cards() {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src="./src/assets/images/mobile/image-transform.jpg"
          alt="Egg img"
        />
        <div className=" my-16 text-center">
          <h3 className="fraunces text-3xl font-black text-gray-800 px-8">
            Tranform your brand
          </h3>
          <p className="barlow indent-1 m-6 text-gray-500">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <h4>LEARN MORE</h4>
        </div>
      </div>
    </>
  );
}

export default Cards;

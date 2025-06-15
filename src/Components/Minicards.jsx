function Minicards() {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 w-full h-auto">
        <div className="flex justify-center">
          <img
            src="./src/assets/images/mobile/image-gallery-milkbottles.jpg"
            alt="Milk bottles"
            className="w-full h-auto"
          />
        </div>

        <div className="flex justify-center">
          <img
            src="./src/assets/images/mobile/image-gallery-orange.jpg"
            alt="Orange slice"
            className="w-full h-auto"
          />
        </div>

        <div className="flex justify-center">
          <img
            src="./src/assets/images/mobile/image-gallery-cone.jpg"
            alt="Ice-cream cone"
            className="w-full h-auto"
          />
        </div>

        <div className="flex justify-center">
          <img
            src="./src/assets/images/mobile/image-gallery-sugar-cubes.jpg"
            alt="Sugar cubes"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
}
export default Minicards;

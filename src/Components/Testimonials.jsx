function Testimonals() {
  return (
    <div className="barlow my-14 xl:mx-40">
      <h2 className="fraunces text-center font-bold text-gray-400 mb-14 tracking-widest">
        CLIENT TESTIMONIALS
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="m-2 text-center flex flex-col gap-8 items-center">
          <img
            src="./image-emily.jpg"
            alt="Profile Image"
            className="w-15 rounded-full"
          />
          <p className="text-gray-600">
            We put our trust in sunnyside and they delivered. making sure our
            needs are met and deadlines were always hit.
          </p>
          <div className="flex flex-col gap-2">
            <p className="fraunces text-gray-800 font-extrabold">Emily R.</p>
            <p className="text-gray-400 font-medium">Marketing Director</p>
          </div>
        </div>

        <div className="m-2 text-center flex flex-col gap-8 items-center">
          <img
            src="./image-thomas.jpg"
            alt="Profile Image"
            className="w-15 rounded-full"
          />
          <p className="text-gray-600">
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <div className="flex flex-col gap-2">
            <p className="fraunces text-gray-800 font-extrabold">Thomas S.</p>
            <p className="text-gray-400 font-medium">Chef Operating Officer</p>
          </div>
        </div>

        <div className="m-2 text-center flex flex-col gap-8 items-center">
          <img
            src="./image-jennie.jpg"
            alt="Profile Image"
            className="w-15 rounded-full"
          />
          <p className="text-gray-600">
            Incredible result! Our sales increased over 400% when we worked with
            SunnySide. Highly recommended!
          </p>
          <div className="flex flex-col gap-2">
            <p className="fraunces text-gray-800 font-extrabold">Jennie F</p>
            <p className="text-gray-400 font-medium">Business Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonals;

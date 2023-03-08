import { landing, first } from "../assets";
const Hero = () => {
  return (
    <section className="lg:grid lg:grid-cols-2 p-2 mt-10 justify-center items-center md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 xs:flex xs:flex-col gap-2">
      <div>
        <img src={landing} alt="trash" />
      </div>
      <div className="flex flex-col xs:mt-10 ">
        <h2 className="tracking-wide font-not text-green-400 capitalize">
          Who are we?
        </h2>
        <p className="text-gray-300 leading-7 font-poppins ">
          <span className="mt-2 p-2 ">BLACK AMRY</span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo mollitia
          totam enim nihil neque ea repudiandae aliquid iusto veniam, vel saepe
          obcaecati hic, beatae excepturi consectetur laboriosam quisquam
          recusandae magnam iure inventore quia. Facilis quisquam, veritatis
          modi quos numquam placeat?\
        </p>
        <div>
          <h3 className="font-not text-green-400 capitalize">features</h3>
          <ul className="grid grid-cols-3 gap-2 grid-flow-row">
            <li className="bg-blue-500 rounded-md">
              collect watse Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Velit, quos.
            </li>
            <li className="bg-blue-500 rounded-md">
              collect watse Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deserunt, officia!
            </li>
            <li className="bg-blue-500 rounded-md">collect watse</li>
            <li className="bg-blue-500 rounded-md">collect watse</li>
            <li className="bg-blue-500 rounded-md">collect watse</li>
          </ul>
        </div>
        <div>
          <h3 className="text-green-400 font-not">benefits</h3>
          <ul className="grid grid-cols-3 grid-flow-row gap-2">
            <li className="bg-blue-500 rounded-md">Easy access</li>
            <li className="bg-blue-500 rounded-md">Easy access</li>
            <li className="bg-blue-500 rounded-md">Easy access</li>
            <li className="bg-blue-500 rounded-md">Easy access</li>
            <li className="bg-blue-500 rounded-md">Easy access</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;

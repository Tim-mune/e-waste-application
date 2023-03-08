import Navbar from "../components/Navbar";
import { second, phone } from "../assets";
const About = () => {
  const AboutHero = () => {
    return (
      <main className="mt-4 p-4">
        <div className="lg:container lg:grid lg:grid-cols-2 xs:flex flex-col md:container sm:container gap-4">
          <div className="">
            <img
              src={second}
              alt="an image abt us"
              className="xs:w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-white">who are we?</h3>
            <p className="text-gray-200 font-poppins leading-10">
              we are a non-profit organization wokring towards creating a better
              environment by clearing electronic wastes around us
            </p>
          </div>
          <div>
            <h3 className="text-white ">our goals</h3>
            <p className="text-gray-200 font-poppins leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              harum cumque sint. Modi eligendi omnis voluptas, a optio esse
              neque vitae corporis necessitatibus, est saepe maxime similique
              molestias nam deleniti quia rem, reiciendis iste error maiores
              ducimus harum alias! Temporibus, est! Harum doloremque corporis,
              illo velit sequi amet culpa quidem.
            </p>
          </div>
          <div>
            <img src={phone} alt="" className="rounded-lg" />
          </div>
        </div>
      </main>
    );
  };
  return (
    <section>
      <h1 className="text-white text-center tracking-widest mb-4">About us</h1>
      <AboutHero />
    </section>
  );
};

export default About;

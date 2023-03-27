import { engineer } from "../../assets";
const AboutUs = () => {
  return (
    <div className="min-h-screen p-2  grid grid-cols-2 gap-4 items-center xs:flex xs:flex-col xs:gap-10 ss:flex ss:flex-col lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:flex sm:flex-col">
      <div className="opacity-90 hover:opacity-100">
        <img src={engineer} alt="man working" />
      </div>
      <div>
        <p className="text-justify text-clip text-gray-200 min-w-min ">
          Smart Waste is a team of passionate computer scientists and engineers
          who are dedicated to making a positive impact on the environment
          through innovative technology. Our team brings together a diverse
          range of skills and expertise, from software development and hardware
          engineering to data analytics and artificial intelligence. At Smart
          Waste, our mission is to create a world where waste is not just
          managed, but transformed into valuable resources. We are committed to
          providing cutting-edge solutions that enable individuals and
          organizations to reduce waste, increase efficiency, and promote
          sustainability. Through our innovative products and services, we
          strive to empower our customers to make a positive impact on the
          environment while achieving their own business objectives. We believe
          that by working together, we can build a more sustainable future for
          generations to come. Thank you for choosing Smart Waste. We are
          excited to partner with you and help you achieve your sustainability
          goals.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

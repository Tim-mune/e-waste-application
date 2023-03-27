import FeaturesHero from "../../helpers/hero-features";
import Benefits from "../../helpers/benefits";

const FeaturesAndBenefits = () => {
  return (
    <section className="min-h-screen flex flex-col gap-10 ">
      <h4 className="text-center">features and benefits</h4>
      <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:flex sm:flex-col">
        <ul className="p-4 m-2 xl:grid xl:grid-cols-2  lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 ss:grid ss:grid-cols-2 xs:flex xs:flex-wrap">
          {FeaturesHero.map((item, index) => {
            return (
              <div className="flex mt-10 bg-white p-4 w-8/12 rounded-xl justify-around items-center shadow-xl shadow-gray-800">
                <li className="list-item ">{item.feature}</li>
              </div>
            );
          })}
        </ul>
        <ul className="p-4 m-2 xl:grid xl:grid-cols-2  lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2 ss:grid ss:grid-cols-2 xs:flex xs:flex-col">
          {Benefits.map((item, index) => {
            return (
              <div className="flex mt-10 bg-white p-4 w-8/12 rounded-xl justify-around items-center shadow-xl shadow-gray-800">
                <li className="list-item">{item.benefit}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesAndBenefits;

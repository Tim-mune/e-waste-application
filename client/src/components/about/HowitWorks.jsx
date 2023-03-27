import { computer } from "../../assets";
const HowitWorks = () => {
  return (
    <div className="min-h-screen flex flex-col p-6">
      <h3 className="text-center">How does it work?</h3>
      <div className="mx-auto my-auto">
        <p className="text-justify text-clip text-gray-300">
          At Smart Waste, we are committed to reducing waste and promoting
          sustainability through a unique approach. We collect electronic waste
          from individuals and organizations, refurbish and resell items that
          can be fixed, and responsibly dispose of those that cannot. Our
          process starts with the collection of electronic waste, which can
          include everything from old laptops and smartphones to printers and
          other electronics. Once the waste is collected, our team of experts
          carefully assesses each item to determine if it can be refurbished and
          resold.
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 md:grid md:grid-cols-2 sm:flex sm:flex-col p-4">
        <div className=" ">
          <img
            src={computer}
            alt="computers"
            className="h-2/3 object-contain rounded-full"
          />
        </div>
        <div className=" ">
          <p className="text-justify dark:text-gray-300 relative">
            For those items that can be fixed, we refurbish them to the highest
            standards using cutting-edge technology and techniques. Once the
            items are fully refurbished, they are resold to individuals or
            organizations at a fraction of the cost of new electronics. This not
            only provides affordable access to technology for those who may not
            be able to afford new items but also helps to reduce the amount of
            waste in landfills. For those items that cannot be fixed or are
            beyond repair, we responsibly dispose of them in accordance with all
            applicable regulations and guidelines. This ensures that these items
            are not contributing to environmental harm and are being disposed of
            in a responsible and ethical manner. At Smart Waste, we are
            dedicated to reducing waste and promoting sustainability through a
            comprehensive approach. We believe that by working together, we can
            build a more sustainable future for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;

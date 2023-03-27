import { phone, first, second } from "../../assets";

const PrivacyAndSecurity = () => {
  return (
    <section className="min-h-screen">
      <h3 className="text-center mt-5">Privacy and security</h3>
      <div className="flex flex-col flex-1 gap-4 mt-5">
        {/* introduction */}
        <p className="text-center text-gray-300">
          Our commitment to your privacy and security is of utmost importance to
          us at Smart Waste. In this section, you'll find an overview of our
          policies regarding the protection of your personal information,
          including our use of cookies and tracking technologies. We take great
          care to ensure that your data is secure when using our website, and
          we're committed to being transparent about our practices to build
          trust with our customers. Learn more about our privacy and security
          policies in this section
        </p>
      </div>
      <div>
        {/* type of waste we collect */}
        <h3 className="text-center m-5">Type of waste we collect</h3>
        <div>
          <div className="flex">
            <div className="w-4/12">
              <img src={second} alt="" className="relative " />
              <p className="text-center text-gray-300 relative">
                At Smart Waste, we collect all types of electronic waste,
                including home equipment, office equipment, and industrial
                equipment.
              </p>
            </div>

            <div className="w-4/12">
              <img src={phone} alt="" className="relative" />
              <p className="text-center text-gray-300">
                We accept a wide range of electronics, including computers,
                printers, televisions, smartphones, and more.
              </p>
            </div>
            <div className="w-4/12">
              <img src={first} alt="" className="relative" />
              <p className="text-center text-gray-300">
                By partnering with us, you can be confident that your electronic
                waste will be handled in a responsible and
                environmentally-friendly manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyAndSecurity;

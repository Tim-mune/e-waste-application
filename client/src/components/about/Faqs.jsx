import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
const Faqs = () => {
  const [active, setActive] = useState(false);
  return (
    <section>
      <h3 className="text-center mt-5 p-4 capitalize">
        Frequently asked questions
      </h3>
      <div className="flex  flex-col items-center justify-around">
        <button
          onClick={() => setActive(!active)}
          className="flex gap-2 justify-between items-center"
        >
          <h5>see Responses</h5>
          <AiFillEye className="text-white w-[25px] h-[25px]" />
        </button>
      </div>
      <div className="flex  flex-col items-center justify-around">
        <div className=" ss:w-[400px] sm:w-[500px] md:w-[600px] bg-gray-600 rounded-2xl p-4 mt-6 gap-2">
          <p>What types of electronic waste do you accept?</p>
          {active && (
            <p className="font-extralight italic text-gray-300">
              We accept all types of electronic waste, including but not limited
              to home appliances, office equipment, and industrial electronics
              such as computers, printers, phones, TVs, and other similar
              devices.
            </p>
          )}
        </div>
        <div className=" ss:w-[400px] sm:w-[500px] md:w-[600px] bg-gray-600 rounded-2xl p-4 mt-6 gap-2">
          <p>How do I prepare my electronics for pickup?</p>
          {active && (
            <p className="font-extralight italic text-gray-300">
              Before pickup, we recommend that you back up any important data on
              your devices and then securely erase all personal
              information.Uppon creating an account you can also schedule a
              pickup location.
            </p>
          )}
        </div>
        <div className=" ss:w-[400px] sm:w-[500px] md:w-[600px] bg-gray-600 rounded-2xl p-4 mt-6 gap-2">
          <p>Do you offer data destruction services?</p>
          {active && (
            <p className="font-extralight italic text-gray-300">
              Yes, we offer data destruction services to ensure the secure
              erasure of all personal and sensitive data on your devices. Our
              team uses industry-standard methods to completely wipe all data
              from your devices, ensuring that it is irretrievable. We take data
              privacy and security very seriously and are committed to
              protecting our customers' sensitive information
            </p>
          )}
        </div>
        {/* <div className=" ss:w-[400px] sm:w-[500px] md:w-[600px] bg-gray-600 rounded-2xl p-4 mt-6 gap-2">
          <button onClick={toggleAnswer} className="">
            <AiFillEye className="text-white w-[25px] h-[25px]" />
          </button>
          <p>What happens to the electronic waste you collect?</p>
          {active && <p>answer</p>}
        </div> */}
        {/* <div className=" ss:w-[400px] sm:w-[500px] md:w-[600px] bg-gray-600 rounded-2xl p-4 mt-6 gap-2">
          <button onClick={toggleAnswer} className="text-white">
            See
            <AiFillEye className="text-white w-[25px] h-[25px]" />
          </button>
          <p>
            How do I know my data is safe when I recycle my electronics with
            you?
          </p>
          {active && <p></p>}
        </div> */}
      </div>
    </section>
  );
};

export default Faqs;

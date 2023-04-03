import { useState } from "react";
import Button from "./Button";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { ToastContainer, toast } from "react-toastify";
import { useGlobalContext } from "../context/appcontext";
const CollectWasteForm = () => {
  const initialState = {
    name: "",
    type: "",
    condition: "",
    weight: "",
    location: "",
    date: "",
  };
  const resetValues = () => {
    setValues({ ...values, ...initialState });
  };
  const [values, setValues] = useState(initialState);
  const { wasteType, wasteCondition, createWaste, waste } = useGlobalContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, type, condition, weight, location, date } = values;
    const waste = {
      name,
      type,
      condition,
      weight: Number(weight),
      location,
      date: new Date().toISOString(date),
    };
    if (!name || !type || !condition || !weight || !location || !date) {
      toast.warn("please provide all fields");
    } else if (Number(weight) < 1) {
      toast.warn("please provide a valid waste weight");
    } else {
      createWaste(waste);
      toast("waste registered successfully");
      setTimeout(() => {
        resetValues();
      }, 3000);

      console.log(error);
      toast.error("Sorry theres was an error");
    }
  };
  const handleChange = async (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen container p-4">
      <main className="flex flex-col gap-4">
        <div className="border-2 border-gray-400 rounded-xl p-2">
          <div className="flex flex-col justify-center items-center">
            <h5 className="shadow-lg">Smart Waste inc</h5>
            <h5>logo</h5>
          </div>
          <ToastContainer />
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-3 justify-center items-center"
          >
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
              labelText="Waste Name"
            />
            <FormRowSelect
              name="type"
              value={values.type}
              handleChange={handleChange}
              labelText="Waste Type"
              list={wasteType}
            />
            <FormRowSelect
              name="condition"
              value={values.condition}
              handleChange={handleChange}
              labelText="Waste Condition"
              list={wasteCondition}
            />
            <FormRow
              type="number"
              name="weight"
              value={values.weight}
              handleChange={handleChange}
              labelText="Waste Weight"
            />
            <FormRow
              type="text"
              name="location"
              value={values.location}
              handleChange={handleChange}
              labelText="Waste Location"
            />
            <FormRow
              type="date"
              name="date"
              value={values.date}
              handleChange={handleChange}
              labelText="Pick up date"
            />
            <Button text="submit" type="submit" />
          </form>
        </div>
        {waste && (
          <div>
            <div className=" flex flex-col items-center justify-center">
              <div className="border-2 border-gray-400 rounded-xl p-2 w-1/2 xs:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col flex-1 gap-1 bg-slate-900">
                <h4>Waste created</h4>
                <img src="" alt="waste image" />
                <h5>
                  waste name{" "}
                  <span className="float-right text-cyan-400">
                    {waste.name}
                  </span>
                </h5>
                <h5>
                  waste condition{" "}
                  <span className="float-right text-cyan-400">
                    {waste.condition}
                  </span>
                </h5>
                <h5>
                  status
                  <span className="float-right text-cyan-400">
                    {waste.disposalStatus}
                  </span>
                </h5>
                <h5>
                  waste type
                  <span className="float-right text-cyan-400">
                    {waste.type}
                  </span>
                </h5>
              </div>
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default CollectWasteForm;

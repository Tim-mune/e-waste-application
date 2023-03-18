import Button from "./Button";
import FormRow from "./FormRow";
const CollectWasteForm = () => {
  const handleSubmit = async () => {};
  const onChange = async () => {};
  return (
    <section className="min-h-screen container p-4">
      <main className="">
        <div className="border-2 border-white rounded-xl p-2">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-3 justify-center items-center"
          >
            <FormRow
              type="text"
              name="name"
              value=""
              handleChange={onchange}
              labelText="Waste Name"
            />
            <FormRow
              type=""
              name="type"
              value=""
              handleChange={onchange}
              labelText="Waste Type"
            />
            <FormRow
              type="text"
              name="condition"
              value=""
              handleChange={onchange}
              labelText="Waste Condition"
            />
            <FormRow
              type="text"
              name="weight"
              value=""
              handleChange={onchange}
              labelText="Waste Weight"
            />
            <FormRow
              type="text"
              name="location"
              value=""
              handleChange={onchange}
              labelText="Waste Location"
            />
            <FormRow
              type="text"
              name="name"
              value=""
              handleChange={onchange}
              labelText="Waste Name"
            />
            <FormRow
              type="date"
              name="name"
              value=""
              handleChange={onchange}
              labelText="Pick up date"
            />
            <FormRow
              type="text"
              name="name"
              value=""
              handleChange={onchange}
              labelText="Waste Name"
            />
          </form>
          <Button text="submit" type="submit" />
        </div>
      </main>
    </section>
  );
};

export default CollectWasteForm;

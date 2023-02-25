const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={name} className="text-xl mb-2 text-cyan-300 capitalize">
          {labelText || name}
        </label>
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className="p-2 mb-4 rounded-lg w-full"
        />
      </div>
    </>
  );
};

export default FormRow;

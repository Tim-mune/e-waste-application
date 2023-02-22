const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={name}
          className="text-white tracking-widest uppercase font-not"
        >
          {labelText || name}
        </label>
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className=""
        />
      </div>
    </>
  );
};

export default FormRow;

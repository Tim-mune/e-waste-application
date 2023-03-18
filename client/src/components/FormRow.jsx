const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <label htmlFor={name} className="text-xl mb-2 text-cyan-300 capitalize">
          {labelText || name}
        </label>
        <input
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          className="p-2 mb-2 rounded-lg xs:w-full h-9 sm:w-full md:w-2/3 lg:w-3/4 xl:w-3/4 "
        />
      </div>
    </>
  );
};

export default FormRow;

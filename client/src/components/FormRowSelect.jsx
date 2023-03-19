const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <label
        htmlFor={name}
        className="text-xl mb-2 text-gray-200 capitalize font-poppins"
      >
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="p-2 mb-2 rounded-lg xs:w-full h-9 sm:w-full md:w-2/3 lg:w-3/4 xl:w-3/4 text-gray-400"
      >
        {list.map((item, index) => {
          return (
            <option className="" key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;

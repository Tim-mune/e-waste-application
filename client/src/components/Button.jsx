const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white py-1 px-2 m-2 rounded-lg hover:bg-blue-600 tracking-widest font-not"
    >
      {text}
    </button>
  );
};

export default Button;

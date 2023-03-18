const Button = ({ text, onClick, icon, type }) => {
  return (
    <button
      type={type}
      className="bg-blue-500 text-white py-1 px-2 m-2 rounded-lg hover:bg-blue-600 tracking-widest font-poppins"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

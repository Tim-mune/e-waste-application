import ReactLoading from "react-loading";
const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin ease-linear w-20 h-20 border border-t-orange-400 justify-center rounded-full"></div>
    </div>
  );
};

export default Loading;

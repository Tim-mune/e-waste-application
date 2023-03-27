import { useEffect } from "react";
import moment from "moment";
import { useGlobalContext } from "../context/appcontext";
import Loading from "./Loading";
const Refurbished = () => {
  const { getAllWastes, totalWastes, isLoading } = useGlobalContext();
  useEffect(() => {
    getAllWastes();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="flex flex-1 flex-col">
      <header>
        <h4>a form to allow sorting of waste</h4>
      </header>
      <main className="flex p-4 gap-4 flex-wrap justify-around items-center">
        {totalWastes.map((item, index) => {
          const {
            name,
            type,
            condition,
            weight,
            createdAt,
            disposalStatus,
            _id,
          } = item;
          return (
            <div
              key={index}
              className="w-[300px] h-auto mt-4 bg-slate-800 rounded-2xl shadow-md p-2 flex-col gap-2 items-start shadow-dimWhite "
            >
              <div className="flex flex-col">
                <div className="flex items-start justify-center">
                  <img
                    className="rounded-lg bg-teal-300 h-[100px] w-full"
                    src=""
                    alt="image here"
                  />
                </div>
                <h4>
                  Name
                  <span className="float-right">{name}</span>
                </h4>
                <p>
                  Type
                  <span className="float-right"> {type}</span>
                </p>
                <h5>
                  condition
                  <span className="float-right"> {condition}</span>
                </h5>
                <hr className="bg-green-800" />
                <h5>
                  Weight
                  <span className="float-right">{weight}</span>
                </h5>
                <p>
                  Created
                  <span className="float-right">
                    {moment(createdAt).format("MMM Do YY")}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
        {/* {totalWastes.map((item, index) => {
          const { name, type, condition, weight, createdAt, disposalStatus } =
            item;
          return (
            <div className="w-[250px] h-auto mt-4 bg-slate-100 rounded-2xl shadow-lg p-4 flex flex-col items-center text-slate-800">
              <h4>{name}</h4>
            </div>
          );
        })} */}
      </main>
    </section>
  );
};

export default Refurbished;

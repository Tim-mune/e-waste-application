import { useEffect } from "react";
import moment from "moment";
import { useGlobalContext } from "../context/appcontext";
import Loading from "./Loading";
const Refurbished = () => {
  const { getAllWastes, totalWastes, pages, wastes, isLoading } =
    useGlobalContext();
  useEffect(() => {
    getAllWastes();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  // if (wastes.length < 1) {
  //   return <p>you have not registred any wastes</p>;
  // }
  console.log(totalWastes);
  return (
    <section className="flex flex-1 flex-col">
      <header className="p-4">
        <p className="text-center text-lg capitalize float-right">
          displaying <span>{wastes.length}</span> out of {totalWastes}
        </p>
      </header>
      <main className="flex p-4 gap-4 flex-wrap justify-around items-center">
        {wastes.map((item, index) => {
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
        <div>
          <h4>pagination logic goes here</h4>
        </div>
      </main>
    </section>
  );
};

export default Refurbished;

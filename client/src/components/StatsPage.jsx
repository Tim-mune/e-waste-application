import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { useGlobalContext } from "../context/appcontext";
import Button from "./Button";
import Loading from "./Loading";
const StatsPage = () => {
  const { getStats, stats: data, isLoading } = useGlobalContext();
  const [barGraph, setBarGraph] = useState(true);
  useEffect(() => {
    getStats();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="flex flex-col justify-evenly items-center h-screen">
      <div className="border bg-white h-1/2 w-full  xs:w-full sm:w-full md:w-2/3 flex justify-center items-center">
        {barGraph ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{
                top: 20,
                bottom: 10,
                left: 10,
                right: 10,
              }}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="count" fill="cyan" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart
              data={data}
              margin={{ top: 20, bottom: 10, left: 10, right: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Area
                type="monotoneY"
                dataKey="count"
                stroke="cyan"
                fill="#bef8fd"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
      <div className="flex flex-col">
        <Button
          text={`${barGraph ? "AreaChart" : "BarChart"}`}
          onClick={() => setBarGraph(!barGraph)}
        />
        <p>statistical representation over time</p>
      </div>
    </main>
  );
};

export default StatsPage;

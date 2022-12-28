import { useState, useContext, useEffect } from "react";
import AppContext from "../../Context/AppContext";
import IncomePieChart from "./IncomePieChart";

export default function ShowIncome() {
  const { transection } = useContext(AppContext);
  // const [income, setIncome] = useState([transection]);
  // console.log("income", income);
  const [chartData, setChartData] = useState({
    labels: transection
      ?.filter((data) => data.type?.includes("income"))
      .map((data) => data.reason),
    datasets: [
      {
        label: "Income",
        data: transection?.map((data) => data.type == "income"),
        backgroundColor: ["rgba(0, 255, 0, 0.5)", "#00ff0080", "#50AF95",
          "#f3ba2f",
          "#2a71d0"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: transection
        ?.filter((data) => data.type?.includes("income"))
        .map((data) => data.reason),
      datasets: [
        {
          label: "Income",
          data: transection?.map((data) => data.type == "income"),
          backgroundColor: ["rgba(0, 255, 0, 0.5)", "#00ff0080"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [transection]);
  return (
    <div className="bg-white max-w-[300px] min-w-[300px] p-4 flex-auto rounded-md lg:mt-24 max-h-[500px] border-b-[10px] border-[#00ff0080] min-h-[400px] order-3 lg:order-1">
      <IncomePieChart chartData={chartData} />
    </div>
  );
}

import { useState, useContext, useEffect } from "react";
import AppContext from "../../Context/AppContext";
import ExpensePieChart from "./ExpensePieChart";


export default function ShowExpenses() {
  const { transection,deleteTransection } = useContext(AppContext);

  const [chartData, setChartData] = useState({
    labels: transection
      .filter((data) => data?.type?.includes("expense"))
      .map((data) => data?.reason),
    datasets: [
      {
        label: "Expense",
        data: transection.map((data) => data?.type == "expense"),
        backgroundColor: ["rgba(255, 127, 127, 1)", "#ff7f7f", "#50AF95",
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
        ?.filter((data) => data?.type?.includes("expense"))
        .map((data) => data?.reason),
      datasets: [
        {
          label: "expense",
          data: transection?.map((data) => data.type == "expense"),
          backgroundColor: ["rgba(255, 127, 127, 1)", "#ff7f7f"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [transection]);

  return (
    <div className="bg-white max-w-[300px] min-w-[300px] p-4 flex-auto rounded-md lg:mt-24 max-h-[500px] min-h-[400px] border-b-[10px] border-[#ff000080] order-2 lg:order-3">
      <ExpensePieChart chartData={chartData} />
    </div>
  );
}

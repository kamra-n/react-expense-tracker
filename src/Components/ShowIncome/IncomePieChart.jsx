import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import AppContext from "../../Context/AppContext";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function IncomePieChart({ chartData }) {
  const { income } = useContext(AppContext);
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Income - Rs {income}</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "iNCOME REPORT",
            },
          },
        }}
      />
    </div>
  );
}

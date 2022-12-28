import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { useContext } from "react";
import AppContext from "../../Context/AppContext";


export default function PieChart({ chartData }) {
  const { expense } = useContext(AppContext);
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Expenses - Rs {expense}</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Epense Report"
            }
          }
        }}
      />
    </div>
  )
}

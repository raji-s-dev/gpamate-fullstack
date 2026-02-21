import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  PointStyle,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

/* ---------- Types ---------- */
interface GPALineChartProps {
  labels: string[];
  values: number[];
  title?: string;
}

export default function GPALineChart({
  labels,
  values,
  title = "Semester-wise GPA",
}: GPALineChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: "GPA",
        data: values,
        borderColor: "#1E90FF", // blue-500
        backgroundColor: "rgba(59,130,246,0.2)",
        pointStyle: "circle" as PointStyle,
        pointRadius: 8,
        pointHoverRadius: 12,
        tension: 0,
        
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-[1140px]">
      <Line data={data} options={options} />
    </div>
  );
}

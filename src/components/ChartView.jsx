import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartView = ({ data }) => {
  const chartData = {
    labels: ['Day 1', 'Day 2', 'Day 3'], // Dummy labels
    datasets: [
      {
        label: 'Effect Size',
        data: data,
        borderColor: "#6366F1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ChartView;

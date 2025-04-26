import { useParams, Link } from "react-router-dom";
import getExperimentById from "../data/getExperimentById";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ExperimentDetails = () => {
  const { id } = useParams();
  const experiment = getExperimentById(id);

  if (!experiment) {
    return <div className="p-6">Experiment not found</div>;
  }

  // Dummy chart data
  const chartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: experiment.metric,
        data: [10, 12, 14, 16, 20],
        borderColor: "#3b82f6",
        backgroundColor: "#bfdbfe",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Link to="/" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
        ← Back to Dashboard
      </Link>

      <h1 className="text-2xl font-bold mb-2">{experiment.title}</h1>
      <p className="mb-4 text-sm text-gray-600">Metric: {experiment.metric}</p>

      <div className="bg-white p-4 rounded-2xl shadow mb-6">
        <Line data={chartData} />
      </div>

      <div className="bg-white p-4 rounded-2xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Summary</h2>
        <table className="w-full text-sm">
          <tbody>
            <tr>
              <td className="py-1 font-medium">Status:</td>
              <td>{experiment.status}</td>
            </tr>
            <tr>
              <td className="py-1 font-medium">Start Date:</td>
              <td>{experiment.startDate}</td>
            </tr>
            <tr>
              <td className="py-1 font-medium">End Date:</td>
              <td>{experiment.endDate || "Ongoing"}</td>
            </tr>
            <tr>
              <td className="py-1 font-medium">Effect Size:</td>
              <td>{experiment.effectSize}</td>
            </tr>
            <tr>
              <td className="py-1 font-medium">Confidence Interval:</td>
              <td>{experiment.confidenceInterval}</td>
            </tr>
            <tr>
              <td className="py-1 font-medium">Steady State:</td>
              <td className={experiment.steadyState ? "text-green-600" : "text-red-600"}>
                {experiment.steadyState ? "Yes" : "No"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 text-sm">
          Export as PDF
        </button>
        <button className="bg-gray-600 text-white px-4 py-2 rounded-xl hover:bg-gray-700 text-sm">
          Export as CSV
        </button>
      </div>
    </div>
  );
};

export default ExperimentDetails;

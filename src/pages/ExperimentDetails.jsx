import { useParams, Link } from "react-router-dom"; 
import getExperimentById from "../data/getExperimentById";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function ExperimentDetails() {
  const { id } = useParams();
  const experiment = getExperimentById(id);

  if (!experiment) {
    return <div className="p-6 text-center text-gray-500">Experiment not found</div>;
  }

  const chartData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        label: experiment.metric,
        data: [10, 12, 14, 16, 20],
        borderColor: "#3b82f6",
        backgroundColor: "#bfdbfe",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">

        {/* Back Link */}
        <Link to="/" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
          ← Back to Dashboard
        </Link>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{experiment.title}</h1>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Metric: <span className="font-medium">{experiment.metric}</span>
        </p>

        {/* Chart */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm mb-8 h-[250px] sm:h-[300px] md:h-[400px]">
          <Line 
            data={chartData} 
            options={{
              responsive: true, 
              maintainAspectRatio: false, 
              plugins: { 
                legend: { labels: { font: { size: 12 } } }
              },
              scales: {
                x: { ticks: { font: { size: 10 } } },
                y: { ticks: { font: { size: 10 } } }
              }
            }} 
          />
        </div>

        {/* Summary */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base text-left">
              <tbody>
                <tr>
                  <td className="py-2 font-semibold w-1/3 min-w-[120px]">Status:</td>
                  <td>{experiment.status}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Start Date:</td>
                  <td>{experiment.startDate}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">End Date:</td>
                  <td>{experiment.endDate || "Ongoing"}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Effect Size:</td>
                  <td>{experiment.effectSize}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Confidence Interval:</td>
                  <td>{experiment.confidenceInterval}</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Steady State:</td>
                  <td className={experiment.steadyState ? "text-green-600" : "text-red-600"}>
                    {experiment.steadyState ? "Yes" : "No"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 text-white w-full sm:w-auto px-5 py-3 rounded-xl hover:bg-blue-700 text-sm md:text-base">
            Export as PDF
          </button>
          <button className="bg-gray-700 text-white w-full sm:w-auto px-5 py-3 rounded-xl hover:bg-gray-800 text-sm md:text-base">
            Export as CSV
          </button>
        </div>

      </div>
    </div>
  );
}

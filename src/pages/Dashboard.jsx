import { useState } from "react";
import experiments from "../data/experiments";
import ExperimentCard from "../components/ExperimentCard";
import FilterBar from "../components/FilterBar";

const Dashboard = () => {
  const [filters, setFilters] = useState({
    status: "",
    metric: "",
  });

  const filteredExperiments = experiments.filter((exp) => {
    const statusMatch = filters.status ? exp.status === filters.status : true;
    const metricMatch = filters.metric ? exp.metric.toLowerCase().includes(filters.metric.toLowerCase()) : true;
    return statusMatch && metricMatch;
  });

  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4 flex justify-center">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">All Experiments</h1>

        <FilterBar filters={filters} setFilters={setFilters} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredExperiments.map((exp) => (
            <ExperimentCard key={exp.id} experiment={exp} />
          ))}

          {filteredExperiments.length === 0 && (
            <div className="col-span-full text-gray-500 text-center py-6">
              No experiments match your filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

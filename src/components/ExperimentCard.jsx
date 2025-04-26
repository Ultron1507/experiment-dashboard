import React from 'react';
import { Link } from 'react-router-dom';

const ExperimentCard = ({ id, title, metric, status, effectSize, steadyState }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">Metric: {metric}</p>
      <p className="text-gray-600 text-sm">Status: {status}</p>
      <p className="text-gray-600 text-sm">
        Effect Size: <span className="text-green-500 font-semibold">{effectSize}</span>
      </p>
      <p className="text-gray-600 text-sm">
        Steady State: <span className="font-semibold">{steadyState ? "Yes" : "No"}</span>
      </p>

      {/* Link for routing to details page */}
      <Link to={`/experiment/${id}`} className="text-blue-500 text-sm mt-4 inline-block hover:underline">
        View Details →
      </Link>
    </div>
  );
};

export default ExperimentCard;

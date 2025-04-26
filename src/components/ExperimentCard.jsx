import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ExperimentCard = ({ exp }) => {
  if (!exp) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition duration-200 bg-white">
      <h2 className="text-lg font-bold text-gray-900 mb-1">{exp.title}</h2>

      <div className="text-sm text-gray-700 space-y-1">
        <p>
          <span className="font-medium">Metric:</span> {exp.metric}
        </p>
        <p>
          <span className="font-medium">Status:</span>{" "}
          <span
            className={
              exp.status === "Completed"
                ? "text-green-600 font-semibold"
                : "text-yellow-600 font-semibold"
            }
          >
            {exp.status}
          </span>
        </p>
        <p>
          <span className="font-medium">Effect Size:</span> {exp.effectSize}
        </p>
        <p>
          <span className="font-medium">Confidence:</span> {exp.confidenceInterval}
        </p>
        <p>
          <span className="font-medium">Steady State:</span>{" "}
          <span className={exp.steadyState ? "text-green-600" : "text-red-600"}>
            {exp.steadyState ? "Yes" : "No"}
          </span>
        </p>
      </div>

      <Link
        to={`/experiment/${exp.id}`}
        className="inline-block mt-3 text-indigo-600 hover:underline text-sm font-medium"
      >
        View Details →
      </Link>
    </div>
  );
};

ExperimentCard.propTypes = {
  exp: PropTypes.shape({
    title: PropTypes.string.isRequired,
    metric: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    effectSize: PropTypes.string.isRequired,
    confidenceInterval: PropTypes.string.isRequired,
    steadyState: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExperimentCard;

// src/data/getExperimentById.js
import experiments from "./experiments";

const getExperimentById = (id) => {
  return experiments.find((exp) => exp.id === id);
};

export default getExperimentById;

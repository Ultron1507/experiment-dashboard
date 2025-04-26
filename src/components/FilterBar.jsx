// src/components/FilterBar.jsx
import { useState } from "react";

const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mb-6 flex flex-wrap gap-4 items-center">
      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
        className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        <option value="">All Status</option>
        <option value="Completed">Completed</option>
        <option value="Running">Running</option>
        <option value="Paused">Paused</option>
      </select>

      <input
        type="text"
        name="metric"
        value={filters.metric}
        onChange={handleChange}
        placeholder="Search by Metric"
        className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
      />

      <input
        type="text"
        name="date"
        value={filters.date}
        onChange={handleChange}
        placeholder="dd/mm/yyyy"
        className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
      />
    </div>
  );
};

export default FilterBar;

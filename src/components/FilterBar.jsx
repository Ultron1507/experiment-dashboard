import React from 'react';

const FilterBar = ({ statusFilter, setStatusFilter, searchMetric, setSearchMetric, selectedDate, setSelectedDate }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center mt-10">
      {/* Status Dropdown */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="p-2 border rounded-lg"
      >
        <option value="">Status</option>
        <option value="Active">Active</option>
        <option value="Completed">Completed</option>
      </select>

      {/* Date Picker */}
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="p-2 border rounded-lg"
      />

      {/* Metric Search */}
      <input
        type="text"
        value={searchMetric}
        onChange={(e) => setSearchMetric(e.target.value)}
        placeholder="Search by Metric"
        className="p-2 border rounded-lg flex-1"
      />
    </div>
  );
};

export default FilterBar;

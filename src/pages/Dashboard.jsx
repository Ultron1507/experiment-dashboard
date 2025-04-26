import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FiHome, FiBarChart2, FiSettings, FiHelpCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Dummy Data
const balanceData = [
  { month: 'Jan', blue: 30, green: 20, orange: 10 },
  { month: 'Feb', blue: 50, green: 40, orange: 20 },
  { month: 'Mar', blue: 70, green: 50, orange: 40 },
  { month: 'Apr', blue: 90, green: 60, orange: 30 },
  { month: 'May', blue: 110, green: 80, orange: 50 },
  { month: 'Jun', blue: 95, green: 70, orange: 60 },
  { month: 'Jul', blue: 120, green: 90, orange: 70 },
];

const skillsData = [
  { name: 'Yes', value: 400 },
  { name: 'No', value: 300 },
  { name: 'Maybe', value: 300 },
  { name: 'Unknown', value: 200 },
];

const COLORS = ['#0088FE', '#FFBB28', '#FF8042', '#00C49F'];

const experiments = [
  { id: 1, title: 'Homepage Redesign', metric: 'Conversion Rate', status: 'Active', effectSize: '+12%', steadyState: true },
  { id: 2, title: 'CTA Button Color Test', metric: 'Click Through Rate', status: 'Completed', effectSize: '+8%', steadyState: true },
  { id: 3, title: 'Signup Flow Optimization', metric: 'Signup Rate', status: 'Active', effectSize: '+18%', steadyState: false },
];

export default function Dashboard() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExperiments = experiments.filter((exp) => {
    const matchesStatus = statusFilter === 'All' || exp.status === statusFilter;
    const matchesSearch = exp.metric.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex min-h-screen bg-gray-100 justify-center"> {/* Centered the sidebar */}
      
      {/* Sidebar */}
      <aside className="w-80 bg-white p-6 shadow-md flex flex-col"> {/* Increased width from w-64 to w-80 */}
        <div className="text-2xl font-bold text-blue-600 mb-10">Expry</div>
        <nav className="flex flex-col gap-4 text-gray-700">
          <Link to="/" className="flex items-center gap-3 hover:text-blue-600"><FiHome /> Home</Link>
          <Link to="/" className="flex items-center gap-3 hover:text-blue-600">
            <i className="ri-dashboard-fill"></i>
            Dashboard
          </Link>
          <Link to="/" className="flex items-center gap-3 hover:text-blue-600"><FiBarChart2 /> Analytics</Link>
          <div className="border-t my-4"></div>
          <Link to="/" className="flex items-center gap-3 hover:text-blue-600"><FiSettings /> Settings</Link>
          <Link to="/" className="flex items-center gap-3 hover:text-blue-600"><FiHelpCircle /> Help</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        
        {/* Top Overview */}
        <h1 className="text-2xl font-bold mb-8">Activity Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {[ 
            { value: "83.51", label: "Activity Score" },
            { value: "135", label: "Experiments" },
            { value: "18", label: "Active" },
            { value: "35", label: "Completed" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center">
              <div className="text-3xl font-bold mb-2">{item.value}</div>
              <div className="text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Line Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Balance</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={balanceData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="blue" stroke="#0088FE" strokeWidth={2} />
                <Line type="monotone" dataKey="green" stroke="#00C49F" strokeWidth={2} />
                <Line type="monotone" dataKey="orange" stroke="#FF8042" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Average Skills</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={skillsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center mb-6">
          <select
            className="p-2 border rounded-lg"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>

          <input
            type="text"
            placeholder="Search by Metric"
            className="p-2 border rounded-lg flex-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Experiments Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredExperiments.map((exp) => (
            <div key={exp.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-600 text-sm">Metric: {exp.metric}</p>
              <p className="text-gray-600 text-sm">Status: {exp.status}</p>
              <p className="text-gray-600 text-sm">
                Effect Size: <span className="text-green-500 font-semibold">{exp.effectSize}</span>
              </p>
              <p className="text-gray-600 text-sm">
                Steady State: <span className="font-semibold">{exp.steadyState ? "Yes" : "No"}</span>
              </p>
              <Link
                to={`/experiment/${exp.id}`}
                className="text-blue-500 text-sm mt-4 block hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

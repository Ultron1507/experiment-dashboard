import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ExperimentDetails from './pages/ExperimentDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/experiment/:id" element={<ExperimentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

const experiments = [
    {
      id: "exp001",
      title: "Homepage Redesign",
      status: "completed",
      metric: "Conversion Rate",
      startDate: "2024-04-01",
      endDate: "2024-04-10",
      effectSize: "+12%",
      confidenceInterval: "95%",
      steadyState: true
    },
    {
      id: "exp002",
      title: "CTA Button Color Test",
      status: "running",
      metric: "Click Through Rate",
      startDate: "2024-04-11",
      endDate: null,
      effectSize: "+4%",
      confidenceInterval: "80%",
      steadyState: false
    },
    {
      id: "exp003",
      title: "Signup Flow Optimization",
      status: "completed",
      metric: "Signup Rate",
      startDate: "2024-03-20",
      endDate: "2024-04-05",
      effectSize: "+8.5%",
      confidenceInterval: "92%",
      steadyState: true
    },
  ];
  
  export default experiments;
  
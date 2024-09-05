import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WorkoutForm from "./components/WorkoutForm";
import GoalsPage from "./components/GoalsPage";
import ProgressDashboard from "./components/ProgressDashboard";
import HomeComponent from "./components/HomeComponent";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/workout" element={<WorkoutForm />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/progress" element={<ProgressDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

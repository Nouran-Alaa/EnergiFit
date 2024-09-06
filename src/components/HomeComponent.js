import React from "react";
import Sidebar from "./Sidebar";
import { Pie, Line } from "react-chartjs-2";
import { ResponsiveContainer } from "recharts";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

const HomeComponent = () => {
  // Sample data for the Pie chart and Line chart
  const pieData = {
    labels: ["Cardio", "Strength", "Yoga", "HIIT"],
    datasets: [
      {
        label: "Workout Types",
        data: [30, 20, 15, 35],
        backgroundColor: ["#4CAF50", "#FF9800", "#00BCD4", "#E91E63"],
        hoverBackgroundColor: ["#66BB6A", "#FFB74D", "#4DD0E1", "#F06292"],
      },
    ],
  };

  const lineData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Calories Burned",
        data: [300, 400, 350, 500, 450, 600, 700],
        fill: false,
        borderColor: "#4CAF50",
        backgroundColor: "#81C784",
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <div className="flex flex-row w-full bg-gradient-to-r from-gray-50 to-gray-100 justify-between">
      <div>
        <Sidebar />
      </div>
      <div className="w-full lg:w-10/12 md:w-4/5 min-h-screen flex flex-col items-center justify-center">
        <div className="w-full xl:max-w-5xl lg:max-w-3xl md:max-w-3xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome to Your Fitness Dashboard
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Track your fitness progress, log workouts, and set goals to achieve
            a healthier lifestyle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pie Chart */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                Workout Types Breakdown
              </h3>
              <Pie data={pieData} />
            </div>

            {/* Line Chart */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                Calories Burned This Week
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                {" "}
                <Line data={lineData} options={options} />
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;

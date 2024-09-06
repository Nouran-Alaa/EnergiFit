import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "./Sidebar";

const data = [
  { name: "Mon", Exercise: 30, Meals: 5, Sleep: 7 },
  { name: "Tue", Exercise: 50, Meals: 4, Sleep: 6 },
  { name: "Wed", Exercise: 70, Meals: 6, Sleep: 8 },
  { name: "Thu", Exercise: 60, Meals: 6, Sleep: 7 },
  { name: "Fri", Exercise: 90, Meals: 5, Sleep: 8 },
];

const Dashboard = () => {
  const [workoutLogs, setWorkoutLogs] = useState([]);

  useEffect(() => {
    const logs = JSON.parse(localStorage.getItem("workoutLogs")) || [];
    setWorkoutLogs(logs);
  }, []);

  return (
    <div className="flex flex-row w-full bg-gradient-to-r from-gray-50 to-gray-100">
      <Sidebar />
      <div className="min-h-screen flex flex-col items-center justify-center w-full p-10 text-gray-700">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Dashboard
        </h1>

        <div className="w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Exercise Progress</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Exercise" stroke="#094f8c" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Meals Eaten</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Meals" stroke="#12833b" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Sleep Tracking</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Sleep" stroke="#a2108c" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Workout logs section */}
          {workoutLogs.length > 0 ? (
            workoutLogs.map((log, index) => {
              const caloriesPerMinute = log.caloriesBurned / log.duration;
              const chartData = Array.from(
                { length: log.duration / 4 },
                (_, i) => ({
                  minute: i + 20,
                  CaloriesPerMinute: caloriesPerMinute * i * 4,
                })
              );

              return (
                <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">
                    Workout Log {index + 1}
                  </h3>
                  <p>
                    <strong>Exercise Type:</strong> {log.exerciseType}
                  </p>
                  <p>
                    <strong>Duration:</strong> {log.duration} minutes
                  </p>
                  <p className="mb-3">
                    <strong>Calories Burned:</strong> {log.caloriesBurned} kcal
                  </p>

                  {/* Chart for visualizing workout */}
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="minute"
                        label={{
                          value: "Minute",
                          position: "insideBottom",
                          offset: -5,
                        }}
                      />
                      <YAxis
                        label={{
                          value: "Kcal",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="CaloriesPerMinute"
                        stroke="#ff7300"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              );
            })
          ) : (
            <div className="bg-white shadow-md p-6 rounded-lg flex text-center justify-center">
              <h3 className="text-lg text-gray-500 font-semibold mb-4">
                No workout logs yet
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

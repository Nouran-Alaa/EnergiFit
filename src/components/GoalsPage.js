import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Import the Sidebar
import "boxicons/css/boxicons.min.css";

const GoalsPage = () => {
  const [goal, setGoal] = useState("");
  const [duration, setDuration] = useState("");
  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem("goals")) || []
  );

  const addGoal = () => {
    if (goal.trim() && duration.trim()) {
      const newGoal = {
        goal,
        duration,
      };
      const newGoals = [...goals, newGoal];
      setGoals(newGoals);
      localStorage.setItem("goals", JSON.stringify(newGoals));
      setGoal("");
      setDuration("");
    }
  };

  return (
    <div className="flex flex-row w-full bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-grow min-h-screen flex flex-col gap-7 items-center justify-center p-10 bg-gray-100">
        <div className="w-11/12 md:w-10/12 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Set Your Goals
          </h2>

          <div className="w-full">
            <div className="mb-4 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <input
                type="text"
                className="p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="Enter your goal"
              />
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Enter Duration"
              />
            </div>
          </div>

          <button
            onClick={addGoal}
            className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-400 transition duration-200"
          >
            Add Goal
          </button>
        </div>
        <div className="w-11/12 md:w-10/12 bg-white shadow-lg rounded-lg p-8">
          {/* Display the Goals */}
          {goals.length > 0 ? (
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Your Goals:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {goals.map((elem, index) => (
                  <div
                    key={index}
                    className="bg-orange-100 p-4 rounded-lg shadow-md"
                  >
                    <i class="bx bx-medal bx-sm"></i>
                    <p className="text-gray-700 font-medium flex justify-between">
                      <span>Goal: </span>
                      <span>{elem.goal}</span>
                    </p>
                    <p className="text-gray-700 font-medium flex justify-between">
                      <span>Duration: </span>
                      <span>{elem.duration}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-3">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Your Goals:
              </h3>
              <div className="p-2 rounded-lg flex text-center justify-center">
                <h3 className="text-lg text-gray-500 font-semibold mb-3">
                  No goals set yet
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;

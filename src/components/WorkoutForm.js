import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Sidebar from "./Sidebar";

const WorkoutForm = () => {
  const formik = useFormik({
    initialValues: {
      exerciseType: "",
      duration: "",
      caloriesBurned: "",
    },
    validationSchema: Yup.object({
      exerciseType: Yup.string().required("Required"),
      duration: Yup.number().required("Required").positive().integer(),
      caloriesBurned: Yup.number().required("Required").positive().integer(),
    }),
    onSubmit: (values) => {
      // Save the workout data to localStorage
      let workoutLogs = JSON.parse(localStorage.getItem("workoutLogs")) || [];
      workoutLogs.push(values);
      localStorage.setItem("workoutLogs", JSON.stringify(workoutLogs));
      alert("Workout logged successfully!");
    },
  });

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-grow flex justify-center items-center h-screen bg-gradient-to-r from-gray-50 to-gray-100">
        <form
          className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 border border-gray-200"
          onSubmit={formik.handleSubmit}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Log Your Workout
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Exercise Type
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              {...formik.getFieldProps("exerciseType")}
            />
            {formik.touched.exerciseType && formik.errors.exerciseType ? (
              <div className="text-red-500 text-sm mt-2">
                {formik.errors.exerciseType}
              </div>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Duration (minutes)
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              {...formik.getFieldProps("duration")}
            />
            {formik.touched.duration && formik.errors.duration ? (
              <div className="text-red-500 text-sm mt-2">
                {formik.errors.duration}
              </div>
            ) : null}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Calories Burned
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              {...formik.getFieldProps("caloriesBurned")}
            />
            {formik.touched.caloriesBurned && formik.errors.caloriesBurned ? (
              <div className="text-red-500 text-sm mt-2">
                {formik.errors.caloriesBurned}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-400 transition duration-200"
          >
            Log Workout
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkoutForm;

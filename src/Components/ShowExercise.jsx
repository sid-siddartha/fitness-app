import React from "react";
import { useParams } from "react-router-dom";
import { exercise_list } from "../assets/Exercises/assets.js";

const ShowExercise = () => {
  const { id } = useParams();

  // Find the exercise by ID
  const exercise = exercise_list.find((ex) => ex._id === id);

  if (!exercise) {
    return (
      <div className="text-center text-white mt-8">
        <h2 className="text-2xl font-bold">Exercise not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] px-4 py-10 ml-8 mr-8 rounded-2xl text-white">
      <h2 className="text-[3vw] font-anton font-extrabold uppercase leading-none text-center mb-8">
        {exercise.name}
      </h2>
      <img
        src={exercise.image}
        alt={exercise.name}
        className="h-[400px] w-full object-cover rounded-2xl mb-6"
      />
      <p className="text-lg">{exercise.description}</p>
    </div>
  );
};

export default ShowExercise;

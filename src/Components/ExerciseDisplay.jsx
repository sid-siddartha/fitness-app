import React from "react";
import { exercise_list } from "../assets/Exercises/assets.js";
import { useNavigate } from "react-router-dom";

const ExerciseDisplay = () => {
  const navigate = useNavigate();

  const handleExerciseClick = (id) => {
    navigate(`/exercise/${id}`);
  };

  return (
    <div className="bg-[#121212] px-4 py-10 ml-8 mr-8 rounded-2xl">
      <h2 className="text-white font-anton text-[3vw] font-extrabold uppercase leading-none flex justify-center items-center ">
        Transform Your Workout Routine
      </h2>

      <div className="grid grid-cols-3 flex justify-around mr-4 ml-4">
        {exercise_list.map((exercise) => (
          <div
            key={exercise._id}
            className="h-[350px] mt-8 ml-4 mr-4
            relative border
            overflow-hidden transition-transform duration-300 hover:opacity-90 
            hover:cursor-pointer hover:border-2 hover:border-[tomato] rounded-2xl
            flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
            bg-white/10 backdrop-blur-xl border border-white/20 text-white "
            onClick={() => handleExerciseClick(exercise._id)}
          >
            <img
              src={exercise.image}
              alt={exercise.name}
              className="h-[220px] w-[330px] object-cover ml-3 mr-3 mt-2.4 rounded-t-xl"
            />
            <div className="p-3 ml-3 text-white flex flex-col justify-center">
              <h3 className="text-lg drop-shadow-md font-bold text-[tomato] ">
                {exercise.name}
              </h3>
              <p className="text-sm mt-1 text-[#e3f4fe]">{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseDisplay;

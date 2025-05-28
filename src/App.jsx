import React from "react"; // uppercase R
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExerciseDisplay from "./components/ExerciseDisplay";
import ShowExercise from "./pages/ShowExercise";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExerciseDisplay />} />
        <Route path="/exercise/:id" element={<ShowExercise />} />
      </Routes>
    </Router>
  );
}

export default App;

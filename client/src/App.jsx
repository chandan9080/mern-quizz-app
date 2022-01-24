import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Result from "./Pages/Result/Result";
import QuizPage from "./Pages/QuizPage/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/quizpage" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

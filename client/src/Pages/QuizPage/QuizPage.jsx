import React, { useEffect, useState } from "react";
import "./QuizPage.css";

import Quiz from "../../components/Quiz/Quiz";
import questions from "../../data/sampleQuestions";

const QuizPage = () => {
  const [SampleQuestions, setSampleQuestions] = useState([]);
  useEffect(() => {
    const n = 5;
    const sampleQuestions = questions
      .map((x) => ({ x, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map((a) => a.x)
      .slice(0, n);
    setSampleQuestions(sampleQuestions);
  }, []);
  return (
    <div className="quizpage">
      {SampleQuestions.length > 0 && (
        <Quiz SampleQuestions={SampleQuestions}></Quiz>
      )}
    </div>
  );
};

export default QuizPage;

import React, { useEffect, useState } from "react";
import "./Result.css";
import { useNavigate } from "react-router-dom";
const ResultPage = () => {
  const [dataFromDB, setDataFromDB] = useState(null);
  const [loading, setLoading] = useState(true);
  const currTime = new Date().toLocaleString();
  const navigate = useNavigate();
  useEffect(() => {
    const clickHandler = async () => {
      let wrongcount = !sessionStorage.getItem("wrong")
        ? 0
        : JSON.parse(sessionStorage.getItem("wrong"));
      try {
        const res = await fetch("/wrongans", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: JSON.parse(sessionStorage.getItem("kid")),
            wrongAns: wrongcount,
          }),
        });

        const data = await res.json();
        if (res.status === 500) {
          alert("failed to save the progess");
          console.log("hello");
          sessionStorage.setItem("currentQuestionIndex", JSON.stringify(0));
          sessionStorage.setItem("wrong", JSON.stringify(0));
        } else {
          setDataFromDB(data.newKid);
        }
      } catch (err) {
        sessionStorage.setItem("currentQuestionIndex", JSON.stringify(0));
        sessionStorage.setItem("wrong", JSON.stringify(0));
      }
      setLoading(false);
    };
    clickHandler();
  }, [navigate]);

  const handleTry = () => {
    sessionStorage.setItem("currentQuestionIndex", JSON.stringify(0));
    sessionStorage.setItem("wrong", JSON.stringify(0));
    navigate("/quizpage");
  };

  const handleQuit = () => {
    sessionStorage.setItem("kid", JSON.stringify());
    sessionStorage.setItem("wrong", JSON.stringify(0));
    sessionStorage.setItem("currentQuestionIndex", JSON.stringify(0));
    navigate("/");
  };
  return (
    <div className="result">
      {!loading ? (
        <div className="result-container">
          {dataFromDB ? (
            <>
              <h2>Hello, {dataFromDB.name}</h2>
              <h3 className="wrong">Wrong Answers: {dataFromDB.wrongAns}</h3>
              <h4>Time of Submission : {currTime}</h4>
            </>
          ) : (
            <>
              <h1 className="failed">Failed To save Data</h1>
            </>
          )}{" "}
          <div className="button-div">
            <button onClick={handleQuit} className="quit">
              Quit
            </button>
            <button className="quit" onClick={handleTry}>
              Try Again
            </button>
          </div>
        </div>
      ) : (
        <div className="result-container"> Loading.... </div>
      )}
    </div>
  );
};

export default ResultPage;

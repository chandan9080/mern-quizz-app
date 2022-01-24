import React from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css";

const Question = (props) => {
  const {
    questions,
    setCurrQuestionIndex,
    currQuestionIndex,
    wrong,
    setWrong,
  } = props;
  const navigate = useNavigate();
  let Options = questions === undefined ? [] : questions.options;
  Options = Options.sort(() => Math.random() - 0.5);

  /*--------------------------------------------*/
  const handleOptionSelected = (e) => {
    if (currQuestionIndex >= 4) {
      if (!e) {
        alert("please select correct answer");
        setWrong(wrong + 1);
        sessionStorage.setItem("wrong", JSON.stringify(wrong + 1));
      } else {
        navigate("/result");
      }
    }
    if (e) {
      setCurrQuestionIndex(currQuestionIndex + 1);
      sessionStorage.setItem(
        "currentQuestionIndex",
        JSON.stringify(currQuestionIndex + 1)
      );
    } else {
      if (currQuestionIndex !== 4) {
        alert("please select correct answer");
        setWrong(wrong + 1);
        sessionStorage.setItem("wrong", JSON.stringify(wrong + 1));
      }
    }
  };
  /*----------------------------------------*/
  const handleQuit = () => {
    sessionStorage.setItem("kid", JSON.stringify());
    sessionStorage.setItem("wrong", JSON.stringify(0));
    sessionStorage.setItem("currentQuestionIndex", JSON.stringify(0));
    navigate("/");
  };
  return (
    <>
      {questions && (
        <div className="question-div">
          <div className="ques-errors">
            <span className="ques-no">
              Question Number:{currQuestionIndex + 1}
            </span>
            <span className="errors">Errors:{wrong}</span>
          </div>

          <h1 className="head-title">{questions.question}</h1>
          <div className="img-div">
            {Options.map((Option) => (
              <div className="single-opt" key={Option.answerId}>
                <button
                  key={Option.answerId}
                  onClick={() => {
                    handleOptionSelected(Option.correct);
                  }}
                  className="option-btn"
                >
                  <img
                    src={Option.imgURL}
                    alt="optionImage"
                    key={Option.answerId}
                    className="opt-img"
                  />
                </button>
              </div>
            ))}
          </div>
          <div className="bottom-btn">
            <button onClick={handleQuit} className="quit">
              Quit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;

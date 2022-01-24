import React from "react";
import "./HomePage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  //using navigate to navigate within components
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = (evt) => {
    if (name === "") {
      alert("Please Enter your Name");
      return;
    }
    evt.preventDefault();
    sessionStorage.setItem("kid", JSON.stringify(name));
    alert(`Submitting Name ${name}`);
    navigate("/quizpage");
  };
  return (
    <div className="home">
      <div className="home-main">
        <form onSubmit={handleSubmit} className="formInput">
          <label className="input-field">
            First Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
            />
          </label>
          <input className="home-btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default HomePage;

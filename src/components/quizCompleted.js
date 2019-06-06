import React from "react";

const quizCompleted = props => {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <div>
      <h1>Quiz completed</h1>
      <h1>{props.score}</h1>
      <button type="button" onClick={refreshPage}>
        {" "}
        <span>Reload</span>{" "}
      </button>
    </div>
  );
};

export default quizCompleted;

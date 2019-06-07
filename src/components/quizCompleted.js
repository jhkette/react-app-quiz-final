import React from "react";
import styled from 'styled-components';

const Completed = styled.div` 
width: 50rem;
margin: auto;
`

const quizCompleted = props => {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <Completed>
      <h1>Quiz completed</h1>
      <h1>Your score was {props.score}/10</h1>
      <button type="button" onClick={refreshPage}>
        {" "}
        <span>Try again</span>
      </button>
    </Completed>
  );
};

export default quizCompleted;

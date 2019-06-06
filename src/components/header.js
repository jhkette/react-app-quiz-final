import React from "react";
import styled, { css } from 'styled-components';

const Quizinfo = styled.div`
display: flex;
background-color: #242424
p{
  
  margin-right: 1rem;
  font-size: 1.4rem;
  color: white;
  
} `

const header = props => {
  return (
    <Quizinfo>
      <p>Fancy quiz app</p>
      <p>Counter: {props.index + 1}/10</p>
      <p>Score: {props.score}/10</p>
    </Quizinfo>
  );
 };

export default header;

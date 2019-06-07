import React from "react";
import styled from 'styled-components';

const Quizinfo = styled.div`
background-color: #242424
width: 100%;
 `

const CenterBar  = styled.div`
width: 50rem;
margin: auto;
display: flex;
p{
  margin-right: 1rem;
  font-size: 1rem;
  color: white;
  
}
`
const header = props => {
  return (
    <Quizinfo>
    <CenterBar>
      <p>Quiz app</p>
      <p>Counter: {props.index + 1}/10</p>
      <p>Score: {props.score}/10</p>
      </CenterBar>
    </Quizinfo>
  );
 };

export default header;

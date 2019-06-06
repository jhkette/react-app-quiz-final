import React, { Component } from "react";
import styled, { css } from 'styled-components';

import Header from "./header";
import QuizCompleted from "./quizCompleted";


const Questions = styled.div`
width: 50rem;
margin: auto;
`
const Choice = styled.li `
  display: inline-block;
  background-color: white;
  margin: 1rem 0;
  width: auto;
  padding: 1rem;
  box-shadow: 2px 2px 8px #a7a7a7;
  pointer: cursor;
  &:hover {
    background-color: #ddd;
  }`


class questionBox extends Component {


  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      selected: null,
      selectedid: null,
      results: false,
      index: 0,
      submitted: false,
      correct: null
    };
    this.questions = props.questions;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.index !== nextState.index) {
      return true;
    } else if (this.state.submitted !== nextState.index) {
      return true;
    } else if (this.state.selected !== nextState.selected) {
      return true;
    } else {
      return false;
    }
  }

  nextQuestion = () => {
    if (this.state.index < 9 && this.state.submitted === true) {
      this.setState({
        index: this.state.index + 1,
        submitted: false,
        selected: null,
        selectedid: null
      });
    }
  };

  checkselected = choice => {
    if (!this.state.submitted) {
      this.setState({ submitted: true });
      if (this.state.selected === this.questions[this.state.index].correct) {
        console.log("correct");
        const scoreToAdd = this.state.score;
        this.setState({ score: scoreToAdd + 1, correct: "correct" });
        console.log(this.state.score);
      } else {
        this.setState({ correct: "incorrect" });
        console.log("incorrect");
      }
    }
  };

  addselected = ({ choice, index }) => {
    this.setState({ selected: choice, selectedid: index });
    console.log(this.state.selected);
  };


  render() {
    const question = this.questions[this.state.index];

    if (this.state.index !== 9) {
      return (
        <Questions>
          <Header index={this.state.index} score={this.state.score} />
          <h2>
            {question.text}
          </h2>
          <h3>
            {question.category}
          </h3>
          <ul className="list-questions">
            {question.choices.map((choice, index) => (
              <Choice
                key={index}
                className={`choice  ${
                  this.state.selectedid === index ? "selected" : ""
                } `}
                onClick={() =>
                  this.addselected({ choice: choice.text, index: index })
                }
              >
                  {choice.text}
              </Choice>
            ))}
          </ul>
          <button onClick={this.nextQuestion}>next</button>
          <button onClick={this.checkselected}> Select </button>
          {this.state.submitted && (
            <h3>
              {" "}
              {question.correct} {this.state.correct}{" "}
            </h3>
          )}
        </Questions>
      );
    } else {
      return <QuizCompleted score={this.state.score} />;
    }
  }
}



export default questionBox;

import React, { Component } from "react";
import styled from "styled-components";

import Header from "./header";
import Footer from "./footer";
import QuizCompleted from "./quizCompleted";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Questions = styled.div`
  width: 50rem;
  margin: auto;
  min-height: 90vh;
`;


const Dotted = styled.div`
  border-top: 1px dotted #1a1a1a;
  border-bottom: 1px dotted #1a1a1a;
  margin: 2rem 0;
`;

const Choice = styled.li`
  display: inline-block;
  background-color: white;
  margin: 0.3rem 0;
  width: auto;
  cursor: pointer;
  padding: 1rem;
  box-shadow: 2px 2px 8px #a7a7a7;
  border-radius: 0.05rem;
  &:hover {
    background-color: #00A9DE;
  }
`;

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
      correct: null,
      completed: false
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
    const index = this.state.index + 1;
    if (this.state.submitted === true) {
      if (index < 10) {
        this.setState({
          index: index,
          submitted: false,
          selected: null,
          selectedid: null
        });
      } else {
        this.setState({
          completed: true
        });
      }
    }
  };

  checkselected = choice => {
    if (!this.state.submitted && this.state.selected) {
      this.setState({ submitted: true });
      if (this.state.selected === this.questions[this.state.index].correct) {
        const scoreToAdd = this.state.score;
        this.setState({ score: scoreToAdd + 1, correct: "correct" });
      } else {
        this.setState({ correct: "incorrect" });
      }
    }
  };

  addselected = ({ choice, index }) => {
    this.setState({ selected: choice, selectedid: index });
    console.log(this.state.selected);
  };

  render() {
    if (this.state.completed === false) {
      const question = this.questions[this.state.index];
      return (
        <Wrapper>
          <Header index={this.state.index} score={this.state.score} />
          <Questions>
            <h2>{question.text}</h2>
            <h3><em>Category: {question.category}</em></h3>
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
              <Dotted>
                <p>That's {this.state.correct} !</p>
                <p> The answer is {question.correct}. </p>
              </Dotted>
            )}
          </Questions>
          <Footer />
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Header index={this.state.index} score={this.state.score} />
          <QuizCompleted score={this.state.score} />
          <Footer />
        </Wrapper>
      );
    }
  }
}

export default questionBox;

import React, { Component } from "react";
import "./App.css";

import QuestionBox from "./components/questionBox";
import { createQuizData as quizData } from "./api/api";

class App extends Component {
  state = {
    isLoading: true,
    questions: [],
    error: null
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      this.setState({ questions: await quizData(), isLoading: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.isLoading === false) {
      return (
        <div>
          <QuestionBox questions={this.state.questions} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;

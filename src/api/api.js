import axios from 'axios'

const getQuestionsFromAPI = async () => {
    try {
        const response = await axios.get('/.netlify/functions/getdata')
        return response.data.results
    } catch (err) {
        console.log(err)
    }
}

const decodeHTML = (html) => {
    var txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
}

const formatChoices = choices => {
    return choices.map((choice, index) => {
        return { text: decodeHTML(choice.trim()) }
    })
}
const shuffleChoices = choices => {
    for (let index = choices.length - 1; index > 0; index--) {
      let index_2 = Math.floor(Math.random() * (index + 1));
      let temp = choices[index];
      choices[index] = choices[index_2];
      choices[index_2] = temp;
    }
    return choices;
  };

  
const combineAllChoices = question => question.correct_answer.split(',').concat(question.incorrect_answers)

const formatQuestion = (question, index) => {
    return {
        id: index,
        category: question.category,
        type: question.type,
        difficulty: question.difficulty,
        text: decodeHTML(question.question.trim()),
        choices: shuffleChoices(formatChoices(combineAllChoices(question))),
        correct: decodeHTML(question.correct_answer.trim()),
        incorrect: question.incorrect_answers
    }
}

const formatAPIQuizData = questions => {
    return questions.map((question, index) => {
        return formatQuestion(question, index)
    })
}

const createQuizData = async () => {
    try {
        const questions = await getQuestionsFromAPI()
        const formattedQuestions = await formatAPIQuizData(questions)
        return formattedQuestions
    } catch (err) {
        console.log(err)
    }
}

export { createQuizData }
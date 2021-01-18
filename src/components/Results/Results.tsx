import React from "react";
import "./Results.css";

const Results: React.FC<{}> = () => {
  let questions: any = sessionStorage.getItem("questionAnswers");
  let answers: any = sessionStorage.getItem("answers");

  questions = JSON.parse(questions);
  answers = JSON.parse(answers);

  let correctAnswers: number = 0;
  let incorrectAnswers: number = 0;

  questions.forEach((q: any) => {
    let answer = answers.filter(
      (x: any) => atob(x.question) === atob(q.question)
    )[0];
    if (answer.answer === atob(q.correct_answer)) {
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }
  });

  return (
    <>
      <div className='results'>Results</div>
      <div className='correct'>Correct Answers: {correctAnswers}</div>
      <div className='incorrect'>Incorrect Answers: {incorrectAnswers}</div>
    </>
  );
};

export default Results;

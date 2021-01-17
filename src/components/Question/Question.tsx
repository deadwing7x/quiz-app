import React from "react";
import { IAnswer } from "../../model/IAnswer";
import { IResponse } from "../../model/IResponse";
import Answer from "../Answer/Answer";
import "./Question.css";

const Question: React.FC<IResponse> = (question) => {
  const answers: IAnswer = {
    correctAnswer: question.correct_answer,
    incorrectAnswers: question.incorrect_answers
  };

  return (
    <>
      <p className="question">{atob(question.question)}</p>
      <Answer {...answers} />
    </>
  );
};

export default Question;

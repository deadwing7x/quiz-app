import React from "react";
import { IAnswer } from "../../model/IAnswer";
import "./Answer.css";

const Answer: React.FC<IAnswer> = (answer) => {
  const allAnswers = [answer.correctAnswer, ...answer.incorrectAnswers];

  for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i] = atob(allAnswers[i]);
  }

  const showAnswer = (event: any) => {
    console.log(event);
  };

  return (
    <div className="answerDiv">
      {allAnswers.map((ans, index) => {
        return (
          <div className="row" key={index} id="answer">
            <div
              className="text"
              onClick={(event) => {
                showAnswer(event.target);
              }}
            >
              {ans}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Answer;

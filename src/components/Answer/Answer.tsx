import React from "react";
import { IAnswer } from "../../model/IAnswer";
import { IResponse } from "../../model/IResponse";
import "./Answer.css";

const Answer: React.FC<IAnswer> = (answer) => {
  let allAnswers = [answer.correctAnswer, ...answer.incorrectAnswers];
  allAnswers = allAnswers.sort(() => Math.random() - 0.5);

  for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i] = atob(allAnswers[i]);
  }

  const handleClick = (e: any, question: any) => {
    let questionAnswers: any = sessionStorage.getItem("questionAnswers");
    questionAnswers = JSON.parse(questionAnswers);

    questionAnswers.forEach((q: IResponse) => {
      if (q.question === question) {
        const answer = {
          question: question,
          answer: e.target.innerText,
        };

        let answers: any = sessionStorage.getItem("answers");
        answers = JSON.parse(answers);
        if (answers != null) {
          answers.push(answer);
        } else {
          answers = [];
          answers.push(answer);
        }

        sessionStorage.setItem("answers", JSON.stringify(answers));
      }
    });
  };

  return (
    <div className="answerDiv">
      {allAnswers.map((ans, index) => {
        return (
          <div
            className="row answer"
            onClick={(event) => {
              handleClick(event, answer.question);
            }}
            key={index}
          >
            <span role="button" className="text">
              {ans}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Answer;

import React, { useState } from "react";
import { Button, NavLink } from "react-bootstrap";
import { IResponse } from "../../model/IResponse";
import Question from "../Question/Question";
import Results from "../Results/Results";
import "./QuestionCard.css";

const QuestionCard: React.FC<IResponse[]> = (allQuestions) => {
  let questions = Object.keys(allQuestions).map((i: any) => allQuestions[i]);
  const [index, setIndex] = useState(0);

  const handleOnClick = () => {
    setIndex(index + 1);
  };

  sessionStorage.setItem("questionAnswers", JSON.stringify(questions));

  return (
    <div className="question-card">
      {index < questions.length ? (
        <>
          <Question key={questions[index].question} {...questions[index]} />
          <Button type="button" onClick={handleOnClick}>
            Next Question
          </Button>
        </>
      ) : (
        <>
          <Results />
          <NavLink className="startAgain" href="/">
            Start Again
          </NavLink>
        </>
      )}
    </div>
  );
};

export default QuestionCard;

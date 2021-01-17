import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IResponse } from "../../model/IResponse";
import Question from "../Question/Question";
import "./QuestionCard.css";

const QuestionCard: React.FC<IResponse[]> = (allQuestions) => {
  let questions = Object.keys(allQuestions).map((i: any) => allQuestions[i]);
  const [index, setIndex] = useState(0);

  const handleOnClick = () => {
    setIndex(index + 1);
  };

  return (
    <div className="question-card">
      <Question key={questions[index].question} {...questions[index]} />
      <Button type="button" onClick={handleOnClick}>
        Next Question
      </Button>
    </div>
  );
};

export default QuestionCard;

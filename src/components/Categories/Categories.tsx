import React, { useEffect, useState } from "react";
import "./Categories.css";
import { Button, Form, Spinner } from "react-bootstrap";
import { IResponse } from "../../model/IResponse";
import QuestionCard from "../QuestionCard/QuestionCard";

interface ICategory {
  id?: number;
  name?: string;
}

const Categories: React.FC<{}> = () => {
  const options: number[] = [10, 20, 30, 40, 50];
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const difficulty: string[] = ["Easy", "Medium", "Hard"];
  const [noOfQuestions, setNoOfQuestions] = useState("10");
  const [category, setCategory] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [questions, setQuestions] = useState<IResponse[]>([]);
  const [loadQuestions, setLoadQuestions] = useState(false);
  const [fetchQuestion, setFetchQuestion] = useState(false);

  const fetchCategories = async () => {
    const getCategoriesCall = await fetch(
      "https://opentdb.com/api_category.php"
    );
    const response = await getCategoriesCall.json();

    setCategories(response.trivia_categories);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchQuestions = async () => {
    const getQuizCall = await fetch(
      `https://opentdb.com/api.php?amount=${noOfQuestions}&category=${category}&difficulty=${difficultyLevel}&type=multiple&encode=base64`
    );

    const response = await getQuizCall.json();

    setQuestions(response.results);
    setLoadQuestions(true);
    setFetchQuestion(false);
  };

  const handleSubmit = (e: any) => {
    setFetchQuestion(true);
    e.preventDefault();
    fetchQuestions();
  };

  return (
    <div className="categories">
      {loading ? (
        <Spinner animation="border" role="status" />
      ) : fetchQuestion ? (
        <Spinner animation="border" role="status" />
      ) : loadQuestions ? (
        <QuestionCard {...questions} />
      ) : (
        <>
          <Form>
            <Form.Group controlId="noOfQuestions">
              <Form.Label>Number of Questions</Form.Label>
              <Form.Control
                onChange={(event) => {
                  setNoOfQuestions(event.target.value);
                }}
                as="select"
              >
                {options.map((no) => {
                  return (
                    <option key={no} value={no}>
                      {no}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="categories">
              <Form.Label>Categories</Form.Label>
              <Form.Control
                onChange={(event) => {
                  setCategory(event.target.value);
                }}
                as="select"
              >
                <option value="-1">Any Category</option>
                {categories.map((category: ICategory) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="difficulty">
              <Form.Label>Difficulty Level</Form.Label>
              <Form.Control
                onChange={(event) => {
                  setDifficultyLevel(event.target.value.toLowerCase());
                }}
                as="select"
              >
                <option value="-1">Any Difficulty</option>
                {difficulty.map((diff) => {
                  return (
                    <option key={diff} value={diff}>
                      {diff}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Form>
          <Button type="submit" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </>
      )}
    </div>
  );
};

export default Categories;

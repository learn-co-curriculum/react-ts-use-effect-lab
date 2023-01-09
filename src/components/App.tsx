import { useState } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestion] = useState<number | null>(1);
  const [score, setScore] = useState(0);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  function handleQuestionAnswered(correct: boolean) {
    if (currentQuestionId && currentQuestionId < questions.length) {
      setCurrentQuestion((currentQuestionId) => currentQuestionId! + 1);
    } else {
      setCurrentQuestion(null);
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  }

  return (
    <main>
      <section>
        {currentQuestion ? (
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
      </section>
    </main>
  );
}

export default App;

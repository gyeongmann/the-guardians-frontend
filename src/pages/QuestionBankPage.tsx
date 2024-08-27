import React, { useState, useEffect } from "react";
import { getQuestions } from "@/services/questionService";
import { Question } from "@/types/Question";
import QuestionInfo from "@/components/Question/QuestionInfo";
import AnswerButton from "@/components/Question/AnswerButton";
import Explanation from "@/components/Question/Explanation";
import HeaderLogoChatNotify from "@/components/Header/HeaderLogoChatNotify";

const QuestionBankPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<
    "correct" | "incorrect" | null
  >(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("질문을 불러오는데 실패했습니다", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handleAnswerClick = (answer: "correct" | "incorrect") => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);
    }
  };

  if (loading) return <p className="text-center">로딩 중...</p>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex flex-col h-screen">
      <HeaderLogoChatNotify />
      <main className="flex-grow flex flex-col">
        <QuestionInfo
          question={currentQuestion.question}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
        />
        <div className="flex justify-center space-x-4 p-4">
          <AnswerButton
            answer="correct"
            isSelected={selectedAnswer === "correct"}
            isCorrect={currentQuestion.answer === "correct"}
            showResult={selectedAnswer !== null}
            onClick={() => handleAnswerClick("correct")}
          />
          <AnswerButton
            answer="incorrect"
            isSelected={selectedAnswer === "incorrect"}
            isCorrect={currentQuestion.answer === "incorrect"}
            showResult={selectedAnswer !== null}
            onClick={() => handleAnswerClick("incorrect")}
          />
        </div>
        {selectedAnswer && (
          <Explanation explanation={currentQuestion.explanation} />
        )}
      </main>
      <div className="p-4">
        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className="w-full bg-button text-white py-3 rounded-lg disabled:bg-blue-300 mx-auto max-w-md"
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default QuestionBankPage;

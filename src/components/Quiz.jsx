import { useEffect, useState } from "react";

function Quiz({
  questions,
  subject,
  difficulty,
  timePerQuestion,
  onComplete,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  // Use selected time from Quiz Settings
  const [timeLeft, setTimeLeft] =
    useState(timePerQuestion);

  const question = questions[currentQuestion];

  const currentAnswer =
    userAnswers[currentQuestion]?.selectedAnswer || "";

  // =========================================
  // TIMER
  // =========================================

  useEffect(() => {
    setTimeLeft(timePerQuestion);
  }, [currentQuestion, timePerQuestion]);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleNext();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, currentQuestion]);

  // =========================================
  // NO QUESTIONS
  // =========================================

  if (!question) {
    return (
      <div className="quiz-page">
        <div className="quiz-container">
          <div className="question-card">
            <h2>No questions available.</h2>
          </div>
        </div>
      </div>
    );
  }

  // =========================================
  // SELECT ANSWER
  // =========================================

  const handleAnswerSelect = (answer) => {
    if (currentAnswer) {
      return;
    }

    const answerData = {
      question: question.question,
      selectedAnswer: answer,
      correctAnswer: question.answer,
      isCorrect: answer === question.answer,
    };

    setUserAnswers((prev) => {
      const updated = [...prev];

      updated[currentQuestion] = answerData;

      return updated;
    });
  };

  // =========================================
  // GO TO QUESTION
  // =========================================

  const goToQuestion = (index) => {
    setCurrentQuestion(index);
    setTimeLeft(timePerQuestion);
  };

  // =========================================
  // NEXT QUESTION
  // =========================================

  function handleNext() {
    let updatedAnswers = [...userAnswers];

    // Mark unanswered question as wrong
    if (!updatedAnswers[currentQuestion]) {
      updatedAnswers[currentQuestion] = {
        question: question.question,
        selectedAnswer: "Not Answered",
        correctAnswer: question.answer,
        isCorrect: false,
      };

      setUserAnswers(updatedAnswers);
    }

    // Finish quiz
    if (
      currentQuestion ===
      questions.length - 1
    ) {
      const finalScore =
        updatedAnswers.filter(
          (item) => item?.isCorrect
        ).length;

      onComplete(
        updatedAnswers,
        finalScore
      );

      return;
    }

    // Next question
    setCurrentQuestion(
      (prev) => prev + 1
    );

    setTimeLeft(timePerQuestion);
  }

  // =========================================
  // PREVIOUS QUESTION
  // =========================================

  const handlePrevious = () => {
    if (currentQuestion === 0) {
      return;
    }

    setCurrentQuestion(
      (prev) => prev - 1
    );

    setTimeLeft(timePerQuestion);
  };

  // =========================================
  // PROGRESS
  // =========================================

  const progress =
    ((currentQuestion + 1) /
      questions.length) *
    100;

  // =========================================
  // STATISTICS
  // =========================================

  const completedQuestions =
    userAnswers.filter(
      (item) => item
    ).length;

  const correctQuestions =
    userAnswers.filter(
      (item) => item?.isCorrect
    ).length;

  const wrongQuestions =
    userAnswers.filter(
      (item) =>
        item && !item.isCorrect
    ).length;

  // =========================================
  // TIMER STYLE
  // =========================================

  const timerClass =
    timeLeft <= 10
      ? "timer timer-danger"
      : timeLeft <= 30
      ? "timer timer-warning"
      : "timer";

  // =========================================
  // UI
  // =========================================

  return (
    <div className="quiz-page">

      <div className="quiz-container">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="quiz-header">

          <div>

            <span className="quiz-subject">
              📚 {subject}
            </span>

            <span className="quiz-difficulty">
              {difficulty}
            </span>

          </div>

          <div className="quiz-header-right">

            <div className="question-count">
              Question{" "}
              {currentQuestion + 1} /{" "}
              {questions.length}
            </div>

            <div className={timerClass}>
              ⏱️ {timeLeft}s
            </div>

          </div>

        </div>


        {/* =====================================
            STATUS
        ===================================== */}

        <div className="quiz-status">

          <div className="status-item">

            <span className="status-dot status-total"></span>

            <span>
              Total:{" "}
              <strong>
                {questions.length}
              </strong>
            </span>

          </div>


          <div className="status-item">

            <span className="status-dot status-completed"></span>

            <span>
              Completed:{" "}
              <strong>
                {completedQuestions}
              </strong>
            </span>

          </div>


          <div className="status-item">

            <span className="status-dot status-correct"></span>

            <span>
              Correct:{" "}
              <strong>
                {correctQuestions}
              </strong>
            </span>

          </div>


          <div className="status-item">

            <span className="status-dot status-wrong"></span>

            <span>
              Wrong:{" "}
              <strong>
                {wrongQuestions}
              </strong>
            </span>

          </div>

        </div>


        {/* =====================================
            QUESTION NAVIGATION
        ===================================== */}

        <div className="question-navigation">

          {questions.map((_, index) => {

            const isCurrent =
              index === currentQuestion;

            const isAnswered =
              !!userAnswers[index];

            const isCorrect =
              userAnswers[index]?.isCorrect;

            let numberClass =
              "question-number";

            if (isCurrent) {
              numberClass += " active";
            }

            if (isAnswered) {
              numberClass += " answered";
            }

            if (
              isAnswered &&
              isCorrect
            ) {
              numberClass +=
                " nav-correct";
            }

            if (
              isAnswered &&
              !isCorrect
            ) {
              numberClass +=
                " nav-wrong";
            }

            return (
              <button
                key={index}
                className={numberClass}
                onClick={() =>
                  goToQuestion(index)
                }
              >
                {index + 1}
              </button>
            );
          })}

        </div>


        {/* =====================================
            PROGRESS
        ===================================== */}

        <div className="progress-section">

          <div className="progress-info">

            <span>
              Quiz Progress
            </span>

            <strong>
              {currentQuestion + 1} /{" "}
              {questions.length}
            </strong>

          </div>

          <div className="progress-container">

            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

        </div>


        {/* =====================================
            QUESTION CARD
        ===================================== */}

        <div className="question-card">

          <p className="question-label">
            Question{" "}
            {currentQuestion + 1}
          </p>

          <h1>
            {question.question}
          </h1>


          {/* ===================================
              OPTIONS
          =================================== */}

          <div className="options-container">

            {question.options.map(
              (option, index) => {

                const optionLetter =
                  String.fromCharCode(
                    65 + index
                  );

                const isSelected =
                  currentAnswer ===
                  option;

                const isCorrect =
                  currentAnswer &&
                  option ===
                    question.answer;

                const isWrong =
                  isSelected &&
                  option !==
                    question.answer;

                let optionClass =
                  "option";

                if (isCorrect) {
                  optionClass +=
                    " correct";
                }

                if (isWrong) {
                  optionClass +=
                    " wrong";
                }

                return (
                  <button
                    key={option}
                    className={optionClass}
                    onClick={() =>
                      handleAnswerSelect(
                        option
                      )
                    }
                    disabled={
                      !!currentAnswer
                    }
                  >

                    <span className="option-letter">
                      {optionLetter}
                    </span>

                    <span className="option-text">
                      {option}
                    </span>

                    {isCorrect && (
                      <span className="answer-icon">
                        ✓
                      </span>
                    )}

                    {isWrong && (
                      <span className="answer-icon">
                        ✕
                      </span>
                    )}

                  </button>
                );
              }
            )}

          </div>


          {/* ===================================
              FEEDBACK
          =================================== */}

          {currentAnswer && (
            <div
              className={
                currentAnswer ===
                question.answer
                  ? "answer-feedback correct-feedback"
                  : "answer-feedback wrong-feedback"
              }
            >

              {currentAnswer ===
              question.answer
                ? "🎉 Correct Answer!"
                : `❌ Wrong Answer! Correct answer: ${question.answer}`}

            </div>
          )}


          {/* ===================================
              NAVIGATION BUTTONS
          =================================== */}

          <div className="quiz-navigation-buttons">

            <button
              className="previous-btn"
              onClick={
                handlePrevious
              }
              disabled={
                currentQuestion === 0
              }
            >
              ← Previous
            </button>


            <button
              className="next-btn"
              onClick={handleNext}
            >

              {currentQuestion ===
              questions.length - 1
                ? "Finish Quiz 🏁"
                : "Next Question →"}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Quiz;
import { useState } from "react";

function QuizStart({
  subject,
  difficulty,
  totalQuestions,
  onStart,
  onBack,
}) {
  // =========================================
  // SETTINGS
  // =========================================

  const [questionCount, setQuestionCount] =
    useState(Math.min(5, totalQuestions));

  const [timePerQuestion, setTimePerQuestion] =
    useState(60);

  // =========================================
  // QUESTION OPTIONS
  // =========================================

  const questionOptions = [
    {
      value: 5,
      label: "5 Questions",
    },
    {
      value: 10,
      label: "10 Questions",
    },
    {
      value: totalQuestions,
      label: `All Questions (${totalQuestions})`,
    },
  ].filter(
    (option, index, array) =>
      option.value <= totalQuestions &&
      array.findIndex(
        (item) => item.value === option.value
      ) === index
  );

  // =========================================
  // TIME OPTIONS
  // =========================================

  const timeOptions = [
    {
      value: 30,
      label: "30 Seconds",
    },
    {
      value: 60,
      label: "60 Seconds",
    },
    {
      value: 90,
      label: "90 Seconds",
    },
  ];

  // =========================================
  // START QUIZ
  // =========================================

  const handleStart = () => {
    onStart({
      questionCount,
      timePerQuestion,
    });
  };

  // =========================================
  // UI
  // =========================================

  return (
    <div className="quiz-start-page">

      <div className="quiz-start-container">

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="quiz-start-icon">
          🧠
        </div>

        <h1>
          Ready to Challenge?
        </h1>

        <p className="quiz-start-subtitle">
          Customize your quiz before you begin.
        </p>


        {/* =====================================
            QUIZ INFORMATION
        ===================================== */}

        <div className="quiz-start-info">

          <div className="quiz-info-item">

            <span>📚</span>

            <div>
              <small>Subject</small>

              <strong>
                {subject}
              </strong>
            </div>

          </div>


          <div className="quiz-info-item">

            <span>🎯</span>

            <div>
              <small>Difficulty</small>

              <strong>
                {difficulty}
              </strong>
            </div>

          </div>

        </div>


        {/* =====================================
            QUESTION COUNT
        ===================================== */}

        <div className="quiz-setting-section">

          <h2>
            ❓ Number of Questions
          </h2>

          <div className="quiz-setting-options">

            {questionOptions.map((option) => (

              <button
                key={option.value}
                className={
                  questionCount === option.value
                    ? "quiz-setting-option selected"
                    : "quiz-setting-option"
                }
                onClick={() =>
                  setQuestionCount(option.value)
                }
              >

                <span className="setting-radio">
                  {questionCount === option.value
                    ? "●"
                    : "○"}
                </span>

                <span>
                  {option.label}
                </span>

              </button>

            ))}

          </div>

        </div>


        {/* =====================================
            TIME PER QUESTION
        ===================================== */}

        <div className="quiz-setting-section">

          <h2>
            ⏱️ Time per Question
          </h2>

          <div className="quiz-setting-options">

            {timeOptions.map((option) => (

              <button
                key={option.value}
                className={
                  timePerQuestion === option.value
                    ? "quiz-setting-option selected"
                    : "quiz-setting-option"
                }
                onClick={() =>
                  setTimePerQuestion(option.value)
                }
              >

                <span className="setting-radio">
                  {timePerQuestion === option.value
                    ? "●"
                    : "○"}
                </span>

                <span>
                  {option.label}
                </span>

              </button>

            ))}

          </div>

        </div>


        {/* =====================================
            INSTRUCTIONS
        ===================================== */}

        <div className="quiz-instructions">

          <h2>
            📌 Quick Instructions
          </h2>

          <ul>

            <li>
              Each question has{" "}
              <strong>
                {timePerQuestion} seconds
              </strong>
              .
            </li>

            <li>
              You cannot change an answer after
              selecting it.
            </li>

            <li>
              Unanswered questions will be marked
              as wrong.
            </li>

            <li>
              You can navigate between questions.
            </li>

          </ul>

        </div>


        {/* =====================================
            BUTTONS
        ===================================== */}

        <div className="quiz-start-actions">

          <button
            className="quiz-start-back"
            onClick={onBack}
          >
            ← Back
          </button>

          <button
            className="quiz-start-button"
            onClick={handleStart}
          >
            🚀 Start Quiz
          </button>

        </div>

      </div>

    </div>
  );
}

export default QuizStart;
import { useState } from "react";

function Review({ questions, answers, onBack }) {

  // =========================================
  // FILTER
  // =========================================

  const [filter, setFilter] = useState("all");

  // =========================================
  // REVIEW STATISTICS
  // =========================================

  const totalQuestions = questions.length;

  const correctAnswers = answers.filter(
    (item) => item?.isCorrect
  ).length;

  const wrongAnswers = answers.filter(
    (item) => item && !item.isCorrect
  ).length;

  const accuracy =
    totalQuestions > 0
      ? Math.round(
          (correctAnswers / totalQuestions) * 100
        )
      : 0;

  // =========================================
  // FILTER ANSWERS
  // =========================================

  const filteredAnswers = answers
    .map((item, index) => ({
      ...item,
      questionNumber: index + 1,
    }))
    .filter((item) => {

      if (filter === "correct") {
        return item.isCorrect;
      }

      if (filter === "wrong") {
        return !item.isCorrect;
      }

      return true;
    });

  // =========================================
  // UI
  // =========================================

  return (
    <div className="review-page">

      <div className="review-container">

        {/* =====================================
            BACK BUTTON
        ===================================== */}

        <button
          className="back-btn"
          onClick={onBack}
        >
          ← Back to Result
        </button>


        {/* =====================================
            HEADER
        ===================================== */}

        <div className="review-header">

          <div className="section-icon">
            🔍
          </div>

          <h1>
            Review Your Answers
          </h1>

          <p>
            Check your answers and see where
            you can improve.
          </p>

        </div>


        {/* =====================================
            REVIEW SUMMARY
        ===================================== */}

        <div className="review-summary">

          <div className="review-stat">

            <span className="review-stat-icon">
              📝
            </span>

            <div>
              <small>Total Questions</small>

              <strong>
                {totalQuestions}
              </strong>
            </div>

          </div>


          <div className="review-stat">

            <span className="review-stat-icon">
              ✅
            </span>

            <div>
              <small>Correct</small>

              <strong className="review-correct-number">
                {correctAnswers}
              </strong>
            </div>

          </div>


          <div className="review-stat">

            <span className="review-stat-icon">
              ❌
            </span>

            <div>
              <small>Wrong</small>

              <strong className="review-wrong-number">
                {wrongAnswers}
              </strong>
            </div>

          </div>


          <div className="review-stat">

            <span className="review-stat-icon">
              🎯
            </span>

            <div>
              <small>Accuracy</small>

              <strong>
                {accuracy}%
              </strong>
            </div>

          </div>

        </div>


        {/* =====================================
            FILTER BUTTONS
        ===================================== */}

        <div className="review-filters">

          <button
            className={
              filter === "all"
                ? "review-filter active"
                : "review-filter"
            }
            onClick={() => setFilter("all")}
          >
            📋 All ({totalQuestions})
          </button>


          <button
            className={
              filter === "correct"
                ? "review-filter active correct-filter"
                : "review-filter"
            }
            onClick={() => setFilter("correct")}
          >
            ✅ Correct ({correctAnswers})
          </button>


          <button
            className={
              filter === "wrong"
                ? "review-filter active wrong-filter"
                : "review-filter"
            }
            onClick={() => setFilter("wrong")}
          >
            ❌ Wrong ({wrongAnswers})
          </button>

        </div>


        {/* =====================================
            ANSWER LIST
        ===================================== */}

        <div className="review-list">

          {filteredAnswers.length === 0 ? (

            <div className="no-review-results">

              <div>
                🎉
              </div>

              <h2>
                No answers in this category
              </h2>

              <p>
                Try selecting another filter.
              </p>

            </div>

          ) : (

            filteredAnswers.map((item) => (

              <div
                className={`review-card ${
                  item.isCorrect
                    ? "review-correct"
                    : "review-wrong"
                }`}
                key={item.questionNumber}
              >

                {/* Question Number */}

                <div className="review-question-top">

                  <span className="review-question-number">
                    Question {item.questionNumber}
                  </span>

                  <span
                    className={
                      item.isCorrect
                        ? "review-badge correct-badge"
                        : "review-badge wrong-badge"
                    }
                  >
                    {item.isCorrect
                      ? "✓ Correct"
                      : "✕ Wrong"}
                  </span>

                </div>


                {/* Question */}

                <h2>
                  {item.question}
                </h2>


                {/* Your Answer */}

                <div className="review-answer">

                  <span>
                    Your Answer
                  </span>

                  <strong
                    className={
                      item.isCorrect
                        ? "answer-correct"
                        : "answer-wrong"
                    }
                  >
                    {item.isCorrect
                      ? "✅"
                      : "❌"}{" "}
                    {item.selectedAnswer}
                  </strong>

                </div>


                {/* Correct Answer */}

                {!item.isCorrect && (

                  <div className="review-answer correct-answer">

                    <span>
                      Correct Answer
                    </span>

                    <strong>
                      ✅ {item.correctAnswer}
                    </strong>

                  </div>

                )}


                {/* Status */}

                <div
                  className={
                    item.isCorrect
                      ? "review-status correct-status"
                      : "review-status wrong-status"
                  }
                >
                  {item.isCorrect
                    ? "✓ Correct Answer"
                    : "✕ Wrong Answer"}
                </div>

              </div>

            ))

          )}

        </div>


        {/* =====================================
            BOTTOM BUTTON
        ===================================== */}

        <button
          className="review-back-btn"
          onClick={onBack}
        >
          ← Back to Result
        </button>

      </div>

    </div>
  );
}

export default Review;
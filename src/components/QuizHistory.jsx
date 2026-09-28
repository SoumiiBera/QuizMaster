function QuizHistory({
  history,
  currentUser,
  onBack,
  onHome,
}) {
  // =========================================
  // FILTER HISTORY FOR CURRENT USER
  // =========================================

  const userHistory = currentUser
    ? history.filter(
        (item) =>
          item.userEmail === currentUser.email
      )
    : [];

  return (
    <div className="history-page">
      <div className="history-container">

        {/* =====================================
            BACK BUTTON
        ===================================== */}

        <button
          className="back-btn"
          onClick={onBack}
        >
          ← Back
        </button>

        {/* =====================================
            HEADER
        ===================================== */}

        <div className="history-header">
          <div className="section-icon">
            📊
          </div>

          <h1>Quiz History</h1>

          <p>
            Check your previous quiz performance.
          </p>
        </div>

        {/* =====================================
            USER NAME
        ===================================== */}

        {currentUser && (
          <div className="history-user">
            👋 Hello,{" "}
            <strong>{currentUser.name}</strong>
          </div>
        )}

        {/* =====================================
            NO USER
        ===================================== */}

        {!currentUser ? (
          <div className="history-empty">

            <div className="history-empty-icon">
              🔐
            </div>

            <h2>Login Required</h2>

            <p>
              Please login to view your
              quiz history.
            </p>

            <button
              className="history-home-btn"
              onClick={onHome}
            >
              🏠 Back to Home
            </button>

          </div>
        ) : userHistory.length === 0 ? (

          /* =====================================
             NO QUIZ HISTORY
          ===================================== */

          <div className="history-empty">

            <div className="history-empty-icon">
              📚
            </div>

            <h2>No Quiz History Yet</h2>

            <p>
              Complete your first quiz and
              your result will appear here.
            </p>

            <button
              className="history-home-btn"
              onClick={onHome}
            >
              🚀 Start Your First Quiz
            </button>

          </div>

        ) : (

          /* =====================================
             HISTORY AVAILABLE
          ===================================== */

          <>
            {/* =====================================
                SUMMARY
            ===================================== */}

            <div className="history-summary">

              <div className="history-stat">
                <span>📝</span>

                <div>
                  <small>
                    Total Quizzes
                  </small>

                  <strong>
                    {userHistory.length}
                  </strong>
                </div>
              </div>

              <div className="history-stat">
                <span>🏆</span>

                <div>
                  <small>
                    Best Score
                  </small>

                  <strong>
                    {Math.max(
                      ...userHistory.map(
                        (item) =>
                          item.percentage
                      )
                    )}
                    %
                  </strong>
                </div>
              </div>

              <div className="history-stat">
                <span>🎯</span>

                <div>
                  <small>
                    Average Score
                  </small>

                  <strong>
                    {Math.round(
                      userHistory.reduce(
                        (total, item) =>
                          total +
                          item.percentage,
                        0
                      ) /
                        userHistory.length
                    )}
                    %
                  </strong>
                </div>
              </div>

            </div>

            {/* =====================================
                HISTORY LIST
            ===================================== */}

            <div className="history-list">

              {userHistory.map(
                (item, index) => (
                  <div
                    className="history-card"
                    key={
                      item.id || index
                    }
                  >

                    <div className="history-card-left">

                      <div className="history-subject-icon">
                        📚
                      </div>

                      <div>

                        <h2>
                          {item.subject}
                        </h2>

                        <div className="history-details">

                          <span>
                            🎯{" "}
                            {item.difficulty}
                          </span>

                          <span>
                            📝{" "}
                            {item.score}/
                            {item.total}
                          </span>

                          <span>
                            ⏱️{" "}
                            {item.timePerQuestion}s
                          </span>

                        </div>

                        <small className="history-date">
                          {item.date}
                        </small>

                      </div>

                    </div>

                    <div
                      className={
                        item.percentage >= 80
                          ? "history-percentage excellent"
                          : item.percentage >= 50
                          ? "history-percentage good"
                          : "history-percentage low"
                      }
                    >
                      {item.percentage}%
                    </div>

                  </div>
                )
              )}

            </div>

            {/* =====================================
                HOME BUTTON
            ===================================== */}

            <button
              className="history-home-btn"
              onClick={onHome}
            >
              🏠 Back to Home
            </button>

          </>
        )}

      </div>
    </div>
  );
}

export default QuizHistory;
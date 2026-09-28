function Performance({
  history,
  currentUser,
  onBack,
  onHome,
}) {
  // =========================================
  // USER-WISE HISTORY
  // =========================================

  const userHistory = currentUser
    ? history.filter(
        (item) =>
          item.userEmail === currentUser.email
      )
    : [];

  // =========================================
  // LOGIN CHECK
  // =========================================

  if (!currentUser) {
    return (
      <div className="performance-page">
        <div className="performance-container">

          <button
            className="back-btn"
            onClick={onBack}
          >
            ← Back
          </button>

          <div className="performance-header">
            <div className="section-icon">
              📈
            </div>

            <h1>Performance Dashboard</h1>

            <p>
              Track your quiz performance
              and learning progress.
            </p>
          </div>

          <div className="performance-empty">
            <div className="performance-empty-icon">
              🔐
            </div>

            <h2>Login Required</h2>

            <p>
              Please login to view your
              performance dashboard.
            </p>

            <button
              className="performance-home-btn"
              onClick={onHome}
            >
              🏠 Back to Home
            </button>
          </div>

        </div>
      </div>
    );
  }

  // =========================================
  // EMPTY HISTORY
  // =========================================

  if (userHistory.length === 0) {
    return (
      <div className="performance-page">
        <div className="performance-container">

          <button
            className="back-btn"
            onClick={onBack}
          >
            ← Back
          </button>

          <div className="performance-header">
            <div className="section-icon">
              📈
            </div>

            <h1>Performance Dashboard</h1>

            <p>
              Track your quiz performance
              and learning progress.
            </p>
          </div>

          <div className="performance-user">
            👋 Hello,{" "}
            <strong>{currentUser.name}</strong>
          </div>

          <div className="performance-empty">
            <div className="performance-empty-icon">
              📚
            </div>

            <h2>No Performance Data Yet</h2>

            <p>
              Complete your first quiz to
              see your performance here.
            </p>

            <button
              className="performance-home-btn"
              onClick={onHome}
            >
              🚀 Start Your First Quiz
            </button>
          </div>

        </div>
      </div>
    );
  }

  // =========================================
  // CALCULATIONS
  // =========================================

  const totalQuizzes =
    userHistory.length;

  const totalQuestions =
    userHistory.reduce(
      (total, item) =>
        total + item.total,
      0
    );

  const totalCorrect =
    userHistory.reduce(
      (total, item) =>
        total + item.score,
      0
    );

  const averageAccuracy =
    totalQuestions > 0
      ? Math.round(
          (totalCorrect /
            totalQuestions) *
            100
        )
      : 0;

  const bestScore = Math.max(
    ...userHistory.map(
      (item) => item.percentage
    )
  );

  // =========================================
  // SUBJECT PERFORMANCE
  // =========================================

  const subjectData = {};

  userHistory.forEach((item) => {
    if (!subjectData[item.subject]) {
      subjectData[item.subject] = {
        quizzes: 0,
        questions: 0,
        correct: 0,
      };
    }

    subjectData[item.subject].quizzes += 1;

    subjectData[item.subject].questions +=
      item.total;

    subjectData[item.subject].correct +=
      item.score;
  });

  // =========================================
  // RENDER
  // =========================================

  return (
    <div className="performance-page">

      <div className="performance-container">

        {/* BACK BUTTON */}

        <button
          className="back-btn"
          onClick={onBack}
        >
          ← Back
        </button>

        {/* HEADER */}

        <div className="performance-header">

          <div className="section-icon">
            📈
          </div>

          <h1>
            Performance Dashboard
          </h1>

          <p>
            Track your quiz performance
            and learning progress.
          </p>

        </div>

        {/* USER */}

        <div className="performance-user">
          👋 Hello,{" "}
          <strong>{currentUser.name}</strong>
        </div>

        {/* MAIN STATS */}

        <div className="performance-stats">

          <div className="performance-stat-card">

            <div className="performance-stat-icon">
              📝
            </div>

            <div>
              <small>
                Total Quizzes
              </small>

              <strong>
                {totalQuizzes}
              </strong>
            </div>

          </div>

          <div className="performance-stat-card">

            <div className="performance-stat-icon">
              📚
            </div>

            <div>
              <small>
                Total Questions
              </small>

              <strong>
                {totalQuestions}
              </strong>
            </div>

          </div>

          <div className="performance-stat-card">

            <div className="performance-stat-icon">
              🎯
            </div>

            <div>
              <small>
                Correct Answers
              </small>

              <strong>
                {totalCorrect}
              </strong>
            </div>

          </div>

          <div className="performance-stat-card">

            <div className="performance-stat-icon">
              📈
            </div>

            <div>
              <small>
                Average Accuracy
              </small>

              <strong>
                {averageAccuracy}%
              </strong>
            </div>

          </div>

          <div className="performance-stat-card">

            <div className="performance-stat-icon">
              🏆
            </div>

            <div>
              <small>
                Best Score
              </small>

              <strong>
                {bestScore}%
              </strong>
            </div>

          </div>

        </div>

        {/* SUBJECT PERFORMANCE */}

        <div className="performance-section">

          <div className="performance-section-title">
            <span>📚</span>
            <h2>
              Subject Performance
            </h2>
          </div>

          <div className="subject-performance-list">

            {Object.entries(
              subjectData
            ).map(
              ([
                subject,
                data,
              ]) => {

                const accuracy =
                  data.questions > 0
                    ? Math.round(
                        (data.correct /
                          data.questions) *
                          100
                      )
                    : 0;

                return (
                  <div
                    className="subject-performance-card"
                    key={subject}
                  >

                    <div className="subject-performance-info">

                      <h3>
                        📖 {subject}
                      </h3>

                      <p>
                        {data.quizzes} quiz
                        {data.quizzes > 1
                          ? "zes"
                          : ""}
                        {" • "}
                        {data.questions} questions
                      </p>

                    </div>

                    <div className="subject-performance-score">

                      <strong>
                        {accuracy}%
                      </strong>

                      <span>
                        Accuracy
                      </span>

                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>

        {/* RECENT QUIZZES */}

        <div className="performance-section">

          <div className="performance-section-title">

            <span>🕒</span>

            <h2>
              Recent Quizzes
            </h2>

          </div>

          <div className="recent-performance-list">

            {userHistory
              .slice(0, 5)
              .map(
                (
                  item,
                  index
                ) => (

                  <div
                    className="recent-performance-card"
                    key={
                      item.id ||
                      index
                    }
                  >

                    <div>

                      <h3>
                        📚{" "}
                        {item.subject}
                      </h3>

                      <p>
                        {item.difficulty}
                        {" • "}
                        {item.score}/
                        {item.total}
                        {" • "}
                        {item.date}
                      </p>

                    </div>

                    <strong
                      className={
                        item.percentage >=
                        80
                          ? "performance-excellent"
                          : item.percentage >=
                            50
                          ? "performance-good"
                          : "performance-low"
                      }
                    >
                      {item.percentage}%
                    </strong>

                  </div>

                )
              )}

          </div>

        </div>

        {/* HOME BUTTON */}

        <button
          className="performance-home-btn"
          onClick={onHome}
        >
          🏠 Back to Home
        </button>

      </div>

    </div>
  );
}

export default Performance;
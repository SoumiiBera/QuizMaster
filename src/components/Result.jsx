function Result({
  score,
  total,
  subject,
  difficulty,
  quizCount,
  onReview,
  onRestart,
  onChangeSubject,
  onHome,
}) {
  const wrongAnswers = total - score;

  const percentage =
    total > 0
      ? Math.round((score / total) * 100)
      : 0;

  // =========================================
  // ACHIEVEMENTS
  // =========================================

  const achievements = [];

  // First Quiz Badge
  if (quizCount === 1) {
    achievements.push({
      icon: "🥉",
      title: "First Quiz",
      description: "You completed your first quiz!",
    });
  }

  // Perfect Score Badge
  if (percentage === 100) {
    achievements.push({
      icon: "🏆",
      title: "Perfect Score",
      description:
        "You answered every question correctly!",
    });
  }

  // Quiz Master Badge
  if (quizCount >= 5) {
    achievements.push({
      icon: "🔥",
      title: "Quiz Master",
      description:
        "You have completed 5 or more quizzes!",
    });
  }

  // Accuracy Star Badge
  if (percentage >= 80) {
    achievements.push({
      icon: "⭐",
      title: "Accuracy Star",
      description:
        "You achieved 80% or higher accuracy!",
    });
  }

  // =========================================
  // RESULT MESSAGE
  // =========================================

  let message = "";

  if (percentage === 100) {
    message =
      "Perfect Score! Excellent work! 🏆";
  } else if (percentage >= 80) {
    message =
      "Great job! Keep it up! 🎉";
  } else if (percentage >= 50) {
    message =
      "Good effort! Keep practicing! 💪";
  } else {
    message =
      "Keep learning and try again! 📚";
  }

  return (
    <div className="result-page">
      <div className="result-container">

        {/* RESULT ICON */}

        <div className="result-icon">
          {percentage >= 50 ? "🎉" : "📚"}
        </div>

        <h1>Quiz Completed!</h1>

        <p className="result-message">
          {message}
        </p>

        {/* QUIZ INFORMATION */}

        <div className="result-info">
          <span>📚 {subject}</span>
          <span>🎯 {difficulty}</span>
        </div>

        {/* SCORE CARD */}

        <div className="score-card">

          <div className="score-circle">
            <strong>{score}</strong>
            <span>/ {total}</span>
          </div>

          <div className="score-details">

            <div className="score-item">
              <span>Accuracy</span>
              <strong>{percentage}%</strong>
            </div>

            <div className="score-item correct">
              <span>Correct Answers</span>
              <strong>✅ {score}</strong>
            </div>

            <div className="score-item wrong">
              <span>Wrong Answers</span>
              <strong>❌ {wrongAnswers}</strong>
            </div>

          </div>

        </div>

        {/* =====================================
            ACHIEVEMENTS
        ===================================== */}

        {achievements.length > 0 && (
          <div className="achievement-section">

            <h2>🏅 Achievements Unlocked</h2>

            <div className="achievement-list">

              {achievements.map(
                (achievement, index) => (
                  <div
                    className="achievement-card"
                    key={index}
                  >

                    <div className="achievement-icon">
                      {achievement.icon}
                    </div>

                    <div className="achievement-content">

                      <h3>
                        {achievement.title}
                      </h3>

                      <p>
                        {achievement.description}
                      </p>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>
        )}

        {/* NO ACHIEVEMENT */}

        {achievements.length === 0 && (
          <div className="no-achievement">

            <span>🎯</span>

            <p>
              Keep practicing to unlock
              new achievements!
            </p>

          </div>
        )}

        {/* =====================================
            ACTION BUTTONS
        ===================================== */}

        <div className="result-actions">

          <button
            className="primary-result-btn"
            onClick={onReview}
          >
            🔍 Review Answers
          </button>

          <button
            className="secondary-result-btn"
            onClick={onRestart}
          >
            🔄 Try Again
          </button>

          <button
            className="secondary-result-btn"
            onClick={onChangeSubject}
          >
            📚 Change Subject
          </button>

          <button
            className="home-result-btn"
            onClick={onHome}
          >
            🏠 Home
          </button>

        </div>

      </div>
    </div>
  );
}

export default Result;

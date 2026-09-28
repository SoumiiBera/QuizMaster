function Home({
  onStart,
  onHistory,
  onPerformance,
  onLogin,
  onRegister,
  currentUser,
  onLogout,
}) {
  return (
    <div className="home-page">
      <div className="home-content">

        {/* User Area */}
        <div className="home-user-area">
          {currentUser ? (
            <>
              <div className="user-welcome">
                👋 Hello, <strong>{currentUser.name}</strong>
              </div>

              <button
                className="logout-btn"
                onClick={onLogout}
              >
                🚪 Logout
              </button>
            </>
          ) : (
            <div className="auth-home-buttons">
              <button
                className="login-home-btn"
                onClick={onLogin}
              >
                🔐 Login
              </button>

              <button
                className="register-home-btn"
                onClick={onRegister}
              >
                📝 Register
              </button>
            </div>
          )}
        </div>

        {/* Logo */}
        <div className="home-icon">
          🧠
        </div>

        <h1>
          Quiz<span>Master</span>
        </h1>

        <p className="tagline">
          Learn. Challenge. Improve.
        </p>

        <p className="description">
          Test your knowledge with
          subject-based quizzes, choose
          your difficulty, and discover
          how much you know.
        </p>

        {/* Start Quiz */}
        <button
          className="start-btn"
          onClick={onStart}
        >
          Start Quiz 🚀
        </button>

        {/* Quiz History */}
        <button
          className="history-home-link"
          onClick={onHistory}
        >
          📊 Quiz History
        </button>

        {/* Performance */}
        <button
          className="performance-home-link"
          onClick={onPerformance}
        >
          📈 Performance Dashboard
        </button>

        {/* Features */}
        <div className="features">

          <div className="feature">
            <span>📚</span>

            <div>
              <h3>Multiple Subjects</h3>

              <p>
                Choose what you want to learn.
              </p>
            </div>
          </div>

          <div className="feature">
            <span>🎯</span>

            <div>
              <h3>Choose Difficulty</h3>

              <p>
                Easy, Medium or Hard.
              </p>
            </div>
          </div>

          <div className="feature">
            <span>📊</span>

            <div>
              <h3>Track Your Score</h3>

              <p>
                Check your performance after
                every quiz.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;
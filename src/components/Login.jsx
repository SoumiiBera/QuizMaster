function Login({
  onLogin,
  onRegister,
  onBack,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email =
      e.target.email.value.trim();

    const password =
      e.target.password.value.trim();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    onLogin({
      email,
      password,
    });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        <button
          className="back-btn"
          onClick={onBack}
        >
          ← Back
        </button>

        <div className="auth-header">
          <div className="auth-icon">
            🧠
          </div>

          <h1>Welcome Back!</h1>

          <p>
            Login to continue your
            QuizMaster journey.
          </p>
        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label htmlFor="email">
              📧 Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              🔒 Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
          >
            🔐 Login
          </button>

        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <p className="auth-switch">
          Don't have an account?
        </p>

        <button
          className="auth-register-btn"
          onClick={onRegister}
        >
          📝 Create Account
        </button>

      </div>
    </div>
  );
}

export default Login;
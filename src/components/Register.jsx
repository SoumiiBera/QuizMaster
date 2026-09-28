function Register({
  onRegister,
  onLogin,
  onBack,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name =
      e.target.name.value.trim();

    const email =
      e.target.email.value.trim();

    const password =
      e.target.password.value.trim();

    const confirmPassword =
      e.target.confirmPassword.value.trim();

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      alert(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    onRegister({
      name,
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

          <h1>Create Account</h1>

          <p>
            Join QuizMaster and start
            your learning journey.
          </p>
        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label htmlFor="name">
              👤 Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
            />
          </div>

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
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              🔐 Confirm Password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
          >
            📝 Create Account
          </button>

        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <p className="auth-switch">
          Already have an account?
        </p>

        <button
          className="auth-register-btn"
          onClick={onLogin}
        >
          🔐 Login
        </button>

      </div>
    </div>
  );
}

export default Register;
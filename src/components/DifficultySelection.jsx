function DifficultySelection({ subject, onSelect, onBack }) {
  const difficulties = [
    {
      name: "Easy",
      icon: "🟢",
      description: "Basic questions for beginners",
    },
    {
      name: "Medium",
      icon: "🟡",
      description: "Test your intermediate knowledge",
    },
    {
      name: "Hard",
      icon: "🔴",
      description: "Challenge yourself with advanced questions",
    },
  ];

  return (
    <div className="difficulty-page">
      <div className="difficulty-container">

        <button className="back-btn" onClick={onBack}>
          ← Change Subject
        </button>

        <div className="difficulty-header">

          <div className="selected-subject">
            📚 {subject}
          </div>

          <h1>Choose Your Difficulty</h1>

          <p>
            How difficult do you want your quiz to be?
          </p>

        </div>

        <div className="difficulty-grid">

          {difficulties.map((difficulty) => (
            <button
              key={difficulty.name}
              className="difficulty-card"
              onClick={() => onSelect(difficulty.name)}
            >

              <div className="difficulty-icon">
                {difficulty.icon}
              </div>

              <h2>{difficulty.name}</h2>

              <p>{difficulty.description}</p>

              <span className="difficulty-arrow">
                Start →
              </span>

            </button>
          ))}

        </div>

      </div>
    </div>
  );
}

export default DifficultySelection;
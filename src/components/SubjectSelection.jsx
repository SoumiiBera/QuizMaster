function SubjectSelection({ onSelect, onBack }) {
  const subjects = [
    {
      name: "Python",
      icon: "🐍",
      description: "Python programming & concepts",
    },
    {
      name: "Java",
      icon: "☕",
      description: "Core Java & OOP concepts",
    },
    {
      name: "React",
      icon: "⚛️",
      description: "React.js & frontend development",
    },
    {
      name: "DBMS",
      icon: "🗄️",
      description: "Database & SQL concepts",
    },
    {
      name: "Web Development",
      icon: "🌐",
      description: "HTML, CSS & web concepts",
    },
    {
      name: "AI/ML",
      icon: "🤖",
      description: "Artificial Intelligence & Machine Learning",
    },
  ];

  return (
    <div className="selection-page">
      <div className="selection-container">

        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>

        <div className="selection-header">
          <span className="section-icon">📚</span>

          <h1>Choose Your Subject</h1>

          <p>
            Select a subject and test your knowledge.
          </p>
        </div>

        <div className="subject-grid">
          {subjects.map((subject) => (
            <button
              className="subject-card"
              key={subject.name}
              onClick={() => onSelect(subject.name)}
            >
              <div className="subject-icon">
                {subject.icon}
              </div>

              <div className="subject-info">
                <h2>{subject.name}</h2>

                <p>{subject.description}</p>
              </div>

              <span className="arrow">→</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default SubjectSelection;
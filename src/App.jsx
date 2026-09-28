import { useEffect, useState } from "react";
import questions from "./data/questions";

import Home from "./components/Home";
import SubjectSelection from "./components/SubjectSelection";
import DifficultySelection from "./components/DifficultySelection";
import QuizStart from "./components/QuizStart";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import Review from "./components/Review";
import QuizHistory from "./components/QuizHistory";
import Performance from "./components/Performance";
import Login from "./components/Login";
import Register from "./components/Register";

// =========================================
// RANDOMIZE QUESTIONS
// =========================================

const shuffleQuestions = (questionList) => {
  const shuffled = [...questionList];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(
      Math.random() * (i + 1)
    );

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
};

// =========================================
// APP
// =========================================

function App() {
  // =========================================
  // SCREEN
  // =========================================

  const [screen, setScreen] = useState("home");

  // =========================================
  // USER
  // =========================================

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser =
      localStorage.getItem("currentUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  // =========================================
  // QUIZ SELECTION
  // =========================================

  const [selectedSubject, setSelectedSubject] =
    useState("");

  const [selectedDifficulty, setSelectedDifficulty] =
    useState("");

  // =========================================
  // QUIZ DATA
  // =========================================

  const [quizQuestions, setQuizQuestions] =
    useState([]);

  const [answers, setAnswers] =
    useState([]);

  const [score, setScore] =
    useState(0);

  // =========================================
  // QUIZ SETTINGS
  // =========================================

  const [questionCount, setQuestionCount] =
    useState(5);

  const [timePerQuestion, setTimePerQuestion] =
    useState(60);

  // =========================================
  // QUIZ HISTORY
  // =========================================

  const [history, setHistory] = useState(() => {
    const savedHistory =
      localStorage.getItem("quizHistory");

    return savedHistory
      ? JSON.parse(savedHistory)
      : [];
  });

  // =========================================
  // SAVE HISTORY
  // =========================================

  useEffect(() => {
    localStorage.setItem(
      "quizHistory",
      JSON.stringify(history)
    );
  }, [history]);

  // =========================================
  // SAVE CURRENT USER
  // =========================================

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
      );
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  // =========================================
  // CREATE QUIZ
  // =========================================

  const createQuiz = (
    subject,
    difficulty,
    count
  ) => {
    const availableQuestions =
      questions[subject]?.[difficulty] || [];

    const shuffledQuestions =
      shuffleQuestions(
        availableQuestions
      );

    const selectedQuestions =
      shuffledQuestions.slice(
        0,
        count
      );

    setQuizQuestions(
      selectedQuestions
    );

    setAnswers([]);

    setScore(0);
  };

  // =========================================
// LOGIN
// =========================================

const handleLogin = ({
  email,
  password,
}) => {
  const savedUsers = JSON.parse(
    localStorage.getItem("quizUsers") || "[]"
  );

  const loginEmail = email
    .trim()
    .toLowerCase();

  const loginPassword = password.trim();

  const user = savedUsers.find(
    (item) =>
      item.email.trim().toLowerCase() ===
        loginEmail &&
      item.password === loginPassword
  );

  if (!user) {
    alert(
      "Invalid email or password. Please check your details."
    );
    return;
  }

  setCurrentUser({
    name: user.name,
    email: user.email,
  });

  setScreen("home");
};
  // =========================================
  // REGISTER
  // =========================================

  const handleRegister = ({
    name,
    email,
    password,
  }) => {
    const savedUsers =
      JSON.parse(
        localStorage.getItem("quizUsers") || "[]"
      );

    const existingUser =
      savedUsers.find(
        (item) =>
          item.email === email
      );

    if (existingUser) {
      alert(
        "An account with this email already exists."
      );
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    const updatedUsers = [
      ...savedUsers,
      newUser,
    ];

    localStorage.setItem(
      "quizUsers",
      JSON.stringify(updatedUsers)
    );

    setCurrentUser({
      name,
      email,
    });

    alert(
      "Account created successfully!"
    );

    setScreen("home");
  };

  // =========================================
  // LOGOUT
  // =========================================

  const handleLogout = () => {
    setCurrentUser(null);

    setSelectedSubject("");
    setSelectedDifficulty("");
    setQuizQuestions([]);
    setAnswers([]);
    setScore(0);

    setScreen("home");
  };

  // =========================================
  // START APP
  // =========================================

  const startApp = () => {
  if (!currentUser) {
    alert("Please login first to start the quiz.");
    setScreen("login");
    return;
  }

  setScreen("subjects");
};

  // =========================================
  // SUBJECT SELECT
  // =========================================

  const handleSubjectSelect = (
    subject
  ) => {
    setSelectedSubject(subject);
    setSelectedDifficulty("");
    setScreen("difficulty");
  };

  // =========================================
  // DIFFICULTY SELECT
  // =========================================

  const handleDifficultySelect = (
    difficulty
  ) => {
    setSelectedDifficulty(
      difficulty
    );

    const availableQuestions =
      questions[selectedSubject]?.[
        difficulty
      ] || [];

    const randomizedQuestions =
      shuffleQuestions(
        availableQuestions
      );

    setQuizQuestions(
      randomizedQuestions
    );

    setAnswers([]);
    setScore(0);

    setScreen("quizStart");
  };

  // =========================================
  // START QUIZ
  // =========================================

  const handleStartQuiz = (
    settings
  ) => {
    const selectedCount =
      settings?.questionCount || 5;

    const selectedTime =
      settings?.timePerQuestion || 60;

    setQuestionCount(
      selectedCount
    );

    setTimePerQuestion(
      selectedTime
    );

    createQuiz(
      selectedSubject,
      selectedDifficulty,
      selectedCount
    );

    setScreen("quiz");
  };

  // =========================================
  // QUIZ COMPLETE
  // =========================================

  const handleQuizComplete = (
    userAnswers,
    finalScore
  ) => {
    setAnswers(userAnswers);
    setScore(finalScore);

    const total =
      quizQuestions.length;

    const percentage =
      total > 0
        ? Math.round(
            (finalScore / total) * 100
          )
        : 0;

    const historyItem = {
      id: Date.now(),

      userEmail:
        currentUser?.email || "",

      subject:
        selectedSubject,

      difficulty:
        selectedDifficulty,

      score:
        finalScore,

      total:
        total,

      percentage:
        percentage,

      timePerQuestion:
        timePerQuestion,

      date:
        new Date().toLocaleDateString(
          "en-IN",
          {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }
        ),
    };

    setHistory((prev) => [
      historyItem,
      ...prev,
    ]);

    setScreen("result");
  };

  // =========================================
  // REVIEW
  // =========================================

  const handleReview = () => {
    setScreen("review");
  };

  // =========================================
  // RESTART QUIZ
  // =========================================

  const handleRestart = () => {
    createQuiz(
      selectedSubject,
      selectedDifficulty,
      questionCount
    );

    setScreen("quizStart");
  };

  // =========================================
  // CHANGE SUBJECT
  // =========================================

  const handleChangeSubject = () => {
    setSelectedSubject("");
    setSelectedDifficulty("");
    setQuizQuestions([]);
    setAnswers([]);
    setScore(0);

    setScreen("subjects");
  };

  // =========================================
  // HOME
  // =========================================

  const handleHome = () => {
    setSelectedSubject("");
    setSelectedDifficulty("");
    setQuizQuestions([]);
    setAnswers([]);
    setScore(0);

    setScreen("home");
  };

  // =========================================
  // HISTORY
  // =========================================

  const handleHistory = () => {
    setScreen("history");
  };

  // =========================================
  // PERFORMANCE
  // =========================================

  const handlePerformance = () => {
    setScreen("performance");
  };

  // =========================================
  // RENDER
  // =========================================

  return (
    <div className="app">

      {/* =====================================
          LOGIN
      ===================================== */}

      {screen === "login" && (
        <Login
          onLogin={handleLogin}
          onRegister={() =>
            setScreen("register")
          }
          onBack={handleHome}
        />
      )}

      {/* =====================================
          REGISTER
      ===================================== */}

      {screen === "register" && (
        <Register
          onRegister={handleRegister}
          onLogin={() =>
            setScreen("login")
          }
          onBack={handleHome}
        />
      )}

      {/* =====================================
          HOME
      ===================================== */}

      {screen === "home" && (
        <Home
          onStart={startApp}
          onHistory={handleHistory}
          onPerformance={handlePerformance}
          onLogin={() =>
            setScreen("login")
          }
          onRegister={() =>
            setScreen("register")
          }
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      )}

      {/* =====================================
          SUBJECT SELECTION
      ===================================== */}

      {screen === "subjects" && (
        <SubjectSelection
          onSelect={
            handleSubjectSelect
          }
          onBack={
            handleHome
          }
        />
      )}

      {/* =====================================
          DIFFICULTY SELECTION
      ===================================== */}

      {screen === "difficulty" && (
        <DifficultySelection
          subject={
            selectedSubject
          }
          onSelect={
            handleDifficultySelect
          }
          onBack={() =>
            setScreen("subjects")
          }
        />
      )}

      {/* =====================================
          QUIZ START
      ===================================== */}

      {screen === "quizStart" && (
        <QuizStart
          subject={
            selectedSubject
          }
          difficulty={
            selectedDifficulty
          }
          totalQuestions={
            questions[
              selectedSubject
            ]?.[
              selectedDifficulty
            ]?.length || 0
          }
          onStart={
            handleStartQuiz
          }
          onBack={() =>
            setScreen("difficulty")
          }
        />
      )}

      {/* =====================================
          QUIZ
      ===================================== */}

      {screen === "quiz" && (
        <Quiz
          questions={
            quizQuestions
          }
          subject={
            selectedSubject
          }
          difficulty={
            selectedDifficulty
          }
          timePerQuestion={
            timePerQuestion
          }
          onComplete={
            handleQuizComplete
          }
        />
      )}

      {/* =====================================
          RESULT
      ===================================== */}

   {screen === "result" && (
  <Result
    score={score}
    total={quizQuestions.length}
    subject={selectedSubject}
    difficulty={selectedDifficulty}
    quizCount={
      history.filter(
        (item) =>
          item.userEmail === currentUser?.email
      ).length
    }
    onReview={handleReview}
    onRestart={handleRestart}
    onChangeSubject={handleChangeSubject}
    onHome={handleHome}
  />
)}

      {/* =====================================
          REVIEW
      ===================================== */}

      {screen === "review" && (
        <Review
          questions={
            quizQuestions
          }
          answers={
            answers
          }
          onBack={() =>
            setScreen("result")
          }
        />
      )}

      {/* =====================================
          QUIZ HISTORY
      ===================================== */}

      {screen === "history" && (
        <QuizHistory
          history={history}
          currentUser={currentUser}
          onBack={handleHome}
          onHome={handleHome}
        />
      )}

      {/* =====================================
          PERFORMANCE DASHBOARD
      ===================================== */}

      {screen === "performance" && (
        <Performance
          history={history}
          currentUser={currentUser}
          onBack={handleHome}
          onHome={handleHome}
        />
      )}

    </div>
  );
}

export default App;
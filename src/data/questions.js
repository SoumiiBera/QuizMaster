const questions = {
  Python: {
    Easy: [
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "fun", "define"],
        answer: "def",
      },
      {
        question: "Which symbol is used for comments in Python?",
        options: ["//", "#", "/*", "--"],
        answer: "#",
      },
      {
        question: "Which data type stores True or False?",
        options: ["String", "Integer", "Boolean", "Float"],
        answer: "Boolean",
      },
      {
        question: "Which function is used to display output in Python?",
        options: ["display()", "echo()", "print()", "show()"],
        answer: "print()",
      },
      {
        question: "Which of these is a Python list?",
        options: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "<1, 2, 3>"],
        answer: "[1, 2, 3]",
      },
    ],

    Medium: [
      {
        question: "Which method adds an element to the end of a list?",
        options: ["add()", "append()", "insert()", "push()"],
        answer: "append()",
      },
      {
        question: "Which keyword is used to handle exceptions?",
        options: ["catch", "error", "try", "handle"],
        answer: "try",
      },
      {
        question: "Which data structure stores key-value pairs?",
        options: ["List", "Tuple", "Dictionary", "Set"],
        answer: "Dictionary",
      },
      {
        question: "Which keyword is used to create a class?",
        options: ["object", "class", "struct", "define"],
        answer: "class",
      },
      {
        question: "Which method removes the last item from a list?",
        options: ["remove()", "delete()", "pop()", "clear()"],
        answer: "pop()",
      },
    ],

    Hard: [
      {
        question: "Which feature allows a function to remember its enclosing scope?",
        options: ["Decorator", "Closure", "Iterator", "Generator"],
        answer: "Closure",
      },
      {
        question: "Which keyword creates a generator function?",
        options: ["return", "yield", "generate", "next"],
        answer: "yield",
      },
      {
        question: "What does PEP stand for in Python?",
        options: [
          "Python Enhancement Proposal",
          "Python Extension Program",
          "Programming Enhancement Process",
          "Python Execution Protocol",
        ],
        answer: "Python Enhancement Proposal",
      },
      {
        question: "Which method is called when an object is initialized?",
        options: ["__start__", "__init__", "__create__", "__newobject__"],
        answer: "__init__",
      },
      {
        question: "Which module is commonly used for regular expressions?",
        options: ["regex", "re", "regexp", "pattern"],
        answer: "re",
      },
    ],
  },

  Java: {
    Easy: [
      {
        question: "Which keyword is used to create a class in Java?",
        options: ["class", "Class", "struct", "object"],
        answer: "class",
      },
      {
        question: "Which method is the entry point of a Java program?",
        options: ["start()", "run()", "main()", "execute()"],
        answer: "main()",
      },
      {
        question: "Which symbol ends a Java statement?",
        options: [".", ":", ";", ","],
        answer: ";",
      },
      {
        question: "Which keyword creates an object?",
        options: ["create", "object", "new", "make"],
        answer: "new",
      },
      {
        question: "Which language is Java?",
        options: ["Markup language", "Programming language", "Database", "OS"],
        answer: "Programming language",
      },
    ],

    Medium: [
      {
        question: "Which concept allows the same method to have different forms?",
        options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
        answer: "Polymorphism",
      },
      {
        question: "Which keyword is used for inheritance?",
        options: ["inherits", "extends", "implements", "super"],
        answer: "extends",
      },
      {
        question: "Which keyword refers to the current object?",
        options: ["self", "current", "this", "object"],
        answer: "this",
      },
      {
        question: "Which collection does not allow duplicate elements?",
        options: ["List", "Set", "Map", "Array"],
        answer: "Set",
      },
      {
        question: "Which block is used to handle exceptions?",
        options: ["if-else", "try-catch", "switch", "loop"],
        answer: "try-catch",
      },
    ],

    Hard: [
      {
        question: "Which keyword prevents a method from being overridden?",
        options: ["static", "private", "final", "protected"],
        answer: "final",
      },
      {
        question: "Which interface is used to create a thread?",
        options: ["Runnable", "Threadable", "Executable", "Process"],
        answer: "Runnable",
      },
      {
        question: "Which keyword is used to explicitly throw an exception?",
        options: ["throws", "throw", "exception", "raise"],
        answer: "throw",
      },
      {
        question: "Which memory area stores objects in Java?",
        options: ["Stack", "Heap", "Register", "Cache"],
        answer: "Heap",
      },
      {
        question: "Which keyword is used to implement an interface?",
        options: ["extends", "inherits", "implements", "interface"],
        answer: "implements",
      },
    ],
  },

  React: {
    Easy: [
      {
        question: "What is React?",
        options: [
          "A database",
          "A JavaScript library",
          "A programming language",
          "An operating system",
        ],
        answer: "A JavaScript library",
      },
      {
        question: "Which language is mainly used with React?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript",
      },
      {
        question: "What is JSX?",
        options: [
          "HTML-like syntax in JavaScript",
          "A database",
          "A CSS framework",
          "A backend language",
        ],
        answer: "HTML-like syntax in JavaScript",
      },
      {
        question: "Which file commonly contains a React component?",
        options: [".py", ".java", ".jsx", ".sql"],
        answer: ".jsx",
      },
      {
        question: "What does UI stand for?",
        options: [
          "User Interface",
          "Universal Input",
          "User Internet",
          "Unified Information",
        ],
        answer: "User Interface",
      },
    ],

    Medium: [
      {
        question: "Which Hook is used to manage state?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        answer: "useState",
      },
      {
        question: "Which Hook is commonly used for side effects?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        answer: "useEffect",
      },
      {
        question: "What are props used for?",
        options: [
          "Passing data between components",
          "Styling pages",
          "Creating databases",
          "Running servers",
        ],
        answer: "Passing data between components",
      },
      {
        question: "Which command creates a React project with Vite?",
        options: [
          "npm create vite",
          "npm start react",
          "react create app",
          "npm install react-project",
        ],
        answer: "npm create vite",
      },
      {
        question: "Which Hook can access context values?",
        options: ["useState", "useContext", "useEffect", "useMemo"],
        answer: "useContext",
      },
    ],

    Hard: [
      {
        question: "Which Hook is used to memoize a calculated value?",
        options: ["useMemo", "useState", "useEffect", "useRef"],
        answer: "useMemo",
      },
      {
        question: "Which Hook memoizes a function?",
        options: ["useCallback", "useMemo", "useFunction", "useEvent"],
        answer: "useCallback",
      },
      {
        question: "What is the Virtual DOM?",
        options: [
          "A copy of the browser",
          "A lightweight representation of the DOM",
          "A database",
          "A CSS engine",
        ],
        answer: "A lightweight representation of the DOM",
      },
      {
        question: "What is React reconciliation?",
        options: [
          "Updating the UI based on changes",
          "Creating CSS",
          "Connecting databases",
          "Installing React",
        ],
        answer: "Updating the UI based on changes",
      },
      {
        question: "Which technique can help prevent unnecessary component re-renders?",
        options: [
          "React.memo",
          "React.reload",
          "React.refresh",
          "React.update",
        ],
        answer: "React.memo",
      },
    ],
  },

  DBMS: {
    Easy: [
      {
        question: "What does DBMS stand for?",
        options: [
          "Data Backup Management System",
          "Database Management System",
          "Database Machine System",
          "Data Management Software",
        ],
        answer: "Database Management System",
      },
      {
        question: "Which language is commonly used to query databases?",
        options: ["HTML", "CSS", "SQL", "Python"],
        answer: "SQL",
      },
      {
        question: "What is a table?",
        options: [
          "Collection of rows and columns",
          "Only a row",
          "Only a column",
          "A programming language",
        ],
        answer: "Collection of rows and columns",
      },
      {
        question: "Which command is used to retrieve data?",
        options: ["GET", "SELECT", "FETCHING", "READ"],
        answer: "SELECT",
      },
      {
        question: "Which command adds new data?",
        options: ["ADD", "INSERT", "PUT", "CREATE DATA"],
        answer: "INSERT",
      },
    ],

    Medium: [
      {
        question: "Which key uniquely identifies a record?",
        options: ["Foreign Key", "Primary Key", "Candidate Key", "Composite Key"],
        answer: "Primary Key",
      },
      {
        question: "Which command modifies existing data?",
        options: ["CHANGE", "UPDATE", "MODIFY", "ALTER DATA"],
        answer: "UPDATE",
      },
      {
        question: "Which command removes records?",
        options: ["REMOVE", "DELETE", "DROP ROW", "CLEAR"],
        answer: "DELETE",
      },
      {
        question: "Which SQL clause filters records?",
        options: ["FILTER", "WHERE", "CHECK", "SELECT"],
        answer: "WHERE",
      },
      {
        question: "Which operation combines rows from related tables?",
        options: ["JOIN", "MERGE", "CONNECT", "LINK"],
        answer: "JOIN",
      },
    ],

    Hard: [
      {
        question: "Which normal form removes partial dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: "2NF",
      },
      {
        question: "Which normal form removes transitive dependency?",
        options: ["1NF", "2NF", "3NF", "4NF"],
        answer: "3NF",
      },
      {
        question: "What does ACID stand for?",
        options: [
          "Atomicity, Consistency, Isolation, Durability",
          "Access, Control, Input, Data",
          "Atomicity, Control, Isolation, Data",
          "Access, Consistency, Input, Durability",
        ],
        answer: "Atomicity, Consistency, Isolation, Durability",
      },
      {
        question: "Which SQL command removes an entire table?",
        options: ["DELETE", "REMOVE", "DROP", "CLEAR"],
        answer: "DROP",
      },
      {
        question: "Which index structure is commonly used in databases?",
        options: ["B-Tree", "Stack", "Queue", "Linked List"],
        answer: "B-Tree",
      },
    ],
  },

  "Web Development": {
    Easy: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Text Machine Language",
          "Hyper Transfer Markup Language",
          "Home Tool Markup Language",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "Java", "SQL"],
        answer: "CSS",
      },
      {
        question: "Which language adds interactivity to websites?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript",
      },
      {
        question: "Which HTML tag creates a paragraph?",
        options: ["<p>", "<para>", "<text>", "<paragraph>"],
        answer: "<p>",
      },
      {
        question: "Which HTML tag creates a link?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>",
      },
    ],

    Medium: [
      {
        question: "Which CSS property changes the background color?",
        options: ["color", "background-color", "bg-color", "background"],
        answer: "background-color",
      },
      {
        question: "Which CSS property changes text size?",
        options: ["text-size", "font-size", "size", "font"],
        answer: "font-size",
      },
      {
        question: "Which JavaScript keyword declares a constant?",
        options: ["var", "let", "const", "constant"],
        answer: "const",
      },
      {
        question: "Which method selects an element by ID?",
        options: [
          "getElementById()",
          "getById()",
          "selectId()",
          "queryId()",
        ],
        answer: "getElementById()",
      },
      {
        question: "Which CSS layout system is one-dimensional?",
        options: ["Grid", "Flexbox", "Table", "Float"],
        answer: "Flexbox",
      },
    ],

    Hard: [
      {
        question: "Which HTTP status code means 'Not Found'?",
        options: ["200", "301", "404", "500"],
        answer: "404",
      },
      {
        question: "Which HTTP method is generally used to create data?",
        options: ["GET", "POST", "DELETE", "HEAD"],
        answer: "POST",
      },
      {
        question: "What does API stand for?",
        options: [
          "Application Programming Interface",
          "Application Process Internet",
          "Advanced Programming Input",
          "Application Program Internet",
        ],
        answer: "Application Programming Interface",
      },
      {
        question: "Which storage keeps data in the browser with no expiration?",
        options: ["sessionStorage", "localStorage", "cookies only", "cache"],
        answer: "localStorage",
      },
      {
        question: "Which protocol is used for secure HTTP communication?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        answer: "HTTPS",
      },
    ],
  },

  "AI/ML": {
    Easy: [
      {
        question: "What does AI stand for?",
        options: [
          "Automatic Intelligence",
          "Artificial Intelligence",
          "Advanced Information",
          "Automated Information",
        ],
        answer: "Artificial Intelligence",
      },
      {
        question: "What does ML stand for?",
        options: [
          "Machine Learning",
          "Machine Language",
          "Model Learning",
          "Modern Learning",
        ],
        answer: "Machine Learning",
      },
      {
        question: "Which is a common AI application?",
        options: ["Chatbot", "Keyboard", "Monitor", "Mouse"],
        answer: "Chatbot",
      },
      {
        question: "What is data used for in Machine Learning?",
        options: [
          "Training models",
          "Only printing",
          "Changing hardware",
          "Creating electricity",
        ],
        answer: "Training models",
      },
      {
        question: "Which is an example of supervised learning?",
        options: [
          "Classification",
          "Random guessing",
          "Manual calculation",
          "File compression",
        ],
        answer: "Classification",
      },
    ],

    Medium: [
      {
        question: "Which is a supervised learning algorithm?",
        options: [
          "Linear Regression",
          "K-Means",
          "PCA",
          "Apriori",
        ],
        answer: "Linear Regression",
      },
      {
        question: "Which algorithm is used for clustering?",
        options: [
          "Linear Regression",
          "K-Means",
          "Logistic Regression",
          "Decision Tree",
        ],
        answer: "K-Means",
      },
      {
        question: "What is a feature in Machine Learning?",
        options: [
          "An input variable",
          "The final answer",
          "A database",
          "A programming language",
        ],
        answer: "An input variable",
      },
      {
        question: "Which metric measures classification accuracy?",
        options: ["Accuracy", "Length", "Size", "Memory"],
        answer: "Accuracy",
      },
      {
        question: "What is training data?",
        options: [
          "Data used to train a model",
          "Only test data",
          "A database server",
          "A programming language",
        ],
        answer: "Data used to train a model",
      },
    ],

    Hard: [
      {
        question: "Which algorithm is commonly used for classification?",
        options: [
          "Logistic Regression",
          "K-Means",
          "PCA",
          "Apriori",
        ],
        answer: "Logistic Regression",
      },
      {
        question: "What is overfitting?",
        options: [
          "Model performs well on training data but poorly on new data",
          "Model has no data",
          "Model trains too slowly",
          "Model has no features",
        ],
        answer:
          "Model performs well on training data but poorly on new data",
      },
      {
        question: "Which technique reduces dimensionality?",
        options: ["PCA", "KNN", "Linear Regression", "Naive Bayes"],
        answer: "PCA",
      },
      {
        question: "What is a neural network inspired by?",
        options: [
          "Human brain",
          "Database",
          "Operating system",
          "Compiler",
        ],
        answer: "Human brain",
      },
      {
        question: "Which algorithm is commonly used for binary classification?",
        options: [
          "Logistic Regression",
          "K-Means",
          "PCA",
          "Apriori",
        ],
        answer: "Logistic Regression",
      },
    ],
  },
};

export default questions;
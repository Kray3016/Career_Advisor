import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

// Your provided goals
const GOALS = [
  "Web Developer",
  "Data Scientist",
  "AI Engineer",
  "Project Manager",
  "Graphic Designer",
  "Entrepreneur",
  "Fitness Trainer",
  "Technical Writer",
  "Financial Analyst",
  "Digital Marketer",
  "UX/UI Designer",
  "Teacher/Educator",
  "Architect",
  "Chef/Restaurateur",
  "Software Engineer",
];

// Sample 5 questions per some goals (from your file; extend accordingly)
const QUESTIONS = {
  "Web Developer": [
    {
      id: "wd1",
      question: "Which of the following is a client-side scripting language?",
      options: ["PHP", "Python", "JavaScript", "Java"],
      correct: 2,
    },
    {
      id: "wd2",
      question: "What is the primary purpose of CSS?",
      options: [
        "To add interactivity to a website.",
        "To structure the content of a webpage.",
        "To define the style and layout of a webpage.",
        "To manage the database.",
      ],
      correct: 2,
    },
    {
      id: "wd3",
      question: "Which tag is used to create an ordered list in HTML?",
      options: ["ul", "li", "ol", "dl"],
      correct: 2,
    },
    {
      id: "wd4",
      question: "What does responsive design mean in web development?",
      options: [
        "The website loads quickly.",
        "The website can send and receive real-time data.",
        "The website adapts its layout to different screen sizes.",
        "The website responds quickly to user input.",
      ],
      correct: 2,
    },
    {
      id: "wd5",
      question: "Which of these is a popular front-end framework?",
      options: ["Django", "React", "Ruby on Rails", "Express.js"],
      correct: 1,
    },
  ],
  "Data Scientist": [
    {
      id: "ds1",
      question:
        "Which programming language is most commonly used for data analysis and machine learning?",
      options: ["C", "Java", "Python", "Swift"],
      correct: 2,
    },
    {
      id: "ds2",
      question:
        "What is the primary goal of exploratory data analysis (EDA)?",
      options: [
        "To build a machine learning model.",
        "To prepare the data for visualization.",
        "To discover patterns, spot anomalies, and summarize main characteristics.",
        "To clean data by removing all missing values.",
      ],
      correct: 2,
    },
    {
      id: "ds3",
      question: "Which of these is a supervised learning algorithm?",
      options: [
        "K-Means Clustering",
        "Principal Component Analysis",
        "Linear Regression",
        "Anomaly Detection",
      ],
      correct: 2,
    },
    {
      id: "ds4",
      question: "What is overfitting in a machine learning model?",
      options: [
        "The model is too simple to capture underlying patterns.",
        "The model performs well on training but poorly on new data.",
        "The model has too few features.",
        "The model is computationally inefficient.",
      ],
      correct: 1,
    },
    {
      id: "ds5",
      question:
        "Which of the following is a common library in Python for numerical operations?",
      options: ["Matplotlib", "Pandas", "NumPy", "Seaborn"],
      correct: 2,
    },
  ],
  "AI Engineer": [
    {
      "id": "ai1",
      "question": "What is the primary goal of a Convolutional Neural Network (CNN)?",
      "options": [
        "To process and analyze sequential data.",
        "To classify images by identifying patterns and features.",
        "To generate human-like text.",
        "To predict numerical values in a time series."
      ],
      "correct": 1
    },
    {
      "id": "ai2",
      "question": "What does 'backpropagation' refer to in the context of neural networks?",
      "options": [
        "The process of feeding data forward through the network.",
        "The process of adjusting the network's weights to minimize the error.",
        "The technique for creating new layers in the network.",
        "The method for data normalization."
      ],
      "correct": 1
    },
    {
      "id": "ai3",
      "question": "Which of the following is a type of recurrent neural network (RNN) used to handle long-term dependencies in sequential data?",
      "options": [
        "CNN",
        "MLP (Multi-Layer Perceptron)",
        "LSTM (Long Short-Term Memory)",
        "GAN (Generative Adversarial Network)"
      ],
      "correct": 2
    },
    {
      "id": "ai4",
      "question": "What is the main purpose of a Generative Adversarial Network (GAN)?",
      "options": [
        "To analyze the sentiment of text data.",
        "To generate new, realistic data instances that mimic a training dataset.",
        "To translate text from one language to another.",
        "To cluster unlabeled data."
      ],
      "correct": 1
    },
    {
      "id": "ai5",
      "question": "Which of these is a subfield of AI focused on enabling machines to learn from data without being explicitly programmed?",
      "options": [
        "Robotics",
        "Machine Learning",
        "Expert Systems",
        "Logic Programming"
      ],
      "correct": 1
    }
  ],
  "Project Manager": [
    {
      "id": "pm1",
      "question": "What is the primary purpose of a Gantt Chart?",
      "options": [
        "To manage the project's budget.",
        "To illustrate the project schedule, including start and end dates.",
        "To track team member performance.",
        "To create a communication plan."
      ],
      "correct": 1
    },
    {
      "id": "pm2",
      "question": "What does 'scope creep' refer to?",
      "options": [
        "The project's budget expanding unexpectedly.",
        "The project's schedule getting delayed.",
        "The unauthorized and continuous expansion of a project's scope.",
        "A team member leaving the project."
      ],
      "correct": 2
    },
    {
      "id": "pm3",
      "question": "What is the purpose of a Risk Register?",
      "options": [
        "To list all the project's financial transactions.",
        "To track the project's daily progress.",
        "To identify potential risks, assess their impact, and plan mitigation strategies.",
        "To record meeting minutes."
      ],
      "correct": 2
    },
    {
      "id": "pm4",
      "question": "In Agile methodology, what is a 'sprint'?",
      "options": [
        "A daily meeting to discuss progress.",
        "A fixed time period for a development team to complete a set amount of work.",
        "The final phase of a project.",
        "The initial brainstorming session."
      ],
      "correct": 1
    },
    {
      "id": "pm5",
      "question": "What is the Critical Path in project management?",
      "options": [
        "The shortest possible time to complete a project.",
        "The sequence of project activities that determines the total duration of the project.",
        "The most difficult tasks in a project.",
        "The path with the most resources allocated to it."
      ],
      "correct": 1
    }
  ],
  "Graphic Designer": [
    {
      "id": "gd1",
      "question": "What is typography?",
      "options": [
        "The process of creating digital art.",
        "The art and technique of arranging type.",
        "The use of colors in design.",
        "The process of converting raster images to vector."
      ],
      "correct": 1
    },
    {
      "id": "gd2",
      "question": "Which color model is used for print design?",
      "options": [
        "RGB",
        "CMYK",
        "HSL",
        "HEX"
      ],
      "correct": 1
    },
    {
      "id": "gd3",
      "question": "What is a vector graphic?",
      "options": [
        "An image made of pixels that loses quality when enlarged.",
        "An image composed of mathematical formulas, allowing it to be scaled without loss of quality.",
        "A photograph.",
        "A low-resolution image."
      ],
      "correct": 1
    },
    {
      "id": "gd4",
      "question": "What is the purpose of a mood board in a design project?",
      "options": [
        "To document the project's budget.",
        "To gather inspiration and define a visual direction.",
        "To present the final design to a client.",
        "To create a list of software to be used."
      ],
      "correct": 1
    },
    {
      "id": "gd5",
      "question": "What is kerning in typography?",
      "options": [
        "The spacing between lines of text.",
        "The spacing between individual characters.",
        "The spacing between words.",
        "The size of the font."
      ],
      "correct": 1
    }
  ],
  "Entrepreneur": [
    {
      "id": "en1",
      "question": "What is a business plan?",
      "options": [
        "A document that outlines the marketing strategy only.",
        "A written document that describes a company's mission, objectives, and strategies.",
        "A document that only describes the company's financial projections.",
        "A list of all employees."
      ],
      "correct": 1
    },
    {
      "id": "en2",
      "question": "What does ROI stand for?",
      "options": [
        "Return on Interest",
        "Return on Investment",
        "Return on Inventory",
        "Revenue of Income"
      ],
      "correct": 1
    },
    {
      "id": "en3",
      "question": "What is 'bootstrapping' in business?",
      "options": [
        "Using your own personal savings and early revenues to fund the business.",
        "Raising a large amount of money from investors.",
        "Taking a large bank loan.",
        "Selling equity to a large corporation."
      ],
      "correct": 0
    },
    {
      "id": "en4",
      "question": "What is a Minimum Viable Product (MVP)?",
      "options": [
        "The final, fully featured version of a product.",
        "A product with just enough features to satisfy early customers.",
        "A product that has no features.",
        "A marketing campaign."
      ],
      "correct": 1
    },
    {
      "id": "en5",
      "question": "What is the break-even point?",
      "options": [
        "The point at which total revenue equals total costs.",
        "The point at which the company starts making a profit.",
        "The point at which the company runs out of cash.",
        "The point at which the company has to hire more staff."
      ],
      "correct": 0
    }
  ],
  "Fitness Trainer": [
    {
      "id": "ft1",
      "question": "Which of the following is a primary benefit of cardiovascular exercise?",
      "options": [
        "Building muscle mass.",
        "Improving heart and lung health.",
        "Increasing bone density.",
        "Improving flexibility."
      ],
      "correct": 1
    },
    {
      "id": "ft2",
      "question": "What is a macronutrient?",
      "options": [
        "A vitamin or mineral.",
        "A nutrient the body needs in large quantities: carbs, proteins, and fats.",
        "A type of supplement.",
        "A plant-based food."
      ],
      "correct": 1
    },
    {
      "id": "ft3",
      "question": "What is the most important component of a successful weight loss program?",
      "options": [
        "Only cardio exercises.",
        "Only strength training.",
        "A consistent calorie deficit.",
        "Avoiding all carbohydrates."
      ],
      "correct": 2
    },
    {
      "id": "ft4",
      "question": "What is the purpose of proper form during an exercise?",
      "options": [
        "To make the exercise feel harder.",
        "To prevent injury and effectively target the intended muscles.",
        "To finish the workout faster.",
        "To make the exercise look good."
      ],
      "correct": 1
    },
    {
      "id": "ft5",
      "question": "What does HIIT stand for?",
      "options": [
        "High-Intensity Interval Training",
        "Heavy Interval Impact Training",
        "High-Intensity Intermittent Training",
        "Health-Information Interval Training"
      ],
      "correct": 0
    }
  ],
  "Technical Writer": [
    {
      "id": "tw1",
      "question": "What is the primary goal of a technical writer?",
      "options": [
        "To write marketing copy for a product.",
        "To create clear, concise, and accurate documentation for complex information.",
        "To write code for a software application.",
        "To write blog posts about new technology."
      ],
      "correct": 1
    },
    {
      "id": "tw2",
      "question": "What is a style guide in technical writing?",
      "options": [
        "A document that outlines the coding style for a project.",
        "A set of standards for the writing's tone, grammar, and formatting.",
        "A list of all the technical terms to be used.",
        "A guide for creating website layouts."
      ],
      "correct": 1
    },
    {
      "id": "tw3",
      "question": "What is the purpose of API documentation?",
      "options": [
        "To explain how to use a software application's user interface.",
        "To provide developers with all the information needed to use an API effectively.",
        "To explain the company's internal processes.",
        "To market a new product feature."
      ],
      "correct": 1
    },
    {
      "id": "tw4",
      "question": "What does 'single-sourcing' mean in technical writing?",
      "options": [
        "The practice of writing a document from scratch every time.",
        "The practice of creating one source document and reusing its content in multiple outputs.",
        "The process of getting information from a single person.",
        "The act of writing for one specific audience."
      ],
      "correct": 1
    },
    {
      "id": "tw5",
      "question": "What is the goal of using a minimalist writing style?",
      "options": [
        "To make the document look more professional.",
        "To save space.",
        "To remove unnecessary jargon and wordiness to make information easier to understand.",
        "To make the document shorter."
      ],
      "correct": 2
    }
  ],
  "Financial Analyst": [
    {
      "id": "fa1",
      "question": "What does EBITDA stand for?",
      "options": [
        "Earnings Before Interest, Taxes, Depreciation, and Amortization.",
        "Expenses Before Investments, Taxes, and Debt.",
        "Equity, Bonds, Income, and Debt Acquisition.",
        "Earnings Based on Inventory and Tax Deductions."
      ],
      "correct": 0
    },
    {
      "id": "fa2",
      "question": "Which of the following is a key component of a company's balance sheet?",
      "options": [
        "Revenue and Expenses",
        "Assets, Liabilities, and Equity",
        "Cash flow from operations",
        "Sales and cost of goods sold"
      ],
      "correct": 1
    },
    {
      "id": "fa3",
      "question": "What is the purpose of a cash flow statement?",
      "options": [
        "To show a company's revenue and expenses over a period.",
        "To show a company's assets and liabilities.",
        "To summarize the cash and cash equivalents entering and leaving a company.",
        "To forecast a company's future earnings."
      ],
      "correct": 2
    },
    {
      "id": "fa4",
      "question": "What is a liquidity ratio used for?",
      "options": [
        "To measure the company's long-term debt.",
        "To measure a company's ability to meet its short-term financial obligations.",
        "To measure the company's profitability.",
        "To measure the efficiency of a company's assets."
      ],
      "correct": 1
    },
    {
      "id": "fa5",
      "question": "What is the difference between a stock and a bond?",
      "options": [
        "A stock is a loan to a company, while a bond represents ownership.",
        "A stock represents ownership in a company, while a bond is a loan to a company.",
        "A stock is a short-term investment, while a bond is a long-term investment.",
        "A stock has a fixed interest rate, while a bond's value fluctuates."
      ],
      "correct": 1
    }
  ],
  "Digital Marketer": [
    {
      "id": "dm1",
      "question": "What is SEO?",
      "options": [
        "Social Engagement Optimization",
        "Search Engine Optimization",
        "Site Efficiency Operations",
        "Strategic Email Outreach"
      ],
      "correct": 1
    },
    {
      "id": "dm2",
      "question": "What does CTR stand for in digital marketing?",
      "options": [
        "Content Translation Rate",
        "Customer Trust Ratio",
        "Click-Through Rate",
        "Conversion Tracking Report"
      ],
      "correct": 2
    },
    {
      "id": "dm3",
      "question": "What is a lead magnet?",
      "options": [
        "A type of online advertisement.",
        "A free item or service that is given away in exchange for contact information.",
        "A tool for website analytics.",
        "A product that is sold at a loss to attract customers."
      ],
      "correct": 1
    },
    {
      "id": "dm4",
      "question": "What is the purpose of A/B testing?",
      "options": [
        "To test two different versions of a webpage or email to see which one performs better.",
        "To test a website's speed.",
        "To test a single page with multiple users.",
        "To compare two different marketing platforms."
      ],
      "correct": 0
    },
    {
      "id": "dm5",
      "question": "What is a 'conversion' in digital marketing?",
      "options": [
        "When a user leaves a website.",
        "A user completes a desired action, like a purchase or sign-up.",
        "The number of times a user clicks on an ad.",
        "The number of visitors to a website."
      ],
      "correct": 1
    }
  ],
  "UX/UI Designer": [
    {
      "id": "ui1",
      "question": "What is the primary focus of User Experience (UX) design?",
      "options": [
        "The visual aesthetics of a product.",
        "How a user interacts with and feels about a product.",
        "The coding and technical development of a product.",
        "Creating marketing materials for a product."
      ],
      "correct": 1
    },
    {
      "id": "ui2",
      "question": "What is a wireframe?",
      "options": [
        "A high-fidelity prototype with all visual details.",
        "A basic visual guide used to represent the skeletal framework of a website or app.",
        "A document detailing a user's journey.",
        "The final visual design of a product."
      ],
      "correct": 1
    },
    {
      "id": "ui3",
      "question": "What is a 'persona' in UX design?",
      "options": [
        "The project manager's personal profile.",
        "A fictional character created to represent a user type who might use a product.",
        "A document outlining the company's brand identity.",
        "The developer's profile."
      ],
      "correct": 1
    },
    {
      "id": "ui4",
      "question": "What is the purpose of a user flow diagram?",
      "options": [
        "To show the visual design of each screen.",
        "To document the project's timeline.",
        "To illustrate the path a user takes to complete a task within a product.",
        "To analyze website traffic."
      ],
      "correct": 2
    },
    {
      "id": "ui5",
      "question": "What does a 'style guide' or 'design system' contain?",
      "options": [
        "Only the color palette.",
        "Only the fonts.",
        "A set of reusable components, patterns, and guidelines for product development.",
        "The final marketing assets."
      ],
      "correct": 2
    }
  ],
  "Teacher/Educator": [
    {
      "id": "te1",
      "question": "What is a 'learning objective'?",
      "options": [
        "The specific goals a teacher has for a lesson.",
        "A statement that describes what the student will be able to do after a lesson.",
        "The name of a student's personal goal.",
        "The overall theme of a course."
      ],
      "correct": 1
    },
    {
      "id": "te2",
      "question": "What is 'differentiated instruction'?",
      "options": [
        "Teaching the same content to all students at the same pace.",
        "Tailoring instruction to meet individual students' needs.",
        "Only teaching one subject at a time.",
        "Using only technology in the classroom."
      ],
      "correct": 1
    },
    {
      "id": "te3",
      "question": "What does 'formative assessment' refer to?",
      "options": [
        "A high-stakes exam at the end of a unit.",
        "Ongoing assessments that provide feedback to guide instruction and improve learning.",
        "A single, final grade.",
        "A written report for parents."
      ],
      "correct": 1
    },
    {
      "id": "te4",
      "question": "What is the purpose of classroom management?",
      "options": [
        "To punish students who misbehave.",
        "To maintain a chaotic learning environment.",
        "To create a safe, respectful, and effective learning environment.",
        "To ensure students never speak during class."
      ],
      "correct": 2
    },
    {
      "id": "te5",
      "question": "What is a 'pedagogy'?",
      "options": [
        "The art and science of teaching.",
        "A student's learning style.",
        "The subject matter of a lesson.",
        "A type of school."
      ],
      "correct": 0
    }
  ],
  "Architect": [
    {
      "id": "ar1",
      "question": "Which of these is a fundamental principle of architecture?",
      "options": [
        "Form follows color.",
        "Form follows function.",
        "Function follows form.",
        "Style follows expense."
      ],
      "correct": 1
    },
    {
      "id": "ar2",
      "question": "What is a 'blueprint'?",
      "options": [
        "A type of painting.",
        "A photographic print of a technical drawing, or a general term for architectural plans.",
        "A document outlining the budget for a building.",
        "A 3D model of a building."
      ],
      "correct": 1
    },
    {
      "id": "ar3",
      "question": "What is a 'schematic design' phase?",
      "options": [
        "The final stage of construction.",
        "The initial phase where the architect outlines the project's big ideas and basic layout.",
        "The phase where all technical details are finalized.",
        "The phase of decorating the interior."
      ],
      "correct": 1
    },
    {
      "id": "ar4",
      "question": "What does 'CAD' stand for?",
      "options": [
        "Creative Architectural Design",
        "Computer-Aided Design",
        "Construction and Drafting",
        "Civilian Architectural Document"
      ],
      "correct": 1
    },
    {
      "id": "ar5",
      "question": "What is 'sustainable architecture'?",
      "options": [
        "Building with only recycled materials.",
        "Designing buildings with a focus on minimizing their environmental impact.",
        "Building structures that last forever.",
        "Designing buildings for extreme weather."
      ],
      "correct": 1
    }
  ],
  "Chef/Restaurateur": [
    {
      "id": "ch1",
      "question": "What does 'mise en place' mean in a professional kitchen?",
      "options": [
        "The main course.",
        "Putting ingredients and equipment in their proper place before cooking.",
        "The final dish presentation.",
        "The bill at the end of the meal."
      ],
      "correct": 1
    },
    {
      "id": "ch2",
      "question": "What is a 'sous chef'?",
      "options": [
        "The head chef.",
        "The second in command in a kitchen, who reports to the head chef.",
        "A pastry chef.",
        "The person who manages the restaurant's finances."
      ],
      "correct": 1
    },
    {
      "id": "ch3",
      "question": "What is the purpose of 'blanching' vegetables?",
      "options": [
        "To fry them until crispy.",
        "To cook them quickly in boiling water and then plunge them into cold water to stop the cooking process.",
        "To marinate them in a sauce.",
        "To mash them into a puree."
      ],
      "correct": 1
    },
    {
      "id": "ch4",
      "question": "What is a 'menu engineering'?",
      "options": [
        "The process of creating a menu with a specific theme.",
        "A method of designing a restaurant's menu to maximize profitability and guest satisfaction.",
        "The process of tasting and approving new dishes.",
        "The art of garnishing food."
      ],
      "correct": 1
    },
    {
      "id": "ch5",
      "question": "What is a 'profit and loss (P&L) statement' in a restaurant?",
      "options": [
        "A document detailing the daily staff schedule.",
        "A financial statement that summarizes the revenues, costs, and expenses over a specific period.",
        "A list of all the ingredients needed for a week.",
        "A list of customer complaints."
      ],
      "correct": 1
    }
  ],
  "Software Engineer": [
    {
      "id": "se1",
      "question": "What is an algorithm?",
      "options": [
        "A type of programming language.",
        "A set of rules or steps to be followed in calculations or other problem-solving operations.",
        "A tool for debugging code.",
        "The design of a user interface."
      ],
      "correct": 1
    },
    {
      "id": "se2",
      "question": "What is the purpose of 'version control'?",
      "options": [
        "To make a program run faster.",
        "To manage and track changes to source code.",
        "To test a program for errors.",
        "To design the database schema."
      ],
      "correct": 1
    },
    {
      "id": "se3",
      "question": "What is 'object-oriented programming' (OOP)?",
      "options": [
        "A programming paradigm based on the concept of 'objects' that can contain data and code.",
        "A method of writing code in a linear, step-by-step fashion.",
        "A way to only write code for mobile applications.",
        "A style of coding that avoids functions."
      ],
      "correct": 0
    },
    {
      "id": "se4",
      "question": "What is the difference between 'compilation' and 'interpretation'?",
      "options": [
        "They are the same thing.",
        "Compilation translates code all at once before execution; interpretation translates and executes code line by line.",
        "Compilation is only for web development, and interpretation is for mobile apps.",
        "Interpretation is a faster process than compilation."
      ],
      "correct": 1
    },
    {
      "id": "se5",
      "question": "What does a 'bug' in software refer to?",
      "options": [
        "A feature that is not yet implemented.",
        "An error, flaw, or fault that causes a program to produce an incorrect or unexpected result.",
        "A new software update.",
        "The process of adding a new feature to a program."
      ],
      "correct": 1
    }
  ],
};

export default function Quiz() {
  const [username] = useState(localStorage.getItem("currentUser") || "User");
  const [goal, setGoal] = useState(localStorage.getItem("selectedGoal") || "");
  const [goalSaved, setGoalSaved] = useState(!!goal);
  const [answers, setAnswers] = useState(
    JSON.parse(localStorage.getItem("quizAnswers")) || {}
  );
  const [showResult, setShowResult] = useState(false);
  const [suggestion, setSuggestion] = useState(
    localStorage.getItem("careerSuggestion") || null
  );

  useEffect(() => {
    localStorage.setItem("selectedGoal", goal);
  }, [goal]);

  useEffect(() => {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
  }, [answers]);

  const onSaveGoal = () => {
    if (goal) {
      setGoalSaved(true);
      setShowResult(false);
      setAnswers({});
      setSuggestion(null);
    } else {
      alert("Please select a goal before saving");
    }
  };

  const onAnswer = (questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const onSubmitQuiz = () => {
    const questions = QUESTIONS[goal] || [];
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) score += 1;
    });

    const passScore = 3;
    let careerSuggestion = "";
    if (score >= passScore) {
      careerSuggestion = `You are well suited for the goal: ${goal}`;
    } else {
      careerSuggestion = `Based on your answers, you may want to reconsider the goal: ${goal}`;
    }

    setSuggestion(careerSuggestion);
    setShowResult(true);

    localStorage.setItem("careerSuggestion", careerSuggestion);
  };

  const onResetQuiz = () => {
    setGoal("");
    setGoalSaved(false);
    setAnswers({});
    setShowResult(false);
    setSuggestion(null);
    localStorage.removeItem("selectedGoal");
    localStorage.removeItem("quizAnswers");
    localStorage.removeItem("careerSuggestion");
  };

  const onChooseNewGoal = () => {
    onResetQuiz();
  };

  const onContinueGoal = () => {
    alert(`Great! Continuing with your goal: ${goal}`);
    // Navigation or other logic here
  };

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-cinzel">
      <Navbar username={username} />
      <main className="pt-20 max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-cyan-300 text-center">
          Skill Evaluation Quiz
        </h1>

        <div className="mb-6">
          <label htmlFor="goal-select" className="block mb-2 font-semibold">
            What is your goal?
          </label>
          <select
            id="goal-select"
            className={`w-full p-3 rounded-lg bg-black border border-cyan-400 text-cyan-300 ${
              goalSaved ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={goalSaved}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="">-- Select Goal --</option>
            {GOALS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {!goalSaved && (
            <button
              className="mt-4 px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition"
              onClick={onSaveGoal}
            >
              Save Goal
            </button>
          )}
        </div>

        {goalSaved && !showResult && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Quiz: {goal}</h2>
            {(QUESTIONS[goal] || []).map((q) => (
              <div key={q.id} className="mb-6">
                <p className="mb-2">{q.question}</p>
                {q.options.map((opt, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name={q.id}
                      value={i}
                      checked={answers[q.id] === i}
                      onChange={() => onAnswer(q.id, i)}
                      className="accent-cyan-400"
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            ))}
            <div className="flex gap-4">
              <button
                className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition"
                onClick={onSubmitQuiz}
                disabled={Object.keys(answers).length !== (QUESTIONS[goal]?.length || 0)}
              >
                Submit Quiz
              </button>
              <button className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition" onClick={onResetQuiz}>
                Reset
              </button>
            </div>
          </div>
        )}

        {showResult && (
          <div className="bg-black/70 border border-cyan-400 rounded-lg p-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Suggestion</h2>
            <p className="mb-6 text-cyan-300">Based on your answers:</p>
            <p className="text-2xl font-semibold mb-8 text-cyan-400">{suggestion}</p>
            <div className="flex justify-center gap-6">
              <button
                className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition"
                onClick={onChooseNewGoal}
              >
                Choose New Goal
              </button>
              <button
                className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition"
                onClick={onContinueGoal}
              >
                Continue with Current Goal
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
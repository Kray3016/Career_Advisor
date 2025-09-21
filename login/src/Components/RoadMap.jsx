import React from "react";
import Navbar from "./Navbar";

const ROADMAPS = {
  "Web Developer": [
    {
      step: "Learn HTML, CSS, and JavaScript basics",
      resources: [
        { name: "freeCodeCamp", url: "https://www.freecodecamp.org" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web" },
      ],
    },
    {
      step: "Understand responsive design and accessibility",
      resources: [
        { name: "A11y Project", url: "https://a11yproject.com" },
      ],
    },
    {
      step: "Master React and modern front-end frameworks",
      resources: [
        { name: "React Official", url: "https://reactjs.org/tutorial/tutorial.html" },
      ],
    },
    {
      step: "Learn Node.js and Express.js for backend development",
      resources: [
        { name: "Node.js Docs", url: "https://nodejs.org/en/docs/" },
      ],
    },
    {
      step: "Build portfolio projects and deploy on hosting platforms",
      resources: [
        { name: "Netlify", url: "https://www.netlify.com" },
        { name: "Vercel", url: "https://vercel.com" },
      ],
    },
  ],

  "Data Scientist": [
    {
      step: "Learn Python programming and libraries (NumPy, Pandas)",
      resources: [
        { name: "Python.org", url: "https://www.python.org/about/gettingstarted/" },
        { name: "Pandas Docs", url: "https://pandas.pydata.org/docs/" },
      ],
    },
    {
      step: "Study statistics, probability, and data visualization",
      resources: [
        { name: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability" },
        { name: "Matplotlib", url: "https://matplotlib.org/stable/tutorials/index.html" },
      ],
    },
    {
      step: "Master machine learning concepts and scikit-learn",
      resources: [
        { name: "Scikit-learn", url: "https://scikit-learn.org/stable/" },
        { name: "Coursera ML Course", url: "https://www.coursera.org/learn/machine-learning" },
      ],
    },
    {
      step: "Practice on real-world datasets and Kaggle competitions",
      resources: [
        { name: "Kaggle", url: "https://www.kaggle.com" },
      ],
    },
    {
      step: "Learn advanced topics like deep learning and NLP",
      resources: [
        { name: "TensorFlow", url: "https://www.tensorflow.org/tutorials" },
      ],
    },
  ],

  "AI Engineer": [
    {
      step: "Build strong foundations in mathematics and Python",
      resources: [
        { name: "3Blue1Brown Math Series", url: "https://www.3blue1brown.com" },
        { name: "Python Official Tutorial", url: "https://docs.python.org/3/tutorial/" },
      ],
    },
    {
      step: "Learn machine learning algorithms and deep learning",
      resources: [
        { name: "Fast.ai", url: "https://www.fast.ai" },
        { name: "Deep Learning Specialization", url: "https://www.coursera.org/specializations/deep-learning" },
      ],
    },
    {
      step: "Work on AI projects like computer vision and NLP",
      resources: [
        { name: "OpenCV Tutorials", url: "https://opencv.org/courses/" },
        { name: "Hugging Face", url: "https://huggingface.co/transformers/" },
      ],
    },
    {
      step: "Participate in AI competitions and hackathons",
      resources: [
        { name: "DrivenData", url: "https://www.drivendata.org" },
      ],
    },
    {
      step: "Stay updated with AI research and tools",
      resources: [
        { name: "arXiv CS AI", url: "https://arxiv.org/list/cs.AI/recent" },
      ],
    },
  ],

  "Project Manager": [
    {
      step: "Understand project management fundamentals and methodologies",
      resources: [
        { name: "PMI", url: "https://www.pmi.org" },
        { name: "Agile Alliance", url: "https://www.agilealliance.org" },
      ],
    },
    {
      step: "Learn tools like Jira, Trello, MS Project",
      resources: [
        { name: "Jira Tutorials", url: "https://www.atlassian.com/software/jira/guides" },
        { name: "Trello Guide", url: "https://trello.com/guide" },
      ],
    },
    {
      step: "Master communication and leadership skills",
      resources: [
        { name: "MindTools", url: "https://www.mindtools.com" },
      ],
    },
    {
      step: "Get certified with PMP or Scrum certifications",
      resources: [
        { name: "PMP Certification", url: "https://www.pmi.org/certifications/project-management-pmp" },
      ],
    },
    {
      step: "Gain real world experience managing projects",
      resources: [],
    },
  ],

  "Graphic Designer": [
    {
      step: "Learn design principles and color theory",
      resources: [
        { name: "Canva Design School", url: "https://designschool.canva.com" },
        { name: "Adobe Color", url: "https://color.adobe.com" },
      ],
    },
    {
      step: "Master tools like Adobe Photoshop, Illustrator",
      resources: [
        { name: "Adobe Tutorials", url: "https://helpx.adobe.com" },
      ],
    },
    {
      step: "Build a portfolio showcasing varied projects",
      resources: [],
    },
    {
      step: "Understand branding and typography",
      resources: [
        { name: "Google Fonts", url: "https://fonts.google.com" },
      ],
    },
    {
      step: "Freelance or intern at design agencies",
      resources: [],
    },
  ],

  "Entrepreneur": [
    {
      step: "Identify market problems and opportunities",
      resources: [
        { name: "Y Combinator Startup School", url: "https://www.startupschool.org" },
      ],
    },
    {
      step: "Learn business models and financial basics",
      resources: [
        { name: "Coursera Business Foundations", url: "https://www.coursera.org/specializations/wharton-business-foundations" },
      ],
    },
    {
      step: "Develop minimum viable products (MVPs)",
      resources: [
        { name: "Lean Startup", url: "https://leanstartup.co" },
      ],
    },
    {
      step: "Master marketing and customer acquisition",
      resources: [
        { name: "HubSpot Academy", url: "https://academy.hubspot.com" },
      ],
    },
    {
      step: "Seek funding and scale your startup",
      resources: [
        { name: "AngelList", url: "https://angel.co" },
      ],
    },
  ],

  "Fitness Trainer": [
    {
      step: "Gain knowledge of anatomy and physiology",
      resources: [
        { name: "NASM", url: "https://www.nasm.org" },
      ],
    },
    {
      step: "Get certified as a personal trainer",
      resources: [
        { name: "ACE Fitness", url: "https://www.acefitness.org" },
      ],
    },
    {
      step: "Learn nutrition basics",
      resources: [
        { name: "Precision Nutrition", url: "https://www.precisionnutrition.com" },
      ],
    },
    {
      step: "Develop effective training programs",
      resources: [
        { name: "Bodybuilding.com", url: "https://www.bodybuilding.com" },
      ],
    },
    {
      step: "Build client relationships and business skills",
      resources: [],
    },
  ],

  "Technical Writer": [
    {
      step: "Improve written communication skills",
      resources: [
        { name: "Coursera Writing", url: "https://www.coursera.org/learn/academic-writing" },
      ],
    },
    {
      step: "Learn industry standard tools (Markdown, LaTeX)",
      resources: [
        { name: "Markdown Guide", url: "https://www.markdownguide.org" },
      ],
    },
    {
      step: "Understand software development lifecycle",
      resources: [],
    },
    {
      step: "Get familiar with API documentation",
      resources: [
        { name: "Swagger", url: "https://swagger.io" },
      ],
    },
    {
      step: "Build a portfolio of technical documents",
      resources: [],
    },
  ],

  "Financial Analyst": [
    {
      step: "Learn fundamentals of finance and accounting",
      resources: [
        { name: "Investopedia", url: "https://www.investopedia.com" },
      ],
    },
    {
      step: "Master Excel skills for financial modeling",
      resources: [
        { name: "Excel Jet", url: "https://exceljet.net" },
      ],
    },
    {
      step: "Understand valuation techniques",
      resources: [
        { name: "Coursera Valuation", url: "https://www.coursera.org/learn/valuation-finance" },
      ],
    },
    {
      step: "Learn data visualization tools",
      resources: [
        { name: "Tableau", url: "https://www.tableau.com/learn/training" },
      ],
    },
    {
      step: "Prepare for CFA or other certifications",
      resources: [
        { name: "CFA Institute", url: "https://www.cfainstitute.org" },
      ],
    },
  ],

  "Digital Marketer": [
    {
      step: "Understand marketing basics and SEO",
      resources: [
        { name: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage" },
      ],
    },
    {
      step: "Master social media marketing",
      resources: [
        { name: "HubSpot Social Media", url: "https://academy.hubspot.com/courses/social-media" },
      ],
    },
    {
      step: "Learn paid advertising (Google Ads, Facebook Ads)",
      resources: [
        { name: "Facebook Blueprint", url: "https://www.facebook.com/business/learn" },
      ],
    },
    {
      step: "Analyze campaigns with analytics tools",
      resources: [
        { name: "Google Analytics", url: "https://analytics.google.com" },
      ],
    },
    {
      step: "Build email marketing and content strategy",
      resources: [
        { name: "Mailchimp", url: "https://mailchimp.com/resources/" },
      ],
    },
  ],

  "UX/UI Designer": [
    {
      step: "Learn UX principles and user psychology",
      resources: [
        { name: "NN Group", url: "https://www.nngroup.com/articles/ux-principles/" },
      ],
    },
    {
      step: "Master UI design tools (Figma, Adobe XD)",
      resources: [
        { name: "Figma Tutorials", url: "https://www.figma.com/resources/learn-design/" },
      ],
    },
    {
      step: "Practice wireframing and prototyping",
      resources: [
        { name: "Adobe XD Ideas", url: "https://xd.adobe.com/ideas/" },
      ],
    },
    {
      step: "Conduct usability testing",
      resources: [
        { name: "Usability.gov", url: "https://www.usability.gov" },
      ],
    },
    {
      step: "Create a portfolio of design projects",
      resources: [],
    },
  ],

  "Teacher/Educator": [
    {
      step: "Understand teaching methodologies and pedagogy",
      resources: [
        { name: "Coursera Teaching", url: "https://www.coursera.org/specializations/teaching" },
      ],
    },
    {
      step: "Get certified or licensed as required",
      resources: [],
    },
    {
      step: "Develop strong communication and classroom management skills",
      resources: [],
    },
    {
      step: "Learn to use technology in teaching",
      resources: [
        { name: "Khan Academy", url: "https://www.khanacademy.org" },
      ],
    },
    {
      step: "Build engaging lesson plans and assessments",
      resources: [],
    },
  ],

  "Architect": [
    {
      step: "Get a degree in architecture",
      resources: [],
    },
    {
      step: "Learn CAD and design software",
      resources: [
        { name: "AutoCAD Tutorials", url: "https://www.autodesk.com/education/learn" },
      ],
    },
    {
      step: "Understand building codes and regulations",
      resources: [],
    },
    {
      step: "Gain internship or apprenticeship experience",
      resources: [],
    },
    {
      step: "Obtain license and continue education",
      resources: [],
    },
  ],

  "Chef/Restaurateur": [
    {
      step: "Learn culinary basics and knife skills",
      resources: [
        { name: "ChefSteps", url: "https://www.chefsteps.com" },
      ],
    },
    {
      step: "Explore different cuisines and cooking styles",
      resources: [],
    },
    {
      step: "Gain experience through internships or apprenticeships",
      resources: [],
    },
    {
      step: "Understand food safety and kitchen management",
      resources: [],
    },
    {
      step: "Start your own food business or restaurant",
      resources: [],
    },
  ],

  "Software Engineer": [
    {
      step: "Master programming fundamentals (Data Structures, Algorithms)",
      resources: [
        { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/data-structures/" },
        { name: "LeetCode", url: "https://leetcode.com" },
      ],
    },
    {
      step: "Learn multiple programming languages and paradigms",
      resources: [
        { name: "FreeCodeCamp", url: "https://www.freecodecamp.org" },
      ],
    },
    {
      step: "Understand system design and software architecture",
      resources: [
        { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
      ],
    },
    {
      step: "Get comfortable with version control and CI/CD pipelines",
      resources: [
        { name: "Git Documentation", url: "https://git-scm.com/doc" },
        { name: "Jenkins", url: "https://www.jenkins.io/doc/" },
      ],
    },
    {
      step: "Contribute to open source and build projects",
      resources: [
        { name: "GitHub", url: "https://github.com" },
      ],
    },

  ],
};

export default function RoadMaps() {
  const username = localStorage.getItem("currentUser") || "User";
  const careerGoal = localStorage.getItem("selectedGoal") || null;

  const roadmap = careerGoal && ROADMAPS[careerGoal] ? ROADMAPS[careerGoal] : [];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-cyan-950 to-black text-cyan-400 font-cinzel">
      <Navbar username={username} />
      <main className="pt-20 max-w-3xl mx-auto px-4 sm:px-6 flex-1">
        <div className="bg-black/80 border border-cyan-400/30 rounded-2xl shadow-lg shadow-cyan-400/30 p-8 sm:p-12 mt-8">
          <h1 className="text-4xl font-bold mb-8 text-cyan-300 text-center tracking-widest">
            Career Roadmap for{" "}
            <span className="text-cyan-400">{careerGoal || "your chosen goal"}</span>
          </h1>

          {roadmap.length > 0 ? (
            <ol className="space-y-8">
              {roadmap.map((item, idx) => (
                <li key={idx} className="bg-black/60 border border-cyan-400/20 rounded-xl p-6 shadow-md shadow-cyan-400/10 hover:shadow-cyan-400/30 transition">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className=" w-8 h-8 rounded-full bg-cyan-400/20 text-cyan-300 font-bold text-xl flex items-center justify-center border border-cyan-400/40 text-center"
                    >
                      {idx + 1}
                    </span>
                    <p className="font-semibold text-cyan-300 text-lg">{item.step}</p>
                  </div>
                  {item.resources.length > 0 && (
                    <ul className="list-disc list-inside ml-8 space-y-1">
                      {item.resources.map((res, i) => (
                        <li key={i}>
                          <a
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-200 underline transition"
                          >
                            {res.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-center text-cyan-400/80 mt-12 text-lg">
              No roadmap available. Please choose a career goal first.
            </p>
          )}
        </div>
      </main>
      <div className="h-16 w-full bg-black" />
    </div>
  );
}

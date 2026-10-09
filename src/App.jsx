import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import ProjectDetails from "./pages/ProjectDetails";

function App() {
  /* Radha Konapte Portfolio */
  
  const [openSkill, setOpenSkill] = useState(null);
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Radha Konapte</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">

          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            Radha <span>Konapte</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            MCA graduate with hands-on experience in React.js, Java, PHP,
            MySQL and REST APIs. I enjoy building responsive, user-friendly
            and practical web applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="hero-btn secondary-btn">
              Let's Connect
            </a>
          </div>

          <div className="hero-tech">
            <span>React.js</span>
            <span>Java</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>REST APIs</span>
          </div>

        </div>
      </section>
      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <p>
            I am an MCA graduate and aspiring Full Stack Developer with a strong
            interest in building modern, responsive and user-friendly web
            applications. I enjoy solving real-world problems through clean,
            practical and scalable software solutions.
          </p>

          <p>
            I have hands-on experience with React.js, JavaScript, Java, PHP,
            MySQL, REST APIs, HTML, CSS and UI/UX design. I have worked on
            internship, live and academic projects, gaining practical experience
            in frontend development, backend integration, database management
            and API integration.
          </p>
          <p>
            I have developed projects such as an AI Career Agent, a spiritual
            mantra and jap application, a business management system and a
            public complaint tracker. I am continuously improving my technical
            skills and looking for an opportunity to contribute to a
            professional software development team.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>

        <div className="skills-accordion">

          {/* Frontend */}
          <div className="skill-category">
            <button
              className="skill-category-header"
              onClick={() =>
                setOpenSkill(openSkill === "frontend" ? null : "frontend")
              }
            >
              <span>Frontend Development</span>
              <span>{openSkill === "frontend" ? "−" : "+"}</span>
            </button>

            {openSkill === "frontend" && (
              <div className="skill-category-content">
                <span>React.js</span>
                <span>JavaScript (ES6+)</span>
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Bootstrap</span>
                <span>Vite</span>
              </div>
            )}
          </div>

          {/* Backend */}
          <div className="skill-category">
            <button
              className="skill-category-header"
              onClick={() =>
                setOpenSkill(openSkill === "backend" ? null : "backend")
              }
            >
              <span>Backend Development</span>
              <span>{openSkill === "backend" ? "−" : "+"}</span>
            </button>

            {openSkill === "backend" && (
              <div className="skill-category-content">
                <span>PHP</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>REST APIs</span>
              </div>
            )}
          </div>

          {/* Programming */}
          <div className="skill-category">
            <button
              className="skill-category-header"
              onClick={() =>
                setOpenSkill(openSkill === "programming" ? null : "programming")
              }
            >
              <span>Programming Languages</span>
              <span>{openSkill === "programming" ? "−" : "+"}</span>
            </button>

            {openSkill === "programming" && (
              <div className="skill-category-content">
                <span>Java</span>
                <span>JavaScript</span>
                <span>Python</span>
              </div>
            )}
          </div>

          {/* Database */}
          <div className="skill-category">
            <button
              className="skill-category-header"
              onClick={() =>
                setOpenSkill(openSkill === "database" ? null : "database")
              }
            >
              <span>Database</span>
              <span>{openSkill === "database" ? "−" : "+"}</span>
            </button>

            {openSkill === "database" && (
              <div className="skill-category-content">
                <span>MySQL</span>
                <span>SQL</span>
                <span>MongoDB</span>
                <span>SQLite</span>
              </div>
            )}
          </div>

          {/* UI/UX */}
          <div className="skill-category">
            <button
              className="skill-category-header"
              onClick={() =>
                setOpenSkill(openSkill === "uiux" ? null : "uiux")
              }
            >
              <span>UI/UX Design</span>
              <span>{openSkill === "uiux" ? "−" : "+"}</span>
            </button>

            {openSkill === "uiux" && (
              <div className="skill-category-content">
                <span>Figma</span>
                <span>Wireframing</span>
                <span>Responsive Design</span>
                <span>UI Design</span>
              </div>
            )}
          </div>

          {/* Tools */}
          <div className="skill-category">
            <button
              className="skill-category-header"
              onClick={() =>
                setOpenSkill(openSkill === "tools" ? null : "tools")
              }
            >
              <span>Tools & Technologies</span>
              <span>{openSkill === "tools" ? "−" : "+"}</span>
            </button>

            {openSkill === "tools" && (
              <div className="skill-category-content">
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Postman</span>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">My Projects</h2>

        <p className="section-subtitle">
          Some of the projects I have developed during my academic,
          internship and personal development journey.
        </p>

        <div className="projects-container">

          {/* AI Career Agent */}
          <div className="project-card">
            <div className="project-number">01</div>

            <h3>AI Career Agent</h3>

            <p>
              An AI-powered career assistance platform designed to help
              users with resume analysis, job matching, resume building
              and cover letter generation.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Vite</span>
              <span>JavaScript</span>
              <span>AI</span>
            </div>

            <div className="project-buttons">

              <Link to="/project/ai-career-agent">
                View Details
              </Link>

              <a
                href="https://ai-career-agent-coral.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/radhakonapte17/ai-career-agent"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>
          </div>

          {/* Repray */}
          <div className="project-card">
            <div className="project-number">02</div>

            <h3>Repray / Likha-Jap</h3>

            <p>
              A responsive spiritual web application for mantra chanting,
              jap counting and spiritual content with multilingual support
              and an interactive counting experience.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>REST API</span>
            </div>

            <div className="project-buttons">

              <Link to="/project/repray-likha-jap">
                View Details
              </Link>

              <a
                href="https://repray.in"
                target="_blank"
                rel="noreferrer"
              >
                Live Project
              </a>

              <a
                href="https://github.com/radhakonapte17/repray.in--project-spiritual-religious-content"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>
          </div>

          {/* Khatabook */}
          <div className="project-card">
            <div className="project-number">03</div>

            <h3>Business Management System</h3>

            <p>
              A Khatabook-inspired business management application for
              managing customers, suppliers, credit, debit, balances,
              dashboard statistics and transaction records.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MySQL</span>
            </div>

            <div className="project-buttons">

              <Link to="/project/business-management">
                View Details
              </Link>

              <a
                href="https://github.com/radhakonapte17/Khatabook-Inspired-Business-Management-System"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>
          </div>

          {/* Complaint Tracker */}
          <div className="project-card">
            <div className="project-number">04</div>

            <h3>Public Complaint Tracker</h3>

            <p>
              A complaint management application developed to register,
              manage and track public complaints using Java, JDBC and
              MySQL.
            </p>

            <div className="project-tech">
              <span>Java</span>
              <span>JDBC</span>
              <span>MySQL</span>
            </div>

            <div className="project-buttons">

              <Link to="/project/public-complaint-tracker">
                View Details
              </Link>

            </div>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>

        <div className="experience-container">

          {/* Dialogue Media */}
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>React Developer & UI/UX Designer</h3>
                <h4>Dialogue Media</h4>
              </div>

              <span className="experience-duration">
                3 Months
              </span>
            </div>

            <p className="experience-description">
              Worked on responsive web interfaces and contributed to frontend
              development and UI/UX design. Gained practical experience in
              developing reusable React components, integrating APIs and
              working with backend systems.
            </p>

            <ul className="experience-list">
              <li>Developed responsive user interfaces using React.js and JavaScript.</li>
              <li>Created reusable React components for web applications.</li>
              <li>Integrated REST APIs with frontend applications.</li>
              <li>Worked with PHP and MySQL backend systems.</li>
              <li>Designed UI/UX layouts and wireframes using Figma.</li>
              <li>Debugged, tested and improved application functionality.</li>
            </ul>

            <div className="experience-tech">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>REST APIs</span>
              <span>Figma</span>
            </div>
          </div>

          {/* Codec Technologies */}
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Full Stack Web Development Intern</h3>
                <h4>Codec Technologies Pvt. Ltd.</h4>
              </div>

              <span className="experience-duration">
                2026
              </span>
            </div>

            <p className="experience-description">
              Completed practical full-stack web development training with
              hands-on project experience. Worked across frontend, backend,
              database and API development while following software development
              practices.
            </p>

            <ul className="experience-list">
              <li>Developed responsive web pages using HTML, CSS and JavaScript.</li>
              <li>Worked with PHP and MySQL for backend development.</li>
              <li>Implemented and tested REST API functionality.</li>
              <li>Worked with Git for version control and project management.</li>
              <li>Practiced debugging and troubleshooting of web applications.</li>
              <li>Worked with Agile development practices and project workflows.</li>
            </ul>

            <div className="experience-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>REST APIs</span>
              <span>Git</span>
            </div>
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>

        <div className="education-container">

          {/* MCA */}
          <div className="education-card">
            <div className="education-year">2024 – 2026</div>

            <h3>Master of Computer Applications (MCA)</h3>

            <p>
              Pratibha Institute of Business Management, Pune
            </p>

            <span>CGPA: 7.93</span>
          </div>

          {/* BCA */}
          <div className="education-card">
            <div className="education-year">2021 – 2024</div>

            <h3>Bachelor of Computer Applications (BCA)</h3>

            <p>
              Shankarlal Khandelwal College, Akola
            </p>

            <span>CGPA: 7.97</span>
          </div>

          {/* HSC */}
          <div className="education-card">
            <div className="education-year">2019 – 2021</div>

            <h3>Higher Secondary Certificate (HSC)</h3>

            <p>
              RLT College, Maharashtra State Board, Akola
            </p>

            <span>Percentage: 90.00%</span>
          </div>

          {/* SSC */}
          <div className="education-card">
            <div className="education-year">2018 – 2019</div>

            <h3>Secondary School Certificate (SSC)</h3>

            <p>
              Moharidevi Khandelwal Vidyalaya, Maharashtra State Board, Akola
            </p>

            <span>Percentage: 86.80%</span>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2 className="section-title">Let's Connect</h2>

        <div className="contact-container">

          <div className="contact-intro">
            <h3>Have an opportunity or project in mind?</h3>

            <p>
              I am open to opportunities in software development, full-stack
              development and frontend development. Feel free to connect with
              me for job opportunities, collaborations or professional
              discussions.
            </p>
          </div>

          <div className="contact-links">

            <a
              href="mailto:your-email@example.com"
              className="contact-card"
            >
              <div className="contact-icon">✉</div>

              <div>
                <h4>Email</h4>
                <p>radhakonapte111@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/radha-konapte-127928317"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">in</div>

              <div>
                <h4>LinkedIn</h4>
                <p> www.linkedin.com/in/radha-konapte-127928317 </p>
              </div>
            </a>

            <a
              href="https://github.com/radhakonapte17"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">Git</div>

              <div>
                <h4>GitHub</h4>
                <p> https://github.com/radhakonapte17</p>
              </div>
            </a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Radha Konapte</h3>

          <p>
            Full Stack Developer | React.js | Java | PHP | MySQL
          </p>

          <div className="footer-links">
            <a
              href="https://github.com/radhakonapte17"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/radha-konapte-127928317"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="#contact">
              Contact
            </a>
          </div>

          <div className="footer-line"></div>

          <p className="footer-copy">
            © {new Date().getFullYear()} Radha Konapte. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/project/:id"
          element={<ProjectDetails />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;
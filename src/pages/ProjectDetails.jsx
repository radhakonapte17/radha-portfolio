import { Link, useParams } from "react-router-dom";
import "../App.css";

const projects = {
    "ai-career-agent": {
        title: "AI Career Agent",

        image: "ai-career-agent.png",

        category: "AI Career & Job Application Platform",

        description:
            "AI Career Agent is a web-based career assistance platform designed to help job seekers manage different stages of their job search.",

        overview:
            "The application provides features such as resume analysis, job matching, resume building and cover letter generation. The goal was to create a simple and user-friendly platform that helps freshers prepare for job opportunities.",

        technologies: [
            "React.js",
            "Vite",
            "JavaScript",
            "HTML5",
            "CSS3",
            "AI",
            "REST API",
            "Git & GitHub"
        ],

        features: [
            "User login interface",
            "Resume Analyzer",
            "Job Matching",
            "Resume Builder",
            "Cover Letter Generator",
            "Job Search interface",
            "Responsive user interface",
            "AI-assisted career features"
        ],

        contribution: [
            "Designed and developed the React frontend",
            "Created reusable React components",
            "Implemented responsive layouts",
            "Developed resume analysis interface",
            "Created job matching interface",
            "Implemented resume builder functionality",
            "Created cover letter generation interface",
            "Integrated application features"
        ],

        live:
            "https://ai-career-agent-coral.vercel.app/",

        github:
            "https://github.com/radhakonapte17/ai-career-agent"
    },

    "repray-likha-jap": {
        title: "Repray / Likha-Jap",

        category: "Spiritual Mantra & Jap Application",

        description:
            "A responsive spiritual web application designed for mantra chanting, jap counting and spiritual content.",

        overview:
            "The application provides an interactive mantra chanting experience with multiple languages, counting functionality and spiritual content. The frontend was developed using React and integrated with a PHP/MySQL backend.",

        technologies: [
            "React.js",
            "JavaScript",
            "PHP",
            "MySQL",
            "REST API",
            "HTML5",
            "CSS3",
            "Figma"
        ],

        features: [
            "Mantra selection",
            "Multiple language support",
            "Jap counting",
            "108 bead counting",
            "Cycle counting",
            "Vibration notification",
            "Audio and bell interaction",
            "Responsive UI"
        ],

        contribution: [
            "Designed responsive UI",
            "Created React components",
            "Integrated PHP backend APIs",
            "Worked with MySQL data",
            "Implemented mantra counting interface",
            "Created UI/UX layouts using Figma",
            "Tested and debugged application features"
        ],

        live:
            "https://repray.in",

        github:
            "https://github.com/radhakonapte17/repray.in--project-spiritual-religious-content"
    },

    "business-management": {
        title: "Business Management System",

        category: "Khatabook-Inspired Business Management",

        description:
            "A business management system designed to manage customers, suppliers, credit, debit and transaction records.",

        overview:
            "The application provides a simple digital solution for small businesses to manage customer and supplier information and track financial transactions.",

        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "MySQL",
            "REST API",
            "JavaScript"
        ],

        features: [
            "Customer management",
            "Supplier management",
            "Credit transactions",
            "Debit transactions",
            "Balance tracking",
            "Dashboard statistics",
            "Search functionality",
            "Date filtering",
            "CSV export",
            "Print functionality"
        ],

        contribution: [
            "Developed React frontend",
            "Created REST API integration",
            "Implemented CRUD operations",
            "Worked with MySQL database",
            "Created customer and supplier management",
            "Implemented transaction tracking",
            "Created dashboard functionality"
        ],

        live: null,

        github:
            "https://github.com/radhakonapte17/Khatabook-Inspired-Business-Management-System"
    },

    "public-complaint-tracker": {
        title: "Public Complaint Tracker",

        category: "Complaint Management System",

        description:
            "A Java-based complaint management application designed to register and manage public complaints.",

        overview:
            "The project was developed to understand Java programming, database connectivity and CRUD operations. It provides a console-based interface for managing complaint records.",

        technologies: [
            "Java",
            "JDBC",
            "MySQL",
            "SQL"
        ],

        features: [
            "Register complaint",
            "View complaints",
            "Update complaint",
            "Delete complaint",
            "Complaint status management",
            "MySQL database connectivity"
        ],

        contribution: [
            "Developed Java application logic",
            "Implemented JDBC connectivity",
            "Created database operations",
            "Implemented CRUD functionality",
            "Tested application workflows"
        ],

        live: null,

        github: null
    }
};

function ProjectDetails() {
    const { id } = useParams();

    const project = projects[id];

    if (!project) {
        return (
            <div className="not-found">
                <h1>Project Not Found</h1>

                <Link to="/">
                    Back to Portfolio
                </Link>
            </div>
        );
    }

    return (
        <div className="project-details">

            <div className="details-header">

                <Link to="/" className="back-button">
                    ← Back to Portfolio
                </Link>

                <p className="project-category">
                    {project.category}
                </p>

                <h1>{project.title}</h1>

                <p className="details-description">
                    {project.description}
                </p>

                <div className="details-buttons">

                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="details-btn primary-btn"
                        >
                            Live Demo
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="details-btn"
                        >
                            GitHub
                        </a>
                    )}

                </div>

            </div>

            <div className="details-content">

                <section className="project-image-section">

                    <h2>Project Preview</h2>

                    <img
                        src={`/projects/${project.image}`}
                        alt={`${project.title} preview`}
                        className="project-preview"
                    />
                    <img
                        src="/projects/repray-likha-jap.png"
                        alt="Repray - Likha Jap Project"
                        className="project-preview"
                    />

                </section>

                <section>
                    <h2>Project Overview</h2>

                    <p>{project.overview}</p>
                </section>

                <section>
                    <h2>Key Features</h2>

                    <div className="details-list">

                        {project.features.map((feature, index) => (
                            <div key={index} className="detail-item">
                                ✓ {feature}
                            </div>
                        ))}

                    </div>
                </section>

                <section>
                    <h2>Technologies Used</h2>

                    <div className="technology-list">

                        {project.technologies.map((technology, index) => (
                            <span key={index}>
                                {technology}
                            </span>
                        ))}

                    </div>
                </section>

                <section>
                    <h2>My Contribution</h2>

                    <div className="details-list">

                        {project.contribution.map((item, index) => (
                            <div key={index} className="detail-item">
                                ✓ {item}
                            </div>
                        ))}

                    </div>
                </section>

            </div>

        </div>
    );
}

export default ProjectDetails;
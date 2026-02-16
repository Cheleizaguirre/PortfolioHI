import cipotes from "../assets/cipotesv2.png";
import emotionsense from "../assets/emotionsense.png";
import emizon from "../assets/emizon.png";

const projects = [
  {
    title: "Cipotes Backoffice",
    description:
      "Electoral management system built with Laravel 12 and MySQL 8. Provides a role-based admin panel to manage candidates, parties, and electoral data. Includes a secure REST API with API-Key authentication and rate limiting for external integrations.",
    image: cipotes,
    buttons: [
      { text: "Client Repo", link: "https://github.com/JJerryC/tuvotocipotebackoffice" },
    ],
  },
  {
    title: "E-Mizon",
    description:
      "Full-stack marketplace platform built with React 19 (TypeScript) and Laravel 12. Features role-based dashboards, PayPal integration, escrow logic, reviews, dispute tickets, and KPI analytics for secure and scalable e-commerce operations.",
    image: emizon,
    buttons: [
      { text: "Client Repo", link: "https://github.com/JJerryC/e-mizon_e-commerce" },
      { text: "API Repo", link: "https://github.com/ferriver05/e-mizon_backend" },
    ],
  },
  {
    title: "Emotionsense AI",
    description:
      "AI-powered Real-time emotion detection desktop app built with Python. It uses OpenCV and FER with MTCNN to analyze facial expressions through a live camera feed. The interface was developed with Tkinter and ttkbootstrap, displaying detected emotions, confidence levels, and emotion history.",
    image: emotionsense,
    buttons: [{ text: "Client Repo", link: "https://github.com/Cheleizaguirre/emotionsenseia" }],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <hr className="section-line" />
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-buttons">
                {project.buttons.map((btn, i) => (
                  <a key={i} href={btn.link} target="_blank" className="project-btn">
                    {btn.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
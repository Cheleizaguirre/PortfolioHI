import agileTrello from "../assets/trello.png";
import mysql from "../assets/mysql.png";
import dataStructures from "../assets/estructuras_de_datos.png";
import agileFundamentals from "../assets/proyectos_agil.png";
import angular from "../assets/angular.png";
import webdev from "../assets/html_css.png";
import networking from "../assets/redes.png";
import shell from "../assets/shell_scripting.png";
import cybersecurity from "../assets/ciberseguridad.png";
import hackathon from "../assets/hackathon.png";
import networking_design from "../assets/diseno_redes.png";

const certificates = [
  {
    title: "Network Design Fundamentals",
    institution: "LinkedIn Learning",
    date: "March 2026",
    image: networking_design,
  },
  {
    title: "Essential Network Management",
    institution: "LinkedIn Learning",
    date: "November 2025",
    image: networking,
  },
  {
    title: "Hackathon 2025 Participation: AI in Education - Driving Innovation and Scaling Solutions",
    institution: "Puzzle",
    date: "September 2025",
    image: hackathon,
  },
  {
    title: "Cybersecurity Practice: Servers and Workstations",
    institution: "LinkedIn Learning",
    date: "June 2025",
    image: cybersecurity,
  },
  {
    title: "Learn Shell Scripting in Linux",
    institution: "LinkedIn Learning",
    date: "March 2025",
    image: shell,
  },
  {
    title: "Agile Project Management With Trello",
    institution: "LinkedIn Learning",
    date: "July 2024",
    image: agileTrello,
  },
  {
    title: "Mastering MySQL",
    institution: "LinkedIn Learning",
    date: "July 2024",
    image: mysql,
  },
  {
    title: "Programming Fundamentals: Data Structures",
    institution: "LinkedIn Learning",
    date: "March 2024",
    image: dataStructures,
  },
  {
    title: "Fundamentals of Agile Project Management",
    institution: "LinkedIn Learning",
    date: " March 2024",
    image: agileFundamentals,
  },
  {
    title: "Angular from Zero to Expert: Building a Real-World Application",
    institution: "Udemy",
    date: "November 2023",
    image: angular,
  },
  {
    title: "Learn Web Development from Zero to Expert with Projects: HTML + CSS",
    institution: "Udemy",
    date: "July 2023",
    image: webdev,
  },
];

export default function Certificates() {
  return (
    <section id="certificates">
      <h2>Courses</h2>
      <hr className="section-line" />
      <div className="cert-container">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <a href={cert.image} target="_blank">
              <img src={cert.image} alt={cert.title} className="cert-img" />
            </a>
            <h3>{cert.title}</h3>
            <p>{cert.institution}</p>
            <span>{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
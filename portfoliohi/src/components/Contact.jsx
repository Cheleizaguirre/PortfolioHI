import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact</h2>
      <hr className="section-line" />

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-left">
          <p className="contact-text">
            Interested in working together? You can find me here 🙂
          </p>

          <h4>Social Media</h4>

          <div className="social-icons">
            <a href="https://www.instagram.com/cheleizaguirre/" target="_blank">
              <FaInstagram />
            </a>
            <a href="www.linkedin.com/in/hector-izaguirre" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Cheleizaguirre" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-right">
          <p>
            <FaEnvelope className="contact-icon" />
            HIzaguirre2000@gmail.com
          </p>

          <p>
            <FaPhone className="contact-icon" />
            +504 9592-6318
          </p>
        </div>

      </div>
    </section>
  );
}
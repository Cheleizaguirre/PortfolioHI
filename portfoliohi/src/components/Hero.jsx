import profilePic from "../assets/Foto retrato.jpeg";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <img src={profilePic} alt="Héctor Izaguirre" className="profile-img" />
      
      <h1 className="hero-title">Héctor Izaguirre</h1>
      
      <p className="hero-subtitle">
        Honduran 🇭🇳 Web Developer
      </p>

      <p className="hero-description">
        Passionate about building modern, scalable and user-friendly web applications.
      </p>
    </section>
  );
}
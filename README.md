# Personal Portfolio – Héctor Izaguirre

A modern and responsive static portfolio website built with React 19 and Vite.
The site showcases projects, certifications, and contact information in a clean and professional UI, designed to highlight technical skills and real-world development experience.

---

## 🎯 Purpose

1. **Present** personal projects and technical experience in a professional format.
2. **Practice** building a modern React application using Vite.
3. **Implement** reusable components and structured UI sections.
4. **Create** a responsive and visually appealing developer portfolio.

---

## ✨ Key Features

- Hero Section with profile image and introduction.
- Projects Section showcasing full-stack and AI applications.
- Certificates Section displaying completed courses and achievements.
- Contact Section with social media links and direct contact information.
- Reusable Components Architecture (Navbar, Hero, Projects, Certificates, Contact).
- Responsive Design optimized for desktop and mobile devices.
- Modern UI with React Icons integration.

---

## 🛠️ Stack

| Layer      |	Technology              |
|------------|--------------------------|
| Frontend   | React 19                 |
| Build Tool |	Vite 7                  |
| Styling    |	CSS3                    |
| Icons      |	React Icons             |
| Language   |	JavaScript (ES Modules) |

---

## 📂 Project Structure

```lua
mi-portafolio/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Certificates.jsx
│   │   └── Contact.jsx
│   ├── assets/
│   └── App.jsx
│
├── package.json
└── vite.config.js
```

## ⚙️ Local Installation (Developers)

```bash
# 1. Clone repository
$ git clone https://github.com/yourusername/mi-portafolio.git
$ cd mi-portafolio

# 2. Install dependencies
$ npm install

# 3. Run development server
$ npm run dev
```

The app will be available at:

```arduino
http://localhost:5173/
```

To build for production:

```bash
$ npm run build
```

To preview production build:

```bash
$ npm run preview
```

---

## 🧠 How It Works

- The application is built using functional React components.
- Each section (Hero, Projects, Certificates, Contact) is modular and reusable.
- Project and certificate data are stored in arrays and rendered dynamically using .map().
- External links (GitHub, LinkedIn, Instagram) open in new tabs.
- Vite handles fast development builds and optimized production output.

---

## 🚀 Future Improvements

- Add dark/light mode toggle.
- Integrate animations with Framer Motion.
- Add a blog section.
- Connect a contact form to an email service (EmailJS or backend API).
- Deploy with CI/CD pipeline automation.

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome.

1. Fork the repository.
2. Create a branch (feature/YourImprovement).
3. Submit a Pull Request describing your changes.

---

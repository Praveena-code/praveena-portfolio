# 💻 Praveena Venkatraj — VS Code Portfolio

> A personal developer portfolio built to look and feel exactly like **Visual Studio Code** — complete with a file explorer, editor tabs, syntax-highlighted content, activity bar, and a live status bar.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Powered by Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

---

## 🌐 Live Demo

**[praveena-portfolio.vercel.app](https://praveena-portfolio.vercel.app)**

---

## 📸 Preview

> The portfolio simulates a full VS Code IDE interface — dark theme, tabbed navigation, file explorer sidebar, breadcrumb bar, line numbers, and a status bar with a live clock.

---

## ✨ Features

- 🖥️ **VS Code IDE Layout** — Full-screen editor aesthetic with activity bar, sidebar, tab bar, breadcrumbs, line numbers, and status bar
- 🎨 **Dracula / Dark+ Theme** — Premium dark color palette with syntax-highlighted text (keywords, strings, comments, types)
- 📁 **Interactive File Explorer** — Click files in the sidebar to open them as editor tabs
- 🗂️ **Closeable Tabs** — Open multiple files simultaneously, close with the × button
- 📱 **Responsive Design** — Mobile-friendly with a hamburger menu overlay for small screens
- 🕐 **Live Clock** — Real-time clock in the status bar
- ⚡ **Zero External UI Libraries** — Pure React with inline styles, no CSS framework dependency

---

## 🗂️ Portfolio Sections

| File | Tab | Content |
|------|-----|---------|
| `home.tsx` | 🏠 Home | ASCII name art, role tagline, stat cards, quick navigation |
| `projects.json` | 🚀 Projects | All projects with tech stack badges, highlights, GitHub links |
| `about_me.txt` | 👤 About | Education, metrics, skills grid, certifications |
| `contact.md` | 📬 Contact | Terminal-style links, mock contact form |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **JavaScript (ES6+)** | Language |
| **Inline CSS / CSS Variables** | Styling & theming |
| **Vercel** | Hosting & deployment |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Praveena-code/praveena-portfolio.git

# 2. Navigate into the project directory
cd praveena-portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 📁 Project Structure

```
praveena-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main portfolio component (VS Code layout + all tabs)
│   ├── index.css        # Global reset styles
│   └── main.jsx         # React entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## ☁️ Deployment

This project is deployed on **Vercel** with automatic CI/CD.

Every push to the `main` branch triggers an automatic redeployment.

### Manual Deployment Steps

```bash
# 1. Push your changes to GitHub
git add .
git commit -m "Your commit message"
git push origin main

# 2. Vercel auto-deploys — no further action needed
```

To deploy manually from the CLI:

```bash
npm install -g vercel
vercel --prod
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Praveena-code">Praveena Venkatraj</a>
</p>

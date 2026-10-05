# VSRP Homepage

A modern, responsive landing page application built for VSRP using **React** and **Vite**.

---

## 🛠️ Tech Stack & Framework

* **Framework:** React 18+
* **Build Tool:** Vite
* **Styling:** CSS3 (Component-level styles)
* **Icons & Assets:** Custom SVG icons & optimized image assets

---

## 📁 Key Folder Structure

```text
machine_test/
├── public/                 # Static assets (images, logos, SVG icons)
├── src/
│   ├── assets/             # Global media files and design assets
│   ├── components/         # Modular UI components
│   │   ├── upper/          # Top section (Navbar, Hero, Stats, BuildSection)
│   │   ├── middle/         # Core content (Industries, Process, Projects, WhyUs)
│   │   └── lower/          # Bottom section (About, FAQ, FloatingSupport, Footer)
│   ├── data/               # Dynamic datasets (FAQs, industry content)
│   ├── App.jsx             # Main layout component
│   ├── index.css           # Global resets and typography
│   └── main.jsx            # React app entry point
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration

# Prince Kumar - Developer Portfolio
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/prince-m2hgamerz/portfolio)

This repository contains the source code for my personal portfolio website. It's a modern, fully-featured, and interactive single-page application built with React, TypeScript, and Vite, showcasing my skills, projects, and experience as a Full-Stack Web Developer. The website features a dynamic user interface with a real-time 3D black hole background, fluid animations, and a comprehensive overview of my work.

## ✨ Features

*   **Interactive 3D Background**: A stunning real-time 3D black hole rendering created with React Three Fiber, which subtly animates and reacts to user scrolling.
*   **Fluid Animations**: Smooth, performant animations powered by Framer Motion are used throughout the site for page transitions, element reveals, and interactive feedback.
*   **Comprehensive Sections**:
    *   **Hero**: An engaging introduction with floating 3D elements.
    *   **About**: A summary of my background, philosophy, and key stats.
    *   **Skills**: A categorized list of my technical skills with dynamic progress bars.
    *   **Projects**: A filterable gallery of my work with a detailed 3D modal view for each project.
    *   **Experience**: An animated timeline of my professional work and education.
    *   **Services**: A breakdown of the professional services I offer.
    *   **Testimonials**: A carousel displaying client feedback.
    *   **Achievements**: A showcase of certifications and awards.
    *   **Blog**: A section for my latest articles and insights.
    *   **Contact**: A functional contact form and my contact details.
*   **Responsive Design**: A mobile-first design built with Tailwind CSS ensures a seamless experience across all devices, from mobile phones to desktops.
*   **Dark & Light Mode**: A theme toggler allows users to switch between light and dark modes, with their preference saved in local storage.
*   **Data-Driven Content**: All portfolio data (projects, experiences, skills, etc.) is managed centrally in `src/data/portfolio.ts` for easy updates.

## 🛠️ Tech Stack

This project is built using a modern and robust technology stack:

*   **Framework**: [React](https://react.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)
*   **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) & [Drei](https://github.com/pmndrs/drei)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Linting**: [ESLint](https://eslint.org/)

## 🚀 Getting Started

To run this project locally, follow these steps.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/prince-m2hgamerz/portfolio.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd portfolio
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

*   **Development Server:**
    Run the application in development mode with hot-reloading.
    ```sh
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view it in your browser.

*   **Production Build:**
    Create a production-ready build of the application. The static files will be placed in the `dist/` directory.
    ```sh
    npm run build
    ```

*   **Linting:**
    Run the ESLint checker to find and fix problems in the codebase.
    ```sh
    npm run lint
    ```

## 📂 Project Structure

The project follows a component-based architecture, with a clear separation of concerns.

```
/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── 3D/             # React Three Fiber components
│   │   ├── About.tsx       # About Me section
│   │   ├── Projects.tsx    # Projects section
│   │   └── ...             # Other section components
│   ├── data/
│   │   └── portfolio.ts    # Centralized data for the portfolio
│   ├── hooks/
│   │   ├── useTheme.ts     # Custom hook for theme management
│   │   └── ...
│   ├── types/
│   │   └── index.ts        # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.ts          # Vite configuration
```

## 📬 Contact

**Prince Kumar**

*   **Email**: [m2hgamerz.prince@gmail.com](mailto:m2hgamerz.prince@gmail.com)
*   **GitHub**: [@prince-m2hgamerz](https://github.com/prince-m2hgamerz)
*   **LinkedIn**: [prince-kumar-m2h](https://linkedin.com/in/prince-kumar-m2h)

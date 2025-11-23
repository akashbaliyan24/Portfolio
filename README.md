# Portfolio Website | React, Vite, & Framer Motion

A modern, fully responsive personal portfolio website built from scratch using React, Vite, Tailwind CSS, and Framer Motion. This project showcases my skills, features my work, and provides an easy way for visitors to get in touch.

**<a href="https://akash-portfolio-nine-delta.vercel.app/" target="_blank" rel="noopener noreferrer">➡️ Live Demo</a>**

## ✨ Features

- **Modern & Responsive Design:** Fully responsive layout that looks great on all devices, from mobile phones to desktops.
- **Light & Dark Mode:** Seamless theme switching for user comfort, with all components adapting to the chosen mode.
- **Smooth Animations:** Built with **Framer Motion** for engaging, fluid, and interactive UI animations on scroll and hover.
- **Interactive Sections:** Includes dedicated, animated sections for:
    - 🦸‍♂️ **Hero Section:** An impactful introduction.
    - 👨‍💻 **About & Journey:** My story, mission, and a timeline of my career milestones.
    - 🛠️ **Skills:** A dynamic display of my technical skills.
    - 📂 **Projects:** A grid of project cards with hover effects and links.
    - 📞 **Contact Form:** A functional contact form integrated with **EmailJS** to send messages directly to my inbox.
- **Reusable Components:** Built with a modular structure for easy maintenance and scalability.

## 🚀 Tech Stack

This project was built using the following technologies:

-   **Frontend:** React.js, Vite
-   **Styling:** Tailwind CSS
-   **Animations:** Framer Motion
-   **Icons:** Lucide React, React Icons
-   **Email Service:** EmailJS

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```
    git clone https://github.com/akashbaliyan24/Portfolio.git
    ```
2.  **Navigate to the project directory:**
    ```
    cd Portfolio
    ```
3.  **Install dependencies:**
    ```
    npm install
    ```
4.  **Set up environment variables (for the contact form):**

    Create a new file named `.env` in the root of your project and add the following variables. You can get these from your EmailJS account dashboard.

    ```
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    > **Note:** You will also need to update the `ContactSection.jsx` file to use these environment variables (`import.meta.env.VITE_...`) instead of hardcoded strings for better security.

5.  **Run the development server:**
    ```
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or another port if 5173 is busy).

## 📬 Contact

Akash Baliyan

-   **GitHub:** [@akashbaliyan24](https://github.com/akashbaliyan24)
-   **LinkedIn:** [Akash Baliyan](https://www.linkedin.com/in/akash-baliyan-485059240/)

---

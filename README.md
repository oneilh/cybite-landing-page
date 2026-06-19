# Cybite Landing Page

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Mantine](https://img.shields.io/badge/mantine-339AF0.svg?style=for-the-badge&logo=mantine&logoColor=white)

> A high-performance, modern landing page designed to capture attention and drive conversions through sleek UI/UX and lightning-fast load times.

## About The Project

This repository contains the front-end architecture for the Cybite Landing Page. I built this project to deepen my expertise in modern React ecosystems while delivering a robust, production-ready solution. Rather than relying on simple boilerplate, I focused on implementing scalable styling strategies, smooth user interactions, and maintaining strict component architecture. This project represents my commitment to continuously expanding my engineering skillset by applying industry-standard best practices to deliver tangible user value.

## Screenshots

<details>
<summary>Click to view screenshots</summary>

<br>

<!-- Replace these placeholder images with your actual screenshots in the assets/screenshots folder -->

_Hero Section:_
![Hero Section](./assets/screenshots/hero.png)

_Feature Showcase:_
![Features Showcase](./assets/screenshots/features.png)

_Testimonials Slider:_
![Testimonials Slider](./assets/screenshots/testimonials.png)

</details>

## Key Features

* **Engaging Hero & Interactive UI:** Grabs user attention immediately with dynamic rendering and smooth transitions.
* **Fully Responsive Layout:** Optimized across all viewport sizes, from mobile devices to ultrawide monitors, ensuring a consistent user experience.
* **Dynamic Content Sliders:** Integrated touch-friendly carousels to showcase testimonials and product features efficiently.
* **Accessible Design:** Implemented UI components with accessibility in mind, ensuring a wide audience reach.
* **High Performance:** Leveraged Vite's optimized build process to deliver minimal bundle sizes and sub-second load times.

## Tech Stack

* **Framework:** React 19
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v4
* **UI Components:** Mantine UI
* **Interactions:** Swiper (for advanced carousels), React Icons

## Architecture & Implementation Details

During the development of this project, I tackled several interesting engineering challenges:

1. **Performant Carousel Integration with Swiper:** Integrating complex, touch-friendly sliders without bloating the main bundle required careful lazy-loading and CSS isolation. I managed the slider state at a high level to ensure synchronization across different UI components without re-rendering the entire page.
2. **Hybrid Styling Architecture:** To achieve the exact desired visual fidelity, I combined Tailwind CSS's utility-first approach for layout and rapid prototyping with Mantine UI's robust, accessible component primitives. This required a carefully configured PostCSS pipeline to ensure styles did not clash and CSS variables were synchronized across both systems.
3. **Optimized Build Pipeline:** Adopting Vite over traditional bundlers allowed for instantaneous HMR (Hot Module Replacement) during development. For production, I fine-tuned the Vite configuration to effectively chunk the React DOM and third-party libraries, significantly reducing the initial JavaScript payload.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/your-username/cybite-landing-page.git
   ```
2. Navigate to the project directory
   ```sh
   cd cybite-landing-page
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory (using the example provided if available)
   ```sh
   cp .env.example .env
   ```
   *Note: Add any required environment variables to the new `.env` file.*

5. Start the development server
   ```sh
   npm run dev
   ```

---
*Note: This repository is a sanitized clone of the project built during my time at Cybite and contains placeholder data for demonstration purposes.*

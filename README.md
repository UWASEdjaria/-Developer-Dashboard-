# 🌦️ Developer Dashboard

A simple React dashboard that displays GitHub user data and current weather for Kigali.
Includes a Light/Dark theme toggle, responsive UI, and organized folder structure using hooks + context.

# ✅ Features

🔥 Fetch GitHub profile details using GitHub API

🌤️ Live weather info using WeatherAPI

⏱️ Real-time clock inside Weather Card

🌓 Light / Dark mode theme toggle

📱 Fully responsive and modern UI

🧩 Clean code using Custom Hooks & Context

# 🚀 Tech Stack
Technology	Usage
React.js	Main framework
Tailwind CSS	Styling
React Router	Navigation
WeatherAPI	Weather data
GitHub REST API	GitHub user data

# 📂 Project Structure
Developer-Dashboard/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── GithubCard.jsx
│   │   └── WeatherCard.jsx
│   │
│   ├── hooks/
│   │   └── useWeather.js   # Fetches weather data
│   │
│   ├── context/
│   │   └── ThemeContext.jsx # Light/Dark mode state
│   │
│   ├── App.js
│   ├── index.css
│   └── main.jsx
│
├── public/
│   └── index.html
│
└── package.json

⚙️ Setup & Installation

Clone the project:

git clone https://github.com/YOUR-USERNAME/Developer-Dashboard.git
cd Developer-Dashboard


Install dependencies:

npm install


Run the development server:

npm run dev

# 🔑 API Keys Required

To make Weather feature work:

1️⃣ Create an account at https://www.weatherapi.com

2️⃣ Generate your API key
3️⃣ Replace the key inside useWeather.js:

const url = "https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=Kigali&aqi=no";

# 🧠 Learning Goals

Practice API fetching in React

Improve UI layout using Tailwind

Learn global state with Context API

Build and deploy a practical mini-project

# 👩‍💻 Developed By

Uwase Djaria
Aspiring Frontend Developer

GitHub: https://github.com/UWASEdjaria

LinkedIn: https://www.linkedin.com/in/djaria-uwase
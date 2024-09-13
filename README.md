# Expense Management System - Frontend
   This is the frontend part of the Expense Management System built using React and Tailwind CSS.

# Features
User Registration
User Login
Add, Edit, Delete Expenses
List all expenses in a table format
Password Reset
JWT Authentication for secure access
Responsive and visually appealing UI
Expense calculation (total)

# Tech Stack
React (JavaScript library for building user interfaces)
Tailwind CSS (Utility-first CSS framework)
Axios (HTTP client for API requests)
React Router (Routing between components)


# Prerequisites
Node.js
npm or yarn


# Installation
Clone the repository

 git clone <frontend-repo-url>
Navigate into the project directory


cd frontend
Install dependencies


npm install
Set up environment variables

Create a .env file in the root directory and add your backend URL:


REACT_APP_BACKEND_URL=<Your Backend URL>
Run the development server

npm start
The app should now be running on http://localhost:3000.

# Folder Structure

src/
|-- assets/        # Images and static assets
|-- components/    # Reusable UI components (Header, Footer, Forms, etc.)
|-- pages/         # Different pages (Login, Register, Dashboard, etc.)
|-- services/      # API calls (Axios setup)
|-- App.js         # Main entry point
|-- index.js       # Renders the app
|-- tailwind.config.js  # Tailwind configuration


# Scripts
npm start - Run the app in development mode
npm run build - Build the app for production
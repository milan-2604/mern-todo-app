🚀 MERN Stack Task Manager
A professional, full-stack Task Management application built to master the MERN (MongoDB, Express, React, Node.js) architecture. This project features secure authentication, responsive design, and a cloud-hosted infrastructure.

🌐 Live Demo
Frontend: https://todo-frontend-six-puce.vercel.app

Backend API: https://milan-todo-backend.onrender.com

✨ Features
Full CRUD Functionality: Create, read, update, and delete tasks seamlessly.

Secure Authentication: Integrated JWT-based authentication using HTTP-Only Cookies for maximum security against XSS attacks.

Dynamic UI: Responsive layout designed with Tailwind CSS, featuring a specialized "No-Scroll" application shell for the landing page.

API Security: Implemented express-rate-limit to prevent brute-force attacks on auth routes.

Global State Management: Managed user sessions and auth state using React Context API.

🛠️ Tech Stack
Frontend
React.js (Vite)

Tailwind CSS (Styling)

React Router Dom (Navigation)

Axios (API Requests)

Backend
Node.js & Express.js

MongoDB Atlas (Cloud Database)

Mongoose (ODM)

JSON Web Tokens (JWT) & Bcrypt.js (Security)

⚙️ Environment Variables
To run this project locally, you will need to set up the following environment variables:

Backend .env
Code snippet

PORT=8080
CONNECTION_STRING=your_mongodb_uri
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
Frontend .env
Code snippet

VITE_API_URL=http://localhost:8080
🚀 Deployment Process
This project is architected for modern cloud deployment:

Backend hosted on Render with a "Trust Proxy" configuration.

Frontend hosted on Vercel with optimized production builds.

Database managed via MongoDB Atlas with global IP access.

👨‍💻 About the Developer
Milan Oli Currently pursuing MCA in Dehradun, Uttarakhand. I am passionate about building robust web applications and exploring the depths of full-stack development.

GitHub: @milan-2604

LinkedIn: Milan Oli

How to use this:
Create a file named README.md in your project root.

Paste the content above.

Commit and Push to GitHub.

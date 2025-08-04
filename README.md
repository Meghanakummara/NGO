# NGO
# NGO Intern/Volunteer Registration Web App

This is a full-stack web application where users can register as interns or volunteers for an NGO, and admins can view all registered applicants. It is built using the MERN stack (MongoDB, Express, React, Node.js).

---

## 🔧 Features

- 🏠 Home page with welcome message and register button
- 📝 Intern/Volunteer registration form
- 👨‍💼 Admin view to see all applicants
- ✨ Simple animations and clean UI

---

## 📁 Project Structure

project/
├── backend/ # Node.js + Express + MongoDB
└── frontend/ # React app with routing and forms

yaml
Copy
Edit

---

## ✅ Requirements

- Node.js and npm installed
- MongoDB installed and running locally
- Code editor (like VS Code)

---

## ⚙️ Backend Setup

1. Open terminal and go to the `backend` folder:

   ```bash
   cd backend
Install dependencies:

bash
Copy
Edit
npm install
Start MongoDB on your system (default runs on mongodb://localhost:27017).

Start the backend server:

bash
Copy
Edit
node server.js
Or, if you want auto-reload:

bash
Copy
Edit
npm install -g nodemon
nodemon server.js
📍 Backend will run at http://localhost:5000

💻 Frontend Setup
Open a new terminal and go to the frontend folder:

bash
Copy
Edit
cd frontend
If not already created, create the app:

bash
Copy
Edit
npx create-react-app .
Install frontend dependencies:

bash
Copy
Edit
npm install axios react-router-dom
Replace the contents of:

App.js, App.css

Add components: Home.js, RegisterForm.js, AdminView.js + CSS files

Start the React frontend:

bash
Copy
Edit
npm start
📍 Frontend will run at http://localhost:3000

✅ Done!
Visit http://localhost:3000 to access the app.

Use the “Register” button to apply.

Visit “Admin View” to see all applicants.

markdown
Copy
Edit

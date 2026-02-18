# 📝 Full Stack Task Tracker

A full-stack task management application built using **Vue.js, Node.js, Express, and MongoDB**.

---

## 🚀 Project Overview

This application allows users to:

- Create tasks
- View all tasks
- View single task
- Update task status
- Delete tasks

It demonstrates full CRUD operations with proper validation and clean architecture.

---

## 🛠 Tech Stack

### Frontend
- Vue 3 (Vite)
- Axios
- Composition API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API architecture

---

## 📂 Folder Structure

task-tracker/
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── app.js
│ └── server.js
│
└── client/
├── src/
├── services/
├── package.json
└── vite.config.js


---

## ⚙️ How to Run Backend

- cd server
- npm install
- npm run dev
## Backend runs on:
- http://localhost:5000

## ⚙️ How to Run Frontend

- cd client
- npm install
- npm run dev


## Frontend runs on:
- http://localhost:5173


---

## 📌 API Endpoints

### GET all tasks
- GET /api/tasks


### GET task by ID
- GET /api/tasks/:id


### Create task
- POST /api/tasks


### Update task
- PUT /api/tasks/:id


### Delete task
- DELETE /api/tasks/:id


---

## ✅ Validation

- Title is required
- Status must be: TODO, IN_PROGRESS, or DONE
- Mongoose schema validation
- Proper error handling with status codes

---

## 🎯 Features Implemented

- Clean MVC architecture
- RESTful APIs
- Full CRUD operations
- Frontend-backend integration
- Persistent MongoDB storage
- Form validation

---

## 👨‍💻 Author

## Shubham Haranale  
- Full Stack Developer Intern Candidate
- Save it.
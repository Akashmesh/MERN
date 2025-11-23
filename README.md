MERN Admin Panel Project – Full Documentation

A complete MERN Stack application featuring:

User Registration & Login (JWT Auth)

Contact Form Module

Services Listing

Admin Dashboard (Protected)

Admin Users Management (CRUD)

Admin Contacts Management

Role-based Routing with React Router

Global Authentication using Context API

1. Tech Stack
Frontend

React (Vite)

React Router DOM

Context API

JWT Decode

Toastify (Notifications)

Backend

Node.js + Express

MongoDB + Mongoose

JWT Authentication

Bcrypt Password Hashing

Zod Request Validation

Express Middleware Architecture

2. Project Architecture
/client
   /components
   /pages
   /layouts
   /store
   App.jsx
   main.jsx

/server
   /controllers
   /middlewares
   /models
   /routes
   /validators
   server.js

 3. Authentication Flow
Registration

User submits form

Backend validates with Zod

Hash password using bcrypt

Save to MongoDB

Return JWT token

Frontend saves token in localStorage

Login

User enters email + password

Server verifies user and password

Returns JWT token

Token is decoded using jwtDecode

If isAdmin = true → redirect /admin

Else → redirect /

4. Authorization & Security
Middleware:
Middleware	Purpose
authMiddleware	Validates JWT, attaches user object
adminMiddleware	Ensures only admin can access certain routes
validateMiddleware	Uses Zod to validate body input
errorMiddleware	Global error handler
 5. Admin Dashboard Features
🔹 /admin

Admin Home Dashboard
Shows:

Total Users

Total Contacts

Total Services

🔹 /admin/users

Admin can:

View all users

Update user

Delete user

🔹 /admin/contacts

Admin can:

View all messages

Delete messages

💬 6. Contact Form Flow
User:

Submits name, email, message

Passes Zod validation

Stored in MongoDB

Success message displayed

Admin:

Views all messages

Deletes unwanted messages

🛠 7. Service Module

Services fetched from /api/data/service

Displayed dynamically in frontend

Each service shows:

Title

Description

Price

Provider

8. Key Features
Feature	Description
Role-based Routing	Admin vs User redirection
Fully Protected Admin Routes	Cannot access without isAdmin
React Context Global Auth	Manages token, user, services
Dark Theme UI	Modern styled interface
Admin Sidebar	Responsive dashboard layout
CRUD Operations	Users + Contacts
🧪 9. Execution Flow (Interview-Style Explanation)
User Registration

Form → Zod Validation → Save → Hash → JWT → Login

Login

Validate credentials

Decode JWT

If admin → /admin

Else → /

AuthContext Initialization

Fetch /api/auth/user

Load user role, email, name

Fetch all services

App UI adjusts automatically based on role

Admin Navigates to Dashboard

Sidebar loads

Dashboard cards show stats

User table loads from /api/admin/users

Contacts table loads from /api/admin/contacts

User Access

Browse services

Submit contact form

Manage own interactions

▶️ 10. How to Run the Project
Backend
cd server
npm install
npm run dev

Frontend
cd client
npm install
npm run dev

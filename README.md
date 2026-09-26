# Job Application Tracker

A full-stack web application built to help students and job seekers organize and manage their internship and job search process in one place.

Finding internships as a student can become difficult when applying to multiple companies at the same time. It is easy to forget where you applied, application deadlines, interview dates, interview results, or important notes about a company.

I built this Job Application Tracker to solve that problem and create a simple personal workspace where I can keep track of my entire internship search.


## 🚀 Live Demo

[View Live Project](https://punam-job-application-tracker.netlify.app)

---

## 🎯 Why I Built This

As a student looking for internships, I realized that applying for opportunities involves more than just sending a resume.

During an internship search, I may have to:

- Apply to multiple companies
- Keep track of different application statuses
- Remember application deadlines
- Prepare for multiple interviews
- Track interview results
- Maintain notes about companies and interviews
- Remember which companies I have already applied to

Managing all of this manually can become confusing.

So, I built this **Job Application Tracker** to keep everything organized in one place.

For me as a software engineering student, this project is important because finding internships is an important part of gaining practical industry experience. Having a structured way to track applications helps me stay organized, avoid missing opportunities, and understand my progress throughout the internship search.

At the same time, building this project allowed me to apply what I was learning in software development to a real-world problem.

---

## 💡 What This Project Does

The Job Application Tracker provides a personal dashboard where users can manage their internship and job applications.

Each user has their own authenticated workspace where they can:

- Add job applications
- Track application status
- Record application dates
- Add deadlines
- Store salary information
- Track interviews
- Record interview results
- Add personal notes
- View application statistics
- Delete applications when needed

The goal is to make the internship search process **more organized, trackable, and manageable**.

---

## ✨ Features

### 🔐 User Authentication

- User signup and login
- JWT-based authentication
- Secure password hashing
- Protected API routes
- User-specific application data
- Token-based authorization
- Authentication error handling

### 📋 Application Tracking

Users can add and manage:

- Company name
- Job title
- Application status
- Application date
- Deadline
- Salary information

Users can also view and delete their applications.

### 📊 Dashboard

The dashboard provides a quick overview of the job search:

- Total applications
- Applications by status
- Recent applications
- Upcoming deadlines
- Overall application progress

### 🎯 Interview Tracking

Users can associate interviews with specific applications and record:

- Interview date and time
- Interview type
- Interview result

This makes it easier to keep track of different interview stages.

### 📝 Notes

Users can add notes to individual applications.

These notes can be used for:

- Interview preparation
- Important company information
- Questions to ask during interviews
- Preparation points
- Personal reminders

---

## 🔄 How It Works

----text
User
  ↓
Frontend
  ↓
JavaScript Fetch API
  ↓
FastAPI REST API
  ↓
JWT Authentication
  ↓
SQLAlchemy
  ↓
PostgreSQL Database


                    Job Application Tracker
                              │
             ┌────────────────┴────────────────┐
             │                                 │
         Frontend                           Backend
             │                                 │
      HTML / CSS / JS                      FastAPI
             │                                 │
       Fetch API                              │
             │                                 │
             └──────────── REST API ───────────┘
                              │
                       JWT Authentication
                              │
                         SQLAlchemy
                              │
                         PostgreSQL
                              │
                            Neon

##🧠 Challenges I Faced

🔐 1. Authentication

Authentication was one of the most challenging parts of this project.

I had to understand and implement:

User registration
User login
Password hashing
JWT token generation
JWT token validation
Protected API routes
Authorization headers
Token expiration and invalid-token handling
Connecting authentication between frontend and backend

One of the important challenges was making sure that the frontend correctly stored and sent the JWT token with protected API requests.
This helped me understand how authentication works in a real-world full-stack application instead of only learning it theoretically.

🌐 2. JavaScript & API Integration

Connecting the frontend JavaScript with the FastAPI backend was another major challenge.

I worked with:

fetch()
GET requests
POST requests
DELETE requests
JSON data
Authorization headers
REST API endpoints
HTTP status codes

Initially, understanding how the frontend should communicate with different backend endpoints was difficult.
I had to learn how to correctly send requests, handle responses, pass authentication tokens, and update the webpage based on API data.
This gave me a much better understanding of how frontend and backend applications communicate.


## 🔗 Links

- Live Demo: https://punam-job-application-tracker.netlify.app
- Backend API: https://job-tracker-backend-qs1x.onrender.com
- API Documentation: https://job-tracker-backend-qs1x.onrender.com/docs

## Contributing

Suggestions and pull requests are welcome. If you spot a bug or have an idea, open an issue and let's talk about it.





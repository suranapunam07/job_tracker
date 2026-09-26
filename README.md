## Job Application Log

A full stack web application to help students and job seekers to organise and manage their internship and job search process in one place.

It can be hard to find internships as a student when you apply to multiple companies simultaneously. It is easy to forget where you applied, application deadlines, interview dates, interview results or important notes about a company.

To counter that, I built this Job Application Tracker to create a simple personal workspace where I can keep track of my entire internship search.


## 🚀 Live Demo

[View Live Project](https://punam-job-application-tracker.netlify.app)

---

## 🎯 Why I Built This

As a student looking for an internship, I learned that applying for opportunities is more than just submitting a resume.

In looking for an internship, I may have to:
- Apply to many companies- Monitor the health of various applications
- Keep track of application deadlines- Get ready for several interviews
- Follow up on interview results
- Take notes for companies and interviews
- Keep track of which companies I have applied to
Doing all of this manually can get confusing.

So I created this **Job Application Tracker** to keep everything organised in one place.

This project is very important to me as a software engineering student, because as an intern, finding an internship is a critical part of gaining practical industry experience. A structured way to keep track of applications helps me stay organised, and understand my progress throughout the internship search.

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





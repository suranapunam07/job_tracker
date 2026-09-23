# Job Application Tracker

Job hunting gets messy fast. A few applications turn into thirty, deadlines slip past, and you're digging through old emails trying to remember which company wanted what. I built this app to keep all of that in one place.

It's a full-stack web app where you can log every job or internship application, track your interviews, jot down notes, and see at a glance how your search is going.

---

## What it does

**Accounts and security**
You sign up, log in, and your data stays yours. Passwords are hashed with bcrypt, sessions use JWT tokens, and every API endpoint that touches personal data is protected.

**Tracking applications**
For each application you can save the company, job title, posting URL, current status, the date you applied, the deadline, and the salary. Everything you'd otherwise scatter across a spreadsheet and a dozen browser tabs.

**Keeping tabs on interviews**
Attach interviews to any application with the date, time, type (phone screen, technical, HR, and so on), and how it went.

**Notes**
Add notes to any application: prep questions, things you learned about the team, or reminders for the follow-up email.

**Dashboard**
A quick summary of where you stand: total applications, how many are in the applied stage, how many have reached interviews, and how many ended in rejection.

---

## Built with

**Backend:** Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL, JWT, Passlib and bcrypt

**Frontend:** plain HTML, CSS, and JavaScript. It talks to the API with the Fetch API and keeps the login token in Local Storage. No framework, on purpose, so the code stays easy to read.

**Tooling:** Docker, Docker Compose, Git, and GitHub


job_tracker/
│
├── app/
│   ├── api/            # Route handlers: applications, auth, interviews, notes, stats
│   ├── core/           # Security helpers (password hashing, JWT)
│   ├── models/         # SQLAlchemy models: application, interview, note, user
│   ├── schemas/        # Pydantic schemas for request/response validation
│   ├── database.py     # Database engine and session setup
│   └── main.py         # FastAPI app entry point
│
├── alembic/            # Database migrations
│   ├── versions/
│   └── env.py
│
├── frontend/
│   ├── css/style.css
│   ├── js/             # auth.js, dashboard.js, signup.js
│   ├── dashboard.html
│   ├── index.html      # Login page
│   └── signup.html
│
├── Dockerfile
├── docker-compose.yml
├── alembic.ini
├── requirements.txt
└── README.md

## Ideas for what's next

- Email or in-app reminders for upcoming deadlines and interviews
- Filtering, search, and sorting on the applications list
- Charts on the dashboard to show progress over time
- CSV export of your applications
- A React or Vue rewrite of the frontend

---

## Contributing

Suggestions and pull requests are welcome. If you spot a bug or have an idea, open an issue and let's talk about it.

---

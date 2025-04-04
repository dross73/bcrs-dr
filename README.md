# BCRS-DR: Bob's Computer Repair Shop

A full-stack web application for managing users, roles, invoices, and security questions — built using Angular, Node.js, Express, and MongoDB.

> Created by Dan Ross  
> Originally developed as a school project  
> Refactored for deployment and presentation

---

## 🚀 Live Site

**Frontend:**  
🔗 [https://sparkling-puppy-bf2166.netlify.app](https://sparkling-puppy-bf2166.netlify.app)

> ⚠️ **Note:** The application is hosted on Netlify's free tier. As a result, there might be a brief delay when accessing the site if it hasn't been used recently, due to the server spinning up from an idle state.

---

## Purpose

This project simulates a basic business support system where users can:

- Register and manage their profile
- Retrieve security questions
- Receive invoices for computer repairs (via the admin portal)

Admin users can:

- Manage users and their roles
- View invoice history
- Add or disable users

---

## Tech Stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| Frontend  | Angular (v11) + Angular Material UI|
| Backend   | Node.js, Express.js                |
| Database  | MongoDB Atlas (cloud-hosted)       |
| Auth/Security | Bcrypt for password hashing    |

---

## ️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/dross73/bcrs-dr.git
cd bcrs-dr
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

For development:

```bash
npm run start
```

For production:

```bash
npm run build
```

### 4. Running the Backend

Ensure the backend is running at `https://bcrs-dr.onrender.com/api`.

---

## Authentication

**Admin Login Credentials:**

For security reasons, admin credentials are not included in this repository. If you need access, please contact me via [LinkedIn](https://www.linkedin.com/in/dan-ross-1a7004118/).

---

## Contact

For more information, visit my LinkedIn profile: [Dan Ross](https://www.linkedin.com/in/dan-ross-1a7004118/).

If you have any questions or requests, feel free to reach out to me at [danrossemail@gmail.com](mailto:danrossemail@gmail.com).

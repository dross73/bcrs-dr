# BCRS-DR: Bob's Computer Repair Shop

Full-stack application demonstrating user management, role-based access control, and RESTful API integration. Built with Angular, Node.js, Express, and MongoDB.

> Created by Dan Ross  
> Originally developed as a full-stack application and later refined for deployment and demonstration

---

## Live Demo

Frontend:  
https://sparkling-puppy-bf2166.netlify.app

Note: The application may take a few moments to load if inactive, as the backend is hosted on a free-tier service.  
Admin functionality requires credentials and is not publicly accessible.

---

## Overview

This project simulates a business support system for a computer repair shop.

Users can:
- Register and manage their profile  
- Retrieve security questions  
- View invoices  

Admin users can:
- Manage users and roles  
- View invoice history  
- Enable or disable users  

---

## Tech Stack

**Frontend**
- Angular (v11)  
- Angular Material  

**Backend**
- Node.js  
- Express  

**Database**
- MongoDB Atlas  

**Authentication / Security**
- Bcrypt (password hashing)  

---

## Key Features

- User authentication and role-based access control  
- RESTful API integration between frontend and backend  
- CRUD operations for users and invoices  
- Separation of concerns between client, server, and database layers  

---

## Running Locally

Clone the repository:

```bash
git clone https://github.com/dross73/bcrs-dr.git
cd bcrs-dr
```

Install dependencies:

```bash
npm install
```

Run the frontend:

```bash
npm run start
```

Backend endpoint:
```
https://bcrs-dr.onrender.com/api
```

---

## Notes

- Backend is hosted on Render (free tier), which may cause cold-start delays  
- Admin credentials are not included for security reasons  

---

## Contact

LinkedIn: https://www.linkedin.com/in/dan-ross-1a7004118/  
Email: danrossemail@gmail.com

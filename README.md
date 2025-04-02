BCRS-DR: Bob's Computer Repair Shop

A full-stack web application for managing users, roles, invoices, and security questions — built using Angular, Node.js, Express, and MongoDB.

    Created by Dan Ross
    Originally developed as a school project
    Refactored for deployment and presentation

🧠 Purpose

This project simulates a basic business support system where users can:

    Register and manage their profile

    Retrieve security questions

    Receive invoices for computer repairs (via the admin portal)

Admin users can:

    Manage users and their roles

    View invoice history

    Add or disable users

🚀 Tech Stack
Layer	Technology
Frontend	Angular (v11) + Angular Material UI
Backend	Node.js, Express.js
Database	MongoDB Atlas (cloud-hosted)
Auth/Security	Bcrypt for password hashing
🛠️ Setup Instructions
1. Clone the Repository

git clone https://github.com/dross73/bcrs-dr.git
cd bcrs-dr
2. Install Dependencies

npm install
3. Set Up Environment Variables

Create a .env file in the root directory and add the following variables:

MONGO_ATLAS_PW=your_mongodb_password
4. Start the Application

Run the application in development mode:

npm run start
🌍 Deployment

The frontend is hosted on Netlify: https://sparkling-puppy-bf2166.netlify.app/

The backend is hosted on Render: https://bcrs-dr.onrender.com/
🔑 Access Information

For admin access, please contact me directly to request login credentials.
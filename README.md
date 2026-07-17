# 🚀 LeadFlow CRM

### Client Lead Management System

LeadFlow CRM is a full-stack Client Lead Management System built using **React.js, Node.js, Express.js, and MongoDB**. It enables businesses to efficiently manage customer leads, track their progress, update lead statuses, maintain follow-up notes, and monitor lead statistics through a modern and responsive dashboard.

---

## ✨ Features

- ✅ Add new client leads
- ✅ View all leads
- ✅ Search leads by Name, Email, or Source
- ✅ Filter leads by Status
- ✅ Update lead status (New, Contacted, Converted)
- ✅ Add notes for follow-ups
- ✅ Dashboard statistics
- ✅ Responsive and user-friendly interface

---

## 🛠 Tech Stack

### Frontend
- React.js
- CSS3
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB

---

## 📁 Project Structure

```text
FUTURE_FS_02
│
├── client
│   ├── public
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── screenshots
│   ├── dashboard.png
│   ├── add-lead.png
│   └── lead-list.png
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/lakshmisrikatteboina-dev/FUTURE_FS_02.git
```

### Navigate to the Project

```bash
cd FUTURE_FS_02
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

### Configure Environment Variables

Create a `.env` file inside the **server** folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the Backend

```bash
npm start
```

### Run the Frontend

```bash
cd ../client
npm run dev
```

---


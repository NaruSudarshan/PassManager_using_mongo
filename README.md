# PassManager

A simple password manager web application built with React, Express, and MongoDB.

## Features

- Add, view, edit, and delete passwords for different websites.
- Copy usernames and passwords to clipboard.
- Responsive UI with Tailwind CSS.
- Toast notifications for user actions.

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Toastify
- **Backend:** Node.js, Express, MongoDB
- **Other:** Vite, dotenv, CORS

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB running locally (default: `mongodb://localhost:27017/`)

### Installation

#### 1. Clone the repository

```sh
git clone https://github.com/NaruSudarshan/PassManager_using_mongo
cd PassManager_using_mongo
```

#### 2. Install frontend dependencies

```sh
npm install
```

#### 3. Install backend dependencies

```sh
cd backend
npm install
cd ..
```

#### 4. Configure environment variables

Edit `backend/.env` if needed:

```
MONGO_URI=mongodb://localhost:27017/
```

#### 5. Start the backend server

```sh
cd backend
node --watch server.js
```

#### 6. Start the frontend development server

```sh
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173) and the backend API at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
using mongo/
├── backend/
│   ├── .env
│   ├── package.json
│   └── server.js
├── public/
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── Body.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   └── ...
├── package.json
├── tailwind.config.js
├── vite.config.js
└── ...
```

## License

This project is licensed under the MIT License.

---
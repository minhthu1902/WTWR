# WTWR (What to Wear)

WTWR is a full-stack web application that helps users decide what to wear based on current weather conditions. Users can register, log in, and manage their wardrobe by adding clothing items suitable for different weather conditions.

## Project Structure

This repository contains both the frontend and backend components of the WTWR application:

- **Frontend** (`se_project_react/`): React application with user authentication and clothing management
- **Backend** (`se_project_express/`): Express.js API server with MongoDB database

## Features

### Frontend Features
- User registration and authentication
- Weather-based clothing recommendations
- Personal wardrobe management
- Responsive design for mobile and desktop
- Temperature unit toggle (Celsius/Fahrenheit)

### Backend Features
- RESTful API for user management
- JWT-based authentication
- MongoDB database integration
- CRUD operations for clothing items
- Weather data integration

## Technology Stack

### Frontend
- React.js
- React Router
- CSS3
- Vite (build tool)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- JWT (JSON Web Tokens)
- bcrypt (password hashing)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/minhthu1902/WTWR.git
cd WTWR
```

2. Install backend dependencies:
```bash
cd se_project_express
npm install
```

3. Install frontend dependencies:
```bash
cd ../se_project_react
npm install
```

### Running the Application

1. Start MongoDB service on your system

2. Start the backend server:
```bash
cd se_project_express
npm start
```
The backend server will run on http://localhost:3001

3. In a new terminal, start the frontend development server:
```bash
cd se_project_react
npm run dev
```
The frontend will run on http://localhost:3000

## API Endpoints

### Authentication
- `POST /signup` - User registration
- `POST /signin` - User login
- `GET /users/me` - Get current user profile

### Clothing Items
- `GET /items` - Get all clothing items
- `POST /items` - Add new clothing item
- `DELETE /items/:id` - Delete clothing item

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
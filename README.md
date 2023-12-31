
# Quiz Game - Backend Server

This repository contains the backend server for the Quiz Game, an engaging and interactive web application designed for quiz enthusiasts. The backend is responsible for managing the game's data, including user accounts, quiz content, and scores, and it ensures secure and efficient communication between the client-side application and the database.

## Features

- **User Authentication:** Secure login and registration functionality using JWT.
- **Quiz Management:** APIs to create, update, and delete quiz content.
- **User Management:** Admin functionalities for managing user accounts.
- **Score Tracking:** Store and retrieve users' scores and performance data.
- **Profile Management:** Allow users to view and update their profiles.

## Technologies Used

- **Node.js** - JavaScript runtime for building the server.
- **Express.js** - Web application framework for Node.js.
- **Prisma** - Next-generation ORM for Node.js and TypeScript.
- **PostgreSQL** - Advanced open-source relational database.
- **JWT (JSON Web Tokens)** - For secure user authentication.
- **zod** - TypeScript-first schema validation with static type inference.
- **Other Tools:**
  - TypeScript for type-safe code.
  - ESLint, Prettier for code formatting and linting.

## API Endpoints Base URL:  [Quiz-Game Live-url](https://quiz-game-backend-five.vercel.app/api/v1)
**https://quiz-game-backend-five.vercel.app/api/v1**
  ### Authentication  
  -  **Signup**: `POST /auth/signup`  
  -  **Login**: `POST /auth/login`  
  - ### User Management 
  -    **Get Users**: `GET /user`  
  -  **Get Single User**: `GET /user/{userID}` 
  -   **Update User**: `PUT /user/{userID}`  
  -   **Delete User**: `DELETE /user/{userID}`  
  - ### Quiz Management 
  -    **Create Quiz**: `POST /quiz/create`  
  -   **Get Quizzes**: `GET /quiz`  
  -  **Get Quizzes by Category**: `GET /quiz?category={categoryName}`  -  **Delete Quiz**: `DELETE /quiz/{quizID}`

## Installation and Running the Project

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [yarn](https://classic.yarnpkg.com/en/)
- [Postgresql](https://www.postgresql.org/)


### Cloning the Repository To clone the repository and run this project, follow these steps:
 - Open your terminal.
 -  Clone the repository: `git clone https://github.com/imam-hossain-wd/quiz-game-backend.git`
 -    Navigate to the project directory: `cd quiz-game-backend` 
 -   Install Dependencies: `yarn install` 
 -  Configure the Environment 
 - Start the Project: `yarn dev`  


## .env
  ### Environment Variables Create a `.env` file in the root directory of the project with the following contents:
 
- NODE_ENV=development
- PORT=5000
- DATABASE_URL=Your DATABASE_URL
- BCRYPT_SALT_ROUNDS=12
- PAYMENT_GATWAYE_SECRET_KEY=Your     PAYMENT_GATWAYE_PUBLISHABLE_KEY
- JWT_SECRET=Your JWt secret
- JWT_EXPIRES_IN=Your Jwt expires time
- JWT_REFRESH_SECRET=Your Jwt refresh expires secret
- JWT_REFRESH_EXPIRES_IN= Your Jwt refresh expires time 


### Contact For more information, suggestions, or inquiries, feel free to reach out: 
- 📧 Email: [imamhossain6t9@gmail.com](mailto:imamhossain6t9@gmail.com)
 - 📱 Phone: +8801624243747 ---

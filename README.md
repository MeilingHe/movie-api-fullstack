# MovieAPI - Full Stack Web App (Spring Boot + React + MongoDB)

This is a full-stack movie information and review application built with **Spring Boot**, **MongoDB**, and **React**.  
It allows users to browse movie posters, watch trailers, and read or submit reviews. The backend provides RESTful APIs, while the frontend offers an interactive, responsive user interface.

---

## Credits

This project was originally inspired by the following YouTube course:

[Full Stack Development with Java Spring Boot, React, and MongoDB – Full Course](https://www.youtube.com/watch?v=5PdEmeopJVQ&list=PLJLf67YAhhod0OMooE_QOYcU_D63d26_p)

I followed the course to build the core structure, and made some adjustments including:
- Adjusted frontend styles using MUI
- Structured code for my own understanding
- Wrote this README for clarity


## Features

-  View movies with poster, trailer, and details
-  Submit and view movie reviews
-  RESTful API endpoints using Spring Boot
-  MongoDB Atlas NoSQL document database
-  Frontend routing using React Router
-  Component-based structure with Axios calls
-  Carousel display using MUI + React Material Carousel
-  Environment variable support for safe configuration
-  Public API access enabled via ngrok tunnel

---

##  Tech Stack

###  Backend
- Java 17
- Spring Boot
- Spring Web
- Spring Data MongoDB
- Lombok
- Maven
- MongoDB Atlas
- Spring Boot DevTools

###  Frontend
- React (CRA)
- Axios
- React Router DOM
- Bootstrap + React-Bootstrap
- @mui/material (MUI)
- react-player
- react-material-ui-carousel
- Font Awesome

---


## Run the Project Locally

### Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
Make sure to configure application.properties or use a .env file with:

env
Copy code
MONGO_DATABASE=your-db  
MONGO_USER=your-user  
MONGO_PASSWORD=your-password  
MONGO_CLUSTER=your-cluster-url
Frontend (React)
bash
Copy code
cd frontend
npm install
npm start
You must set the backend base URL via .env:

env
Copy code
REACT_APP_API_URL=https://your-ngrok-url.ngrok.io



## Screenshots

### Homepage  
![Homepage](https://raw.githubusercontent.com/MeilingHe/movie-api-fullstack/main/screenshots/home.png)

### Trailer  
![Trailer](https://raw.githubusercontent.com/MeilingHe/movie-api-fullstack/main/screenshots/trailer.png)

### Review Section  
![Review](https://raw.githubusercontent.com/MeilingHe/movie-api-fullstack/main/screenshots/reviews.png)

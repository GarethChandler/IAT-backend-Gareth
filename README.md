# Web Development (Back-End)
This is my submission for the Project Assessment in the Web Development (Back-End) course through IAT. This project is a MERN stack web application using React, Node, Express and MongoDB. The web application is for a fictional business 'Microcourses' providing online learning to students.

## Student details
Gareth Chandler

id: gareth.chandler4


# Table of Contents
1. Description
   1. Component 1
   2. Component 2
   3. Component 3
   4. Component 4
3. Installation


# Description
### Component 1
The frontend of this web app uses the React framework with Flexbox and CSS Grid for a responsive layout. @media queries adjust certain elements once the screen layout becomes narrow. Please see the files in the folder 'Component 1'. This project displays a list of courses and course details. Routing is handled by react-router-dom with two pages for home and details. React components for course card details and course modules are available. 

### Component 2
The back end of the web app uses a node.js server and Express framework. Please see folder 'Component 2'. Three API requests are avialable; GET, GET/id: and POST.

**Data Model**
WebApp (MicroCources)

├── FontEnd (React)
│   ├── Components
│   │   ├── CourseCard
│   │   └── ModulesList
│   ├── Pages
│   │   ├── Home
│   │   └── Details
│   ├── App.js
│   └── main.jsx
├── BackEnd (Express)
│   ├── Models
│   │   └── Course
│   │        ├── courseName
│   │        ├── description
│   │        ├── instructor
│   │        ├── durationOfTime
│   │        └── Course
│   ├── Routes
│   │   ├── /courses
│   │   ├── /courses/:id
│   │   └── /courses
│   ├── Middlewares
│   │   └── parseJSON
│   └── server.js
└── Database
    └── IAT_microservices (MongoDB)


### Component 3
The frontend uses middleware axios to fetch data from the API created in the server. 


# Installation
Instructions on how to set up the project locally:

sh

Copy
npm install
Usage
How to run or use the project:

sh

Copy
npm start
Features
Highlight key features of the project.

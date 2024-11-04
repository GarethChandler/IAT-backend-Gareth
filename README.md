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
The back end of the web app uses a node.js server and Express framework. Please see folder 'Component 2'. Mongoose, an object data modeling library, is used to connect to MongoDB.  
**⚠️ Please see the assessment files for connection string and instructions**  
Three API requests are avialable; GET/courses, GET/courses/id: and POST/courses.

**Data Model**
```
WebApp (MicroCources)
│
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
│   │        ├── descriptionShort
│   │        ├── descriptionLong
│   │        ├── imgUrl
│   │        ├── instructor
│   │        ├── durationOfTime
│   │        ├── category
│   │        └── modules
│   ├── Routes
│   │   ├── GET/courses
│   │   ├── GET/courses/:id
│   │   └── POST/courses
│   ├── Middlewares
│   │   └── parseJSON
│   └── server.js
└── Database
    └── IAT_microservices (MongoDB)
```

### Component 3
The frontend uses axios to fetch data from Express. This will display the courses on the home page. Course data is passed through with useState to the details page and modules react component.

### Component 4
Caching  
Report on how would you Implement caching strategies to handle a large number of courses efficiently.   
HTTP caching to cache responses and remove need to request the abckend server agian  
Content delivery Networks to cache the course images and CSS closer to the users location.This will reduce latency and offload traffic from the original server.  
Implement Redis to cache the cources objects such as teh MongoDB coursees objects in memory and reduce the need to fetch the data every time the user navigates to the Home page.  
Cache the home page entirely to avoid generating it dynammically  
CAche the data base queries to reduc database load and improve the response times.  

Plan for cache invalidation.  
Time-based expiration. enet driven invalidation such as when a new cours is added.  


Load Balancing  
to distribute incoming traffic accros a group of backend server pool. The load balncer would be deployed between the front facing web app and the applicaiton servers. It handles client requests and distributes them accross servers. Ensure high availability by directing requests to availabel servers. Can scale up and donw based on demand. A round robin algorithm would be sufficient for my simple applicaiton.
This improves downtime. Is horizontally scallable. No single point of failure.

High Availability  
Load balancing,  
redundancy and failover. deploy redundant copies of backend services.  
Auto scaling by cloud platforms. Increase number of backend instances based on demand.  
Monitoring backend.  
Fault tolerance. retires. graceful degradations.  
database replications.  
Disaster recovery plan  
Testing and maintenacnce. 


# Installation
Instructions on how to set up the project locally:  

Download as zip files and unzip.  
Open the folder in VS Code.  

In the terminal, navigate to Component 2 folder.  

Copy  
```
npm install 
npm update
```  
Create a new file in the 'Component 2' folder called '.env'  
  
**See project documentation for connection string**  
  
Copy the connection string to the .env file. Save all.  

Copy  
```
npm run devStart
```  

Open a new terminal and navigate into component 1.  

Copy  
```
npm install
npm update
npm run dev
```



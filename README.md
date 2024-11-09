# Web Development (Back-End)
This is my submission for the Project Assessment in the Web Development (Back-End) course through IAT. This project is a MERN stack web application using React, Node.js, Express and MongoDB. The web application displays courses for a fictional business called 'Microcourses' providing online learning to students.

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
Postman request JSON files are available as part of the assessment documents.

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
The frontend uses axios to fetch data from Express. This will display the courses on the home page. Course data is passed through with useState() to the 'details' page and the 'modules' react component.

### Component 4
The following report provides details on advanced functionality and how I would implement these features in this application.  
  
**Caching**  
Caching allows application resources to be stored on the client device or closer server hardware to reduce latency and enable offline funcitonality. This also allows the application to handle a large number of courses efficiently.   
HTTP caching stores server responses and removes need to request the backend server again. These may be private http cahce on the the user device or shared such on a proxy server.  
Content delivery Networks (CDN) cache the course images and CSS closer to the users location.This will reduce latency and offload traffic from the original server.  
I would investigate implementing Redis to cache the cources objects such as in MongoDB. This will store them in memory and reduce the need to fetch the data every time the user navigates to the Home page.  
Caching the home page entirely will avoid needing to generate it dynammically.  
Cache the data base queries to reduce database load and improve the response times.  

Plan for cache invalidation:  
I would set up a time-based expiration. Microcourses supplies learning on a set schedule. The cache may be removed in line with this every 6-7 weeks. I would also set event driven invalidation such as when a new course is added to ensure the correct courses are served to the user.  


**Load Balancing**  
Load balancing is a technique to distribute incoming traffic accros a group of backend servers called a pool. It is a technique to ensure high availability as discussed below. The load balancer would be deployed between the front facing web app and the applicaiton servers. It handles client requests and distributes them accross the servers. It ensures high availability by directing requests to available servers. It can scale up and down based on demand. i would implement a simple round robin algorithm as this would be sufficient for my applicaiton. An example service that provides load balancing is Micorsoft's Azure.  
The benefits include improved downtime, is horizontally scallable as my traffic increases, and has no single point of failure.  


**High Availability**  
High availabilty refers to the applications reliability and uptime for users. For my simple web app I have determined that the service level agreement should be 99.5% availabilty as Microservices is a very important and high value learning provider. To address availability I would split my application in different sections. These could be the web frontend, the application logic and the database.  
As Mongodb has a very high availability guarantee, I would upgrade this last because it would provide the least benefit for cost.  
  
Web frontend:
Load balancing for horizontal scalling and high traffic scenarios.  
I would configure auto-scaling by cloud platforms to increase number of backend instances based on demand.  
Finally, fault tolerance and graceful degradations.
  
Application logic:  
For this level I would also use load balancing and auto-scaling.
Setting up monitoring to maintain backend health.   

Database:  
I would consider database replications last due to the high availability of Mongodb.  
A disaster recovery plan may be used to ensure I have procedures and processes in place to restore services.  
Finally, conducting regular testing and maintenace will ensure the health of the database and data.


# Installation
Instructions on how to set up the project locally:  

Clone the project files and unzip to your local drive.  
Open the folder in VS Code.  

In the terminal, navigate to Component 2 folder.  

Copy and paste  
```
npm install 
npm update
```  
Create a new file in the 'Component 2' folder called '.env'  
  
**See project documentation for connection string**  
  
Copy the connection string to the .env file. Save all.  

Copy and paste  
```
npm run devStart
```  

Open a new terminal and navigate into component 1.  

Copy and paste  
```
npm install
npm update
npm run dev
```



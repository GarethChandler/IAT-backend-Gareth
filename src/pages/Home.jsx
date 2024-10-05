//import { useState } from "react";
import CourseCard from "../components/CourseCard";
import "../css/CourseCard.css";

const Home = () => {
  //   const [count, setCount] = useState(0);

  // Courses to display
  const courses = [
    {
      courseName: "Backend Development",
      imageUrl: "../src/assets/book-with-green-board-background_1150-3836.jpg",
      description:
        "This courees will cover the fundamentals of backend development using the MREN stack.",
      timeToComplete: "7 weeks",
    },
    {
      courseName: "Frontend Development",
      imageUrl: "../src/assets/book-with-green-board-background_1150-3836.jpg",
      description:
        "This courees will cover the fundamentals of frontend development using the React.",
      timeToComplete: "7 weeks",
    },
    {
      courseName: "Frontend Development",
      imageUrl: "../src/assets/book-with-green-board-background_1150-3836.jpg",
      description:
        "This courees will cover the fundamentals of frontend development using the React.",
      timeToComplete: "7 weeks",
    },
    // {
    //   courseName: "",
    //   imgURL: "",
    //   description: "",
    //   timeToComplete: "",
    // },
  ];

  return (
    <>
      <div>
        <h1>MicroCourses</h1>
        <h2>Online Education</h2>
        <p>
          At MicroCourses we offer a diverse range of online courses for
          learners worldwide
        </p>
        <div className="card">
          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
          <h3>Available Courses</h3>
          <p className="read-the-docs">Select a course to see details</p>
          <div>
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                courseName={course.courseName}
                imageUrl={course.imageUrl}
                detailsUrl={course.detailsUrl}
                description={course.description}
                timeToComplete={course.timeToComplete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import "../css/Home.css";
import axios from "axios";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/courses");
        setCourses(result.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  // Courses to display
  // const courses = [
  //   {
  //     courseName: "Backend Development",
  //     imageUrl:
  //       "../src/assets/database-computer-system-digital-storage-concept_53876-123742.jpg",
  //     description:
  //       "This course will cover the fundamentals of backend development and the MERN stack.",
  //     timeToComplete: "50 hrs",
  //   },
  //   {
  //     courseName: "Frontend Development",
  //     imageUrl:
  //       "../src/assets/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg",
  //     description:
  //       "This course will cover the fundamentals of frontend development using the React.",
  //     timeToComplete: "65 hrs",
  //   },
  //   {
  //     courseName: "Worm Farm Management",
  //     imageUrl:
  //       "../src/assets/gardening-youtube-template-design_23-2149547764.jpg",
  //     description: "Learn how to build, care and feed your hobby worm farm.",
  //     timeToComplete: "10 hrs",
  //   },

  //   // Template to add more courses
  //   // {
  //   //   courseName: "",
  //   //   imgURL: "",
  //   //   description: "",
  //   //   timeToComplete: "",
  //   // },
  // ];

  return (
    <>
      <div>
        {/* Heading and info */}
        <h1>MicroCourses</h1>
        <h2>Online Education</h2>
        <p>
          At MicroCourses we offer a diverse range of online courses for
          learners worldwide
        </p>
        <div className="card-container">
          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
          <h3>Available Courses</h3>
          <p className="read-the-docs">Select a course to see details</p>
          <div className="course-grid">
            {/* Map courses to Course Card. */}
            {courses.map((course) => (
              <CourseCard
                key={course._id}
                courseName={course.courseName}
                imageUrl={course.imageUrl}
                detailsUrl={course.detailsUrl}
                description={course.descriptionShort}
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

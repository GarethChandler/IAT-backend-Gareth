import { useState } from "react";
import CourseCard from "../components/CourseCard";
import "../css/CourseCard.css";

const Home = () => {
  //   const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>MicroCourses</h1>
        <h2>Online Education</h2>
        <div className="card">
          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
          <h3>Available Courses</h3>
          <p className="read-the-docs">Select a course to see details</p>
          <div>
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

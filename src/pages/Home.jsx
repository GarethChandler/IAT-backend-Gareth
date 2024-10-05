import { useState } from "react";
import CourseCard from "../components/CourseCard";
import "../css/CourseCard.css";

const Home = () => {
  //   const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>IAT Course List</h1>
        <h1>Courses</h1>
        <div className="card">
          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
          <h2>Card</h2>
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

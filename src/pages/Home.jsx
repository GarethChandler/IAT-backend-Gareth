import { useState } from "react";

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
        </div>
        <p className="read-the-docs">Select a course to see details</p>
      </div>
    </>
  );
};

export default Home;

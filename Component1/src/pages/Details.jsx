// Details.jsx
import { useLocation, Link } from "react-router-dom";
import "../css/Details.css";

const Details = () => {
  const location = useLocation();
  const { courseName, imageUrl, description, timeToComplete } =
    location.state || {};
  return (
    <>
      {/* header */}
      <header className="detailsHeader">
        <Link to="/">
          <button className="back-btn">Go Back</button>
        </Link>
      </header>
      {/* Course details passed from courseCard */}
      <h1>{courseName}</h1>
      <img src={imageUrl} alt={courseName} />
      <p>Detailed description: {description}</p>
      <p>Time to complete: {timeToComplete}</p>
      {/* Course modules. Need to connect to db or something to get modules and detailed description */}
      <fieldset>
        <legend>Course Modules</legend>
        <button>Enrol now</button>
        <ul>
          <li>Module 1: Introduction to React</li>
          <li>Module 2: Components and Props</li>
          <li>Module 3: State and Lifecycle</li>
          <li>Module 4: Handling Events</li>
          <li>Module 5: Conditional Rendering</li>
        </ul>
      </fieldset>
    </>
  );
};

export default Details;

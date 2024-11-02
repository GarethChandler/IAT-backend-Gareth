// Details.jsx
import { useLocation, Link } from "react-router-dom";
import "../css/Details.css";
import { useEffect } from "react";
import ModulesList from "../components/ModulesList";

const Details = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { courseName, imageUrl, descriptionLong, timeToComplete, modules } =
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
      <div className="detailsBody">
        <h1>{courseName}</h1>
        <img src={imageUrl} alt={courseName} />
        <h3>Course Details</h3>
        <p>{descriptionLong}</p>
        <h3>Time to complete</h3>
        <p>{timeToComplete}</p>
        {/* Course modules. Need to connect to db or something to get modules and detailed description */}
        <fieldset>
          <legend>Course Modules</legend>
          <ModulesList modules={modules} />
          <button>Enrol now</button>
        </fieldset>
      </div>
    </>
  );
};

export default Details;

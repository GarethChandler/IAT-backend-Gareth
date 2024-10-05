import "../css/CourseCard.css";
import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <div className="courseCardInfo">
      <img src="" alt="" />
      <div className="courseCardText">
        <h2>Course Name</h2>
        <p>Some details about the course</p>
        <p>50 hours to complete</p>
      </div>
      <Link to="/details">
        <button>See details</button>
      </Link>
    </div>
  );
};

export default CourseCard;

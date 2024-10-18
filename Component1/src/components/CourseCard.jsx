import "../css/CourseCard.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CourseCard = ({ courseName, imageUrl, description, timeToComplete }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate("/details", {
      state: {
        courseName,
        imageUrl,
        description,
        timeToComplete,
      },
    });
  };

  return (
    <div className="courseCardInfo">
      <img src={imageUrl} alt={courseName} />
      <div className="courseCardText">
        <h2>{courseName}</h2>
        <p>{description}</p>
        <p>Time to complete: {timeToComplete}</p>
      </div>
      <button onClick={handleDetailsClick}>See details</button>
    </div>
  );
};

CourseCard.propTypes = {
  courseName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  detailsUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timeToComplete: PropTypes.string.isRequired,
};

export default CourseCard;

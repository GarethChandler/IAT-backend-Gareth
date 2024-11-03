import "../css/CourseCard.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CourseCard = ({
  courseName,
  imageUrl,
  descriptionShort,
  descriptionLong,
  timeToComplete,
  modules,
}) => {
  const navigate = useNavigate();

  // create state when button is clicked, to pass course details to the details page.
  // Navigate to route /details.
  const handleDetailsClick = () => {
    navigate("/details", {
      state: {
        courseName,
        imageUrl,
        descriptionShort,
        descriptionLong,
        timeToComplete,
        modules,
      },
    });
  };

  return (
    <div className="courseCardInfo">
      <img src={imageUrl} alt={courseName} />
      <div className="courseCardText">
        <h2>{courseName}</h2>
        <p className="detailsShort">{descriptionShort}</p>
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
  descriptionShort: PropTypes.string.isRequired,
  descriptionLong: PropTypes.string.isRequired,
  timeToComplete: PropTypes.string.isRequired,
  modules: PropTypes.array.isRequired,
};

export default CourseCard;

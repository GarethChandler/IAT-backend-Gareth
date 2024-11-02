import "../css/CourseCard.css";
import PropTypes from "prop-types";

const ModulesList = ({ modules }) => {
  return (
    <ul>
      {modules.map((moduleObj, index) => {
        const moduleName = Object.keys(moduleObj)[0];
        const moduleDescription = moduleObj[moduleName];
        return (
          <li key={index}>
            <strong>{moduleName}:</strong> {moduleDescription}
          </li>
        );
      })}
    </ul>
  );
};

ModulesList.propTypes = {
  modules: PropTypes.array.isRequired,
};

export default ModulesList;

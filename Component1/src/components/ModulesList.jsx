import "../css/ModulesList.css";
import PropTypes from "prop-types";

const ModulesList = ({ modules }) => {
  return (
    <>
      <fieldset className="modules">
        <legend>Course Modules</legend>
        <ul>
          {/* iterate through the modules array to display all modules for a course. */}
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
        <button>Enrol now</button>
      </fieldset>
    </>
  );
};

ModulesList.propTypes = {
  modules: PropTypes.array.isRequired,
};

export default ModulesList;

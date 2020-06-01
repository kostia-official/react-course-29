import React, { Fragment } from "react";
import PropTypes from "prop-types";

export const StudentsList = ({ students, title = "Список студентов" }) => {
  return (
    <Fragment>
      <h2>{title}</h2>
      <ul>
        {students.map(student => {
          return <li key={student.name}>{student.name}</li>;
        })}
      </ul>
    </Fragment>
  );
};

StudentsList.propTypes = {
  title: PropTypes.string,
  students: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

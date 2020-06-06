import React from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";

export const StudentsList = ({ students, title = "Список студентов" }) => {
  return (
    <MaterialTable
      title={title}
      columns={[{ title: "Имя", field: "name" }]}
      data={students}
      options={{
        paging: false,
        search: false,
      }}
    />
  );
};

StudentsList.propTypes = {
  title: PropTypes.string,
  students: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

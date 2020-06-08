import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

export const StudentsList = ({ students, title = 'Список студентов', actions }) => {
  return (
    <Wrapper>
      <MaterialTable
        title={title}
        columns={[
          { title: 'Имя', field: 'name' },
          { title: 'Очки', field: 'score', type: 'numeric', defaultSort: 'desc' },
        ]}
        actions={actions}
        data={students}
        options={{
          paging: false,
          search: false,
          actionsColumnIndex: -1,
        }}
        localization={{
          header: {
            actions: '',
          },
          body: {
            emptyDataSourceMessage: 'Пусто',
          },
        }}
      />
    </Wrapper>
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

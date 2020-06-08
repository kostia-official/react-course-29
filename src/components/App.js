import React, { Fragment } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { RandomAnswerer } from './RandomAnswerer';
import { StudentsList } from './StudentsList';
import { Center } from './Center';
import { Header } from './Header';
import { mobileStyles, desktopStyles } from '../styles/responsive';
import { getStudents } from '../data/students';
import { Persist } from 'react-persist';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${mobileStyles(`
    flex-direction: column-reverse;
  `)}
`;

const StudentsListWrapper = styled.div`
  margin: 10px;

  ${desktopStyles(`
    width: 260px;
  `)}

  ${mobileStyles(`
    flex-grow: 1;
  `)}
`;

const RandomAnswererWrapper = styled.div`
  flex-grow: 5;
  margin: 10px 10px 10px 0;

  ${mobileStyles(`
    margin: 10px 10px 0 10px;
  `)}
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: getStudents(),
    };
  }

  updateStudent = (id, updater) => {
    this.setState((state) => {
      const updatedStudents = _.map(state.students, (student) => {
        if (student.id !== id) return student;

        return {
          ...student,
          ...updater(student),
        };
      });

      return { students: updatedStudents };
    });
  };

  updateScore = (id, scoreToAdd) => {
    this.updateStudent(id, (student) => ({ score: student.score + scoreToAdd }));
  };

  updateAttendance = (id) => {
    this.updateStudent(id, (student) => ({ isPresent: !student.isPresent }));
  };

  render() {
    const { students } = this.state;
    const presentStudents = _.filter(students, { isPresent: true });
    const absentStudents = _.filter(students, { isPresent: false });

    return (
      <Fragment>
        <Persist
          name="app"
          data={this.state}
          debounce={500}
          onMount={(data) => this.setState(data)}
        />

        <Header />
        <AppWrapper>
          <StudentsListWrapper>
            <StudentsList
              students={presentStudents}
              actions={[
                {
                  icon: 'close',
                  tooltip: 'Отсутствует',
                  onClick: (event, rowData) => {
                    this.updateAttendance(rowData.id);
                  },
                },
              ]}
            />

            <StudentsList
              title="Отсутствуют"
              students={absentStudents}
              actions={[
                {
                  icon: 'add',
                  tooltip: 'Присутствует',
                  onClick: (event, rowData) => {
                    this.updateAttendance(rowData.id);
                  },
                },
              ]}
            />
          </StudentsListWrapper>

          <RandomAnswererWrapper>
            <Center>
              <RandomAnswerer answerers={presentStudents} onAnswer={this.updateScore} />
            </Center>
          </RandomAnswererWrapper>
        </AppWrapper>
      </Fragment>
    );
  }
}

export default App;

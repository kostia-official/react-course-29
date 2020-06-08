import React, { Fragment } from 'react';
import styled from 'styled-components';
import students from '../students.json';
import { RandomAnswerer } from './RandomAnswerer';
import { StudentsList } from './StudentsList';
import { Center } from './Center';
import { Header } from './Header';
import { mobileStyles, desktopStyles } from '../styles/responsive';

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
    width: 250px;
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

function App() {
  return (
    <Fragment>
      <Header />
      <AppWrapper>
        <StudentsListWrapper>
          <StudentsList students={students} />
        </StudentsListWrapper>

        <RandomAnswererWrapper>
          <Center>
            <RandomAnswerer answerers={students} />
          </Center>
        </RandomAnswererWrapper>
      </AppWrapper>
    </Fragment>
  );
}

export default App;

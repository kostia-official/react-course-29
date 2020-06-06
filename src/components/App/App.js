import React, { Fragment } from "react";
import styled from "styled-components";
import students from "../../students.json";
import { RandomAnswerer } from "../RandomAnswerer/RandomAnswerer";
import { StudentsList } from "../StudentsList/StudentsList";
import { Center } from "../Center/Center";
import { Header } from "../Header/Header";

const breakpoint = "700px";

const desktopStyles = (content) => `
  @media (min-width: ${breakpoint}) {
    ${content}
  }
`;

const mobileStyles = (content) => `
  @media (max-width: ${breakpoint}) {
    ${content}
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ${mobileStyles(`
    flex-direction: column-reverse;
  `)}
`;

const StudentsListWrapper = styled.div`
  margin: 14px;

  ${desktopStyles(`
    width: 250px;
  `)}

  ${mobileStyles(`
    flex-grow: 1;
  `)}
`;

const RandomAnswererWrapper = styled.div`
  flex-grow: 5;
  margin: 14px 14px 14px 0;

  ${mobileStyles(`
    margin-left: 14px;
    margin-bottom: 0px;
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

import React from "react";
import students from "../../students.json";
import { RandomAnswerer } from "../RandomAnswerer/RandomAnswerer";
import { StudentsList } from "../StudentsList/StudentsList";
import { Center } from "../Center/Center";

function App() {
  return (
    <div>
      <Center>
        <RandomAnswerer answerers={students} />
      </Center>

      <hr />

      <StudentsList students={students} />
    </div>
  );
}

export default App;

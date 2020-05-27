import React from "react";
import students from "../students.json";
import { RandomAnswerer } from "./RandomAnswerer";
import { StudentsList } from "./StudentsList";
import { Center } from "./Center";

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

import "./App.css";
import Greet from "./components/basics/Greet";
import Person from "./components/basics/Person";
import PersonList from "./components/basics/PersonList";
import Heading from "./components/basics/Heading";
import Status from "./components/basics/Status";
import Oscar from "./components/basics/Oscar";
import { personName, personNameList } from "./data";

function App() {
  return (
    <div className="App">
      {/* Simple Attribute */}
      <Greet name="Darren" messageCount={15} isLoggedIn={true} />
      {/* Optional Attribute */}
      <Greet name="Darren" isLoggedIn={true} />
      {/* Object Type */}
      <Person name={personName} />
      {/* List Type */}
      <PersonList list={personNameList} />
      {/* Advanced Type */}
      <Status status="loading" />
      {/* Children Props */}
      <Heading>I am a simple heading</Heading>
      <Oscar>
        <Heading>I am simple heading in another component</Heading>
      </Oscar>
    </div>
  );
}

export default App;

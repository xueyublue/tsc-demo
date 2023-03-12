import "./App.css";
import Greet from "./components/basic/Greet";
import Person from "./components/basic/Person";
import PersonList from "./components/basic/PersonList";
import Heading from "./components/Heading";
import Status from "./components/Status";
import { personName, personNameList } from "./data";
import Oscar from "./components/Oscar";

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

import "./App.css";
import Greet from "./components/basic/Greet";
import Header from "./components/basic/Header";
import Person from "./components/basic/Person";
import PersonList from "./components/basic/PersonList";
import Heading from "./components/Heading";
import Status from "./components/Status";
import { personName, personNameList } from "./data";

function App() {
  return (
    <div className="App">
      {/* Optional Attribute */}
      <Header title="Typescript Demo" color="red" />
      {/* Simple Attribute */}
      <Greet name="Darren" messageCount={15} isLoggedIn={false} />
      {/* Object Type */}
      <Person name={personName} />
      {/* List Type */}
      <PersonList list={personNameList} />
      {/* Advanced Type */}
      <Status status="loading" />
      <Heading>I am a simple heading</Heading>
    </div>
  );
}

export default App;

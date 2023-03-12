import "./App.css";
import Greet from "./components/basics/Greet";
import Person from "./components/basics/Person";
import PersonList from "./components/basics/PersonList";
import Heading from "./components/basics/Heading";
import Status from "./components/basics/Status";
import Oscar from "./components/basics/Oscar";
import { personName, personNameList } from "./data";
import Button from "./components/event/Button";
import Input from "./components/event/Input";
import Container from "./components/style/Container";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";

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

      {/* Event */}
      <Button handleClick={(event, id) => console.log("button clicked.", event, id)} />
      <Input value="" handleChange={(event) => console.log("input", event)} />

      {/* Style */}
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />

      {/* State */}
      <LoggedIn />
      <User />
    </div>
  );
}

export default App;

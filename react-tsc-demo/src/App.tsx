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
import LoggedIn from "./components/ueState/LoggedIn";
import User from "./components/ueState/User";
import User2 from "./components/useContextFutureValue/User";
import UserNotNull from "./components/ueState/UserNotNull";
import Counter from "./components/ueReducer/Counter";
import Counter2 from "./components/class/Counter";
import { ThemeContextProvider } from "./components/useContext/ThemeContext";
import Box from "./components/useContext/Box";
import { UserContextProvider } from "./components/useContextFutureValue/UserContext";

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
      <UserNotNull />

      {/* Reducer - Also shows how to conditional set attribute optional */}
      <Counter />

      {/* Context */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User2 />
      </UserContextProvider>

      {/* Class */}
      <Counter2 message="The count value is " />
    </div>
  );
}

export default App;

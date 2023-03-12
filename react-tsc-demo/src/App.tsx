import "./App.css";
import Greet from "./components/basic/Greet";
import Header from "./components/basic/Header";
import Person from "./components/basic/Person";
import PersonList from "./components/basic/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    firstName: "John",
    lastName: "Doe",
  };
  const personNameList = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Eric",
      lastName: "Chou",
    },
    {
      firstName: "Jasline",
      lastName: "Tan",
    },
  ];

  return (
    <div className="App">
      <Header title="Typescript Demo" color="red" />
      {/* Basic */}
      <Greet name="Darren" messageCount={15} isLoggedIn={false} />
      {/* Object Type */}
      <Person name={personName} />
      {/* List Type */}
      <PersonList list={personNameList} />
      {/* Advanced Type */}
      <Status status="loading" />
    </div>
  );
}

export default App;

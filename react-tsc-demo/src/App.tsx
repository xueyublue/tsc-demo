import "./App.css";
import Greet from "./components/Greet";
import Header from "./components/Header";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
    </div>
  );
}

export default App;

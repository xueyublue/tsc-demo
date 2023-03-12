import "./App.css";
import Greet from "./components/Greet";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header title="Typescript Demo" color="red" />
      <Greet name="Darren" />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Exercise from "./components/Exercise/Exercise";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>
          <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          Extreme GYM
        </h2>
      </div>
      <Exercise></Exercise>
    </div>
  );
}

export default App;

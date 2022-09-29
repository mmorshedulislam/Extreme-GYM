// import logo from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Exercise from "./components/Exercise/Exercise";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>
          <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
          Extreme GYM
        </h2>
      </div>
      <Exercise></Exercise>
      <h2 style={{textAlign: "center", marginBottom: '0'}}>Blogs</h2>
      <Blogs></Blogs>
    </div>
  );
}

export default App;

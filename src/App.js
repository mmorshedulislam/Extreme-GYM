// import logo from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faGym, faHeart, faDumbbell } from "@fortawesome/free-solid-svg-icons";
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
      <Blogs></Blogs>
    </div>
  );
}

export default App;

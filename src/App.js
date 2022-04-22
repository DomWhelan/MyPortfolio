import "./Styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./Components/Projects";
import NavBar from "./UI/NavBar";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

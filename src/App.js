import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./Components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">My Portfolio</header>
        <div className="Body">
          <h1>Dominic Whelan</h1>
          <Link to="/">Home</Link> <br />
          <Link to="/Components/Projects">My Projects</Link>
        </div>
        <Routes>
          <Route path="/Components/Projects" element={<Projects />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

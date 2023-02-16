import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Game from "./Game"
import LoginForm from "./LoginForm";
import Form from "./Form"

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/game">Game</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/registration" element={<Form />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>

        <footer>Ez egy footer és igenis kell, mert szeretem.</footer>
      </div>
    </Router>
  );
}

export default App;

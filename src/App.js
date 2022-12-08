import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Frontend/Home";
import DonersList from "./Components/Frontend/DonersList/DonersList";
import Signup from "./Components/Frontend/Auth/Signup";
import Signin from "./Components/Frontend/Auth/Signin";


function App() {

  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doners" element={<DonersList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

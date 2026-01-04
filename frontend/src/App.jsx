import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import AboutUs from "./components/aboutus/AboutUs";
import SignUp from "./components/signup-signin/SignUp";
import SignIn from "./components/signup-signin/SignIn";
import Todo from "./components/todo/Todo";
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/todo" element = {<Todo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

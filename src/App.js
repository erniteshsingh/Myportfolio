import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About";
import AboutMe from "./component/AboutMe";
import Aboutskills from "./component/Aboutskills";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import Journey from "./component/OurJouney";
import Skillpage from "./component/Skillspage";
import Ranke from "./component/Ranke";
import Project from "./component/Project";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar></Navbar>
                <About></About>
                <Aboutskills></Aboutskills>
                <AboutMe></AboutMe>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/skill"
            element={
              <>
                <Navbar></Navbar>
                <About></About>
                <Aboutskills></Aboutskills>
                <Skillpage></Skillpage>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/journey"
            element={
              <>
                <Navbar></Navbar>
                <About></About>
                <Aboutskills></Aboutskills>
                <Journey></Journey>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar></Navbar>
                <About></About>
                <Aboutskills></Aboutskills>
                <Contact></Contact>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/ranke"
            element={
              <>
                <Navbar></Navbar>
                <About></About>
                <Aboutskills></Aboutskills>
                <Ranke></Ranke>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/project"
            element={
              <>
                <Navbar></Navbar>

                <About></About>
                <Project></Project>
                <Footer></Footer>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar></Navbar>
                <About></About>
                <Aboutskills></Aboutskills>
                <AboutMe></AboutMe>
                {/* <Project></Project> */}
                <Footer></Footer>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

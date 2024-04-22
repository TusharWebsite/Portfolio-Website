import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Project from "./pages/Projects/Project";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import Fade from 'react-reveal/Fade';
import Mobilenav from "./components/MobileNav/Mobilenav";


function App() {
  return (
    <>
    <Mobilenav/>
    <Layout/>
    <About/>
    <div className="container">
    <Education/>
    <Techstack/>
    <Project/>
    <Experience/>
    <Contact/>
    </div>
    <Fade bottom>
      <div className="footer text-center">
      <h4  style={{marginLeft: 7 + 'em'}} >Made BY Tushar &copy; 2024</h4>
    </div>
    </Fade>
    <ScrollToTop smooth color="white" style={{backgroundColor:"rgb(0, 153, 255)", borderRadius:"80px"}}/>
    </>
  );
}

export default App;

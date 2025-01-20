import "./App.css";
import Heading from "./componets/header/Heading";
import Section from "./componets/section/Section";
import About from "./componets/about/About";
import Contact from "./componets/contact/Contact";
import Work from "./componets/work/Work";
import Skills from "./componets/skills/Skills";
import Footer from "./componets/footer/Footer";

function App() {
  return (
    <div className="App">
      <Heading />
      <Section />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

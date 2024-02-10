import './App.css';
import Heading from './componets/Heading';
import Section from './componets/Section';
import About from './componets/About';
import Contact from './componets/Contact';
import Work from './componets/Work';
import Skills from './componets/Skills';
import Footer from './componets/Footer';


function App() {
  return (
    <div className='App'>
        <Heading/>
        <Section/>
        <About/>
        <Skills/>
        <Work/>
        <Contact /> 
        <Footer/>
    </div>
    
    
        
    
  );
}

export default App;

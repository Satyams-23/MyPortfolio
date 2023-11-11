import Navbar from './components/Navbar/navbar';
import Intro from './components/intro/intro.js'
import Skills from './components/Skills/skills'
import Works from './components/works/works.js';
import Contact from './components/Contact/contact.js';
import Footer from "./components/Footer/footer.js"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;

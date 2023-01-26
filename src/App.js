
import './App.css';
import { About } from './componants/About/About';
import { Contacts } from './componants/About/contacts';
import { Gallery } from './componants/Gallery/Gallery';
import { Hero } from './componants/Hero/Hero';
import { Thoughts } from './componants/OurThoughts/Thoughts';
import { Navbar } from './containers/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Thoughts />
      <Gallery />
      <About />
      <Contacts />
    </div>
  );
}

export default App;

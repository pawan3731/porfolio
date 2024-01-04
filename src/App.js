import './Custom.css';
import About from './component/About';
import Banner from './component/Banner';
// import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Portfolio from './component/Portfolio';
import Services from './component/Services';
import Skill from './component/Skill';
import Marque from './component/Marque';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Skill/>
      <Services/>
      <Marque/>
      <Portfolio/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;

import Navbar from './Navbar';
import Home from './Home';
import Landing from './Landing';
import Footer from './Footer';
import Example from './example';
import About from './About';

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className='content'>
    <Landing/>
    <Home />
    <About/>
    <Footer></Footer>
    
    </div>
    </div>
  );
}

export default App;

import Navbar from './Navbar';
import Home from './Home';
import Landing from './Landing';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className='content'>
    <Landing/>
    <Home />
    
    </div>
    </div>
  );
}

export default App;

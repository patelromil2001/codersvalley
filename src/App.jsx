import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Salaries from './Salaries';
import Quote from './Quote';
import Blog from './Blog';
import Faqs from './Faqs';
import Testing from './Testing';
import Data from './Data';

function App() {
  return (
    <div className='overflow-clip'>
      <Navbar />
      <Home />
      <About />
      <Salaries />
      <Data />
      <Testing />
      <Faqs />
      <Quote />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;

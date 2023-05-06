import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Salaries from './Salaries';
// import Testimonials from './Testimonials';
// import Process from './Data';
// import Fee from './Fee';
import Quote from './Quote';
// import Contractor from './Contractor';
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
    <Data/>
    {/* <Contractor/> */}
    
    {/* <Testimonials/> */}
    <Testing />
    {/* <Fee /> */}
    <Faqs />
    <Quote />
    
    
    <Blog/>
    <Footer/>
    
    </div>
  );
}




export default App;

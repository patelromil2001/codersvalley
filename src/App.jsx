import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Salaries from './Salaries';
import Testimonials from './Testimonials';
import Process from './Process';
// import Fee from './Fee';
import Quote from './Quote';
// import Contractor from './Contractor';
import Blog from './Blog';

function App() {
  return (
    <div className='overflow-clip'>
    <Navbar />
    <Home />
    <About />
    <Salaries />
    <Process/>
    {/* <Contractor/> */}
    <Testimonials/>
    {/* <Fee /> */}
    <Quote />
    <Blog/>
    <Footer/>
    
    </div>
  );
}




export default App;

import './App.css';
import Copyright from './components/copyright/Copyright';
import Footer from './components/footer/Footer';
import FunFactsArea from './components/funArea/FunFactsArea';
import MainBanner from './components/mainBanner/MainBanner';
import NavBar from './components/navBar/NavBar';
import Services from './components/services/Services';
import Testimonial from './components/testimonial/Testimonial';
import TopContactBar from './components/topContactBar/TopContactBar';
import TopServices from './components/topServices/TopServices';

function App () {
  // const testimonial = useRef();
  // const handleTestimonialClick = () => {
  //   testimonial.current.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div className="">
      <TopContactBar />
      <NavBar />
      <MainBanner />
      <Services />
      <TopServices />
      <FunFactsArea />
      <Testimonial/>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;

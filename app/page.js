import { Footer, Navbar, NewFeatures } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights,  World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div
      className='relative'
    >
       <About />
       <div
       className='gradient-03 z-0'
       />
       <Explore />
    </div>
   
    <div
      className='relative'
    >
    <GetStarted />
    <div
    className='gradient-04 z-0'
    />
   
    </div>
   <Footer/>
    
    
  </div>
);

export default Page;

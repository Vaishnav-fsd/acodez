import './index.css';

// Upper
import Navbar from './components/upper/Navbar';
import Hero from './components/upper/Hero';
import Stats from './components/upper/Stats';
import BuildSection from './components/upper/BuildSection';

// Middle
import ProductsBanner from './components/middle/ProductsBanner';
import Industries from './components/middle/Industries';
import WhyUs from './components/middle/WhyUs';
import Process from './components/middle/Process';
import Projects from './components/middle/Projects';

// Lower
import FAQ from './components/lower/FAQ';
import About from './components/lower/About';
import Footer from './components/lower/Footer';
import FloatingSupport from './components/lower/FloatingSupport';
import Insights from './components/lower/Insights';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <BuildSection />
        <ProductsBanner />
        <WhyUs />
        <Industries />
        <Process />
        <Projects />
        <FAQ />
        <Insights />
        <About />
      </main>
      <Footer />
      <FloatingSupport />
    </>
  );
}

export default App;

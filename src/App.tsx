import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { About } from './components/sections/About';
import { BusinessUnits } from './components/sections/BusinessUnits';
import { Contact } from './components/sections/Contact';
import { FeaturedProduct } from './components/sections/FeaturedProduct';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Values } from './components/sections/Values';

function App() {
  return (
    <div className="min-h-screen bg-white text-brand-text-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BusinessUnits />
        <FeaturedProduct />
        <Values />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

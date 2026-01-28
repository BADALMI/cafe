import Header from './components/Header';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import About from './components/About';
import MenuPreview from './components/MenuPreview';
import SocialProof from './components/SocialProof';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-[60px]">
        <Hero />
        <QuickInfo />
        <About />
        <MenuPreview />
        <SocialProof />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <StickyActions />
    </div>
  );
}

export default App;

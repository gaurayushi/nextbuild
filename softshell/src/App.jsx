import './index.css';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import HowItWorks from './components/howitWorks';
import ChatWidget from './components/ChatWidget';

function App() {
  
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] dark:text-white text-black font-sans relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0 pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
        <ChatWidget/>
      </div>
    </div>
  );
}

export default App;

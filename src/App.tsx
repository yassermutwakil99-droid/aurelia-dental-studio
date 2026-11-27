import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Treatments from '@/components/Treatments';
import Experience from '@/components/Experience';
import Doctors from '@/components/Doctors';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Experience />
        <Doctors />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

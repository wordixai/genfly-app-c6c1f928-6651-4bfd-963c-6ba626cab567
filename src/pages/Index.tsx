import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';
import Attractions from '@/components/Attractions';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
        <Attractions />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
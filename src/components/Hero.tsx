import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2849&q=80)'
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to Paradise
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">test-by the sea at Azure Bay Resort</p>
        <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
          Discover pristine beaches, world-class amenities, and unforgettable moments 
          at our exclusive seaside retreat where every detail is designed for your comfort.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
            <Calendar className="mr-2 h-5 w-5" />
            Book Your Stay
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
            <MapPin className="mr-2 h-5 w-5" />
            Virtual Tour
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="opacity-80">Luxury Suites</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">5★</h3>
            <p className="opacity-80">Guest Rating</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">24/7</h3>
            <p className="opacity-80">Concierge Service</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
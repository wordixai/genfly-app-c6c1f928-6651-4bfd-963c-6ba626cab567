import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Star, Camera } from 'lucide-react';

const Attractions = () => {
  const attractions = [
    {
      id: 1,
      name: "Coral Reef Snorkeling",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
      distance: "5 minutes walk",
      duration: "2-3 hours",
      rating: 4.8,
      description: "Explore vibrant coral reefs teeming with tropical fish just steps from our beach."
    },
    {
      id: 2,
      name: "Historic Lighthouse",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
      distance: "10 minutes drive",
      duration: "1-2 hours",
      rating: 4.6,
      description: "Visit the iconic 19th-century lighthouse with panoramic coastal views."
    },
    {
      id: 3,
      name: "Sea Turtle Sanctuary",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
      distance: "15 minutes drive",
      duration: "2-4 hours",
      rating: 4.9,
      description: "Experience marine conservation efforts and witness sea turtle releases."
    },
    {
      id: 4,
      name: "Sunset Sailing",
      image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
      distance: "Resort Marina",
      duration: "3 hours",
      rating: 4.7,
      description: "Romantic sailing excursions with champagne service and stunning sunsets."
    }
  ];

  return (
    <section id="attractions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Local Attractions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the natural wonders and cultural treasures surrounding Azure Bay Resort. 
            From underwater adventures to historic landmarks, create unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {attractions.map((attraction) => (
            <Card key={attraction.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{attraction.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl mb-2">{attraction.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {attraction.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0 mt-4">
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {attraction.distance}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {attraction.duration}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <Camera className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-blue-900 text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Adventure Awaits</h3>
          <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
            Let our concierge team help you plan the perfect itinerary with guided tours, 
            equipment rentals, and exclusive experiences.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
            Contact Concierge
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Attractions;
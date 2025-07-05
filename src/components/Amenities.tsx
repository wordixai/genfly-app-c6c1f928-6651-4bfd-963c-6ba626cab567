import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, Dumbbell, Utensils, Wifi, Car, Coffee, Spa, Shield, Clock } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Private Beach",
      description: "Exclusive access to pristine white sand beaches with crystal clear waters"
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym with personal trainers and ocean views"
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Award-winning restaurants featuring international and local cuisine"
    },
    {
      icon: Spa,
      title: "Luxury Spa",
      description: "Full-service spa offering rejuvenating treatments and wellness programs"
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the resort"
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary valet parking service for all guests"
    },
    {
      icon: Coffee,
      title: "Pool Bar",
      description: "Poolside service with tropical cocktails and light refreshments"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Round-the-clock security ensuring your safety and peace of mind"
    },
    {
      icon: Clock,
      title: "Concierge Service",
      description: "Personal concierge to assist with reservations and local activities"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Amenities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in luxury with our comprehensive range of amenities designed 
            to enhance every moment of your stay at Azure Bay Resort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <amenity.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{amenity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {amenity.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pool & Recreation</h3>
              <p className="text-gray-600 mb-6">
                Dive into our stunning infinity pool overlooking the ocean, 
                enjoy water sports, or relax in our poolside cabanas with signature cocktails.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Waves className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Infinity Pool with Ocean Views</span>
                </div>
                <div className="flex items-center">
                  <Waves className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Water Sports Equipment</span>
                </div>
                <div className="flex items-center">
                  <Waves className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Private Cabanas</span>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80" 
                alt="Resort Pool"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bed, Users, Waves, Wifi, Car, Coffee } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Ocean View Suite",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
      price: "$299",
      guests: 2,
      beds: 1,
      size: "450 sq ft",
      description: "Elegant suite with panoramic ocean views, private balcony, and luxury amenities.",
      amenities: ["Ocean View", "Private Balcony", "King Bed", "WiFi", "Mini Bar"]
    },
    {
      id: 2,
      name: "Beachfront Villa",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
      price: "$599",
      guests: 4,
      beds: 2,
      size: "800 sq ft",
      description: "Spacious villa with direct beach access, private pool, and dedicated butler service.",
      amenities: ["Beach Access", "Private Pool", "Butler Service", "2 Bedrooms", "Kitchen"]
    },
    {
      id: 3,
      name: "Sunset Penthouse",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80",
      price: "$899",
      guests: 6,
      beds: 3,
      size: "1200 sq ft",
      description: "Ultimate luxury penthouse with 360-degree views, rooftop terrace, and premium services.",
      amenities: ["Panoramic Views", "Rooftop Terrace", "3 Bedrooms", "Jacuzzi", "Premium Service"]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxury Accommodations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our selection of elegantly appointed rooms and suites, each designed 
            to provide the perfect blend of comfort, style, and breathtaking ocean views.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <span className="font-bold text-blue-600">{room.price}</span>
                  <span className="text-gray-600 text-sm">/night</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{room.name}</CardTitle>
                <CardDescription>{room.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {room.guests} guests
                  </div>
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1" />
                    {room.beds} bed{room.beds > 1 ? 's' : ''}
                  </div>
                  <div className="flex items-center">
                    <Waves className="h-4 w-4 mr-1" />
                    {room.size}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full">Reserve Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
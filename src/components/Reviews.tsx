import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      date: "March 2024",
      review: "Absolutely magical experience! The staff went above and beyond to make our honeymoon special. The ocean view suite was breathtaking, and the sunset dinners were unforgettable.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      date: "February 2024",
      review: "Perfect family vacation destination. The kids loved the beach activities while my wife and I enjoyed the spa services. The concierge team helped us discover amazing local attractions.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      date: "January 2024",
      review: "The luxury and attention to detail exceeded all expectations. From the private beach to the world-class dining, every moment felt like paradise. Already planning our return visit!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      id: 4,
      name: "David Rodriguez",
      location: "Miami, FL",
      rating: 5,
      date: "December 2023",
      review: "Outstanding service and amenities. The beachfront villa was spectacular, and the water sports activities were top-notch. The staff treated us like royalty throughout our stay.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Guest Reviews</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why our guests return year after year. Read authentic reviews 
            from travelers who have experienced the magic of Azure Bay Resort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      {review.location} • {review.date}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                  <p className="text-gray-700 pl-6 italic">"{review.review}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Exceptional Rating</h3>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Based on 500+ verified reviews from guests who stayed at Azure Bay Resort. 
              Join our community of satisfied travelers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-2">98%</h4>
                <p className="text-gray-600">Would Recommend</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-2">95%</h4>
                <p className="text-gray-600">Return Guests</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-600 mb-2">500+</h4>
                <p className="text-gray-600">5-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
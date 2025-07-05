import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, Users, Bed } from 'lucide-react';

const BookingForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    rooms: '',
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', formData);
    setIsOpen(false);
    // Show success message
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Calendar className="mr-2 h-5 w-5" />
          Book Now
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Reserve Your Stay</DialogTitle>
          <DialogDescription>
            Complete your booking at Azure Bay Resort and prepare for an unforgettable experience.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Stay Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Stay Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="checkIn">Check-in Date</Label>
                <Input
                  id="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="checkOut">Check-out Date</Label>
                <Input
                  id="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="guests">Guests</Label>
                <Select onValueChange={(value) => handleInputChange('guests', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5 Guests</SelectItem>
                    <SelectItem value="6">6+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="rooms">Rooms</Label>
                <Select onValueChange={(value) => handleInputChange('rooms', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select rooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Room</SelectItem>
                    <SelectItem value="2">2 Rooms</SelectItem>
                    <SelectItem value="3">3 Rooms</SelectItem>
                    <SelectItem value="4">4+ Rooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="roomType">Room Type</Label>
                <Select onValueChange={(value) => handleInputChange('roomType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ocean-view">Ocean View Suite</SelectItem>
                    <SelectItem value="beachfront">Beachfront Villa</SelectItem>
                    <SelectItem value="penthouse">Sunset Penthouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {/* Guest Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Guest Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              Complete Booking
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
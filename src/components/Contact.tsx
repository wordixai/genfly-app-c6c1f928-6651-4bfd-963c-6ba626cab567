import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about your stay? Our dedicated team is here to help you plan 
            the perfect getaway at Azure Bay Resort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Phone className="mr-2 h-5 w-5 text-blue-600" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Reservations: +1 (555) 123-4567</p>
                <p className="text-gray-600">Concierge: +1 (555) 123-4568</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Mail className="mr-2 h-5 w-5 text-blue-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">reservations@azurebayresort.com</p>
                <p className="text-gray-600">info@azurebayresort.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  1234 Ocean Drive<br />
                  Paradise Bay, PB 12345<br />
                  United States
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="mr-2 h-5 w-5 text-blue-600" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Front Desk: 24/7</p>
                <p className="text-gray-600">Concierge: 6:00 AM - 10:00 PM</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
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
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      rows={6}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Find Us</CardTitle>
              <CardDescription className="text-center">
                Located on the pristine shores of Paradise Bay
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">Azure Bay Resort Location</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
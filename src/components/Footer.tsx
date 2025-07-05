import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Resort Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Azure Bay Resort</h3>
              <p className="text-gray-300 mb-6">
                Where luxury meets the sea. Experience unparalleled comfort and elegance 
                at our exclusive seaside resort.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#rooms" className="hover:text-white transition-colors">Accommodations</a></li>
                <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
                <li><a href="#attractions" className="hover:text-white transition-colors">Attractions</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Spa & Wellness</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fine Dining</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Water Sports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Event Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Airport Transfer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Concierge Service</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p>1234 Ocean Drive</p>
                    <p>Paradise Bay, PB 12345</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                  <p>info@azurebayresort.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Azure Bay Resort. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
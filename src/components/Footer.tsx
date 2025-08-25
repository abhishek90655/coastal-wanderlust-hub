import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Waves, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  Send
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-ocean rounded-lg">
                <Waves className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">OceanDreams</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Creating unforgettable travel experiences across the world's most beautiful destinations.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/destinations', label: 'Destinations' },
                { to: '/contact', label: 'Contact' },
                { to: '#', label: 'About Us' },
                { to: '#', label: 'Blog' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <div className="space-y-3">
              {[
                'Flight Booking',
                'Hotel Reservations', 
                'Tour Packages',
                'Travel Insurance',
                'Car Rentals',
              ].map((service) => (
                <div
                  key={service}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe for travel deals and inspiration
            </p>
            
            <div className="flex space-x-2 mb-6">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button size="sm" className="bg-gradient-sunset hover:shadow-hover">
                <Send className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">hello@oceandreams.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 OceanDreams. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
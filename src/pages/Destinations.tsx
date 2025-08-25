import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, MapPin } from 'lucide-react';

// Import all destination images
import santoriniImage from '@/assets/santorini.jpg';
import maldivesImage from '@/assets/maldives.jpg';
import baliImage from '@/assets/bali.jpg';
import machuPicchuImage from '@/assets/machu-picchu.jpg';
import icelandImage from '@/assets/iceland.jpg';
import dubaiImage from '@/assets/dubai.jpg';

const Destinations = () => {
  const allDestinations = [
    {
      image: santoriniImage,
      title: "Santorini",
      location: "Greece", 
      description: "Iconic blue-domed churches and stunning sunsets over the Aegean Sea.",
      rating: 4.9,
      duration: "7 days",
      price: "$1,299",
      isPopular: true
    },
    {
      image: maldivesImage,
      title: "Maldives",
      location: "Indian Ocean",
      description: "Overwater bungalows and crystal-clear lagoons in tropical paradise.",
      rating: 4.8,
      duration: "5 days", 
      price: "$2,499",
      isPopular: true
    },
    {
      image: baliImage,
      title: "Bali",
      location: "Indonesia",
      description: "Rice terraces, ancient temples, and vibrant cultural experiences.",
      rating: 4.7,
      duration: "8 days",
      price: "$899"
    },
    {
      image: machuPicchuImage,
      title: "Machu Picchu", 
      location: "Peru",
      description: "Ancient Incan citadel nestled high in the Andes Mountains.",
      rating: 4.9,
      duration: "6 days",
      price: "$1,799"
    },
    {
      image: icelandImage,
      title: "Iceland",
      location: "Nordic Region",
      description: "Northern Lights, glaciers, and breathtaking volcanic landscapes.",
      rating: 4.6,
      duration: "9 days",
      price: "$1,599"
    },
    {
      image: dubaiImage,
      title: "Dubai",
      location: "UAE", 
      description: "Futuristic skyline, luxury shopping, and desert adventures.",
      rating: 4.5,
      duration: "4 days",
      price: "$1,199"
    }
  ];

  const categories = [
    "All Destinations",
    "Beach Paradises", 
    "Mountain Adventures",
    "Cultural Heritage",
    "City Escapes",
    "Wildlife Safaris"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore All
              <span className="block text-accent-light">Destinations</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Discover handpicked destinations that offer unforgettable experiences, from tropical beaches to ancient wonders
            </p>
          </div>

          {/* Search & Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-foreground/60 h-5 w-5" />
                <Input 
                  placeholder="Search destinations..." 
                  className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              <Button 
                variant="outline" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All Destinations" ? "default" : "outline"}
                  size="sm"
                  className={category === "All Destinations" 
                    ? "bg-gradient-sunset hover:shadow-hover" 
                    : "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Showing {allDestinations.length} destinations</span>
            </div>
            
            <select className="px-4 py-2 border border-border rounded-lg bg-background text-foreground">
              <option>Sort by Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
              <option>Duration</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDestinations.map((destination, index) => (
              <div key={destination.title} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Load More Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-ocean-surface">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-deep mb-4">
            Get Travel Inspiration
          </h2>
          <p className="text-xl text-ocean-deep/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new destinations and exclusive deals
          </p>
          
          <div className="max-w-md mx-auto flex space-x-4">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1"
            />
            <Button className="bg-gradient-ocean hover:shadow-hover">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
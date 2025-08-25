import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Globe, Shield, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import destination images
import santoriniImage from '@/assets/santorini.jpg';
import maldivesImage from '@/assets/maldives.jpg';
import baliImage from '@/assets/bali.jpg';
import machuPicchuImage from '@/assets/machu-picchu.jpg';

const Home = () => {
  const featuredDestinations = [
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
      price: "$2,499"
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
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "100+ Destinations",
      description: "Explore carefully curated destinations across all continents"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your safety is our priority with 24/7 support and insurance"
    },
    {
      icon: HeartHandshake,
      title: "Expert Guides", 
      description: "Local experts who know every hidden gem and secret spot"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Featured Destinations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-ocean-surface text-ocean-deep rounded-full text-sm font-semibold mb-4">
              ✨ Popular Destinations
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Discover Amazing
              <span className="block text-primary">Places to Visit</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From tropical paradises to ancient wonders, find your perfect getaway
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredDestinations.map((destination, index) => (
              <div key={destination.title} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/destinations">
              <Button size="lg" className="bg-gradient-ocean hover:shadow-hover text-lg px-8 py-4 group">
                View All Destinations
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-ocean-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-ocean-deep mb-6">
              Why Choose OceanDreams?
            </h2>
            <p className="text-xl text-ocean-deep/80 max-w-2xl mx-auto">
              We make travel planning effortless with our expert curation and personalized service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-ocean rounded-2xl mb-6 shadow-ocean">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-ocean-deep mb-4">{feature.title}</h3>
                <p className="text-ocean-deep/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy travelers who've discovered their perfect destinations with us
          </p>
          
          <div className="flex items-center justify-center mb-8 space-x-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-accent-light" />
              <span>Best Price Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-accent-light" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-accent-light" />
              <span>Instant Confirmation</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90 px-8 py-4 text-lg">
                Plan My Trip
              </Button>
            </Link>
            <Link to="/destinations">
              <Button size="lg" className="bg-gradient-sunset hover:shadow-hover px-8 py-4 text-lg">
                Browse Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-beach.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="p-4 bg-background/10 backdrop-blur-md rounded-2xl border border-background/20">
          <MapPin className="h-8 w-8 text-primary-foreground" />
        </div>
      </div>
      
      <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <div className="p-4 bg-background/10 backdrop-blur-md rounded-2xl border border-background/20">
          <Calendar className="h-8 w-8 text-primary-foreground" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="p-4 bg-background/10 backdrop-blur-md rounded-2xl border border-background/20">
          <Users className="h-8 w-8 text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-background/10 backdrop-blur-md rounded-full text-primary-foreground font-medium border border-background/20">
            ✈️ Discover Your Next Adventure
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Explore the World's
          <span className="block bg-gradient-sunset bg-clip-text text-transparent">
            Hidden Treasures
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          From pristine beaches to ancient wonders, embark on unforgettable journeys that create memories to last a lifetime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/destinations">
            <Button 
              size="lg" 
              className="bg-gradient-ocean hover:shadow-hover text-primary-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 group"
            >
              Explore Destinations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-background/10 backdrop-blur-md border-background/30 text-primary-foreground hover:bg-background/20 px-8 py-4 text-lg transition-all duration-300"
          >
            Watch Video
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">50K+</div>
            <div className="text-primary-foreground/80">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">100+</div>
            <div className="text-primary-foreground/80">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">25+</div>
            <div className="text-primary-foreground/80">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
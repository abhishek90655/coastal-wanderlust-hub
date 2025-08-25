import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Clock, ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  description: string;
  rating: number;
  duration: string;
  price: string;
  isPopular?: boolean;
}

const DestinationCard = ({
  image,
  title,
  location,
  description,
  rating,
  duration,
  price,
  isPopular = false
}: DestinationCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        {isPopular && (
          <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            🔥 Popular
          </div>
        )}
        
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-4 left-4 right-4 text-primary-foreground opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-background/10 backdrop-blur-md border-background/30 text-primary-foreground hover:bg-background/20"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          
          <div className="flex items-center bg-ocean-surface px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 text-accent mr-1 fill-current" />
            <span className="text-sm font-semibold text-ocean-deep">{rating}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{duration}</span>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">{price}</div>
            <div className="text-xs text-muted-foreground">per person</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
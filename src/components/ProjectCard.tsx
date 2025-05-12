
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link?: string;
}

const ProjectCard = ({ title, description, imageSrc, tags, link }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden bg-card border border-border/50 rounded-xl hover:shadow-xl transition-all duration-500 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-52 sm:h-64">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
          }}
        />
        
        {link && isHovered && (
          <div className="absolute bottom-4 right-4 transition-all duration-300">
            <Button 
              size="sm" 
              className="bg-white text-foreground hover:bg-white/90"
              asChild
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                View <ExternalLink size={14} className="ml-1" />
              </a>
            </Button>
          </div>
        )}
      </div>
      
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-secondary text-xs font-medium py-1 px-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

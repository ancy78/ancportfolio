
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
      className="overflow-hidden bg-card border hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 sm:h-64">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-secondary text-xs font-medium py-1 px-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {link && (
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full flex items-center justify-center gap-2 mt-2"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink size={14} />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

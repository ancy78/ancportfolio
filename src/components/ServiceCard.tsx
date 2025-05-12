
import { ReactNode } from 'react';
import { Phone } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
        <div className="text-brand-blue">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;

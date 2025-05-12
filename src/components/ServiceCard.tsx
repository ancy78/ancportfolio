
import { ReactNode } from 'react';
import { Phone } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card bg-white/80 backdrop-blur p-8 rounded-2xl shadow-lg flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6 service-icon">
        <div className="text-brand-blue text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;

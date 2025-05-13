
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card bg-card backdrop-blur p-8 rounded-2xl shadow-lg flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-border/20">
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 service-icon">
        <div className="text-primary text-2xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;

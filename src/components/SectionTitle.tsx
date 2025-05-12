
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  center = false,
  className
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12", 
      center ? "text-center" : "", 
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

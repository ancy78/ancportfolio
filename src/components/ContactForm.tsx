
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-left">
          Name
        </label>
        <Input
          id="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-white/50 border-muted focus-visible:ring-brand-blue"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-left">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/50 border-muted focus-visible:ring-brand-blue"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-left">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="min-h-[140px] resize-none bg-white/50 border-muted focus-visible:ring-brand-blue"
        />
      </div>
      
      <Button 
        type="submit" 
        className={`w-full transition-all ${isSubmitted ? 'bg-green-500 hover:bg-green-600' : 'bg-brand-blue hover:bg-brand-blue/90'} shadow-lg hover:shadow-xl py-6 h-auto`}
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 size={18} className="animate-spin" /> Sending...
          </span>
        ) : isSubmitted ? (
          <span className="flex items-center justify-center gap-2">
            <CheckCircle size={18} /> Message Sent!
          </span>
        ) : (
          <span>Send Message</span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;

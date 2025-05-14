
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Loader2, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration
    const serviceId = 'service_0y6ip0f';
    const templateId = 'template_rgin1de';
    const publicKey = 'XMNcuGqZq8tsEoNel';
    
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
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
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        toast({
          title: "Error",
          description: "Failed to send your message. Please try again.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-left text-foreground">
          Name
        </label>
        <Input
          id="name"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-white/50 dark:bg-gray-800/50 border-muted focus-visible:ring-brand-blue"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-left text-foreground">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/50 dark:bg-gray-800/50 border-muted focus-visible:ring-brand-blue"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-left text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell me about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="min-h-[140px] resize-none bg-white/50 dark:bg-gray-800/50 border-muted focus-visible:ring-brand-blue"
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
          <span className="flex items-center justify-center gap-2">
            <Mail size={18} /> Send Message
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;

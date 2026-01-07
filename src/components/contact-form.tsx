import React from "react";
import { Input, Textarea, Button } from "@heroui/react";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-4 mb-6"
        >
          <p className="font-medium">Thank you for your message!</p>
          <p>We'll get back to you as soon as possible.</p>
        </motion.div>
      ) : null}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            name="name"
            label="Name*"
            placeholder="Your name"
            value={formState.name}
            onChange={handleChange}
            required
            className="bg-white"
          />
        </div>
        
        <div>
          <Input
            type="email"
            name="email"
            label="Email*"
            placeholder="Your email address"
            value={formState.email}
            onChange={handleChange}
            required
            className="bg-white"
          />
        </div>
        
        <div>
          <Input
            type="tel"
            name="phone"
            label="Phone Number"
            placeholder="Your phone number"
            value={formState.phone}
            onChange={handleChange}
            className="bg-white"
          />
        </div>
        
        <div>
          <Textarea
            name="message"
            label="Message*"
            placeholder="How can we help you?"
            value={formState.message}
            onChange={handleChange}
            required
            minRows={5}
            className="bg-white"
          />
        </div>
        
        <Button
          type="submit"
          color="primary"
          className="w-full bg-greensboro-button hover:bg-opacity-90"
          isLoading={isSubmitting}
        >
          Submit
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
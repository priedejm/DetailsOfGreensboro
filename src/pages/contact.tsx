import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import ContactForm from "../components/contact-form";
import WaveDivider from "../components/wave-divider";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="bg-greensboro-green text-white py-16 md:py-20 relative">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg mb-8 opacity-90 text-center max-w-3xl mx-auto"
          >
            Have questions or ready to book a service? Get in touch with our team today.
          </motion.p>
        </div>
      </section>
      
      <section className="bg-greensboro-cream py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-greensboro-green mb-6">Get In Touch</h2>
              <p className="text-greensboro-green mb-8">
                Whether you're curious about our services, need a quote, or just want to say hi, we're here to help. Send us a message and let's start a conversation. Your satisfaction is our priority at Details of Greensboro.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-greensboro-green rounded-full flex items-center justify-center mr-4">
                    <Icon icon="lucide:phone" className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-greensboro-accent mb-1">Phone</p>
                    <p className="text-greensboro-green font-medium">(336) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-greensboro-green rounded-full flex items-center justify-center mr-4">
                    <Icon icon="lucide:mail" className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-greensboro-accent mb-1">Email</p>
                    <p className="text-greensboro-green font-medium">info@detailsofgreensboro.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-greensboro-green rounded-full flex items-center justify-center mr-4">
                    <Icon icon="lucide:map-pin" className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-greensboro-accent mb-1">Location</p>
                    <p className="text-greensboro-green font-medium">123 Main Street, Greensboro, NC 27401</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-greensboro-green rounded-full flex items-center justify-center mr-4">
                    <Icon icon="lucide:clock" className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-greensboro-accent mb-1">Business Hours</p>
                    <p className="text-greensboro-green font-medium">Monday - Friday: 8am - 6pm</p>
                    <p className="text-greensboro-green font-medium">Saturday: 9am - 4pm</p>
                    <p className="text-greensboro-green font-medium">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="https://instagram.com/detailsofgreensboro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-greensboro-green rounded-full flex items-center justify-center text-white hover:bg-greensboro-accent transition-colors"
                >
                  <Icon icon="lucide:instagram" />
                </a>
                <a 
                  href="https://facebook.com/detailsofgreensboro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-greensboro-green rounded-full flex items-center justify-center text-white hover:bg-greensboro-accent transition-colors"
                >
                  <Icon icon="lucide:facebook" />
                </a>
                <a 
                  href="https://twitter.com/detailsgso" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-greensboro-green rounded-full flex items-center justify-center text-white hover:bg-greensboro-accent transition-colors"
                >
                  <Icon icon="lucide:twitter" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-md">
                <h3 className="text-2xl font-bold text-greensboro-green mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="bg-greensboro-green py-16 relative">
        <WaveDivider color="#F5F2E3" position="top" />
        
        <div className="container mx-auto px-4 pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center text-white"
          >
            Find Us
          </motion.h2>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103600.88885373132!2d-79.88472225!3d36.0726355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88531b0a2c7f7755%3A0x4e5844f4165be8d8!2sGreensboro%2C%20NC!5e0!3m2!1sen!2sus!4v1626300000000!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Details of Greensboro Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
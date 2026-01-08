import React from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@heroui/react";

const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header section */}
      <section className="bg-greensboro-green text-white pt-24 md:pt-32 relative">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg mb-8 opacity-90 text-center max-w-3xl mx-auto"
          >
            Professional auto detailing services in Greensboro. From interior deep cleans to paint correction, we'll make your vehicle shine.
          </motion.p>
        </div>
      </section>
      
      {/* Basic Detail Package */}
      <section className="bg-greensboro-green pt-2 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-greensboro-cream rounded-3xl overflow-hidden max-w-6xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image side */}
              <div className="lg:w-1/3 h-64 lg:h-auto relative">
                <img 
                  src="/assets/4.jpg" 
                  alt="Basic Detailing Service" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-greensboro-cream via-greensboro-cream/50 to-transparent" />
              </div>
              
              {/* Content side */}
              <div className="lg:w-2/3 p-8 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-greensboro-green">Basic Detail Package</h2>
                  <span className="inline-block mt-2 sm:mt-0 px-4 py-1 bg-greensboro-green/10 rounded-full text-sm text-greensboro-green font-medium">
                    XL Truck/SUV: +$25-50
                  </span>
                </div>
                
                <p className="text-greensboro-green mb-6 text-lg">
                  Our signature service that transforms your vehicle inside and out. Deep interior cleaning with vacuum and deodorizing, full dash/console/door panel detail, crystal-clear glass, hand wash, wax, and tire shine.
                </p>
                
                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/60 rounded-2xl p-5 text-center">
                    <p className="text-greensboro-accent font-semibold text-sm uppercase tracking-wide mb-1">Monthly Members</p>
                    <p className="text-3xl font-bold text-greensboro-green">$100</p>
                    <p className="text-xs text-greensboro-green/70 mt-1">Consecutive monthly customers</p>
                  </div>
                  <div className="bg-white/60 rounded-2xl p-5 text-center">
                    <p className="text-greensboro-accent font-semibold text-sm uppercase tracking-wide mb-1">Standard</p>
                    <p className="text-3xl font-bold text-greensboro-green">$125-175</p>
                    <p className="text-xs text-greensboro-green/70 mt-1">Based on vehicle condition*</p>
                  </div>
                  <div className="bg-white/60 rounded-2xl p-5 text-center">
                    <p className="text-greensboro-accent font-semibold text-sm uppercase tracking-wide mb-1">Book Now</p>
                    <a 
                      href="/contact"
                      className="inline-block mt-2 px-6 py-2 bg-greensboro-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-all text-sm"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
                
                <p className="text-xs text-greensboro-green/60 mb-6">
                  *Price varies based on factors such as mud, dog hair, exterior mold, excessive personal belongings, etc.
                </p>
                
                {/* Add-ons */}
                <div className="border-t border-greensboro-green/20 pt-6">
                  <h3 className="text-lg font-bold text-greensboro-green mb-4">Enhance Your Detail</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/40 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-greensboro-green">Steam Cleaning</h4>
                        <span className="text-greensboro-accent font-bold">+$50</span>
                      </div>
                      <p className="text-sm text-greensboro-green/80">
                        Complete interior steam treatment — dashboard, consoles, door panels, and steering wheel sanitized and refreshed.
                      </p>
                    </div>
                    <div className="bg-white/40 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-greensboro-green">Steam + Shampoo</h4>
                        <span className="text-greensboro-accent font-bold">+$100</span>
                      </div>
                      <p className="text-sm text-greensboro-green/80">
                        Deep extraction cleaning. Choose one: floor mats, carpet floors, or seats. Contact us for additional areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Specialty Services */}
      <section className="bg-greensboro-green py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-6 text-center"
            >
              Specialty Services
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Paint Correction */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-greensboro-cream rounded-3xl overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="sm:w-2/5 h-48 sm:h-auto">
                    <img 
                      src="/assets/3.jpg" 
                      alt="Paint Correction" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 flex flex-col">
                    <h3 className="text-2xl font-bold text-greensboro-green mb-3">Paint Correction</h3>
                    <p className="text-greensboro-green/90 text-sm mb-4 flex-grow">
                      Restore your paint's showroom brilliance. Our meticulous process removes swirl marks, scratches, and oxidation using professional-grade polishers, compounds, and microfiber techniques.
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-greensboro-green/20">
                      <div>
                        <p className="text-sm text-greensboro-green/70">Starting at</p>
                        <p className="text-2xl font-bold text-greensboro-green">$400</p>
                      </div>
                      <a 
                        href="/contact"
                        className="px-5 py-2 bg-greensboro-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-all text-sm"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Headlight Restoration */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-greensboro-cream rounded-3xl overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row h-full">
                  <div className="sm:w-2/5 h-48 sm:h-auto">
                    <img 
                      src="/assets/1.jpg" 
                      alt="Headlight Restoration" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 flex flex-col">
                    <h3 className="text-2xl font-bold text-greensboro-green mb-3">Headlight Restoration</h3>
                    <p className="text-greensboro-green/90 text-sm mb-4 flex-grow">
                      Revive cloudy, yellowed headlights for improved visibility and appearance. We use professional sanding, polishing compounds, and UV sealant for lasting clarity.
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-greensboro-green/20">
                      <div className="flex gap-4">
                        <div>
                          <p className="text-xs text-greensboro-green/70">Standalone</p>
                          <p className="text-xl font-bold text-greensboro-green">$75</p>
                        </div>
                        <div>
                          <p className="text-xs text-greensboro-green/70">With Detail</p>
                          <p className="text-xl font-bold text-greensboro-accent">$50</p>
                        </div>
                      </div>
                      <a 
                        href="/contact"
                        className="px-5 py-2 bg-greensboro-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-all text-sm"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ section */}
      <section className="bg-greensboro-green text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-lg opacity-80 max-w-xl mx-auto">
              Everything you need to know before booking
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="bg-greensboro-cream rounded-2xl p-5 h-full">
                  <h3 className="text-lg font-semibold text-greensboro-green mb-2">{faq.question}</h3>
                  <p className="text-greensboro-green/80 text-sm">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-white/70 mb-4">Still have questions?</p>
            <a 
              href="/contact"
              className="inline-block px-8 py-3 bg-greensboro-cream text-greensboro-green rounded-lg font-medium hover:bg-white transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const faqs = [
  {
    question: "How long does a full detail take?",
    answer: "Typically 2-4 hours depending on vehicle size and condition. Paint correction may take longer."
  },
  {
    question: "Should I prepare my car beforehand?",
    answer: "We recommend removing personal items, but it's not required — we'll work around them."
  },
  {
    question: "How often should I detail my car?",
    answer: "Basic detail every 3-4 months, premium detail twice yearly. May vary based on use and conditions."
  },
  {
    question: "Do you offer mobile services?",
    answer: "Yes! We offer mobile detailing within the Greensboro area for an additional fee."
  }
];

export default ServicesPage;
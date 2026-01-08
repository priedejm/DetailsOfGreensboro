import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const AboutPage: React.FC = () => {
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
            About Us
          </motion.h1>
        </div>
      </section>
      
      {/* Hero statement with image */}
      <section className="bg-greensboro-green py-8">
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
              <div className="lg:w-2/5 h-64 lg:h-auto relative">
                <img 
                  src="/assets/wide1.png" 
                  alt="Details of Greensboro at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content side */}
              <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-greensboro-green mb-6">
                  Life is messy but your car doesn't have to be!
                </h2>
                <p className="text-greensboro-green text-lg leading-relaxed">
                  Details of Greensboro is a new school idea with the values of that old school work ethic that only seems harder and harder to find. Here at D.O.G our main mission is comfort, we believe that your car is one of the most important things to keep clean so that whether it's a Friday evening cruise with the radio blasting or a hectic morning with kids cramming in to make it to school on time we've got you covered.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Image gallery break */}
      <section className="bg-greensboro-green py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 max-w-6xl mx-auto overflow-hidden rounded-2xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-1 h-32 md:h-48 overflow-hidden rounded-xl"
            >
              <img src="/assets/4.jpg" alt="Detailing work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 h-32 md:h-48 overflow-hidden rounded-xl"
            >
              <img src="/assets/3.jpg" alt="Detailing work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 h-32 md:h-48 overflow-hidden rounded-xl hidden md:block"
            >
              <img src="/assets/1.jpg" alt="Detailing work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission statement */}
      <section className="bg-greensboro-green py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-greensboro-cream rounded-3xl overflow-hidden max-w-6xl mx-auto"
          >
            <div className="flex flex-col lg:flex-row-reverse">
              {/* Image side */}
              <div className="lg:w-2/5 h-64 lg:h-auto relative">
                <img 
                  src="/assets/wide.jpg" 
                  alt="Quality detailing results" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content side */}
              <div className="lg:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-greensboro-green mb-6">
                  Our Mission
                </h2>
                <p className="text-greensboro-green text-lg leading-relaxed">
                  Our goal is to keep your vehicle clean and your mind with one less thing to worry about. We take pride in each step of the detailing process to ensure your ride comes out great everytime but most importantly you are our priority. This company was built on communicating with the people around me and getting to know my neighbors one mess at a time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us section */}
      <section className="bg-greensboro-green text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Why Choose D.O.G?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-greensboro-cream rounded-2xl p-6 text-center"
              >
                <div className="bg-greensboro-green text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon={reason.icon} className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-greensboro-green">{reason.title}</h3>
                <p className="text-greensboro-green/80 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section with background image */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/wide2.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-greensboro-green/85" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience the D.O.G Difference?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Let us take care of your vehicle. Schedule your detail today and become part of the family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-3 bg-greensboro-cream text-greensboro-green rounded-lg font-medium hover:bg-white transition-all"
              >
                Book Your Detail
              </a>
              <a 
                href="/services"
                className="px-8 py-3 border-2 border-greensboro-cream text-greensboro-cream rounded-lg font-medium hover:bg-greensboro-cream hover:text-greensboro-green transition-all"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const reasons = [
  {
    icon: "lucide:award",
    title: "Old School Work Ethic",
    description: "We bring dedication and attention to detail that's becoming harder to find. Every vehicle is treated like our own."
  },
  {
    icon: "lucide:heart",
    title: "Community First",
    description: "Built on relationships with our neighbors. We're not just detailers, we're part of the Greensboro community."
  },
  {
    icon: "lucide:sparkles",
    title: "Your Comfort Matters",
    description: "Whether it's a Friday cruise or Monday morning school run, we make sure your ride is always ready."
  }
];

export default AboutPage;
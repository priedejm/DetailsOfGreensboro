import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import WaveDivider from "../components/wave-divider";

const AboutPage: React.FC = () => {
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg mb-8 opacity-90 text-center max-w-3xl mx-auto"
          >
            Details of Greensboro is dedicated to providing the highest quality auto detailing services in the Triad area.
          </motion.p>
        </div>
      </section>
      
      <section className="bg-greensboro-cream py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <img 
                src="https://img.heroui.chat/image/places?w=600&h=400&u=12" 
                alt="Details of Greensboro Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-greensboro-green mb-6">Our Story</h2>
              <p className="text-greensboro-green mb-4">
                Details of Greensboro was founded in 2015 with a simple mission: to provide exceptional auto detailing services that exceed customer expectations. What started as a passion for cars and attention to detail has grown into a trusted business serving the Greensboro community.
              </p>
              <p className="text-greensboro-green mb-4">
                Our founder, a lifelong car enthusiast, noticed a gap in the market for truly meticulous detailing services. He assembled a team of like-minded professionals who share his commitment to quality and customer satisfaction.
              </p>
              <p className="text-greensboro-green">
                Today, we continue to uphold those same values, treating each vehicle as if it were our own and constantly refining our techniques to deliver the best results possible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="bg-greensboro-green text-white py-16 relative">
        <WaveDivider color="#F5F2E3" position="top" />
        
        <div className="container mx-auto px-4 pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Why Choose Us
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-greensboro-cream text-greensboro-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon icon={reason.icon} className="text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="opacity-90">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-greensboro-cream py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center text-greensboro-green"
          >
            Meet Our Team
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://img.heroui.chat/image/avatar?w=200&h=200&u=" + (index + 1);
                      e.currentTarget.onerror = null;
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-greensboro-green">{member.name}</h3>
                <p className="text-greensboro-accent mb-3">{member.position}</p>
                <p className="text-greensboro-green">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const reasons = [
  {
    icon: "lucide:award",
    title: "Experience & Expertise",
    description: "Our team has years of experience and specialized training in all aspects of auto detailing."
  },
  {
    icon: "lucide:sparkles",
    title: "Premium Products",
    description: "We use only the highest quality, professional-grade products that are safe for your vehicle."
  },
  {
    icon: "lucide:check-circle",
    title: "Attention to Detail",
    description: "We meticulously inspect and treat every inch of your vehicle, ensuring nothing is overlooked."
  }
];

const team = [
  {
    name: "David Johnson",
    position: "Founder & Lead Detailer",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1",
    bio: "David has over 15 years of experience in auto detailing and is certified in paint correction and ceramic coating application."
  },
  {
    name: "Sarah Williams",
    position: "Operations Manager",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2",
    bio: "Sarah ensures that every detail job runs smoothly and that our customers receive exceptional service from start to finish."
  },
  {
    name: "Michael Rodriguez",
    position: "Senior Detailer",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3",
    bio: "Michael specializes in paint correction and has restored hundreds of vehicles to showroom condition."
  },
  {
    name: "Jessica Chen",
    position: "Customer Relations",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=4",
    bio: "Jessica handles scheduling, customer inquiries, and ensures that every client has a positive experience with our team."
  }
];

export default AboutPage;
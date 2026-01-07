import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  price?: string;
  additionalInfo?: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  price,
  additionalInfo = [],
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`service-card bg-greensboro-cream rounded-lg overflow-hidden shadow-sm ${className}`}
    >
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-greensboro-green mb-4">{title}</h3>
        
        {image && (
          <div className="mb-4 rounded-md overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://img.heroui.chat/image/places?w=400&h=300&u=1";
                e.currentTarget.onerror = null;
              }}
            />
          </div>
        )}
        
        <p className="text-greensboro-green mb-4">{description}</p>
        
        {price && (
          <p className="font-medium text-greensboro-accent mb-2">Starting at ${price}</p>
        )}
        
        {additionalInfo.length > 0 && (
          <ul className="mb-6">
            {additionalInfo.map((info, index) => (
              <li key={index} className="flex items-start mb-2">
                <span className="text-greensboro-accent mr-2 mt-1">•</span>
                <span>{info}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Button
          color="primary"
          className="bg-greensboro-button hover:bg-opacity-90 text-white w-full"
        >
          Schedule now / Ask Questions!
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
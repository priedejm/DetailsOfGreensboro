import React from "react";
import { motion } from "framer-motion";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

import ServiceCard from "../components/service-card";
import WaveDivider from "../components/wave-divider";

const ServicesPage: React.FC = () => {
  const [selected, setSelected] = React.useState("all");
  
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg mb-8 opacity-90 text-center max-w-3xl mx-auto"
          >
            We offer a comprehensive range of auto detailing services to keep your vehicle looking its best. From basic cleaning to specialized treatments, we have you covered.
          </motion.p>
        </div>
      </section>
      
      <section className="bg-greensboro-cream py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Tabs 
              aria-label="Service categories" 
              selectedKey={selected} 
              onSelectionChange={setSelected}
              color="primary"
              variant="underlined"
              classNames={{
                tabList: "bg-white p-2 rounded-lg shadow-sm",
                cursor: "bg-greensboro-accent"
              }}
            >
              <Tab key="all" title="All Services" />
              <Tab key="detailing" title="Detailing" />
              <Tab key="correction" title="Paint Correction" />
              <Tab key="restoration" title="Restoration" />
              <Tab key="protection" title="Protection" />
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(service => selected === "all" || service.category === selected)
              .map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  price={service.price}
                  additionalInfo={service.additionalInfo}
                />
              ))}
          </div>
        </div>
      </section>
      
      <section className="bg-greensboro-green text-white py-16 relative">
        <WaveDivider color="#F5F2E3" position="top" />
        
        <div className="container mx-auto px-4 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Have questions about our services? Find answers to common questions below.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <Card className="bg-white text-greensboro-green">
                  <CardBody>
                    <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Basic Detailing",
    description: "Our basic detailing package includes a thorough exterior wash, tire and wheel cleaning, interior vacuuming, surface cleaning, and window cleaning.",
    image: "https://img.heroui.chat/image/places?w=400&h=300&u=6",
    price: "150",
    category: "detailing",
    additionalInfo: ["2-3 hours service time", "Includes interior & exterior"]
  },
  {
    title: "Premium Detailing",
    description: "Our premium package includes everything in the basic package plus leather conditioning, carpet shampooing, engine bay detailing, and a hand wax finish.",
    image: "https://img.heroui.chat/image/places?w=400&h=300&u=7",
    price: "250",
    category: "detailing",
    additionalInfo: ["4-5 hours service time", "Deep interior cleaning", "Hand wax finish"]
  },
  {
    title: "Paint Correction",
    description: "Our paint correction service removes swirl marks, scratches, and oxidation to restore your vehicle's paint to a like-new condition.",
    image: "https://img.heroui.chat/image/places?w=400&h=300&u=8",
    price: "400",
    category: "correction",
    additionalInfo: ["Multi-stage polishing", "Removes swirl marks & scratches"]
  },
  {
    title: "Ceramic Coating",
    description: "Protect your vehicle's paint with a ceramic coating that provides long-lasting protection against environmental contaminants and UV damage.",
    image: "https://img.heroui.chat/image/places?w=400&h=300&u=9",
    price: "800",
    category: "protection",
    additionalInfo: ["2-5 years protection", "Hydrophobic properties", "UV resistance"]
  },
  {
    title: "Headlight Restoration",
    description: "Restore clarity to yellowed or foggy headlights, improving both appearance and safety with our professional restoration service.",
    image: "https://img.heroui.chat/image/places?w=400&h=300&u=10",
    price: "75",
    category: "restoration",
    additionalInfo: ["Improves visibility", "UV sealant applied", "50$ with detail booking"]
  },
  {
    title: "Interior Detail",
    description: "Our interior detailing service includes deep cleaning of all interior surfaces, shampooing of carpets and upholstery, and treatment of leather surfaces.",
    image: "https://img.heroui.chat/image/places?w=400&h=300&u=11",
    price: "175",
    category: "detailing",
    additionalInfo: ["3-4 hours service time", "Includes steam cleaning"]
  }
];

const faqs = [
  {
    question: "How long does a full detail take?",
    answer: "A full detail typically takes 4-6 hours depending on the size and condition of your vehicle. For premium services like paint correction, it may take longer."
  },
  {
    question: "Do I need to prepare my car before bringing it in?",
    answer: "We recommend removing personal items from your vehicle before service, but it's not required. We'll work around anything left in the vehicle."
  },
  {
    question: "How often should I get my car detailed?",
    answer: "For optimal results, we recommend a basic detail every 3-4 months and a premium detail twice a year. This frequency may vary based on your driving conditions and how you use your vehicle."
  },
  {
    question: "How long does ceramic coating last?",
    answer: "Our ceramic coatings typically last 2-5 years with proper maintenance. We offer different grades of coating with varying durability and protection levels."
  },
  {
    question: "Do you offer mobile detailing services?",
    answer: "Yes, we offer mobile detailing services within the Greensboro area for an additional fee. Please contact us for availability and pricing."
  }
];

export default ServicesPage;
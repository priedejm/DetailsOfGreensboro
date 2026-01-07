import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  const carouselImages = [
    { id: 1, src: "/assets/wide1.png", srcSmall: "/assets/3.jpg" },
    { id: 2, src: "/assets/wide.jpg", srcSmall: "/assets/4.jpg" },
    { id: 3, src: "/assets/wide2.png", srcSmall: "/assets/1.jpg" },
    { id: 4, src: "/assets/wide3.png", srcSmall: "/assets/3.jpg" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section with Carousel */}
      <section className="bg-[#2F3A1D] text-white min-h-[80vh] flex items-center relative overflow-hidden" style={{ marginTop: '-60px', paddingTop: '60px' }}>
        {/* Carousel Background */}
        <div className="absolute inset-0" style={{ top: '-60px', zIndex: 0 }}>
          {carouselImages.map((image, index) => (
            <motion.img
              key={index}
              src={isSmallScreen ? image.srcSmall : image.src}
              alt="Car Detailing"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Professional Auto Detailing in Greensboro
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl mb-8 opacity-90"
              >
                Transform your vehicle with our premium detailing services. From basic cleaning to paint correction and headlight restoration, we bring back that showroom shine.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="/services"
                  className="px-6 py-3 bg-[#619196] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
                >
                  Our Services
                </a>
                <a 
                  href="/contact"
                  className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all"
                >
                  Get a Quote
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="bg-[#F5F2E3] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F3A1D] mb-4">What We Do</h2>
            <p className="text-lg text-[#2F3A1D] opacity-80 max-w-2xl mx-auto">
              Our professional detailing services will keep your vehicle looking its best, inside and out.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#2F3A1D] mb-4">{service.title}</h3>
                  <div className="mb-4 rounded-md overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <p className="text-[#2F3A1D] mb-4">{service.description}</p>
                  {service.price && (
                    <p className="font-medium text-[#619196] mb-2">Starting at ${service.price}</p>
                  )}
                  {service.additionalInfo && (
                    <ul className="mb-6">
                      {service.additionalInfo.map((info, i) => (
                        <li key={i} className="flex items-start mb-2">
                          <span className="text-[#619196] mr-2 mt-1">•</span>
                          <span>{info}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <button className="w-full px-6 py-3 bg-[#619196] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all">
                    Schedule now / Ask Questions!
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <a 
              href="/services"
              className="inline-block px-6 py-3 bg-[#619196] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              View All Services
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="bg-[#2F3A1D] text-white py-16 md:py-24 relative">
        {/* Wave Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
            className="relative block w-full h-[120px]"
          >
            <path 
              d="m0 128 80-10.7C160 107 320 85 480 96c160 11 320 53 480 64s320-11 400-21.3l80-10.7v192H0Z"
              fill="#F5F2E3"
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Got a question? We've got answers!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg mb-6 opacity-90"
              >
                Whether you're curious about our services, need a quote, or just want to say hi, we're here to help. Send us a message and let's start a conversation. Your satisfaction is our priority at Details of Greensboro.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#F5F2E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm opacity-80">Call Us / Text Us</p>
                    <a href="tel:3365426266" className="text-lg font-semibold hover:text-[#F5F2E3] transition-colors">
                      (336) 542-6266
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#F5F2E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@detailsofgreensboro.com" className="hover:text-[#F5F2E3] transition-colors">
                    info@detailsofgreensboro.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#F5F2E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Greensboro, NC</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#F5F2E3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm">Monday - Saturday: 9am - 7pm</p>
                    <p className="text-sm opacity-80">Sunday: Email us</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:w-1/2 flex justify-center w-full">
              <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-md">
                <h3 className="text-2xl font-bold text-[#2F3A1D] mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#2F3A1D] focus:outline-none focus:ring-2 focus:ring-[#619196]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#2F3A1D] focus:outline-none focus:ring-2 focus:ring-[#619196]"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#2F3A1D] focus:outline-none focus:ring-2 focus:ring-[#619196]"
                  />
                  <textarea
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#2F3A1D] focus:outline-none focus:ring-2 focus:ring-[#619196]"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-[#619196] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-[#F5F2E3] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2F3A1D] mb-4">What Our Clients Say</h2>
            <p className="text-lg text-[#2F3A1D] opacity-80 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#2F3A1D] mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#2F3A1D] flex items-center justify-center text-white mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-[#2F3A1D]">{testimonial.name}</p>
                    <p className="text-sm text-[#2F3A1D] opacity-70">{testimonial.location}</p>
                  </div>
                </div>
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
    description: "Detailing is at the core of Details of Greensboro. It's what most of our customers want: transforming a dirty or neglected car into one that looks fresh from the dealership. Our packages cover thorough interior and exterior cleaning, including foam bath, vacuuming, steam cleaning, conditioning, deodorizing, and more.",
    image: "/assets/4.jpg"
  },
  {
    title: "Paint Correction",
    description: "Over time, your car's paint faces the elements, losing shine and collecting scratches. Our paint correction service skillfully restores its brilliance, bringing back that showroom-worthy appearance with detailed polishing, ensuring a flawless finish to impress car enthusiasts.",
    image: "/assets/3.jpg",
    price: "400",
    additionalInfo: ["Call for a quote today"]
  },
  {
    title: "Headlight Restoration",
    description: "Headlight restoration swiftly revives cloudy or yellowed headlights, enhancing visibility and appearance using materials like sandpaper, polishing compound, and UV sealant.",
    image: "/assets/1.jpg",
    additionalInfo: [
      "75$ without detail booking",
      "50$ if booked along with detail"
    ]
  }
];

const testimonials = [
  {
    name: "Michael T.",
    location: "Greensboro, NC",
    text: "Details of Greensboro transformed my 5-year-old car into what looks like a brand new vehicle. The attention to detail was incredible, and the team was professional from start to finish."
  },
  {
    name: "Sarah L.",
    location: "High Point, NC",
    text: "I had my headlights restored and they look amazing! The difference is night and day. I can actually see while driving at night now. Highly recommend their services!"
  },
  {
    name: "James R.",
    location: "Winston-Salem, NC",
    text: "The paint correction service was worth every penny. My car had so many swirl marks and minor scratches, but now the finish is flawless. These guys are true professionals."
  }
];

export default HomePage;
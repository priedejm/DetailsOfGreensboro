import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, update } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdS1r3LuYaxLmr-9ZKieQE2qnVzzgyIKg",
  authDomain: "jacoozy-b63e7.firebaseapp.com",
  databaseURL: "https://jacoozy-b63e7-default-rtdb.firebaseio.com",
  projectId: "jacoozy-b63e7",
  storageBucket: "jacoozy-b63e7.appspot.com",
  messagingSenderId: "980884095472",
  appId: "1:980884095472:web:b33d57617ab9fd3b599d35",
  measurementId: "G-2R699LGFN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isReadyToSend, setIsReadyToSend] = useState(false);
  const [emailSending, setEmailSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [websiteCount, setWebsiteCount] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);

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

  // Read website count from Firebase
  useEffect(() => {
    const showsRef = ref(db, 'websiteCountDetailsOfGSO');
    const unsubscribe = onValue(showsRef, (snapshot) => {
      const data = snapshot.val();
      setWebsiteCount(data || 0);
    });
    return () => unsubscribe();
  }, []);

  // Validate form whenever inputs change
  useEffect(() => {
    setIsReadyToSend(verifyForm());
  }, [email, name, message]);

  const validateEmail = (text: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  };

  const verifyForm = () => {
    if (name === '') return false;
    if (message === '') return false;
    if (email === '' || !validateEmail(email)) return false;
    return true;
  };

  const writeData = () => {
    const data = websiteCount + 1;
    const updates: { [key: string]: number } = {};
    const showsRef = ref(db);
    updates['/websiteCountDetailsOfGSO'] = data;
    update(showsRef, updates);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isReadyToSend) return;

    try {
      setEmailSending(true);
      setSubmitError(false);
      
      await fetch('https://ludoapi-2024.onrender.com/contactEmailDetailsOfGSO', {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passphrase: "huyter",
          name: name,
          email: email,
          number: phoneNumber,
          subject: `Oh boi! Someone from the website is trying to contact you! #${websiteCount}`,
          content: message
        }),
      });

      writeData();
      setEmailSending(false);
      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      setPhoneNumber('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (e) {
      console.log("Error when sending email", e);
      setSubmitError(true);
      setEmailSending(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section with Carousel - changed to h-screen */}
      <section className="bg-greensboro-green text-white h-screen flex items-center relative overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/80" />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-[1] h-full">
          <div className="flex flex-col items-center justify-start pt-8 md:justify-center md:pt-0 h-full">
            {/* Logo above text with opacity and border radius */}
            <motion.img 
              src="/assets/Logo2.png" 
              alt="Details of Greensboro Logo" 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.8, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-64 md:w-112 h-auto mb-6 rounded-3xl"
              style={{ opacity: 0.8 }}
            />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-5xl font-bold mb-6 text-center"
            >
              New School ideas with Old School work ethic.
            </motion.h1>
            {/* Hide description on small screens */}
            {!isSmallScreen && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl mb-8 opacity-90 text-center max-w-2xl"
              >
                Transform your vehicle with our premium detailing services. From basic cleaning to paint correction and headlight restoration, we bring back that showroom shine.
              </motion.p>
            )}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a 
                href="/services"
                className="px-6 py-3 bg-[#619196] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
              >
                Our Services
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all"
              >
                Get a Quote
              </button>
            </motion.div>
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
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col h-full"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold text-[#2F3A1D] mb-4">{service.title}</h3>
                  <div className="mb-4 rounded-md overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <p className="text-[#2F3A1D] mb-4">{service.description}</p>
                  <div className="mt-auto">
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full px-6 py-3 bg-[#619196] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
                    >
                      Schedule now / Ask Questions!
                    </button>
                  </div>
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
      <section id="contact" className="bg-[#2F3A1D] text-white py-16 md:py-24 relative">
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
                
                {submitSuccess && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                {submitError && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                    Sorry, there was an issue submitting your form. Please try again.
                  </div>
                )}
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Your name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#2F3A1D] focus:outline-none focus:ring-2 focus:ring-[#619196]"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg text-[#2F3A1D] focus:outline-none focus:ring-2 focus:ring-[#619196] ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                      required
                    />
                    {emailError && email !== '' && (
                      <p className="text-red-500 text-sm mt-1">Please enter a valid email</p>
                    )}
                  </div>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#2F3A1D] focus:outline-none focus:ring-2 focus:ring-[#619196]"
                  />
                  <textarea
                    placeholder="How can we help you? *"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#2F3A1D] focus:outline-none focus:ring-2 focus:ring-[#619196]"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    disabled={!isReadyToSend || emailSending}
                    className={`w-full px-6 py-3 text-white rounded-lg font-medium transition-all flex items-center justify-center ${
                      isReadyToSend && !emailSending
                        ? 'bg-[#619196] hover:bg-opacity-90'
                        : 'bg-gray-400 cursor-not-allowed opacity-60'
                    }`}
                  >
                    {emailSending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Submit'
                    )}
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <button 
              onClick={() => setShowAllReviews(true)}
              className="inline-block px-6 py-3 bg-[#2F3A1D] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all"
            >
              View All Reviews
            </button>
          </motion.div>
        </div>
      </section>

      {/* Reviews Modal */}
      <AnimatePresence>
        {showAllReviews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAllReviews(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#F5F2E3] rounded-xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-[#2F3A1D] text-white p-4 flex items-center justify-between z-10">
                <h3 className="text-xl font-bold">All Customer Reviews</h3>
                <button 
                  onClick={() => setShowAllReviews(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-64px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-500 mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-[#2F3A1D] mb-3 text-sm italic">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#2F3A1D] flex items-center justify-center text-white text-sm mr-2">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-[#2F3A1D] text-sm">{testimonial.name}</p>
                          <p className="text-xs text-[#2F3A1D] opacity-70">{testimonial.location}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
    image: "/assets/3.jpg"
  },
  {
    title: "Headlight Restoration",
    description: "Headlight restoration swiftly revives cloudy or yellowed headlights, enhancing visibility and appearance using materials like sandpaper, polishing compound, and UV sealant.",
    image: "/assets/1.jpg"
  }
];

const testimonials = [
  {
    name: "Lauren P.",
    location: "Cornwallis Dr",
    text: "Zach does an impeccable job! He communicates very well, is reasonable with his pricing, and doesn't miss a thing. I can't recommend his services enough!"
  },
  {
    name: "Teresa M.",
    location: "Woodridge",
    text: "Zach, with Details of Greensboro, did a great job on my car! He was polite, a good communicator and a hard worker! I highly recommend him! You won't be sorry!"
  },
  {
    name: "Chandler B.",
    location: "Starmount Forest",
    text: "Zach did a great job detailing our car! It was easy to schedule with him and he was excellent to work with. Not sure our 4Runner has ever been this clean inside and out - we will be repeat customers!"
  }
];

const allTestimonials = [
  ...testimonials,
  {
    name: "Karen S.",
    location: "Wendover",
    text: "If you're looking for a car detailer I can't recommend enough. He was prompt with his responses and made sure to get me on the books quickly. The convenience of having someone come to your home is amazing."
  },
  {
    name: "Adelaide P.",
    location: "Northern Shores",
    text: "Zach is the best!! Our cars look fantastic. He is hard working, professional, and a very nice person. I highly recommend him."
  },
  {
    name: "Kristen L.",
    location: "Lansdowne",
    text: "Zach did an excellent job on my SUV! My car was a hot mess of kids spills and dirt and dog hair...some stuck on goo and much more. He got it all clean!"
  },
  {
    name: "Donna H.",
    location: "British Woods",
    text: "Zac did a wonderful job detailing my car! Prompt, courteous, reliable, hard working!"
  },
  {
    name: "Dawn M.",
    location: "Northern Shores",
    text: "Outstanding customer service! Was very professional, prompt, and the quality of the work was excellent!"
  },
  {
    name: "May T.",
    location: "Starmount Forest",
    text: "So glad I saw someone's post about Details of Greensboro! After easy scheduling by text, Zach and co-worker showed up at my house at the appointed time, worked diligently for 2 hours."
  },
  {
    name: "Terri W.",
    location: "Starmount Forest",
    text: "Zach did an amazing job on my vehicle today! Great young man with an excellent work ethic!"
  },
  {
    name: "Susan S.",
    location: "The Point - Lake Jeanette",
    text: "Details of Greensboro is highly recommended for cleaning your vehicle inside and out. Even the tires are shiny enough to see myself! Zach arrived on time with all supplies to do the job right."
  },
  {
    name: "Toni C.",
    location: "Bellwood Village",
    text: "I wish I had taken a picture of my car when Zach had completed cleaning the exterior and the interior. My car looked like it had just come off the Toyota dealer's lot. It looked brand new."
  },
  {
    name: "Cathy V.",
    location: "Yanceyville South",
    text: "My first time of ever detailing my car and Zach was superb! My car hasn't looked this clean since I bought it. I would highly recommend him for detailing your vehicle!"
  },
  {
    name: "Eileen S.",
    location: "Sunset Hills",
    text: "I hired Zach to detail my husband's car for his birthday. He was thrilled. The car looked showroom clean. We will definitely hire him again."
  },
  {
    name: "Donna N.",
    location: "North Haven",
    text: "Zach did a great job on our cars. On time, polite and hard worker! Would definitely recommend!"
  },
  {
    name: "Buster W.",
    location: "Lawndale",
    text: "I found Zach on NextDoor and thought I would give him a try. Results were far beyond my expectations. He did a great job. I will definitely be a repeat customer with two vehicles."
  },
  {
    name: "Sherry B.",
    location: "Prestbury",
    text: "Zach is an amazing young man! Let me know when he was on his way, arrived on time, worked hard the whole time he was here. Very mature for his age, great work ethic!"
  },
  {
    name: "Corliss M.",
    location: "Latham Park",
    text: "Wow, Zak exceeded expectations. I'm having him on a regular basis. It feels good to drive a clean car!"
  },
  {
    name: "Jillian S.",
    location: "Bellwood Village",
    text: "Zach showed up promptly at the arranged time. He and his coworker did an excellent job of cleaning my SUV. Every nook and cranny was cleaned out. They did this in a timely manner."
  },
  {
    name: "Judyth W.",
    location: "British Woods",
    text: "Zach brought out glitter in my car's paint that I haven't seen in a long time. He got my steering wheel clean. Everything is clean! And he is pleasant company, too."
  },
  {
    name: "Alicia B.",
    location: "Bellwood Village",
    text: "Zach detailed my SUV that hasn't been cleaned in a long time. He did an amazing job! I highly recommend Zach!"
  },
  {
    name: "Linda W.",
    location: "Whitehall",
    text: "Zach washed all 3 of our vehicles and did an outstanding job. The price is excellent and we trust our vehicles are in good hands. Thank you, Zach! Great job"
  },
  {
    name: "Fran H.",
    location: "Hamilton Lakes",
    text: "Several people on Nextdoor had recommended Zach and Details of Greensboro so we hired him to detail our two cars, a sedan and an SUV. Our cars sit outside and were in desperate need of cleaning."
  }
];

export default HomePage;
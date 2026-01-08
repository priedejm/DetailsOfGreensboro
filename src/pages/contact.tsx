import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
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

const ContactPage: React.FC = () => {
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
      {/* Header section with more padding for distance from wave */}
      <section className="bg-greensboro-green text-white pt-24 md:pt-32 relative">
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
      
      {/* Contact section - cream bubble in center, green background */}
      <section className="bg-greensboro-green py-2">
        <div className="container mx-auto px-4">
          <div className="bg-greensboro-cream rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 justify-between">
              {/* Get In Touch - no white bubble, content directly in cream */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/2"
              >
                <h2 className="text-2xl font-bold text-greensboro-green mb-4">Get In Touch</h2>
                <p className="text-greensboro-green mb-6">
                  Whether you're curious about our services, need a quote, or just want to say hi, we're here to help.
                </p>
                
                <div className="space-y-5 mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-greensboro-green rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon icon="lucide:phone" className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-greensboro-accent">Call Us / Text Us</p>
                      <a href="tel:3365426266" className="text-greensboro-green font-medium hover:text-greensboro-accent transition-colors">
                        (336) 542-6266
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-greensboro-green rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon icon="lucide:mail" className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-greensboro-accent">Email</p>
                      <a href="mailto:info@detailsofgreensboro.com" className="text-greensboro-green font-medium hover:text-greensboro-accent transition-colors">
                        info@detailsofgreensboro.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-greensboro-green rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon icon="lucide:map-pin" className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-greensboro-accent">Location</p>
                      <p className="text-greensboro-green font-medium">Greensboro, NC</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-greensboro-green rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon icon="lucide:clock" className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-xs text-greensboro-accent">Business Hours</p>
                      <p className="text-greensboro-green font-medium">Mon - Sat: 9am - 7pm</p>
                      <p className="text-greensboro-green opacity-70">Sunday: Email us</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <a 
                    href="https://instagram.com/detailsofgreensboro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-greensboro-green rounded-full flex items-center justify-center text-white hover:bg-greensboro-accent transition-colors"
                  >
                    <Icon icon="lucide:instagram" className="text-sm" />
                  </a>
                </div>
              </motion.div>
              
              {/* Contact Form - no white bubble, content directly in cream */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:w-1/2"
              >
                <h3 className="text-2xl font-bold text-greensboro-green mb-6">Send Us a Message</h3>
                
                {submitSuccess && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                {submitError && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                    Sorry, there was an issue submitting your form. Please try again.
                  </div>
                )}
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm text-greensboro-green mb-1">Name*</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-greensboro-green/30 rounded-lg text-greensboro-green bg-transparent focus:outline-none focus:ring-2 focus:ring-greensboro-accent placeholder:text-greensboro-green/50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-greensboro-green mb-1">Email*</label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg text-greensboro-green bg-transparent focus:outline-none focus:ring-2 focus:ring-greensboro-accent placeholder:text-greensboro-green/50 ${emailError && email !== '' ? 'border-red-500' : 'border-greensboro-green/30'}`}
                      required
                    />
                    {emailError && email !== '' && (
                      <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm text-greensboro-green mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-3 border border-greensboro-green/30 rounded-lg text-greensboro-green bg-transparent focus:outline-none focus:ring-2 focus:ring-greensboro-accent placeholder:text-greensboro-green/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-greensboro-green mb-1">Message*</label>
                    <textarea
                      placeholder="How can we help you?"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 border border-greensboro-green/30 rounded-lg text-greensboro-green bg-transparent focus:outline-none focus:ring-2 focus:ring-greensboro-accent placeholder:text-greensboro-green/50"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={!isReadyToSend || emailSending}
                    className={`w-full px-6 py-3 text-white rounded-lg font-medium transition-all flex items-center justify-center ${
                      isReadyToSend && !emailSending
                        ? 'bg-greensboro-accent hover:bg-opacity-90'
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map section - no wave divider */}
      <section className="bg-greensboro-green py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center text-white"
          >
            Find Us
          </motion.h2>
          
          <div className="rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103600.88885373132!2d-79.88472225!3d36.0726355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88531b0a2c7f7755%3A0x4e5844f4165be8d8!2sGreensboro%2C%20NC!5e0!3m2!1sen!2sus!4v1626300000000!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
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
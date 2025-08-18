'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/ui/FloatingCallButton';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

interface ContactInfo {
  id: string;
  title: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  driverType: string;
}

class ContactManager {
  private contactInfo: ContactInfo[] = [
    {
      id: 'phone',
      title: 'Phone',
      value: '(305) 942-4054',
      icon: <Phone className="w-6 h-6" />,
      href: 'tel:(305) 942-4054'
    },
    {
      id: 'email',
      title: 'Email',
      value: 'miamibrightstar@gmail.com',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:miamibrightstar@gmail.com'
    },
    {
      id: 'address',
      title: 'Address',
      value: '1758 NE 163rd Street, North Miami Beach, FL 33162',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      id: 'hours',
      title: 'Business Hours',
      value: 'Monday - Friday: 8:00 AM - 6:00 PM',
      icon: <Clock className="w-6 h-6" />
    }
  ];

  getContactInfo(): ContactInfo[] {
    return this.contactInfo;
  }
}

export default function ContactPage() {
  const contactManager = new ContactManager();
  const contactInfo = contactManager.getContactInfo();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    driverType: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        driverType: ''
      });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-background-light">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to start your career with Anna Marsi LLC? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info) => (
              <div key={info.id} className="text-center p-6 bg-background-light rounded-xl">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {info.icon}
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-text mb-2">
                  {info.title}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-text-muted">
                    {info.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
                  Get In Touch
                </h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <p className="text-lg text-text-muted">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-text mb-2">
                    Thank You!
                  </h3>
                  <p className="text-text-muted">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                        placeholder="(305) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="driverType" className="block text-sm font-medium text-text mb-2">
                      Driver Type
                    </label>
                    <select
                      id="driverType"
                      name="driverType"
                      value={formData.driverType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select driver type</option>
                      <option value="single">Single Driver</option>
                      <option value="team">Team Driver</option>
                      <option value="new">New to Trucking</option>
                      <option value="experienced">Experienced Driver</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-4">
                  Find Us
                </h2>
                <div className="w-20 h-1 bg-primary mb-6"></div>
                <p className="text-lg text-text-muted">
                  Located in North Miami Beach, Florida, we're perfectly positioned to serve South Florida and beyond.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 mb-8 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">1758 NE 163rd Street, North Miami Beach, FL 33162</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-heading font-bold text-text mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a
                      href="tel:(305) 942-4054"
                      className="text-text-muted hover:text-primary transition-colors duration-200"
                    >
                      (305) 942-4054
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a
                      href="mailto:miamibrightstar@gmail.com"
                      className="text-text-muted hover:text-primary transition-colors duration-200"
                    >
                      miamibrightstar@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </main>
  );
}

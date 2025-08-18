'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/ui/FloatingCallButton';
import { Truck, Shield, Clock, MapPin, Package, Users, Award, CheckCircle } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
}

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

class ServicesManager {
  private services: Service[] = [
    {
      id: 'long-distance',
      title: 'Long Distance Trucking',
      description: 'Reliable long-haul transportation services across the Southeast and beyond.',
      features: [
        'Cross-country routes available',
        'Modern GPS tracking systems',
        'Dedicated dispatch support',
        'Competitive mileage rates'
      ],
      icon: <Truck className="w-8 h-8" />,
      image: '/truck1.jpeg'
    },
    {
      id: 'regional',
      title: 'Regional Routes',
      description: 'South Florida and Southeast regional transportation with regular home time.',
      features: [
        'Florida and Southeast coverage',
        'Regular home time schedule',
        'Local route knowledge',
        'Flexible scheduling options'
      ],
      icon: <MapPin className="w-8 h-8" />,
      image: '/truck2.jpeg'
    },
    {
      id: 'freight',
      title: 'General Freight',
      description: 'Safe and secure transportation of various freight types with full insurance coverage.',
      features: [
        'Full cargo insurance',
        'Secure loading procedures',
        'Real-time tracking',
        'Professional handling'
      ],
      icon: <Package className="w-8 h-8" />,
      image: '/truck3.jpeg'
    },
    {
      id: 'team-driving',
      title: 'Team Driving Opportunities',
      description: 'Higher earning potential with team driving partnerships and shared responsibilities.',
      features: [
        'Higher pay rates ($0.80/mile)',
        'Shared driving responsibilities',
        'Faster delivery times',
        'Team coordination support'
      ],
      icon: <Users className="w-8 h-8" />,
      image: '/truck4.jpeg'
    }
  ];

  private benefits: Benefit[] = [
    {
      id: 'safety',
      title: '100% Safety Record',
      description: 'We maintain the highest safety standards with comprehensive training and modern equipment.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 'reliability',
      title: 'On-Time Delivery',
      description: 'Our commitment to punctuality ensures your cargo arrives when and where it needs to be.',
      icon: <Clock className="w-6 h-6" />
    },
    {
      id: 'experience',
      title: '5+ Years Experience',
      description: 'Proven track record in the transportation industry with satisfied clients and drivers.',
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 'support',
      title: '24/7 Support',
      description: 'Round-the-clock dispatch and support team to assist with any needs or concerns.',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  getServices(): Service[] {
    return this.services;
  }

  getBenefits(): Benefit[] {
    return this.benefits;
  }
}

export default function ServicesPage() {
  const servicesManager = new ServicesManager();
  const services = servicesManager.getServices();
  const benefits = servicesManager.getBenefits();

  return (
    <main className="min-h-screen bg-background-light">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional transportation services with a focus on safety, 
              reliability, and driver satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              From long-distance hauls to regional routes, we provide comprehensive 
              trucking services that meet the diverse needs of our drivers and clients.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-20 ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-text">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-text">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      <span>Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">
              Why Choose Anna Marsi LLC?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              We stand out in the transportation industry through our commitment 
              to excellence and driver satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-heading font-semibold text-text mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">
                  Modern Fleet & Equipment
                </h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                <p>
                  Our fleet consists of modern, well-maintained Freightliner trucks 
                  equipped with the latest safety and comfort features.
                </p>
                <p>
                  Every truck undergoes regular maintenance and safety inspections 
                  to ensure optimal performance and driver safety on the road.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-background-light rounded-lg">
                  <div className="text-2xl font-heading font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-text-muted">Safety Record</div>
                </div>
                <div className="text-center p-4 bg-background-light rounded-lg">
                  <div className="text-2xl font-heading font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-text-muted">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/truck5.jpeg"
                alt="Anna Marsi LLC Fleet"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join Anna Marsi LLC and experience professional trucking services 
            with competitive pay and family values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us Today
            </a>
            <a
              href="tel:(305) 942-4054"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-200"
            >
              Call (305) 942-4054
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </main>
  );
}

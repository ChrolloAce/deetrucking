'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCallButton from '@/components/ui/FloatingCallButton';
import { Users, Award, MapPin, Clock, Shield, Heart } from 'lucide-react';

interface Stat {
  id: string;
  number: string;
  label: string;
  icon: React.ReactNode;
}



class AboutManager {
  private stats: Stat[] = [
    {
      id: 'experience',
      number: '5+',
      label: 'Years in Business',
      icon: <Award className="w-8 h-8" />
    },
    {
      id: 'drivers',
      number: '50+',
      label: 'Happy Drivers',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'routes',
      number: '1000+',
      label: 'Successful Routes',
      icon: <MapPin className="w-8 h-8" />
    },
    {
      id: 'safety',
      number: '100%',
      label: 'Safety Record',
      icon: <Shield className="w-8 h-8" />
    }
  ];



  getStats(): Stat[] {
    return this.stats;
  }


}

export default function AboutPage() {
  const aboutManager = new AboutManager();
  const stats = aboutManager.getStats();

  return (
    <main className="min-h-screen bg-background-light">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              About Anna Marsi LLC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A family-oriented trucking company built on trust, reliability, 
              and over 5 years of experience in South Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">
                  Our Story
                </h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                <p>
                  Anna Marsi LLC was founded with a simple mission: to create a trucking company 
                  that treats drivers like family while delivering exceptional service to our clients.
                </p>
                <p>
                  Located in the heart of South Florida, we've spent over 5 years building 
                  relationships with drivers who share our values of safety, reliability, and professionalism.
                </p>
                <p>
                  What started as a small family business has grown into a trusted name in the 
                  transportation industry, but we've never forgotten our roots or our commitment 
                  to giving people opportunities to succeed.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="/truck1.jpeg"
                alt="Anna Marsi LLC Truck"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">
              Our Track Record
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center bg-white p-8 rounded-xl shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-heading font-bold text-text mb-2">
                  {stat.number}
                </div>
                <div className="text-text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text mb-6">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              These core values guide everything we do and shape the culture of our company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background-light rounded-xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-xl text-primary">
                  <Heart className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-text mb-4">
                Family First
              </h3>
              <p className="text-text-muted leading-relaxed">
                We treat every driver like family, creating a supportive environment 
                where everyone can thrive and succeed.
              </p>
            </div>

            <div className="text-center p-8 bg-background-light rounded-xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-xl text-primary">
                  <Shield className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-text mb-4">
                Safety Excellence
              </h3>
              <p className="text-text-muted leading-relaxed">
                Safety is never compromised. We maintain the highest standards 
                and provide comprehensive training for all our drivers.
              </p>
            </div>

            <div className="text-center p-8 bg-background-light rounded-xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-xl text-primary">
                  <Clock className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-text mb-4">
                Reliability
              </h3>
              <p className="text-text-muted leading-relaxed">
                Our clients and drivers can count on us. We deliver on our promises 
                and maintain consistent, dependable service.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the difference of working with a company that truly values its drivers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              View Career Opportunities
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-200"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </main>
  );
}

'use client';

import React from 'react';
import { 
  DollarSign, 
  Calendar, 
  Shield, 
  Heart, 
  Users, 
  Clock,
  Award,
  Home,
  Phone,
  Truck
} from 'lucide-react';

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: string;
}

class BenefitsManager {
  private benefits: Benefit[] = [
    {
      id: 'competitive-pay',
      title: 'Competitive Pay',
      description: 'Industry-leading pay rates with opportunities for performance bonuses and overtime.',
      highlight: '$0.65 - $0.80 per mile',
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      id: 'weekly-pay',
      title: 'Weekly Payments',
      description: 'Reliable weekly pay schedule ensures consistent income for you and your family.',
      highlight: 'Every Friday',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      id: 'health-insurance',
      title: 'Health Benefits',
      description: 'Comprehensive health insurance options to keep you and your family covered.',
      highlight: 'Full Coverage Available',
      icon: <Heart className="w-8 h-8" />
    },
    {
      id: 'safety-first',
      title: 'Safety Program',
      description: 'Comprehensive safety training and equipment to ensure your protection on the road.',
      highlight: '100% Safety Record',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'family-culture',
      title: 'Family Environment',
      description: 'Join a family-oriented company that values your success and work-life balance.',
      highlight: 'Family Values',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'flexible-schedule',
      title: 'Flexible Scheduling',
      description: 'Work schedules designed to accommodate your personal life and preferences.',
      highlight: 'Work-Life Balance',
      icon: <Clock className="w-8 h-8" />
    },
    {
      id: 'performance-bonuses',
      title: 'Performance Bonuses',
      description: 'Additional earning opportunities through safety bonuses and performance incentives.',
      highlight: 'Extra Income',
      icon: <Award className="w-8 h-8" />
    },
    {
      id: 'home-time',
      title: 'Home Time',
      description: 'Regular home time to spend with family and recharge for the next run.',
      highlight: 'Regular Home Time',
      icon: <Home className="w-8 h-8" />
    },
    {
      id: 'support',
      title: '24/7 Support',
      description: 'Round-the-clock dispatch and support team to assist you whenever needed.',
      highlight: 'Always Available',
      icon: <Phone className="w-8 h-8" />
    },
    {
      id: 'equipment',
      title: 'Modern Equipment',
      description: 'Well-maintained, modern trucks with the latest safety and comfort features.',
      highlight: 'Latest Models',
      icon: <Truck className="w-8 h-8" />
    }
  ];

  getBenefits(): Benefit[] {
    return this.benefits;
  }
}

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

class BenefitCard extends React.Component<BenefitCardProps> {
  render() {
    const { benefit, index } = this.props;
    
    return (
      <div 
        className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 transform hover:-translate-y-1"
        style={{ 
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            {benefit.icon}
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-heading font-semibold text-text mb-2 group-hover:text-primary transition-colors duration-300">
            {benefit.title}
          </h3>
          
          {benefit.highlight && (
            <div className="text-primary font-bold text-sm mb-3 bg-primary/10 px-4 py-2 rounded-full inline-block">
              {benefit.highlight}
            </div>
          )}
          
          <p className="text-sm text-text-muted leading-relaxed">
            {benefit.description}
          </p>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full transform translate-x-8 -translate-y-8 group-hover:bg-primary/10 transition-colors duration-300"></div>
      </div>
    );
  }
}

interface BenefitsSectionProps {
  className?: string;
}

export default function BenefitsSection({ className = '' }: BenefitsSectionProps) {
  const benefitsManager = new BenefitsManager();
  const benefits = benefitsManager.getBenefits();

  return (
    <section id="benefits" className={`section-padding bg-white ${className}`}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-text mb-4">
            Why Choose Anna Marsi LLC?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            We offer comprehensive benefits and a supportive work environment that puts 
            our drivers first. Join our family and experience the Anna Marsi difference.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Ready to Join Our Team?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
            Experience the benefits of working with a family-oriented trucking company 
            that truly cares about your success and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:(305) 942-4054"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: (305) 942-4054</span>
            </a>
            <a
              href="mailto:miamibrightstar@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Email Us Today</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-48 h-48 bg-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary rounded-full"></div>
      </div>
    </section>
  );
}

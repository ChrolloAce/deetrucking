'use client';

import React from 'react';
import { 
  Truck, 
  Users, 
  DollarSign, 
  Calendar, 
  MapPin,
  Star,
  Clock,
  Shield
} from 'lucide-react';

interface DriverOpportunity {
  id: string;
  title: string;
  description: string;
  pay: string;
  icon: React.ReactNode;
}

class DriverOpportunityManager {
  private opportunities: DriverOpportunity[] = [
    {
      id: 'single-driver',
      title: 'Single Drivers',
      description: 'Perfect for independent drivers looking for steady work with competitive pay and flexible schedules.',
      pay: '$0.65 per mile',
      icon: <Truck className="w-8 h-8" />
    },
    {
      id: 'team-driver',
      title: 'Team Drivers',
      description: 'Higher earning potential for team drivers with shared responsibilities and faster delivery times.',
      pay: '$0.80 per mile or 30% gross',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 'weekly-pay',
      title: 'Weekly Payments',
      description: 'Reliable weekly pay schedule ensures consistent income for you and your family.',
      pay: 'Paid Every Week',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      id: 'south-florida',
      title: 'South Florida Routes',
      description: 'Local and long-distance routes throughout South Florida with opportunities for growth.',
      pay: 'Multiple Routes Available',
      icon: <MapPin className="w-8 h-8" />
    },
    {
      id: 'experience-welcome',
      title: 'New Drivers Welcome',
      description: 'We welcome drivers of all experience levels and provide support to help you succeed.',
      pay: 'Training & Support',
      icon: <Star className="w-8 h-8" />
    },
    {
      id: 'family-culture',
      title: 'Family Environment',
      description: 'Join a family-oriented company that values your success and provides a supportive work environment.',
      pay: 'Family Values',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'long-distance',
      title: 'Long Distance Available',
      description: 'Opportunities for long-distance hauling for drivers seeking higher mileage and earnings.',
      pay: 'Higher Mileage',
      icon: <Clock className="w-8 h-8" />
    },
    {
      id: 'competitive-pay',
      title: 'Competitive Rates',
      description: 'Industry-competitive pay rates with opportunities for bonuses and performance incentives.',
      pay: 'Performance Bonuses',
      icon: <DollarSign className="w-8 h-8" />
    }
  ];

  getOpportunities(): DriverOpportunity[] {
    return this.opportunities;
  }
}

interface OpportunityCardProps {
  opportunity: DriverOpportunity;
  index: number;
}

class OpportunityCard extends React.Component<OpportunityCardProps> {
  render() {
    const { opportunity, index } = this.props;
    
    return (
      <div 
        className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 transform hover:-translate-y-1"
        style={{ 
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {/* Icon and Pay */}
        <div className="flex items-start justify-between mb-6">
          <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            {opportunity.icon}
          </div>
          <div className="text-right">
            <div className="text-primary font-bold text-lg bg-primary/10 px-4 py-2 rounded-xl">
              {opportunity.pay}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-heading font-semibold text-text group-hover:text-primary transition-colors duration-300">
            {opportunity.title}
          </h3>
          
          <p className="text-text-muted leading-relaxed">
            {opportunity.description}
          </p>

          <div className="pt-4">
            <a
              href="tel:(305) 942-4054"
              className="text-primary font-medium hover:text-primary-dark transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Learn More →</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

interface DriverOpportunitiesSectionProps {
  className?: string;
}

export default function DriverOpportunitiesSection({ className = '' }: DriverOpportunitiesSectionProps) {
  const opportunityManager = new DriverOpportunityManager();
  const opportunities = opportunityManager.getOpportunities();

  return (
    <section id="careers" className={`section-padding bg-white ${className}`}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-text mb-4">
            Driver Opportunities
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Join our family-based trucking company and build your career with competitive pay, 
            weekly payments, and a supportive work environment.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-heading font-bold text-text mb-4">
              Ready to Start Your Career?
            </h3>
            <p className="text-text-muted mb-6 max-w-xl mx-auto">
              We're always hiring qualified drivers. Contact us today to learn more about 
              joining the Anna Marsi LLC family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:(305) 942-4054"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Call Now: (305) 942-4054</span>
              </a>
              <a
                href="mailto:miamibrightstar@gmail.com"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Email: miamibrightstar@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary rounded-full"></div>
        <div className="absolute -bottom-32 -left-32 w-48 h-48 bg-primary rounded-full"></div>
      </div>
    </section>
  );
}

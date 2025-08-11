'use client';

import React from 'react';
import { Shield, Users, MapPin } from 'lucide-react';

interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

class ValuePropositionManager {
  private propositions: ValueProposition[] = [
    {
      id: 'security',
      title: 'Security',
      description: 'We hold Quality Management System Certification for JIS (Just in Time) delivery operations.',
      icon: <Shield className="w-12 h-12" />
    },
    {
      id: 'commitment',
      title: 'Commitment',
      description: 'We provide logistics services focused on the Automotive Industry, with over 40 years in the market.',
      icon: <Users className="w-12 h-12" />
    },
    {
      id: 'nationwide',
      title: 'Nationwide',
      description: 'We are an international transport company operating primarily in the Argentine corridor.',
      icon: <MapPin className="w-12 h-12" />
    }
  ];

  getPropositions(): ValueProposition[] {
    return this.propositions;
  }
}

interface ValuePropositionCardProps {
  proposition: ValueProposition;
  index: number;
}

class ValuePropositionCard extends React.Component<ValuePropositionCardProps> {
  render() {
    const { proposition, index } = this.props;
    
    return (
      <div 
        className="relative bg-value-gradient p-8 text-white transform hover:scale-105 transition-transform duration-300"
        style={{ 
          animationDelay: `${index * 0.2}s`,
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            {proposition.icon}
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-heading font-semibold mb-4">
            {proposition.title}
          </h3>
          <p className="text-sm leading-relaxed opacity-90">
            {proposition.description}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 transform rotate-45 translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 transform rotate-45 -translate-x-6 translate-y-6"></div>
      </div>
    );
  }
}

interface ValuePropositionsSectionProps {
  className?: string;
}

export default function ValuePropositionsSection({ className = '' }: ValuePropositionsSectionProps) {
  const propositionManager = new ValuePropositionManager();
  const propositions = propositionManager.getPropositions();

    return (
      <section className={`section-padding bg-background-light ${className}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propositions.map((proposition, index) => (
              <ValuePropositionCard
                key={proposition.id}
                proposition={proposition}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary rounded-full"></div>
        </div>
      </section>
    );
}
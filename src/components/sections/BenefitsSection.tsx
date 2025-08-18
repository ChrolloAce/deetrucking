'use client';

import React from 'react';

interface Benefit {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  highlight: string;
  buttonText: string;
  imagePosition: 'left' | 'right';
}

class BenefitsManager {
  private benefits: Benefit[] = [
    {
      id: 'competitive-pay',
      title: 'Competitive Pay Structure',
      description: 'We offer industry-leading pay rates that reward your hard work and dedication. Our transparent pay structure ensures you know exactly what you\'ll earn.',
      details: 'Single drivers earn $0.65 per mile, while team drivers can earn up to $0.80 per mile or 30% of gross pay. Performance bonuses and safety incentives provide additional earning opportunities.',
      highlight: '$0.65 - $0.80 per mile',
      buttonText: 'Learn About Pay',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imagePosition: 'left'
    },
    {
      id: 'weekly-payments',
      title: 'Reliable Weekly Payments',
      description: 'Never worry about cash flow again. Our consistent weekly payment schedule helps you budget and plan for your family\'s needs.',
      details: 'Every Friday, your earnings are deposited directly into your account. No waiting, no delays - just reliable income you can count on week after week.',
      highlight: 'Paid Every Friday',
      buttonText: 'Payment Details',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imagePosition: 'right'
    },
    {
      id: 'family-culture',
      title: 'Family-Oriented Environment',
      description: 'At Anna Marsi LLC, you\'re not just an employee - you\'re family. We create a supportive environment where drivers thrive.',
      details: 'With over 5 years in business, we\'ve built a reputation for treating our drivers with respect and providing opportunities for career growth. Our family values guide everything we do.',
      highlight: '5+ Years of Family Values',
      buttonText: 'Meet Our Team',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imagePosition: 'left'
    },
    {
      id: 'modern-fleet',
      title: 'Modern, Well-Maintained Fleet',
      description: 'Drive with confidence in our fleet of modern, well-maintained trucks equipped with the latest safety and comfort features.',
      details: 'Our Freightliner trucks are regularly serviced and maintained to ensure your safety and comfort on the road. Advanced GPS, comfortable sleeper cabs, and reliable performance.',
      highlight: 'Latest Model Trucks',
      buttonText: 'View Our Fleet',
      image: '/truck5.jpeg',
      imagePosition: 'right'
    }
  ];

  getBenefits(): Benefit[] {
    return this.benefits;
  }
}

interface BenefitSectionProps {
  benefit: Benefit;
  index: number;
}

class BenefitSectionComponent extends React.Component<BenefitSectionProps> {
  render() {
    const { benefit, index } = this.props;
    const isImageLeft = benefit.imagePosition === 'left';
    
    return (
      <div 
        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 lg:mb-32 ${
          index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={benefit.image}
              alt={benefit.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-4">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              {benefit.highlight}
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-heading font-bold text-text leading-tight">
              {benefit.title}
            </h3>
            
            <p className="text-lg text-text-muted leading-relaxed">
              {benefit.description}
            </p>
            
            <p className="text-text leading-relaxed">
              {benefit.details}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:(305) 942-4054"
              className="btn-primary inline-flex items-center justify-center space-x-2"
            >
              <span>{benefit.buttonText}</span>
            </a>
            <a
              href="mailto:miamibrightstar@gmail.com"
              className="btn-secondary inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
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
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-text mb-6">
            Why Choose Anna Marsi LLC?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            We offer more than just a job - we provide a career path with real benefits, 
            competitive pay, and a family environment where drivers thrive.
          </p>
        </div>

        {/* Benefits Sections */}
        <div className="space-y-0">
          {benefits.map((benefit, index) => (
            <BenefitSectionComponent
              key={benefit.id}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>

        {/* Final Call to Action */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-12 text-center text-white mt-20">
          <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Career with Us?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Join the Anna Marsi LLC family today and experience the difference of working 
            with a company that truly values its drivers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:(305) 942-4054"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-colors duration-200 inline-flex items-center space-x-2 text-lg"
            >
              <span>📞 Call Now: (305) 942-4054</span>
            </a>
            <a
              href="mailto:miamibrightstar@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-xl transition-all duration-200 inline-flex items-center space-x-2 text-lg"
            >
              <span>✉️ Email Us Today</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

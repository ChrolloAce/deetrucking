'use client';

import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';

interface HeroContent {
  overline: string;
  headline: string;
  ctaText: string;
  phoneNumber: string;
}

class HeroContentManager {
  private content: HeroContent = {
    overline: 'FAMILY-BASED TRUCKING COMPANY',
    headline: 'BUILDING CAREERS IN TRUCKING',
    ctaText: 'JOIN OUR TEAM',
    phoneNumber: '(305) 942-4054'
  };

  getContent(): HeroContent {
    return this.content;
  }

  handleCTAClick(): void {
    const element = document.querySelector('#careers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleScrollIndicatorClick(): void {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

interface HeroSectionProps {
  className?: string;
  backgroundImage?: string;
}

export default function HeroSection({ 
  className = '', 
  backgroundImage = '/truck3.jpeg'
}: HeroSectionProps) {
  const contentManager = new HeroContentManager();
  const content = contentManager.getContent();

    return (
      <section 
        id="home"
        className={`relative min-h-screen flex items-center justify-start ${className}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            {/* Overline */}
            <div className="mb-6">
              <span className="text-primary font-medium text-base tracking-wide">
                {content.overline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              {content.headline}
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Join our family-oriented trucking company. Competitive pay, weekly payments, 
              and over 5 years of experience helping drivers succeed.
            </p>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => contentManager.handleCTAClick()}
                className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                {content.ctaText}
              </button>

              <a
                href={`tel:${content.phoneNumber.replace(/\D/g, '')}`}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              >
                📞 {content.phoneNumber}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={() => contentManager.handleScrollIndicatorClick()}
            className="text-white hover:text-primary transition-colors duration-200 animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>

        {/* Social Sidebar */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
          <div className="flex flex-col space-y-4">
            <div className="w-px h-16 bg-white/30"></div>
            <div className="flex flex-col space-y-3">
              {['Facebook', 'Instagram', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-white hover:text-primary transition-colors duration-200 transform hover:scale-110"
                  aria-label={platform}
                >
                  <div className="w-6 h-6 border border-white/50 rounded-sm flex items-center justify-center text-xs">
                    {platform[0]}
                  </div>
                </a>
              ))}
            </div>
            <div className="w-px h-16 bg-white/30"></div>
          </div>
        </div>
      </section>
    );
}
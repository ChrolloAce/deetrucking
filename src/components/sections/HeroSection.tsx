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
    overline: 'COMMERCIAL TRANSPORT',
    headline: 'SAFE & ON-TIME DELIVERIES',
    ctaText: 'REQUEST QUOTE',
    phoneNumber: '(305) 942-4054'
  };

  getContent(): HeroContent {
    return this.content;
  }

  handleCTAClick(): void {
    const element = document.querySelector('#quote');
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
  backgroundImage = 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
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
        <div className="absolute inset-0 bg-hero-gradient"></div>
        
        {/* Content */}
        <div className="relative z-10 container-custom">
          <div className="max-w-2xl">
            {/* Overline */}
            <div className="mb-4">
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                {content.overline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight hero-text-shadow">
              {content.headline}
            </h1>

            {/* CTA Section */}
            <div className="space-y-6">
              <button
                onClick={() => contentManager.handleCTAClick()}
                className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                {content.ctaText}
              </button>

              {/* Phone Number */}
              <div className="flex items-center text-white">
                <span className="text-sm font-medium mr-2">Or call us:</span>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-semibold text-lg">{content.phoneNumber}</span>
                </div>
              </div>
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
'use client';

import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

class ContactManager {
  private contactInfo: ContactInfo = {
    phone: '(305) 942-4054',
    email: 'miamibrightstar@gmail.com',
    address: '1758 NE 163rd Street, North Miami Beach, FL 33162'
  };

  private socialLinks: SocialLink[] = [
    { platform: 'Facebook', url: '#', icon: <Facebook className="w-5 h-5" /> },
    { platform: 'Twitter', url: '#', icon: <Twitter className="w-5 h-5" /> },
    { platform: 'Instagram', url: '#', icon: <Instagram className="w-5 h-5" /> },
    { platform: 'LinkedIn', url: '#', icon: <Linkedin className="w-5 h-5" /> },
  ];

  getContactInfo(): ContactInfo {
    return this.contactInfo;
  }

  getSocialLinks(): SocialLink[] {
    return this.socialLinks;
  }
}

interface FooterProps {
  className?: string;
}

export default function Footer({ className = '' }: FooterProps) {
  const contactManager = new ContactManager();
  const contactInfo = contactManager.getContactInfo();
  const socialLinks = contactManager.getSocialLinks();

    return (
      <footer className={`bg-background-dark text-white ${className}`}>
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-bold tracking-wider mb-2">ANNA MARSI LLC</h3>
                <div className="w-12 h-0.5 bg-primary mb-4"></div>
              </div>
              <p className="text-text-muted leading-relaxed">
                Family-based trucking company in South Florida. Over 5 years of experience 
                helping drivers build successful careers in the trucking industry.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-accent font-medium">Always Hiring</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-heading font-semibold mb-2">Quick Links</h4>
                <div className="w-8 h-0.5 bg-primary mb-4"></div>
              </div>
              <nav className="flex flex-col space-y-3">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Services', href: '/services' },
                  { label: 'Careers', href: '/#careers' },
                  { label: 'Contact', href: '/contact' }
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-text-muted hover:text-primary transition-colors duration-200 hover:translate-x-1 transform transition-transform"
                  >
                    → {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-heading font-semibold mb-2">Our Services</h4>
                <div className="w-8 h-0.5 bg-primary mb-4"></div>
              </div>
              <nav className="flex flex-col space-y-3">
                {[
                  'Long Distance Trucking',
                  'Regional Routes',
                  'General Freight',
                  'Team Driving'
                ].map((service) => (
                  <span
                    key={service}
                    className="text-text-muted flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>{service}</span>
                  </span>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-heading font-semibold mb-2">Contact Us</h4>
                <div className="w-8 h-0.5 bg-primary mb-4"></div>
              </div>
              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className="flex items-center text-text-muted hover:text-primary transition-colors duration-200 group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors duration-200">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center text-text-muted hover:text-primary transition-colors duration-200 group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors duration-200">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">{contactInfo.email}</span>
                </a>
                <div className="flex items-start text-text-muted">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3 mt-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © 2024 Anna Marsi LLC. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="text-text-muted hover:text-primary transition-colors duration-200"
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
}
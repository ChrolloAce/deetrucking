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
    email: 'info@grandbudapesttransport.com',
    address: '12030 NE 16th Ave, Miami, FL 33161'
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
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold tracking-wider">GRAND BUDAPEST TRANSPORT LLC</h3>
              <p className="text-text-muted leading-relaxed">
                Professional commercial transport services based in Miami, Florida. 
                Serving the Southeast with reliable logistics solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {['Home', 'Fleet', 'About Us', 'Services', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-text-muted hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Services</h4>
              <nav className="flex flex-col space-y-2">
                {[
                  'Florida Transport',
                  'Southeast Logistics',
                  'GPS Tracking',
                  'Commercial Freight'
                ].map((service) => (
                  <span
                    key={service}
                    className="text-text-muted"
                  >
                    {service}
                  </span>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-heading font-semibold">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-text-muted">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-text-muted">{contactInfo.email}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <span className="text-text-muted">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © 2024 Grand Budapest Transport LLC. All rights reserved.
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
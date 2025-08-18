'use client';

import React from 'react';
import { Phone } from 'lucide-react';

interface NavigationItem {
  label: string;
  href: string;
}

class NavigationManager {
  private items: NavigationItem[] = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'CAREERS', href: '#careers' },
    { label: 'CONTACT', href: '#contact' },
  ];

  getNavigationItems(): NavigationItem[] {
    return this.items;
  }

  handleNavClick(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const navigationManager = new NavigationManager();
  const navigationItems = navigationManager.getNavigationItems();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg ${className}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
                      <div className="flex items-center">
              <h1 className="text-xl lg:text-2xl font-heading font-bold text-white tracking-wider">
                ANNA MARSI LLC
              </h1>
            </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigationManager.handleNavClick(item.href)}
                className="text-white font-medium hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center text-white">
            <Phone className="w-4 h-4 mr-2" />
                          <span className="font-medium">(305) 942-4054</span>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
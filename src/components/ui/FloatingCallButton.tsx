'use client';

import React from 'react';
import { Phone } from 'lucide-react';

interface FloatingCallButtonProps {
  phoneNumber?: string;
  className?: string;
}

class CallButtonManager {
  private phoneNumber: string;

  constructor(phoneNumber: string = '(305) 942-4054') {
    this.phoneNumber = phoneNumber;
  }

  handleCall(): void {
    window.open(`tel:${this.phoneNumber}`, '_self');
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  formatPhoneForDisplay(): string {
    return this.phoneNumber;
  }
}

export default function FloatingCallButton({ 
  phoneNumber = '(305) 942-4054', 
  className = '' 
}: FloatingCallButtonProps) {
  const callManager = new CallButtonManager(phoneNumber);

  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 ${className}`}>
      <button
        onClick={() => callManager.handleCall()}
        className="group bg-primary hover:bg-primary-dark text-white p-3 sm:p-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
        aria-label={`Call ${callManager.formatPhoneForDisplay()}`}
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        
        {/* Tooltip - Hidden on mobile */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-background-dark text-white px-3 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden sm:block">
          Call {callManager.formatPhoneForDisplay()}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-background-dark border-y-4 border-y-transparent"></div>
        </div>
      </button>

      {/* Ripple Effect */}
      <div className="absolute inset-0 bg-primary opacity-20 animate-ping w-12 h-12 sm:w-16 sm:h-16"></div>
    </div>
  );
}
'use client';

import React from 'react';
import { 
  Truck, 
  Shield, 
  Satellite, 
  AlertTriangle, 
  Package, 
  Clock, 
  Box,
  Navigation
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

class ServiceManager {
  private services: Service[] = [
    {
      id: 'quick-loading',
      title: 'Quick Loading',
      description: 'Semi-trailers suitable for transporting any type of cargo. Tippers and folding sides for quick loading and unloading.',
      icon: <Truck className="w-8 h-8" />
    },
    {
      id: 'containment',
      title: 'Containment',
      description: 'Semi-trailers with fixed container devices.',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'satellite-tracking',
      title: 'Satellite Tracking',
      description: 'Trucks equipped with satellite tracking system with nationwide coverage.',
      icon: <Satellite className="w-8 h-8" />
    },
    {
      id: 'hazardous-materials',
      title: 'Hazardous Materials',
      description: 'Authorized and experienced in transporting hazardous substances.',
      icon: <AlertTriangle className="w-8 h-8" />
    },
    {
      id: 'palletized-goods',
      title: 'Palletized Goods',
      description: 'Semi-trailers ideally suited for palletized merchandise.',
      icon: <Package className="w-8 h-8" />
    },
    {
      id: 'on-time-delivery',
      title: 'On-Time Delivery',
      description: 'Modern and powerful units ensure your products arrive on time and in perfect condition.',
      icon: <Clock className="w-8 h-8" />
    },
    {
      id: 'low-loader',
      title: 'Low Loader',
      description: 'Super low-loading 5th wheel trailers.',
      icon: <Box className="w-8 h-8" />
    },
    {
      id: 'integrated-logistics',
      title: 'Integrated Logistics',
      description: 'Complete transport and logistics solutions for your business.',
      icon: <Navigation className="w-8 h-8" />
    }
  ];

  getServices(): Service[] {
    return this.services;
  }
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

class ServiceCard extends React.Component<ServiceCardProps> {
  render() {
    const { service, index } = this.props;
    
    return (
      <div 
        className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
        style={{ 
          animationDelay: `${index * 0.1}s`,
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-lg font-heading font-semibold text-text mb-3 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>
    );
  }
}

interface ServicesSectionProps {
  className?: string;
}

export default function ServicesSection({ className = '' }: ServicesSectionProps) {
  const serviceManager = new ServiceManager();
  const services = serviceManager.getServices();

    return (
      <section id="services" className={`section-padding bg-white ${className}`}>
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-text mb-4">
              Services
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              We offer comprehensive commercial transport services 
              throughout Florida and the Southeast United States.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
              />
            ))}
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
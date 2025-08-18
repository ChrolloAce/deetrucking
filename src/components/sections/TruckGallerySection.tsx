'use client';

import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TruckImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
}

class TruckGalleryManager {
  private images: TruckImage[] = [
    {
      id: 'truck-1',
      src: '/WhatsApp Image 2025-08-18 at 11.08.22 AM (2).jpeg',
      alt: 'Anna Marsi LLC White Freightliner Truck',
      title: 'Professional Fleet',
      description: 'Modern Freightliner trucks maintained to the highest standards'
    },
    {
      id: 'truck-2', 
      src: '/WhatsApp Image 2025-08-18 at 11.08.22 AM (3).jpeg',
      alt: 'Anna Marsi LLC Truck Rear View',
      title: 'Quality Equipment',
      description: 'Well-maintained trucks with excellent safety records'
    },
    {
      id: 'truck-3',
      src: '/WhatsApp Image 2025-08-18 at 11.08.22 AM (4).jpeg',
      alt: 'Anna Marsi LLC Truck Front View',
      title: 'Modern Technology',
      description: 'Latest model trucks with advanced safety features'
    },
    {
      id: 'truck-4',
      src: '/WhatsApp Image 2025-08-18 at 11.08.22 AM (5).jpeg',
      alt: 'Anna Marsi LLC Truck Close-up',
      title: 'Reliable Performance',
      description: 'Dependable trucks for long-distance hauling'
    },
    {
      id: 'truck-5',
      src: '/WhatsApp Image 2025-08-18 at 11.08.23 AM.jpeg',
      alt: 'Anna Marsi LLC Truck Detail',
      title: 'Driver Comfort',
      description: 'Comfortable cabs designed for professional drivers'
    }
  ];

  getImages(): TruckImage[] {
    return this.images;
  }
}

interface TruckGallerySectionProps {
  className?: string;
}

interface TruckGallerySectionState {
  currentImageIndex: number;
}

export default class TruckGallerySection extends React.Component<TruckGallerySectionProps, TruckGallerySectionState> {
  private galleryManager = new TruckGalleryManager();

  constructor(props: TruckGallerySectionProps) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
  }

  handlePreviousImage = () => {
    const images = this.galleryManager.getImages();
    this.setState({
      currentImageIndex: this.state.currentImageIndex === 0 
        ? images.length - 1 
        : this.state.currentImageIndex - 1
    });
  };

  handleNextImage = () => {
    const images = this.galleryManager.getImages();
    this.setState({
      currentImageIndex: (this.state.currentImageIndex + 1) % images.length
    });
  };

  handleImageClick = (index: number) => {
    this.setState({ currentImageIndex: index });
  };

  render() {
    const { className = '' } = this.props;
    const { currentImageIndex } = this.state;
    const images = this.galleryManager.getImages();
    const currentImage = images[currentImageIndex];

    return (
      <section id="fleet" className={`section-padding bg-background-light ${className}`}>
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-text mb-4">
              Our Professional Fleet
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Take a look at our well-maintained, modern fleet of trucks that our drivers 
              use to deliver excellence across South Florida and beyond.
            </p>
          </div>

          {/* Main Image Display */}
          <div className="relative mb-8">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with truck info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {currentImage.title}
                  </h3>
                  <p className="text-white/90">
                    {currentImage.description}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={this.handlePreviousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={this.handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Horizontal Thumbnail Gallery */}
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => this.handleImageClick(index)}
                className={`flex-shrink-0 relative aspect-[16/9] w-32 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentImageIndex 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {index === currentImageIndex && (
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Fleet Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-heading font-bold text-primary mb-2">5+</div>
              <div className="text-text-muted">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-heading font-bold text-primary mb-2">100%</div>
              <div className="text-text-muted">Safety Record</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-heading font-bold text-primary mb-2">24/7</div>
              <div className="text-text-muted">Support</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-heading font-bold text-primary mb-2">Weekly</div>
              <div className="text-text-muted">Pay Schedule</div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary rounded-full"></div>
        </div>
      </section>
    );
  }
}

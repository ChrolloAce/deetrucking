'use client';

import React from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  yearsWithCompany: string;
  location: string;
}

class ReviewsManager {
  private reviews: Review[] = [
    {
      id: 'review-1',
      name: 'Carlos Rodriguez',
      role: 'Team Driver',
      rating: 5,
      review: 'Anna Marsi LLC has been like a second family to me. The weekly pay is reliable, and they truly care about their drivers. The equipment is well-maintained and the support team is always there when you need them.',
      yearsWithCompany: '3 years',
      location: 'Miami, FL'
    },
    {
      id: 'review-2',
      name: 'Maria Santos',
      role: 'Single Driver',
      rating: 5,
      review: 'As a female driver, I was looking for a company that would respect and support me. Anna Marsi LLC exceeded my expectations. Great pay, flexible schedule, and a family atmosphere that makes work enjoyable.',
      yearsWithCompany: '2 years',
      location: 'Fort Lauderdale, FL'
    },
    {
      id: 'review-3',
      name: 'James Thompson',
      role: 'Long Distance Driver',
      rating: 5,
      review: 'The best decision I made was joining Anna Marsi LLC. They offer competitive pay, modern trucks, and most importantly, they treat you like family. The weekly pay has made budgeting so much easier for my family.',
      yearsWithCompany: '4 years',
      location: 'Orlando, FL'
    },
    {
      id: 'review-4',
      name: 'Roberto Fernandez',
      role: 'Team Driver',
      rating: 5,
      review: 'Anna Marsi LLC gave me the opportunity to build a real career in trucking. The training was excellent, the pay is fair, and they always have your back. I recommend them to any driver looking for a stable company.',
      yearsWithCompany: '1.5 years',
      location: 'Tampa, FL'
    },
    {
      id: 'review-5',
      name: 'Michelle Davis',
      role: 'Single Driver',
      rating: 5,
      review: 'Working with Anna Marsi LLC has been a game-changer for me. The family environment, reliable equipment, and consistent weekly pay have allowed me to provide better for my family. Highly recommended!',
      yearsWithCompany: '2.5 years',
      location: 'Jacksonville, FL'
    }
  ];

  getReviews(): Review[] {
    return this.reviews;
  }
}

interface ReviewCardProps {
  review: Review;
}

class ReviewCard extends React.Component<ReviewCardProps> {
  renderStars(rating: number) {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  }

  render() {
    const { review } = this.props;
    
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 relative">
        {/* Quote Icon */}
        <div className="absolute -top-4 -left-4 bg-primary rounded-full p-3">
          <Quote className="w-6 h-6 text-white" />
        </div>

        {/* Stars */}
        <div className="flex items-center mb-4">
          {this.renderStars(review.rating)}
        </div>

        {/* Review Text */}
        <p className="text-text-muted leading-relaxed mb-6 italic">
          "{review.review}"
        </p>

        {/* Reviewer Info */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-heading font-semibold text-text text-lg">
                {review.name}
              </h4>
              <p className="text-primary font-medium">
                {review.role}
              </p>
              <p className="text-text-muted text-sm">
                {review.yearsWithCompany} • {review.location}
              </p>
            </div>
            <div className="text-right">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {review.rating}/5 Stars
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/5 rounded-full transform translate-x-10 translate-y-10"></div>
      </div>
    );
  }
}

interface ReviewsSectionProps {
  className?: string;
}

interface ReviewsSectionState {
  currentReviewIndex: number;
}

export default class ReviewsSection extends React.Component<ReviewsSectionProps, ReviewsSectionState> {
  private reviewsManager = new ReviewsManager();

  constructor(props: ReviewsSectionProps) {
    super(props);
    this.state = {
      currentReviewIndex: 0
    };
  }

  handlePreviousReview = () => {
    const reviews = this.reviewsManager.getReviews();
    this.setState({
      currentReviewIndex: this.state.currentReviewIndex === 0 
        ? reviews.length - 1 
        : this.state.currentReviewIndex - 1
    });
  };

  handleNextReview = () => {
    const reviews = this.reviewsManager.getReviews();
    this.setState({
      currentReviewIndex: (this.state.currentReviewIndex + 1) % reviews.length
    });
  };

  render() {
    const { className = '' } = this.props;
    const { currentReviewIndex } = this.state;
    const reviews = this.reviewsManager.getReviews();

    return (
      <section id="reviews" className={`section-padding bg-background-light ${className}`}>
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-text mb-4">
              What Our Drivers Say
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our family of drivers 
              has to say about their experience with Anna Marsi LLC.
            </p>
          </div>

          {/* Carousel for All Screen Sizes */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-12 space-x-6">
              <button
                onClick={this.handlePreviousReview}
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-primary hover:bg-primary hover:text-white border-2 border-primary/20 hover:border-primary"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex space-x-3">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => this.setState({ currentReviewIndex: index })}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentReviewIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-border hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={this.handleNextReview}
                className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-primary hover:bg-primary hover:text-white border-2 border-primary/20 hover:border-primary"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Overall Rating */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <div className="flex items-center justify-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current mx-1" />
                ))}
              </div>
              <div className="text-3xl font-heading font-bold text-text mb-2">5.0 out of 5</div>
              <div className="text-text-muted">Based on driver reviews</div>
              <div className="text-primary font-semibold mt-2">100% Recommend Anna Marsi LLC</div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-primary rounded-full"></div>
        </div>
      </section>
    );
  }
}

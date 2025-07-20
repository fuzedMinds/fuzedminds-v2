import React, { useState, useEffect, useRef } from "react";

const Reviews = ({ 
  title, 
  subtitle, 
  reviews, 
  theme = "blue", 
  autoScroll = false,
  showNavigation = true 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll) return;
    
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId;
    let currentScrollPosition = scrollPosition;
    const scrollSpeed = 0.3;

    const performAutoScroll = () => {
      if (!isHovered) {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        currentScrollPosition += scrollSpeed;
        if (currentScrollPosition >= maxScroll) {
          currentScrollPosition = 0;
        }
        
        setScrollPosition(currentScrollPosition);
        
        scrollContainer.scrollTo({
          left: currentScrollPosition,
          behavior: 'auto'
        });
      }
      animationId = requestAnimationFrame(performAutoScroll);
    };

    animationId = requestAnimationFrame(performAutoScroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered, autoScroll]);

  // Check if mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track manual scrolling
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      setScrollPosition(scrollContainer.scrollLeft);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll functions for navigation buttons
  const scrollLeft = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const newPosition = Math.max(0, scrollPosition - 300);
      scrollContainer.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const newPosition = Math.min(maxScroll, scrollPosition + 300);
      scrollContainer.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  // Theme configurations
  const themes = {
    blue: {
      bg: "from-blue-50 via-white to-blue-100",
      accent: "from-blue-400 to-cyan-500",
      border: "border-blue-100",
      bgElements: "bg-blue-200"
    },
    green: {
      bg: "from-green-50 via-white to-blue-50",
      accent: "from-green-400 to-blue-500",
      border: "border-green-100",
      bgElements: "bg-green-200"
    }
  };

  const currentTheme = themes[theme] || themes.blue;

  return (
    <div className={`py-16 bg-gradient-to-br ${currentTheme.bg} relative overflow-hidden shadow-inner`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 left-10 w-20 h-20 ${currentTheme.bgElements}/30 rounded-full animate-pulse`}></div>
        <div className={`absolute top-20 right-20 w-16 h-16 ${currentTheme.bgElements}/40 rounded-full animate-bounce`}></div>
        <div className={`absolute bottom-20 left-20 w-24 h-24 ${currentTheme.bgElements}/35 rounded-full animate-ping`}></div>
        <div className={`absolute bottom-10 right-10 w-12 h-12 ${currentTheme.bgElements}/45 rounded-full animate-spin`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className={`w-3 h-3 bg-gradient-to-r ${currentTheme.accent} rounded-full animate-pulse mr-3`}></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h2>
            <div className={`w-3 h-3 bg-gradient-to-r ${currentTheme.accent} rounded-full animate-pulse ml-3`}></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Reviews Container with Auto-Scroll and Navigation */}
        <div className="relative">
          {/* Navigation Buttons for Mobile/Tablet */}
          {showNavigation && isMobile && (
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200 z-10"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-200 z-10"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
          
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {reviews.map((review, index) => (
              <div key={index} className={`flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg p-6 border ${currentTheme.border} hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${currentTheme.accent} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg`}>
                    {review.avatar || review.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{review.review}"
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">{review.course || review.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews; 
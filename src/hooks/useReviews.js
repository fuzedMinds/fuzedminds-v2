import { useState, useEffect, useMemo } from 'react';

const useReviews = () => {
  const [reviews, setReviews] = useState({
    businessReviews: [],
    skillReviews: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/reviews.json');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setReviews(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError(err.message);
        
        // Fallback to default data if fetch fails
        setReviews({
          businessReviews: [
            {
              name: "LMC Creation",
              avatar: "LC",
              rating: 5,
              review: "FuzedMinds delivered an exceptional e-commerce solution that perfectly matched our business requirements. Their attention to detail and professional approach exceeded our expectations. Highly recommended!",
              project: "E-commerce Platform Development"
            },
            {
              name: "Parihari Info Tech",
              avatar: "PI",
              rating: 5,
              review: "Outstanding work by FuzedMinds! They developed a comprehensive business management system that streamlined our operations. Their technical expertise and customer service are top-notch.",
              project: "Business Management System"
            }
          ],
          skillReviews: [
            {
              name: "Priya Sharma",
              rating: 5,
              course: "Java Full Stack",
              review: "Amazing learning experience! The hands-on projects helped me understand real-world development."
            },
            {
              name: "Rahul Patel",
              rating: 5,
              course: "React Development",
              review: "Excellent training program. Got placed within 2 months of completing the course."
            },
            {
              name: "Anjali Singh",
              rating: 5,
              course: "Python Development",
              review: "The mentors are very supportive and the curriculum is industry-relevant."
            },
            {
              name: "Vikram Kumar",
              rating: 5,
              course: "MERN Stack",
              review: "Best decision I made for my career. Practical approach to learning."
            },
            {
              name: "Meera Reddy",
              rating: 5,
              course: "Angular Development",
              review: "Comprehensive training with real project experience. Highly recommended!"
            },
            {
              name: "Arjun Gupta",
              rating: 5,
              course: ".NET Development",
              review: "Professional training environment. Learned a lot about enterprise development."
            },
            {
              name: "Kavya Iyer",
              rating: 5,
              course: "Java Backend",
              review: "The internship program gave me confidence to work on live projects."
            },
            {
              name: "Aditya Verma",
              rating: 5,
              course: "MEAN Stack",
              review: "Outstanding support from mentors. Great career guidance provided."
            },
            {
              name: "Zara Khan",
              rating: 5,
              course: "React Native",
              review: "Perfect blend of theory and practical. Got hands-on mobile development experience."
            },
            {
              name: "Rohan Desai",
              rating: 5,
              course: "Full Stack Development",
              review: "Comprehensive program covering all aspects of modern web development."
            }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Memoize the return value to prevent unnecessary re-renders
  const memoizedReviews = useMemo(() => reviews, [reviews]);
  
  return { 
    reviews: memoizedReviews, 
    loading, 
    error 
  };
};

export default useReviews; 
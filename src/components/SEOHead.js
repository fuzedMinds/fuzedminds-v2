import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title = "FuzedMinds - Custom Software Development & IT Solutions | Bhubaneswar, Odisha",
  description = "Leading IT solutions provider in Bhubaneswar, Odisha. Custom software development, web applications, mobile apps, and digital transformation services. Transform your business with innovative technology solutions.",
  keywords = "software development, web development, mobile apps, IT solutions, digital transformation, Bhubaneswar, Odisha, India, custom software, business solutions, technology consulting",
  canonical = "https://fuzedminds.com",
  ogImage = "https://fuzedminds.com/fuzedMinds-full-logo.png",
  ogType = "website",
  structuredData = null,
  noIndex = false
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FuzedMinds Technologies",
    "url": "https://fuzedminds.com",
    "logo": "https://fuzedminds.com/fuzedMinds-full-logo.png",
          "description": "Leading IT solutions provider in Bhubaneswar, Odisha, India offering custom software development, web applications, mobile apps, and digital transformation services.",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India",
        "addressRegion": "Odisha",
        "addressLocality": "Bhubaneswar"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "email": "info@fuzedminds.com"
      },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61565379877004",
      "https://www.linkedin.com/company/fuzedminds-technologies/",
      "https://www.instagram.com/fuzedminds",
      "https://x.com/fuzedMindsTech"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="FuzedMinds Technologies" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@fuzedMindsTech" />
      <meta property="twitter:creator" content="@fuzedMindsTech" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="IN-OR" />
      <meta name="geo.placename" content="Bhubaneswar, Odisha, India" />
      <meta name="geo.position" content="20.2961;85.8245" />
      <meta name="ICBM" content="20.2961, 85.8245" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead; 
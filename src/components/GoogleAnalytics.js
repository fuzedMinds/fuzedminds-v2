import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = () => {
  const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID

  return (
    <Helmet>
      {/* Google Analytics 4 */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'business_type',
              'custom_parameter_2': 'service_area'
            }
          });
          gtag('config', '${GA_TRACKING_ID}', {
            'business_type': 'IT Services',
            'service_area': 'Bhubaneswar, Odisha, India'
          });
        `}
      </script>
      
      {/* Google Search Console Verification */}
      <meta name="google-site-verification" content="your-verification-code" />
      
      {/* Bing Webmaster Tools */}
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      
      {/* Yandex Webmaster */}
      <meta name="yandex-verification" content="your-yandex-verification-code" />
    </Helmet>
  );
};

export default GoogleAnalytics; 
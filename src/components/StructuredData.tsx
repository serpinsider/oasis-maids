interface StructuredDataProps {
  type: 'local-business' | 'service' | 'location' | 'organization' | 'website' | 'faq';
  data?: {
    location?: string;
    service?: string;
    cities?: string[];
  };
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'local-business':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Oasis Maids",
          "image": "https://oasismaids.com/logo.png",
          "description": "Professional house cleaning services serving Orlando, Gainesville, Ocala and surrounding Central Florida areas. Your trusted cleaning oasis for pristine homes.",
          "url": "https://oasismaids.com",
          "telephone": "+14076892100",
          "email": "hello@oasismaids.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": "FL",
            "addressLocality": "Orlando",
            "postalCode": "32801",
            "streetAddress": "456 Orange Ave"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.5383,
            "longitude": -81.3792
          },
          "areaServed": [
            {
              "@type": "State",
              "name": "Florida"
            },
            {
              "@type": "City",
              "name": "Orlando"
            },
            {
              "@type": "City",
              "name": "Gainesville"
            },
            {
              "@type": "City",
              "name": "Ocala"
            },
            {
              "@type": "City",
              "name": "Winter Park"
            },
            {
              "@type": "City",
              "name": "Altamonte Springs"
            }
          ],
          "serviceType": ["House Cleaning", "Maid Service", "Residential Cleaning"],
          "priceRange": "$80-$400",
          "openingHours": ["Mo-Fr 08:00-20:00", "Sa-Su 09:00-18:00"],
          "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
          "currenciesAccepted": "USD",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "247",
            "bestRating": "5",
            "worstRating": "1"
          },
          "sameAs": [
            "https://www.facebook.com/oasismaids",
            "https://www.instagram.com/oasismaids",
            "https://www.linkedin.com/company/oasismaids",
            "https://twitter.com/oasismaids"
          ]
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Oasis Maids",
          "url": "https://oasismaids.com",
          "logo": "https://oasismaids.com/logo.png",
          "description": "Professional house cleaning services across New England and Mid-Atlantic states.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+14076892100",
            "contactType": "customer service",
            "areaServed": "US",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.facebook.com/oasismaids",
            "https://www.instagram.com/oasismaids",
            "https://www.linkedin.com/company/oasismaids",
            "https://twitter.com/oasismaids"
          ]
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Oasis Maids",
          "alternateName": ["OM", "Oasis Maids Cleaning", "oasismaids.com"],
          "url": "https://oasismaids.com",
          "description": "Professional house cleaning services across Central Florida including Orlando, Gainesville, and Ocala",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://oasismaids.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        };

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What's included in your cleans?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every clean includes sweeping, mopping, vacuuming, cleaning surfaces in bedrooms, bathrooms, common areas, and kitchen. We ensure thorough cleaning of all specified areas."
              }
            },
            {
              "@type": "Question",
              "name": "What's the difference between a standard clean and a deep clean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our deep cleans include everything in a standard clean plus wiping down doors, door frames, windowsills, window frames, and baseboards for a more thorough cleaning experience."
              }
            },
            {
              "@type": "Question",
              "name": "What's a move out clean?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Move in/out cleans are our most thorough service. We include everything from the deep clean plus cleaning inside cabinets, closets, and wiping down all shelves to ensure the space is ready for new occupants."
              }
            },
            {
              "@type": "Question",
              "name": "Do you bring your own supplies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we use pet-safe and non-toxic products. We bring our own mops and vacuum (upon request)."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer recurring service discounts?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Save 10% with weekly service, 5% with bi-weekly service, or $10 off monthly cleanings."
              }
            }
          ]
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `House Cleaning Services${data?.location ? ` in ${data.location}` : ''}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Oasis Maids",
            "url": "https://oasismaids.com"
          },
          "serviceType": "House Cleaning",
          "description": `Professional house cleaning and maid services${data?.location ? ` in ${data.location}` : ''}. Regular cleaning, deep cleaning, move-out cleaning, and specialty services.`,
          "areaServed": data?.location ? {
            "@type": "State",
            "name": data.location
          } : undefined,
          "offers": [
            {
              "@type": "Offer",
              "name": "Regular Cleaning",
              "description": "Weekly, bi-weekly, or monthly cleaning services",
              "price": "89",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "89",
                "maxPrice": "200",
                "priceCurrency": "USD"
              }
            },
            {
              "@type": "Offer", 
              "name": "Deep Cleaning",
              "description": "Comprehensive deep cleaning service",
              "price": "150",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "150",
                "maxPrice": "300",
                "priceCurrency": "USD"
              }
            }
          ]
        };

      case 'location':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `House Cleaning Services in ${data?.location}`,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Oasis Maids"
          },
          "serviceArea": {
            "@type": "State",
            "name": data?.location
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `Cleaning Services in ${data?.location}`,
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Regular House Cleaning",
                  "description": "Weekly, bi-weekly, or monthly cleaning"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Deep Cleaning",
                  "description": "Thorough, detailed cleaning service"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Move-out Cleaning",
                  "description": "Complete cleaning for moving"
                }
              }
            ]
          }
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
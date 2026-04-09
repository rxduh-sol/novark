import React from 'react';

export default function JsonLd({ 
  trade = "Web Design",
  customDescription = "Carefully Designed Cheap Web Design for Local Businesses, Bakeries, Trades, in Colchester, Essex.",
  customUrl = "https://novark-agency.co.uk/" 
}: { 
  trade?: string,
  customDescription?: string,
  customUrl?: string
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://novark-agency.co.uk/#organization",
        "name": "Novark Agency",
        "url": "https://novark-agency.co.uk/",
        "logo": "https://novark-agency.co.uk/images/GRU(1).webp",
        "sameAs": [
          "https://www.instagram.com/novarkagency",
          "https://www.linkedin.com/company/novark-agency"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://novark-agency.co.uk/#localbusiness",
        "name": "Novark Agency - Colchester Web Design",
        "url": customUrl,
        "telephone": "+44-0000-000000",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "High Street",
          "addressLocality": "Colchester",
          "addressRegion": "Essex",
          "postalCode": "CO1",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.8959,
          "longitude": 0.8919
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Colchester",
            "sameAs": "https://www.wikidata.org/wiki/Q183063" 
          },
          {
            "@type": "AdministrativeArea",
            "name": "Essex",
            "sameAs": "https://www.wikidata.org/wiki/Q23240"
          }
        ],
        "parentOrganization": {
          "@id": "https://novark-agency.co.uk/#organization"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${customUrl}#service`,
        "name": `Web Design for ${trade} in Colchester`,
        "description": customDescription,
        "provider": {
          "@id": "https://novark-agency.co.uk/#localbusiness"
        },
        "areaServed": {
          "@type": "City",
          "name": "Colchester",
          "sameAs": "https://www.wikidata.org/wiki/Q183063"
        },
        "knowsAbout": [
          "Web Design",
          "Mobile Responsiveness",
          "Digital Marketing",
          "SEO",
          trade,
          "https://www.wikidata.org/wiki/Q192892" // Web design wikidata entity
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

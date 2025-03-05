import React from "react";
import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import {
  TabletPatternBottomDesktop,
  TabletPatternBottomMobile,
  TabletPatternTop,
} from "@/components/TabletPattern";
import {
  features,
  navigations,
  navItems,
  otherNavigations,
  reviews,
  socials,
} from "@/data";
import { HeroComponent } from "@/components/HeroComponent";
import { FeatureComponent } from "@/components/FeatureComponent";
import { ReviewsComponent } from "@/components/ReviewsComponent/ReviewsComponent";
import { TaglineComponent } from "@/components/TaglineComponent/TaglineComponent";
import { Footer } from "@/components/Footer";
import { OurPartnersComponent } from "@/components/OurPartnersComponent/OurPartnersComponent";
import PricingComponent from "@/components/PricingComponent/PricingComponent";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Catination CRM - AI-Powered CRM for Bulk Messaging, Lead Management & Sales Automation</title>
        <meta
          name="description"
          content="Catination CRM is an advanced AI-driven software solution for businesses looking to automate bulk WhatsApp, SMS, email marketing, and lead management. Trusted worldwide for streamlining sales and marketing workflows."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta
          name="keywords"
          content="AI-powered CRM, lead management software, bulk WhatsApp marketing, bulk SMS platform, bulk email automation, CRM for sales teams, marketing automation software, best CRM for real estate, cloud-based CRM, automated lead tracking, WhatsApp CRM, sales funnel management, customer relationship management, CRM for startups, business growth software"
        />
        
        <meta property="og:title" content="Catination CRM - AI-Powered CRM for Bulk Messaging, Lead Management & Sales Automation" />
        <meta
          property="og:description"
          content="Automate lead management, bulk messaging, and sales workflows with Catination CRM. The all-in-one solution for businesses running Meta & Google Ads."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.catination.com" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catination CRM - AI-Powered CRM for Bulk Messaging, Lead Management & Sales Automation" />
        <meta
          name="twitter:description"
          content="AI-powered automation for lead generation and bulk messaging. Manage WhatsApp, SMS, and email campaigns seamlessly with Catination CRM."
        />
        <meta name="twitter:image" content="/logo.png" />

        <link rel="canonical" href="https://www.catination.com" />
        <link rel="alternate" hreflang="en" href="https://www.catination.com" />



        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Catination CRM",
            "image": "/logo.png",
            "url": "https://www.catination.com",
            "author": {
              "@type": "Organization",
              "name": "Catination"
            },
            "description":
              "Catination CRM is a leading AI-powered platform for bulk messaging, lead management, and sales automation. Ideal for businesses running Meta and Google Ads campaigns.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "699",
              "availability": "https://schema.org/InStock"
            },
            "areaServed": ["India", "Dubai", "USA", "UK", "Canada", "Singapore"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1024"
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Verified User"
              }
            },
            "sameAs": [
              "https://www.instagram.com/catinationventures",
              "https://www.linkedin.com/in/catination-ventures-280559352",
              "https://www.facebook.com/share/1BZXVfsbT2/"
            ],
            "logo": "/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "catinationventures@gmail.com",
              "telephone": "+91-7545840365",
              "contactType": "customer support"
            },
            "FAQPage": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What industries can benefit from Catination CRM?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Catination CRM is ideal for real estate, e-commerce, digital marketing agencies, and any business requiring bulk messaging and lead automation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Catination CRM offer integrations with other tools?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Catination CRM seamlessly integrates with WhatsApp, SMS, email services, and ad platforms like Meta and Google Ads."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why is Catination CRM the best choice for real estate businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Catination CRM is tailored for real estate with advanced lead tracking, automated follow-ups, and AI-driven sales workflows."
                  }
                }
              ]
            }
          })}
        </script>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative overflow-hidden min-h-screen">
        <TabletPatternTop />
        <div className="max-w-6xl mx-auto px-8 relative">
          <Navbar navItems={navItems} />
          <div className="flex flex-col gap-15 lg:gap-20">
            <section id="hero" aria-labelledby="hero-title">
              <HeroComponent />
            </section>

            <section id="features" aria-labelledby="features-title">
              <FeatureComponent features={features} />
            </section>

            <section id="reviews" aria-labelledby="reviews-title">
              <ReviewsComponent reviews={reviews} />
            </section>

            <section id="our-partners" aria-labelledby="partners-title">
              <OurPartnersComponent />
            </section>

            <section id="catination-pricing" aria-labelledby="pricing-title">
              <PricingComponent />
            </section>

            <section id="about-us" aria-labelledby="about-title">
              <AboutUs />
            </section>
          </div>
        </div>

        <TaglineComponent />

        <Footer
          socials={socials}
          navigations={navigations}
          otherNavigations={otherNavigations}
        />

        <TabletPatternBottomDesktop />
        <TabletPatternBottomMobile />
      </main>
    </>
  );
}

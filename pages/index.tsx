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
        {/* ✅ Primary SEO Meta Tags */}
        <title>
          Best CRM in the World | No.1 Real Estate CRM | Bulk WhatsApp, SMS & Email CRM
        </title>
        <meta
          name="description"
          content="Catination CRM is the world's No.1 CRM for real estate, bulk WhatsApp, bulk SMS, bulk mailing, and lead management. Used by businesses in India, Dubai, USA, UK, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* ✅ Multi-Target Keywords */}
        <meta
          name="keywords"
          content="best CRM in the world, No.1 CRM software, top CRM in India, best real estate CRM in India, CRM for property dealers, real estate CRM in Dubai, real estate lead management software, top-ranked CRM for businesses, bulk WhatsApp CRM, bulk SMS CRM, bulk email CRM, email marketing software, lead generation CRM, AI-powered CRM, real estate automation, CRM for builders, CRM for brokers, CRM for real estate agents, CRM for startups, sales automation software, world’s best CRM, top CRM for real estate, best CRM for lead management, best CRM in Delhi, best CRM in Mumbai, best CRM in Bangalore, cloud-based CRM, CRM for business growth"
        />

        {/* ✅ Open Graph / Facebook */}
        <meta property="og:title" content="Best CRM in the World | No.1 Real Estate CRM | Catination CRM" />
        <meta
          property="og:description"
          content="Catination CRM is the top-rated CRM for real estate, bulk messaging, and lead management, trusted globally by businesses in India, Dubai, and more."
        />
        <meta property="og:image" content="https://www.catination.com/images/social-preview.jpg" />
        <meta property="og:url" content="https://www.catination.com" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best CRM in the World | No.1 Real Estate CRM | Catination CRM" />
        <meta
          name="twitter:description"
          content="Catination CRM helps businesses streamline lead management, automate marketing, and boost sales with AI-powered bulk messaging tools."
        />
        <meta name="twitter:image" content="https://www.catination.com/images/social-preview.jpg" />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.catination.com" />

        {/* ✅ Schema Markup (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Catination CRM",
            "image": "https://www.catination.com/images/social-preview.jpg",
            "url": "https://www.catination.com",
            "author": {
              "@type": "Organization",
              "name": "Catination"
            },
            "description":
              "Catination CRM is the best CRM in the world for real estate, bulk messaging, and lead management, trusted in India, Dubai, USA, and more.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "699",
              "availability": "https://schema.org/InStock"
            },
            "keywords": [
              "best CRM in the world",
              "No.1 CRM software",
              "real estate CRM in India",
              "top bulk WhatsApp CRM",
              "bulk SMS software",
              "email marketing CRM",
              "best lead management CRM",
              "AI-driven CRM for businesses",
              "top-rated CRM in Dubai",
              "CRM for real estate brokers",
              "CRM for property dealers",
              "cloud-based CRM",
              "sales automation CRM"
            ],
            "areaServed": [
              "India",
              "Dubai",
              "USA",
              "UK",
              "Canada",
              "Singapore"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "1024"
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

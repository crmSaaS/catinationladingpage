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

export default function Home() {
  return (
    <>
      <Head>
        {/* ✅ Optimized Meta Tags for SEO */}
        <title>Catination - All-in-One CRM for Sales & Marketing</title>
        <meta
          name="description"
          content="Catination CRM helps businesses automate lead management, optimize marketing campaigns, and close deals faster. Boost your sales with our AI-driven CRM."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="CRM, Sales Automation, Lead Management, Marketing, Business Growth, Sales Optimization, AI CRM" />
        
        {/* ✅ Open Graph (OG) Tags for Social Media Sharing */}
        <meta property="og:title" content="Catination - CRM for Sales & Marketing" />
        <meta property="og:description" content="Automate your sales and marketing with Catination CRM. Manage leads, track deals, and close more sales." />
        <meta property="og:image" content="/images/social-preview.jpg" />
        <meta property="og:url" content="https://www.catination.com" />
        <meta property="og:type" content="website" />
        
        {/* ✅ Twitter Card Tags for Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Catination - CRM for Sales & Marketing" />
        <meta name="twitter:description" content="Boost your business with our AI-powered CRM. Optimize sales, manage leads, and grow faster." />
        <meta name="twitter:image" content="/images/social-preview.jpg" />
        
        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="relative overflow-hidden min-h-screen">
        <TabletPatternTop />
        <div className="max-w-6xl mx-auto px-8 relative">
          <Navbar navItems={navItems} />
          <div className="flex flex-col gap-24 lg:gap-20">
            {/* ✅ Hero Section with SEO Optimized Content */}
            <section aria-labelledby="hero-title">
              <HeroComponent />
            </section>
            
            {/* ✅ Feature Section */}
            <section aria-labelledby="features-title">
              <FeatureComponent features={features} />
            </section>
            
            {/* ✅ Reviews Section (Trust Signals for SEO) */}
            <section aria-labelledby="reviews-title">
              <ReviewsComponent reviews={reviews} />
            </section>
            
            {/* ✅ Partners Section (Enhances Credibility) */}
            <section aria-labelledby="partners-title">
              <OurPartnersComponent />
            </section>
            
            {/* ✅ Pricing Section (Conversion Focus) */}
            <section aria-labelledby="pricing-title">
              <PricingComponent />
            </section>
          </div>
        </div>
        
        {/* ✅ Call-to-Action Section */}
        <TaglineComponent />
        
        {/* ✅ Footer with Sitemap & Links for Better SEO */}
        <Footer
          socials={socials}
          navigations={navigations}
          otherNavigations={otherNavigations}
        />
        
        {/* ✅ Decorative Patterns */}
        <TabletPatternBottomDesktop />
        <TabletPatternBottomMobile />
      </main>
    </>
  );
}

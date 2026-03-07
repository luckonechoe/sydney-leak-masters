import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  publishedDate?: string;
  modifiedDate?: string;
  keywords?: string;
  noindex?: boolean;
}

const SITE_URL = "https://sydneyleakrepairspro.com.au";

export function SEOHead({ 
  title, 
  description, 
  canonical,
  type = "website",
  image = "/og-image.jpg",
  imageAlt = "Sydney Leak Repairs Pro - Professional shower and balcony leak repair specialists",
  publishedDate,
  modifiedDate,
  keywords,
  noindex = false,
}: SEOHeadProps) {
  const siteName = "Sydney Leak Repairs Pro";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  const canonicalUrl = canonical || (typeof window !== "undefined" ? `${SITE_URL}${window.location.pathname}` : undefined);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="bingbot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="AU-NSW" />
      <meta name="geo.placename" content="Sydney" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      
      {/* Article specific */}
      {publishedDate && <meta property="article:published_time" content={publishedDate} />}
      {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {type === "article" && <meta property="article:author" content="Sydney Leak Repairs Pro" />}
      {type === "article" && <meta property="article:section" content="Home Improvement" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Language alternates */}
      <link rel="alternate" hrefLang="en-au" href={canonicalUrl || SITE_URL} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl || SITE_URL} />
    </Helmet>
  );
}
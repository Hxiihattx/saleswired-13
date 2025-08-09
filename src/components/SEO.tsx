import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  canonicalPath?: string; // e.g., "/services"
  image?: string; // absolute or relative path
  structuredData?: any; // JSON-LD object or array
  noIndex?: boolean;
};

const SEO = ({
  title,
  description,
  canonicalPath = "/",
  image,
  structuredData,
  noIndex = false,
}: SEOProps) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonicalUrl = origin + canonicalPath;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : origin + image
    : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

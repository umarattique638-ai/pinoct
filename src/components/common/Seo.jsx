import { useLocation } from "react-router-dom";
import { SITE } from "@/config/site";

/**
 * Per-page <title>, description and social tags.
 * React 19 hoists these tags into <head> automatically.
 */
export default function Seo({ title, description = SITE.description }) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — Breast Cancer Awareness | Pakistan International School`;
  const url = `${SITE.url}${pathname}`;
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE.name} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}

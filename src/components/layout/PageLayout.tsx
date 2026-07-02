import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SITE_URL = "https://www.alleghenyhypclub.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type PageLayoutProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  ogImage?: string;
};

export default function PageLayout({ children, title, description, ogImage }: PageLayoutProps) {
  const fullTitle =
    title === "Home"
      ? "The Allegheny HYP Club | Pittsburgh's Premier Private Club"
      : `${title} | The Allegheny HYP Club`;

  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {description && <meta name="description" content={description} />}

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content="The Allegheny HYP Club — Pittsburgh, PA" />
        <meta property="og:site_name" content="The Allegheny HYP Club" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        {description && <meta name="twitter:description" content={description} />}
        <meta name="twitter:image" content={image} />
      </Helmet>
      <Navbar />
      <main id="main" className="pt-20">{children}</main>
      <Footer />
    </>
  );
}

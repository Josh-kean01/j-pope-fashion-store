import { useEffect } from 'react';

const ensureMetaTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });

  return tag;
};

const ensureLinkTag = (selector, attributes) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('link');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    tag.setAttribute(key, value);
  });

  return tag;
};

const Seo = ({
  title,
  description,
  image = '/favicon.svg',
  noindex = false,
  type = 'website',
}) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | J-Pope` : 'J-Pope | The Anthology';
    const canonicalUrl = window.location.href.split('#')[0];
    const imageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;
    const robots = noindex ? 'noindex, nofollow' : 'index, follow';

    document.title = fullTitle;

    ensureMetaTag('meta[name="description"]', { name: 'description', content: description });
    ensureMetaTag('meta[name="robots"]', { name: 'robots', content: robots });
    ensureMetaTag('meta[name="theme-color"]', { name: 'theme-color', content: '#1A1A1A' });

    ensureMetaTag('meta[property="og:title"]', { property: 'og:title', content: fullTitle });
    ensureMetaTag('meta[property="og:description"]', { property: 'og:description', content: description });
    ensureMetaTag('meta[property="og:type"]', { property: 'og:type', content: type });
    ensureMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    ensureMetaTag('meta[property="og:image"]', { property: 'og:image', content: imageUrl });

    ensureMetaTag('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    ensureMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: fullTitle });
    ensureMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    ensureMetaTag('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });

    ensureLinkTag('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
  }, [description, image, noindex, title, type]);

  return null;
};

export default Seo;

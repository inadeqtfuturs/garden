import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import siteConfig from '@config';

export default function SEO({
  title,
  description,
  twitter,
  favicon,
  ogImage,
  url
}) {
  return (
    <Head>
      <title>{title}</title>

      <link rel="icon" href={favicon} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${ogImage}`} />
      <meta property="og:image:width" content="700" />
      <meta property="og:image:height" content="700" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${url}${ogImage}`} />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  favicon: PropTypes.string.isRequired,
  ogImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

SEO.defaultProps = {
  ...siteConfig
};

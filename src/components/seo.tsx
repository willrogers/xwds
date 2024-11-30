import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

function SEO(props: {
  description: string;
  lang: string;
  meta: Array<string>;
  keywords: Array<string>;
  title: string;
}) {
  const data = useStaticQuery(detailsQuery);
  const metaDescription =
    props.description || data.site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang,
      }}
      title={props.title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        props.keywords.length > 0
          ? {
              name: `keywords`,
              content: props.keywords.join(`, `),
            }
          : []
      )}
    />
  );
}

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

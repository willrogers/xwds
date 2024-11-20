import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            parentUrl
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <link
            type="text/css"
            rel="stylesheet"
            href="https://wllrg.rs/css/style.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Mukta+Mahee%7CRaleway"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${data.site.siteMetadata.parentUrl}/static/favicon.ico`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${data.site.siteMetadata.parentUrl}/static/favicon.ico`}
          />
          <link
            rel="shortcut icon"
            href={`${data.site.siteMetadata.parentUrl}/static/favicon.ico?`}
          />
        </Helmet>
        <Header parentUrl={data.site.siteMetadata.parentUrl} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        {/* External stylesheets moved to _document.tsx */}
      </Head>
      <Header parentUrl="https://wllrg.rs" />
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
  );
};

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;

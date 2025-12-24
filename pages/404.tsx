import Head from "next/head";

import Layout from "../src/components/layout";

const NotFoundPage = () => (
  <>
    <Head>
      <title>404 - Not Found</title>
    </Head>
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </>
);

export default NotFoundPage;

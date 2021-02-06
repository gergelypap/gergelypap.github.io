import Head from "next/head";
import Layout from "components/Layout";
import ExternalLink from "components/ExternalLink";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About @gpap</title>
      </Head>
      <h1>About me</h1>
      <p>
        I'm a full stack web developer, experienced in PHP and recently very
        interested in the JS ecosytem, particularly React and NextJS.
      </p>
      <p>
        This blog was built using the awesome{" "}
        <ExternalLink href="https://nextjs.org/">NextJS</ExternalLink>{" "}
        framework.
      </p>
    </Layout>
  );
}

import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import BackgroundLogo from '../assets/background_logo.svg';

const IndexPage = ({ data: { datoCmsMainPage } }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsMainPage.seoMetaTags} />
      <div className="background">
        <BackgroundLogo className="background__logo" />
        <Img fluid={datoCmsMainPage.background.fluid} />
      </div>
      <div className="sheet">
        <main
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: datoCmsMainPage.descriptionNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query MainPageQuery {
    datoCmsMainPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      background {
        fluid(maxWidth: 4000, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      title
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

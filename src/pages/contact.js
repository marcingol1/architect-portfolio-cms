import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const Contact = ({ data: { contact } }) => {
  return (
    <Layout>
      <article className="sheet sheet__wrapper">
        <HelmetDatoCms seo={contact.seoMetaTags} />
        <div className="sheet__inner-contact">
          <div className="sheet__header-image">
            <Img fluid={contact.photo.fluid} />
          </div>
          <div className="sheet__container">
            <h1 className="sheet__lead">{contact.subtitle}</h1>
            <main
              className="sheet__body"
              dangerouslySetInnerHTML={{
                __html: contact.bioNode.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query ContactQuery {
    contact: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

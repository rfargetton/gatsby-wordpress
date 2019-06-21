import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PageHead from '../components/page-head';

export default class About extends React.Component {
  render(){
    return (
      <Layout>
        <PageHead pageTitle={this.props.data.wordpressPage.title} 
                  alt={this.props.data.wordpressPage.featured_media.localFile.name}
                  backgroundImage={this.props.data.wordpressPage.featured_media.localFile.childImageSharp.fluid} />
      </Layout>
    )
  }
}

export const query =  graphql`
  query {
    wordpressPage (id: {eq: "19dba3a8-f18a-5b91-9c6a-9f5d0b6506c7"} ){
      title
      featured_media {
        localFile {
          name
          childImageSharp {
            fluid (maxWidth : 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

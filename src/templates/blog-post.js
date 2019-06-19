import React from 'react' ;
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import Layout from '../components/layout.js';
import PageHead from '../components/page-head.js';

export default class PostTemplate extends React.Component {

  render() {
    const post = this.props.data.wordpressPost;
    return (
      <Layout>
        <Helmet title={post.title}></Helmet>
          <article>
            <header>
              <PageHead pageTitle={post.title} backgroundImage={post.featured_media.localFile.childImageSharp.fluid} /> 
            </header>
          </article>
      </Layout>    
    )
  }

}

export const query = graphql`
  query($id : String!){
    wordpressPost(id : {eq: $id}){
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid (maxWidth : 1200) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }

    }
  }
`

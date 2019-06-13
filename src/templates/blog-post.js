import React from 'react' ;
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import Layout from '../components/layout.js' ;
import Img from 'gatsby-image';

export default class PostTemplate extends React.Component {

  render() {
    const post = this.props.data.wordpressPost;
    return (
      <Layout>
        <Helmet title={post.title}></Helmet>
        <main>
            <article>
            <header>
              <div className="page_head">
                <div className="head_background">
                  <Img fluid={post.featured_media.localFile.childImageSharp.fluid} className="head_background-image" />
                </div>
                <div className="head_content">
                  <div className="container">
                    <h1 dangerouslySetInnerHTML={{__html : post.title }} />
                  </div>
                </div>
              </div>
              
            </header>
          </article>
        </main>
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

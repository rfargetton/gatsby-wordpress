import React from 'react' ;
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import Layout from '../components/layout.js' ;

export default class PostTemplate extends React.Component {

  render() {
    const post = this.props.data.wordpressPost
    return (
      <Layout>
        <Helmet title={post.title} />
        <main className="container">        
          <h1>{post.title}</h1>
          <hr></hr>
          <p dangerouslySetInnerHTML={{__html : post.content}} />

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
    }
  }
`

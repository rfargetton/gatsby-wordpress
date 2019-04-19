import React from "react"
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from "../components/layout"

const pageTitle = 'Blog'

export default class myFiles extends React.Component {

    render(){
        return (
            <Layout>
                <Helmet title={pageTitle} />
                <main className="container">
                    <h1>{pageTitle}</h1>
                    <hr></hr>

                      {this.props.data.allWordpressPost.edges.map(({node, index}) => (
                          <div className='post' key={index}>
                              <h2>{node.title}</h2>
                              <div dangerouslySetInnerHTML={{ __html : node.excerpt }} />
                              <span>{node.date} </span>
                          </div>
                      ))}                      
 
                </main>
            </Layout>
        )
    }
}

export const query  = graphql`
  query {
    allWordpressPost  {
      edges {
        node {
          title
          content
          date(formatString: "MMMM DD, YYYY")
          excerpt
        }
      }
    }

  }

`

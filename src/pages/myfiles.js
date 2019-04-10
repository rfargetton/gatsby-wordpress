import React from "react"
import {graphql} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from "../components/layout"

const pageTitle = 'My Files'

export default class myFiles extends React.Component {

    render(){
        return (
            <Layout>
                <Helmet title={pageTitle} />
                <main className="container">
                    <h1>{pageTitle}</h1>
                    <hr></hr>
                    <ul id='fileList'>
                        <li className='file' >
                            <span><strong>path</strong></span>
                            <span><strong>size</strong></span>
                            <span><strong>file</strong></span>
                        </li>
                        {this.props.data.allFile.edges.map((node, index) => (
                            <li className='file' key={index}>
                                <span>{node.node.relativePath}</span>
                                <span>{node.node.prettySize}</span>
                                <span>{node.node.extension}</span>
                            </li>
                        ))}                      
                    </ul>
 
                </main>
            </Layout>
        )
    }
}

export const query = graphql`
  query {
      allFile {
          edges {
              node {
                  relativePath
                  prettySize
                  extension
              }
          }
      }
  }
`
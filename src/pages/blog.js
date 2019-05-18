import React from "react"
import {graphql, Link} from 'gatsby'
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import TagList from "../components/tag-list"
import Img from 'gatsby-image'

const pageTitle = 'Blog'

export default class Blog extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        selectedTag : 'all'
      };
      this.updateBlogList = this.updateBlogList.bind(this);
    }

    updateBlogList(tag) {
      this.setState({
        selectedTag : tag
      });
    }

    render(){

      const posts = this.props.data.allWordpressPost.edges.slice().reverse() ;
      const filteredArray = this.state.selectedTag === 'all' ? posts : posts.filter(({node}) => node.tags.findIndex(i => i.slug === this.state.selectedTag) >= 0 );
      console.log(posts);

      return (
            <Layout>
                <Helmet title={pageTitle} />
                <main className="container">
                    <h1>{pageTitle}</h1>
                    <TagList updateBlogList={this.updateBlogList} selectedTag={this.state.selectedTag}></TagList>

                      {filteredArray.map(({node, index}) => (
                          <div className='post' key={index}>
                              
                              <Link to={ `/${node.slug}` }>
                                <Img resolutions={node.featured_media.localFile.childImageSharp.resize} />
                                <h2>{node.title}</h2>
                                <div dangerouslySetInnerHTML={{ __html : node.excerpt }} />
                                <span>{node.date} </span>                              
                              </Link>
                          </div>
                      ))}                      
 
                </main>
            </Layout>
        )
    }
}

export const query  = graphql`
  query {
    allWordpressPost (filter:{ categories: {elemMatch:{slug:{eq: "travaux"}}} }, sort:{fields: [date]}) {
      edges {
        node {
          title
          content
          date(formatString: "MMMM DD, YYYY")
          excerpt
          slug
          featured_media {
            localFile {
              childImageSharp {
                resize (width: 300, height:300) {
                  src
                  width 
                  height
                }
              }
            }
          }
          tags {
            slug
          }
        }
      }
    }
  }

`

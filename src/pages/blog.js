import React from "react";
import {graphql, Link} from 'gatsby';
import Helmet from 'react-helmet';
import Layout from "../components/layout";
import TagList from "../components/tag-list";
import PageHead from '../components/page-head.js';
import Img from 'gatsby-image';

const pageTitle = 'Blog';

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

      const posts = this.props.data.allWordpressPost.edges.slice().filter(({node}) => node.featured_media !== null).reverse() ;

      const filteredPosts = this.state.selectedTag === 'all' ? posts : posts.filter(({node}) => {
	      if (node.tags === null){
		return false;
	      } else {
	      	return node.tags.findIndex(i => i.slug === this.state.selectedTag) >= 0;
	      }
      });

      return (
            <Layout>
              <Helmet title={pageTitle}></Helmet>
              <PageHead pageTitle={pageTitle} />
              <div className='inner_container'>
                <TagList updateBlogList={this.updateBlogList} selectedTag={this.state.selectedTag}></TagList>

                {filteredPosts.map(({node, index}) => (
                    <div className='post' key={node.slug}>
                        
                        <Link to={ `/${node.slug}` }>
                          <Img fixed={node.featured_media.localFile.childImageSharp.fixed} />
                          <h2 dangerouslySetInnerHTML={{ __html : node.title}} />
                          <div dangerouslySetInnerHTML={{ __html : node.excerpt }} />
                          <span>{node.date} </span>                              
                        </Link>
                    </div>
                ))}                      
              </div> 
            </Layout>
        )
    }
}

export const query  = graphql`
  query {
    allWordpressPost (filter:{ categories: {elemMatch:{id:{eq: "a693028f-d24f-5c7e-8786-25bd68950517"}}} }, sort:{fields: [date]}) {
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
                fixed (width: 300, height:300) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
          tags {
            slug
	    id
          }
        }
      }
    }
  }

`

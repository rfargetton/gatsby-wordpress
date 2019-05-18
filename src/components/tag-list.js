import React from "react"
import Tag from './tag.js'
import {graphql, StaticQuery} from "gatsby"

const TagList = ({data, updateBlogList, selectedTag}) => (
  <StaticQuery 
    query = {query} 
    render = {(data) => {
      return (
      	<div className="tag-list">
          <div className="tag-list-container">
          <Tag value='all' name='Tout' updateBlogList={updateBlogList} selectedTag={selectedTag}/>
            {data.allWordpressTag.edges.map( ({node, index}) => (
              <Tag value={node.slug} name={node.name} updateBlogList={updateBlogList} selectedTag={selectedTag}/>
            ))}
          </div>
          <hr />
        </div>
      )
    }}
  />
)

export default TagList
export const query = graphql`
  query {
    allWordpressTag {
      edges {
        node {
          name
          slug 
        }
      }
    }
  }
`

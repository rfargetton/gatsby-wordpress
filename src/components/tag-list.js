import React from "react";
import {graphql, StaticQuery} from "gatsby";

const active = {
  color : "black"
}
const inactive = {
  color : "gray"
}

class Tag extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.updateBlogList(this.props.value);
  }
  
  render(){
    return (
      <button className="tag" 
              type="button" 
              style={this.props.selectedTag === this.props.value ? active : inactive} 
              value={this.props.value} 
              onClick={this.handleClick}>
        {this.props.name}
      </button>
    )
  }
}

const TagList = ({data, updateBlogList, selectedTag}) => (
  <StaticQuery 
    query = {query} 
    render = {(data) => {
      return (
      	<div className="tag-list">
          <div className="tag-list-container">
          <Tag value='all' name='Tout' updateBlogList={updateBlogList} selectedTag={selectedTag} />
            {data.allWordpressTag.edges.map( ({node, index}) => (
              <Tag value={node.slug} name={node.name} key={node.slug} updateBlogList={updateBlogList} selectedTag={selectedTag}/>
            ))}
          </div>
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

import React from 'react'

const active = {
  color : "black"
}
const inactive = {
  color : "gray"
}

export default class Tag extends React.Component {

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


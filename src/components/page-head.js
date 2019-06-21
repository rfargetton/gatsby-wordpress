import React from 'react';
import Img from 'gatsby-image';

const PageHead = ({ pageTitle, backgroundImage, alt }) => (
  
  <div className="page_head">
    <div className="head_background">
      {backgroundImage &&
        <Img fluid={backgroundImage} className="head_background-image" alt={alt}/>
      }  
    </div>
      
    <div className="head_content">
      <div className="inner_container">
        <h1 dangerouslySetInnerHTML={{__html : pageTitle }} />
      </div>
    </div>
  </div>

)

export default PageHead;

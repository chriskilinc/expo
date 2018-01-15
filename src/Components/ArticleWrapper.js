import React, { Component } from 'react';
import '../css/article.css';

import Article from './Article';
class ArticleWrapper extends Component {
  render() {
    return (
      <div className="article-wrapper container-fluid row">
          < Article title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu iaculis odio."} />
          
          < Article title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu iaculis odio."} />
          < Article title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu iaculis odio."} />
          < Article title={"Title"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu iaculis odio."} />
      </div>
    );
  }
}

export default ArticleWrapper;

import React, { Component } from 'react';
import '../css/article.css';

class Article extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <article className="col-6">
        <div className="article-container">
          <h1>{this.props.title}</h1>
          
          <div className="article-content" dangerouslySetInnerHTML={{__html: this.props.content}} />
          
        </div>
      </article>
    );
  }
}

export default Article;

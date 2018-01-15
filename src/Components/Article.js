import React, { Component } from 'react';
import '../css/article.css';

class Article extends Component {
  render() {
    return (
      <article className="col-6">
        <div className="article-container">
          <h1>{this.props.title}</h1>
          <div className="article-content">
            {this.props.content}</div>
        </div>
      </article>
    );
  }
}

export default Article;

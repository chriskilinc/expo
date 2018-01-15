import React, { Component } from 'react';
import '../css/content.css';

import ArticleWrapper from './ArticleWrapper';

class Content extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <section className="content col-10">
        
        < ArticleWrapper articles={this.props.articles} />

      </section>
    );
  }
}

export default Content;

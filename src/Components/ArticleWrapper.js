import React, { Component } from 'react';
import '../css/article.css';

import Article from './Article';
class ArticleWrapper extends Component {
  constructor(props){
    super(props);
  }


  render() {

    let articlesList;
    if(this.props.articles){
      articlesList = this.props.articles.map(article =>{
        return(
          <Article key={article.id} title={article.title.rendered}/>
        );
      })
    }

    return (
      <div className="article-wrapper container-fluid row">
         
          {
            this.props.articles.map(function(item){
              console.log(item);
              return <Article key={item.id} title={item.title.rendered} content={item.content.rendered}/>
            })
          }
          
          

      </div>
    );
  }
}

export default ArticleWrapper;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';

class App extends Component {

  constructor() {
    super()

    this.currentDate = {
      full: new Date(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      year: new Date().getFullYear(),
      monthString: new Date().toLocaleString('en-us', { month: 'long' }),
      date: new Date().getDate(),
      dayString: new Date().toLocaleString('en-us', { weekday: 'long' }),
    }

    this.state = {
      articles: [
        
      ],
    }

  }

  componentDidMount() {
    //  Starts a timer for refreshWindow() with an interval of 600000 / 10 minutes
    this.timerID = setInterval(
      () => this.refreshWindow(),
      600000
    );

    this.getArticles();

  }

  //  Reloads the window
  refreshWindow = () => {
    //window.location.reload();
  }

  // Fetches 10 recent articles
  getArticles = () => {
    fetch("http://testpress.chriskilinc.com/wp-json/wp/v2/posts/")
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response.json()
      })
      .then(data => {
        this.setState({
          articles: data
        })
      })
  }


  render() {
    return (
      <div className="App container-fluid row">
        < Navigation currentDate={this.currentDate}  />
        < Content articles={this.state.articles} />
        < Sidebar />
      </div>
    );
  }
}

export default App;

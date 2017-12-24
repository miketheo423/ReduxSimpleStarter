import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const apiKey = require('../env.js');

// Create a new component
// should produce some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('skateboarding');

  }

  videoSearch(term) {
    YTSearch({key: apiKey, term: term}, (videos) => {
      // if argument and key prop are the same, you can just put one word in curly boys
      // ex: this.setState({ videos: videos }) can just be the line below
      // this.setState({ videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo }) } />
      </div>
    );
  }
}

// Take the generated HTML and out it onto the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
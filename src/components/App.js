import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "./Apis/youtube";
import VideoList from "./videoList";
import VideosDetails from "./Apis/videosDetails";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = { videos: [], videoSelected: null };

  componentDidMount() {
    this.onInputSubmit("react js");
  }

  onInputSubmit = async (input) => {
    const res = await youtube.get("/search", {
      params: {
        q: input,
      },
    });

    this.setState({ videos: res.data.items, videoSelected: res.data.items[0] });
  };

  onVideoSelected = (video) => {
    this.setState({ videoSelected: video });
  };

  render() {
    return (
      <>
        <div className="ui container">
          <SearchBar onInputSubmit={this.onInputSubmit} />

          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideosDetails videoSelected={this.state.videoSelected} />
              </div>

              <div className="five wide column">
                <VideoList
                  videos={this.state.videos}
                  onVideoSelected={this.onVideoSelected}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import { API_KEY, API_URL } from "../../../config";
// import Action from "./Action";
import Action1 from "./Action1";
// import Adventure from "./Adventure";
// import Animation from "./Animation";

class Kategorite extends Component {
  state = {
    movies: [],
    genreName: null,
    loading: false,
    currentPage: 0,
    totalPAges: 0,
    searchTerm: ""
  };

  componentDidMount() {
    this.setState({ loading: true });
    const endpoint = [
      `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=28`
    ];
    this.fetchItems(endpoint);
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({
          movies: [...this.state.movies, ...result.results],
          loading: false
        });
      });
  };

  render() {
    return (
      <div>
        {/* <Action /> */}
        <Action1 />
        {/* <Adventure /> */}
        {/* <Animation /> */}
      </div>
    );
  }
}
export default Kategorite;

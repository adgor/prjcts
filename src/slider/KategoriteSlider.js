import React, { Component } from "react";
import Slider from "react-slick";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../config";
import "./SimpleSlider.css";

//  TODO: from the begining
export default class KategoriteSlider extends Component {
  state = {
    movies: [],
    loading: false,
    currentPage: 0,
    totalPages: 0
  };

  componentDidMount() {
    const endpoint = `${API_URL}movie/now_playing?api_key=${API_KEY}&page=1`;
    this.fetchItems(endpoint);
  }

  fetchItems = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log("====================================");
        console.log(result);
        console.log("====================================");
        this.setState({
          movies: [...result.results],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages
        });
      });
  };

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 5,
      slidesToScroll: 1,
      cssEase: "linear"
    };

    // w92, w154, w185, w342, w500, w780, original
    const POSTER_SIZE = "original";
    return (
      <div>
        <Slider {...settings}>
          {this.state.movies.map((element, i) => {
            console.log(element);
            return (
              <div key={i} className="img-container">
                <img
                  className="foto"
                  src={
                    element.poster_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path} `
                      : null
                  }
                  alt="kot"
                />
                <span className="vote">{element.vote_average}</span>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

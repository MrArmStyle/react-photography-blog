import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import data from "../data";
import { Link } from "react-router-dom";

export default class SlideImg extends Component {
  render() {
    let sliedImg = data.filter((img) => {
      return img.featured === true;
    });
    return (
      <div className="slider">
        <div className="img-container">
          <Slider autoplay={2000}>
            {sliedImg.map((item, index) => (
              <div key={index}>
                <img src={item.images} alt="" />
                <div className="sliderCenter">
                  <Link to={`/post/${item.title}`} className="btn-primary">
                    <h1>{item.title}</h1>
                  </Link>
                  <p>
                    {item.author} x {item.date}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

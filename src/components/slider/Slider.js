import React from 'react'
import styled from 'react-emotion'
import bg_1 from '../../img/startseite/premium-1efgvse.jpg'
import bg_2 from '../../img/startseite/selvii_kleid_in_seidenoptik_mustard_startseite-1.jpg'
import bg_3 from '../../img/startseite/selvii_start_premium_zweiteiler-1.jpg'
import Link from 'gatsby-link'
import Slider from "react-slick";
import '../../styles/normalize.css'
export default class SliderCon extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
      <SliderContainer>
        <Slider {...settings}>
          <SliderIMGContainer>
            <Link to="/kleider">
              <img src={bg_1} alt="slider img" />
            </Link>
          </SliderIMGContainer>
          <SliderIMGContainer>
            <Link to="/kleider">
              <img src={bg_2} alt="slider img" />
            </Link>
          </SliderIMGContainer>
          <SliderIMGContainer>
            <Link to="/kleider">
              <img src={bg_3} alt="slider img" />
            </Link>
          </SliderIMGContainer>
        </Slider>
      </SliderContainer>
    )
  }
}

const SliderContainer = styled('div')`
  width: 100%;
`
const SliderIMGContainer = styled('div')`
  width: 100%;
  height: 100vh;
  img {
    height: 95vh;
    width: 100%;
    object-fit: cover;
    object-position: 50% -1%;
  }

  @media (max-width: 1400px) {
    img {
      object-fit: cover;
    }
  }
`

import { FormatQuote } from "@mui/icons-material";
import { testimonials } from "../data/dummyData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="testimonials hero">
        <div className="container">
          <Slider {...settings}>
            {testimonials.map((val) => {
              return (
                <div className="box">
                  <i data-aos="zoom-out">
                    <FormatQuote />
                    <p data-aos="zoom-out-down">{val.text}</p>

                    <div className="img">
                      <img src={val.image} data-aos="zoom-out-right" />
                    </div>

                    <h3 data-aos="zoom-out-left">{val.name}</h3>
                    <label data-aos="zoom-out">{val.post}</label>
                  </i>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

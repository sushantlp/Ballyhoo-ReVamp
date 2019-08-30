
import Slider from "react-slick";
import "./food-brewery.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        position: "relative",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px 0 rgba(51, 60, 63, 0.22)",
        float: "right",
        right:"-4em",
        top: "-5.6em",
        zIndex: "1"
      }}
      onClick={onClick}
    >
      <img
        src="https://img.icons8.com/ios/20/000000/more-than-filled.png"
        style={{
          color: "black",
          fontSize: "1.4em",
          paddingLeft: "0.5em",
          paddingTop: "0.5em"
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        position: "relative",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px 0 rgba(51, 60, 63, 0.22)",
        top: "8em",
        float: "left",
        zIndex: "1"
      }}
      onClick={onClick}
    >
      <img
        src="https://img.icons8.com/ios/20/000000/less-than-filled.png"
        style={{
          color: "black",
          fontSize: "1.4em",
          paddingLeft: "0.5em",
          paddingTop: "0.5em"
        }}
      />
    </div>
  );
}

export default class FoodBrewery extends React.Component {
  render() {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      className: "trending-slick",
      // centerPadding: "13px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };


    return (
      <div className="container">
        <div className="food-brewery-container">
          <div className="food-brewery-header-container">
            <h2 className="food-brewery-header">F&B</h2>
            <div className="underscore" />
          </div>

          <div className="box">

          <Slider {...settings}>
            <div className="card">
              <div className="imgBx">
                <img src="../static/fb-1.jpg" alt="images" />
              </div>
              <div className="details">
                <h2>
                  Restaurants
                  {/* <br /> */}
                  {/* <span>Director</span> */}
                </h2>
              </div>
            </div>

            <div className="card">
              <div className="imgBx">
                <img src="../static/fb-2.jpg" alt="images" />
              </div>
              <div className="details">
                <h2>
                  Pubs
                  {/* <br />
                    <span>Producer</span> */}
                </h2>
              </div>
            </div>

            <div className="card">
              <div className="imgBx">
                <img src="../static/fb-3.jpg" alt="images" />
              </div>
              <div className="details">
                <h2>
                  Events
                  {/* <br />
                    <span>Actor</span> */}
                </h2>
              </div>
            </div>

            <div className="card">
              <div className="imgBx">
                <img src="../static/fb-4.jpg" alt="images" />
              </div>
              <div className="details">
                <h2>
                  Events
                  {/* <br />
                    <span>Actor</span> */}
                </h2>
              </div>
            </div>

            <div className="card">
              <div className="imgBx">
                <img src="../static/fb-5.jpg" alt="images" />
              </div>
              <div className="details">
                <h2>
                  Events
                  {/* <br />
                    <span>Actor</span> */}
                </h2>
              </div>
            </div>

            </Slider>

            {/* <div className="card">
              <div className="imgBx">
                <img src="../static/fb-6.jpg" alt="images" />
              </div>
              <div className="details">
                <h2>
                  Events
                   <br />
                    <span>Actor</span> 
                </h2>
              </div>
            </div>

            <div className="card">
              <div className="imgBx">
                <img src="../static/fb-7.jpg" alt="images" />
              </div>
              <div className="details">
                <h2>
                  Events
                   <br />
                    <span>Actor</span> 
                </h2>
              </div>
            </div>

            <div className="card">
              <div className="imgBx">
                <img src="../static/fb-8.jpg" alt="images" />
              </div>
              <div className="details">
                <h2>
                  Events
                   <br />
                    <span>Actor</span> 
                </h2>
              </div>
            </div>

            <div className="card">
              <div className="imgBx">
                <img src="../static/fb-2.jpg" alt="images" />
              </div>
              <div className="details">
                <h2>
                  Pubs
                   <br />
                    <span>Producer</span> 
                </h2>
              </div>
            </div> 

            <div className="card">
              <div className="imgBx">
                <img src="../static/fb-3.jpg" alt="images" />
              </div>
              <div className="details">
                <h2>
                  Events
                   <br />
                    <span>Actor</span> 
                </h2>
              </div>
            </div> */}


          </div>
        </div>
      </div>
    );
  }
}

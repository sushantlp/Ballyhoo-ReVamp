import Slider from "react-slick";
import "./collection.css";

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
        right: "-4em",
        top: "-7.5em",
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
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: "trending-slick",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      }
    };
  }

  innerCollection = json => {
    return json.map((item, key) => {
      return (
        <div className="card" key={key}>
          <div className="imgBx">
            <img src={item.img} alt="images" />
          </div>
          <div className="details">
            <h2>{item.title}</h2>
          </div>
        </div>
      );
    });
  };

  collectionArray = json => {
    return json.map((collection, key) => {
      return (
        <div className="container" key={key}>
          <div className="food-brewery-container">
            <div className="food-brewery-header-container">
              <h2 className="food-brewery-header">{collection.title}</h2>
              <div className="underscore" />
            </div>

            <div className="box">
              <Slider {...this.state.settings}>
                {this.innerCollection(collection.collection_items)}
              </Slider>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    if (
      this.props.homeScreen.status === "START" ||
      this.props.homeScreen.status === "FAIL"
    )
      return <div />;

    const collection = this.props.homeScreen.homeScreen.collection;

    return <div>{this.collectionArray(collection)}</div>;
  }
}

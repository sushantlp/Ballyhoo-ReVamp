import Router from "next/router";
import Slider from "react-slick";
import { Card, Image } from "semantic-ui-react";

import "./collection.css";

function EvenNextArrow(props) {
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
        right: "-2.5em",
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

function EvenPrevArrow(props) {
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
        left: "0.2em",
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

function OddNextArrow(props) {
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
        // right: "-4em",
        top: "-10.9em",
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

function OddPrevArrow(props) {
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
        left: "-0.5em",
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

export default class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      even: {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: "trending-slick",
        nextArrow: <EvenNextArrow />,
        prevArrow: <EvenPrevArrow />
      },
      odd: {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: "trending-slick",
        nextArrow: <OddNextArrow />,
        prevArrow: <OddPrevArrow />
      }
    };
  }

  onClickCollection = (collection, props) => {
    props.changeLoadingState(true);
    const { city, city_id } = Router.router.query;

    let title = collection.title.replace(/[^a-zA-Z ]/g, "");
    title = title.replace(/ /g, "-").toLowerCase();
    title = title.replace(/-+/gi, "-");

    const secret = `${city_id}b${collection.api_type}b${collection.key}b${
      collection.response_type
    }b${1}b${0}`;
    Router.push(
      {
        pathname: "/list",
        query: {
          city: city,
          title: title,
          secret: secret
        }
      },
      `/${city}/${title}/${secret}`
    );
  };

  innerCollectionEven = (json, props) => {
    return json.map((collection, key) => {
      return (
        <div key={key}>
          <div
            className="card"
            onClick={() => this.onClickCollection(collection, props)}
          >
            <div className="imgBx">
              <img src={collection.img} alt={props.keyword} />
            </div>
            <div className="details letter-spacing-1px">
              <h2>{collection.title}</h2>
            </div>
          </div>
        </div>
      );
    });
  };

  innerCollectionOdd = (json, props) => {
    const calculate = json.length;
    return json.map((collection, key) => {
      return (
        <div
          key={key}
          onClick={() => this.onClickCollection(collection, props)}
        >
          <Card
            raised
            style={{
              width: calculate > 4 ? "250px" : "275px",
              height: "265px",
              marginBottom: "1em"
            }}
          >
            <Image
              src={collection.img}
              alt={props.keyword}
              style={{
                width: calculate > 4 ? "250px" : "275px",
                height: "210px"
              }}
            />
            <Card.Content style={{ textAlign: "center" }}>
              <Card.Header style={{ fontSize: "20px", color: "black" }}>
                <span className="city-title letter-spacing-1px">
                  {collection.title}
                </span>
              </Card.Header>
            </Card.Content>
          </Card>
        </div>
      );
    });
  };

  collectionArray = (json, props) => {
    return json.map((collection, key) => {
      return (
        <div className="container" key={key} style={{ marginTop: "2em" }}>
          <div className="collection-container">
            <div className="collection-header-container">
              <h2 className="collection-header letter-spacing-1px">
                {collection.title}
              </h2>
              <div className="underscore" />
            </div>

            {key % 2 === 0 ? (
              <div className="box-even" style={{}}>
                <Slider {...this.state.even}>
                  {this.innerCollectionEven(collection.collection_items, props)}
                </Slider>
              </div>
            ) : (
              <div
                className="box-odd"
                style={{
                  paddingLeft: "0.5em",
                  outline: "none"
                  // marginBottom: "3em"
                }}
              >
                <Slider {...this.state.odd}>
                  {this.innerCollectionOdd(collection.collection_items, props)}
                </Slider>
              </div>
            )}
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
    if (collection.length === 0) return <div />;

    return <div>{this.collectionArray(collection, this.props)}</div>;
  }
}

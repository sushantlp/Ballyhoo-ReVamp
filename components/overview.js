import Lightbox from "lightbox-react";

import Map from "./map";
import Menu from "./menu-detail";

import Zomato from "./zomato-rating";
import CuisineTiming from "./cuisine-timing-detail";
import Text from "./text-detail";

import "lightbox-react/style.css";
import "./overview.css";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      lightBox: false,
      bundleImage: [
        "https://b.zmtcdn.com/data/menus/410/18387410/c28fc94d82679806af3f1cf12b84b867.jpg?output-format=webp",
        "https://b.zmtcdn.com/data/menus/410/18387410/732cc23f9107fcfea18555372c176f1c.jpg",
        "https://b.zmtcdn.com/data/menus/410/18387410/4114c960cea71d7981bf0dc3358dbf9c.jpg",
        "https://b.zmtcdn.com/data/menus/410/18387410/5315c87be1738af261da3501271dfa15.jpg",
        "https://b.zmtcdn.com/data/menus/410/18387410/81c918ed61a86ecc2d16b66d18576909.jpg"
      ]
    };
  }

  intializeImageArray = bool => {
    this.setState({ lightBox: bool });
  };

  movePrevRequest = (photoIndex, bundleImage) => {
    this.setState({
      photoIndex: (photoIndex + bundleImage - 1) % bundleImage
    });
  };

  moveNextRequest = (photoIndex, bundleImage) => {
    this.setState({
      photoIndex: (photoIndex + 1) % bundleImage
    });
  };

  render() {
    const offerRating =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.rating
        : this.props.categoryData.categoryData.details.partner_details.p_name;

    const popularity =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.popularity
        : this.props.categoryData.categoryData.details.partner_details.p_name;

    const price =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.cost_for_two
        : this.props.categoryData.categoryData.details.partner_details.p_name;

    const cuisineTag =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.cuisines
        : this.props.categoryData.categoryData.details.partner_details.p_name;

    const cuisineTagFlag =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1 ? true : false;

    const timing =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.working_hours
        : [];
    const about =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.description
        : this.props.categoryData.categoryData.details.partner_details.p_name;
    const highlight =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.highlight
        : this.props.categoryData.categoryData.details.partner_details.p_name;

    const where =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? `${this.props.foodCategoryData.foodCategoryData.details.address_details.address_1}, ${this.props.foodCategoryData.foodCategoryData.details.address_details.address_2}, ${this.props.foodCategoryData.foodCategoryData.details.address_details.locality}, ${this.props.foodCategoryData.foodCategoryData.details.address_details.city}`
        : null;

    const happy =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.happy_hours
            .content
        : null;

    const happyHour =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.happy_hours.hours
        : null;
    const lat =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.address_details
            .latitude
        : null;

    const lng =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.address_details
            .longitude
        : null;

    let fullRating = [];
    let emptyRating = [];
    let topRating = 5;
    let halfRating = undefined;

    const rating = offerRating + "";
    const ratingSplit = rating.split(".");

    // Half Star
    if (ratingSplit[1] !== undefined) {
      if (parseInt(ratingSplit[1], 10) === 0)
        topRating = topRating - Number(ratingSplit[0]);
      else {
        topRating = topRating - Number(ratingSplit[0]);
        topRating = topRating - 1;

        halfRating = (
          <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
        );
      }
    } else topRating = topRating - Number(ratingSplit[0]);

    // Full Star
    for (let i = 0; i < Number(ratingSplit[0]); i++) {
      fullRating.push(i);
    }

    // Empty Star
    for (let i = 0; i < topRating; i++) {
      emptyRating.push(i);
    }

    return (
      <div className="overview-container">
        <div className="box">
          <div className="columns">
            <div className="column is-5">
              <h4 className="ffqs fw2">
                Average cost for two :{" "}
                <span className="fw7 sfc3"> &#8377; {price}</span>
              </h4>
            </div>

            <div className="column is-4">
              <div>
                <span className="tag fw7">
                  <span className="ffqs fw2 f1-2">Popularity : </span>
                  <img
                    src="https://img.icons8.com/plasticine/20/000000/hearts.png"
                    className="pl0_5"
                  />
                  <span className="ellipsis pl0_5 fz1_4 pfc4">
                    {" "}
                    {popularity}%
                  </span>
                </span>
              </div>
            </div>

            <div className="column is-2 is-offset-1">
              <span className="rating">
                {fullRating.map(function(i) {
                  return (
                    <img
                      src="https://img.icons8.com/color/20/000000/filled-star.png"
                      key={i}
                    />
                  );
                })}
                <span>{halfRating}</span>
                <span>
                  {emptyRating.map(function(i) {
                    return (
                      <img
                        src="https://img.icons8.com/color/20/000000/star.png"
                        key={i}
                      />
                    );
                  })}
                </span>
              </span>
            </div>
          </div>
        </div>

        <hr className="spacer is-3" />

        <CuisineTiming
          cuisineTag={cuisineTag}
          cuisineTagFlag={cuisineTagFlag}
          timing={timing}
        />
        <Text
          ReadMore={this.ReadMore}
          title="About Merchant"
          detail={about}
          flag={false}
        />
        <Menu intializeImageArray={this.intializeImageArray} />
        <Text
          ReadMore={this.ReadMore}
          title="Offer Highlight"
          detail={highlight}
          flag={false}
        />

        <div>
          <Text
            ReadMore={this.ReadMore}
            title="Happy Hours"
            detail={happy}
            flag={true}
            happyHour={happyHour}
          />
        </div>

        <div className="box">
          <div className="columns">
            <div className="column">
              <h4 className="ffqs cuisine-title">Where ?</h4>
              <div className="where-underscore" />
              <h4 className="ff f10 f1-1 fw2">{where}</h4>
              <Map lat={lat} lng={lng} />
            </div>
          </div>
        </div>
        {/* 
        <Text
          ReadMore={this.ReadMore}
          title="Terms"
          detail="This wonderful land of northeast India, is home to some of the
          most picturesque honeymoon destinations with spellbinding tourist
          attractions. This romantic 4 nights 5 days north east package from
          Delhi, Kolkata, Mumbai and other major cities of India takes you
          around some famous tourist places in northeast India including
          Shillong and Mawlynnong Shillong and Mawlynnong."
        /> */}

        <Zomato ReadMore={this.ReadMore} />
        {this.state.lightBox && (
          <Lightbox
            mainSrc={this.state.bundleImage[this.state.photoIndex]}
            nextSrc={
              this.state.bundleImage[
                (this.state.photoIndex + 1) % this.state.bundleImage.length
              ]
            }
            prevSrc={
              this.state.bundleImage[
                (this.state.photoIndex + this.state.bundleImage.length - 1) %
                  this.state.bundleImage.length
              ]
            }
            onCloseRequest={() => this.intializeImageArray(false)}
            onMovePrevRequest={() =>
              this.movePrevRequest(
                this.state.photoIndex,
                this.state.bundleImage.length
              )
            }
            onMoveNextRequest={() =>
              this.moveNextRequest(
                this.state.photoIndex,
                this.state.bundleImage.length
              )
            }
          />
        )}
      </div>
    );
  }
}

// export default Overview;

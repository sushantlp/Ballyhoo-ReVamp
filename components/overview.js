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
      bundleImage: []
    };
  }

  intializeImageArray = (bool, bundleImage) => {
    this.setState({ lightBox: bool, bundleImage });
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
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? this.props.categoryData.categoryData.details.offer_rating
        : null;

    const popularity =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.popularity
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? this.props.categoryData.categoryData.details.offer_popularity
        : null;

    const price =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.cost_for_two
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? this.props.categoryData.categoryData.details.offer_min_price
        : null;

    const cuisineTag =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
      this.props.foodCategoryData.foodCategoryData.details.cuisines.length > 0
        ? this.props.foodCategoryData.foodCategoryData.details.cuisines
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? []
        : [];

    const cuisineTagFlag =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1 ? true : false;

    const timing =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
      this.props.foodCategoryData.foodCategoryData.details.working_hours
        .length > 0
        ? this.props.foodCategoryData.foodCategoryData.details.working_hours
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? []
        : [];
    const about =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
      this.props.foodCategoryData.foodCategoryData.details.description != null
        ? this.props.foodCategoryData.foodCategoryData.details.description
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1 &&
          this.props.categoryData.categoryData.details.offer_description != null
        ? this.props.categoryData.categoryData.details.offer_description
        : null;

    const highlight =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
      this.props.foodCategoryData.foodCategoryData.details.highlight != null
        ? this.props.foodCategoryData.foodCategoryData.details.highlight != null
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1 &&
          this.props.categoryData.categoryData.details.offer_highlights != null
        ? this.props.categoryData.categoryData.details.offer_highlights
        : null;

    const where =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? `${this.props.foodCategoryData.foodCategoryData.details.address_details.address_1}, ${this.props.foodCategoryData.foodCategoryData.details.address_details.address_2}, ${this.props.foodCategoryData.foodCategoryData.details.address_details.locality}, ${this.props.foodCategoryData.foodCategoryData.details.address_details.city}`
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? `${this.props.categoryData.categoryData.details.offer_address.address_1}, ${this.props.categoryData.categoryData.details.offer_address.address_2}, ${this.props.categoryData.categoryData.details.offer_address.locality}, ${this.props.categoryData.categoryData.details.offer_address.city}`
        : null;

    const happy =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
      this.props.foodCategoryData.foodCategoryData.details.happy_hours
        .content != null
        ? this.props.foodCategoryData.foodCategoryData.details.happy_hours
            .content
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? null
        : null;

    const happyHour =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
      this.props.foodCategoryData.foodCategoryData.details.happy_hours.hours
        .length > 0
        ? this.props.foodCategoryData.foodCategoryData.details.happy_hours.hours
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? []
        : [];
    const lat =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.address_details
            .latitude
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? this.props.categoryData.categoryData.details.offer_address.latitude
        : null;
    const lng =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? this.props.foodCategoryData.foodCategoryData.details.address_details
            .longitude
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? this.props.categoryData.categoryData.details.offer_address.longitude
        : null;
    const menuImage =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1 &&
      this.props.foodCategoryData.foodCategoryData.details.menu_images.length >
        0
        ? this.props.foodCategoryData.foodCategoryData.details.menu_images
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? []
        : [];
    const terms =
      parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? this.props.categoryData.categoryData.details.offer_terms
        : null;
    const faqs =
      parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? this.props.categoryData.categoryData.details.offer_faqs
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

            {/* {parseInt(this.props.detailUrlParam.result_type, 10) === 1 ||
            parseInt(this.props.detailUrlParam.result_type, 10) === 5 ? (
              <div className="column is-3">
                {parseInt(this.props.detailUrlParam.result_type, 10) === 1 ? (
                  <span>
                    <span>
                      <img src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png" />
                    </span>

                    <span>
                      <img src="https://img.icons8.com/color/20/000000/non-vegetarian-food-symbol.png" />
                    </span>
                  </span>
                ) : null}

                {parseInt(this.props.detailUrlParam.result_type, 10) === 5 ? (
                  <span>
                    <span>
                      <img src="https://img.icons8.com/bubbles/25/000000/birthday-boy.png" />
                    </span>

                    <span>
                      <img src="https://img.icons8.com/bubbles/25/000000/birthday-girl.png" />
                    </span>
                  </span>
                ) : null}
              </div>
            ) : null} */}

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

        {cuisineTag.length > 0 ? (
          <CuisineTiming
            cuisineTag={cuisineTag}
            cuisineTagFlag={cuisineTagFlag}
            timing={timing}
          />
        ) : null}

        {about != null ? (
          <Text
            ReadMore={this.ReadMore}
            title="About Merchant"
            detail={about}
            flag={false}
          />
        ) : null}

        {menuImage.length > 0 ? (
          <Menu
            intializeImageArray={this.intializeImageArray}
            menuImage={menuImage}
          />
        ) : null}

        {highlight != null ? (
          <Text
            ReadMore={this.ReadMore}
            title="Offer Highlight"
            detail={highlight}
            flag={false}
          />
        ) : null}

        {happy != null ? (
          <Text
            ReadMore={this.ReadMore}
            title="Happy Hours"
            detail={happy}
            flag={true}
            happyHour={happyHour}
          />
        ) : null}

        {terms != null ? (
          <Text
            ReadMore={this.ReadMore}
            title="Terms"
            detail={terms}
            flag={false}
          />
        ) : null}

        {faqs != null ? (
          <Text
            ReadMore={this.ReadMore}
            title="Faqs"
            detail={faqs}
            flag={false}
          />
        ) : null}

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

        {/* <Zomato ReadMore={this.ReadMore} /> */}
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

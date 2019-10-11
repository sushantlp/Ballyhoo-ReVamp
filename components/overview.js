import Lightbox from "lightbox-react";

import Map from "./map";
import EscapeMap from "./escape-map";
import Menu from "./menu-detail";

import Zomato from "./zomato-rating";
import CuisineTiming from "./cuisine-timing-detail";
import Text from "./text-detail";
import TourDetail from "./escape-tour-detail";

import "lightbox-react/style.css";
import "./overview.css";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      lightBox: false,
      bundleImage: [],
      selectedMarker: false,
      isLoading: false,
      collapsed: true
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      this.props.zomatoData !== nextProps.zomatoData &&
      nextProps.zomatoData.status === "SUCCESS"
    ) {
      this.updateIsLoading();
    }
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

  handleClick = (marker, event) => {
    // console.log({ marker })
    this.setState({ selectedMarker: marker });
  };

  updateIsLoading = () => {
    this.setState({ isLoading: !this.state.isLoading });
  };

  updateCollapsed = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  zomatoApiCall = page => {
    this.updateIsLoading();
    this.props.getZomatoDataApi(this.props.detailUrlParam.partner_id, page);
  };

  render() {
    const keyword = this.props.keyword;
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
        ? this.props.foodCategoryData.foodCategoryData.details.highlight
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1 &&
          this.props.categoryData.categoryData.details.offer_highlights != null
        ? this.props.categoryData.categoryData.details.offer_highlights
        : null;

    const where =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? `${this.props.foodCategoryData.foodCategoryData.details.address_details.address_1}  ${this.props.foodCategoryData.foodCategoryData.details.address_details.address_2}  ${this.props.foodCategoryData.foodCategoryData.details.address_details.locality}  ${this.props.foodCategoryData.foodCategoryData.details.address_details.city}`
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1 &&
          parseInt(this.props.detailUrlParam.result_type, 10) !== 4
        ? `${this.props.categoryData.categoryData.details.offer_address.address_line_1}  ${this.props.categoryData.categoryData.details.offer_address.address_line_2}  ${this.props.categoryData.categoryData.details.offer_address.locality}  ${this.props.categoryData.categoryData.details.offer_address.city}`
        : parseInt(
            this.props.categoryData.categoryData.details.offer_exclusive,
            10
          ) === 0
        ? `${this.props.categoryData.categoryData.details.offer_address.address_line_1}  ${this.props.categoryData.categoryData.details.offer_address.address_line_2}  ${this.props.categoryData.categoryData.details.offer_address.locality}  ${this.props.categoryData.categoryData.details.offer_address.city}`
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
        ? parseFloat(
            this.props.foodCategoryData.foodCategoryData.details.address_details
              .latitude
          )
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? parseFloat(
            this.props.categoryData.categoryData.details.offer_address.latitude
          )
        : 0;
    const lng =
      parseInt(this.props.detailUrlParam.result_type, 10) === 1
        ? parseFloat(
            this.props.foodCategoryData.foodCategoryData.details.address_details
              .longitude
          )
        : parseInt(this.props.detailUrlParam.result_type, 10) !== 1
        ? parseFloat(
            this.props.categoryData.categoryData.details.offer_address.longitude
          )
        : 0;
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
    const tourDetail =
      parseInt(this.props.detailUrlParam.result_type, 10) === 4
        ? parseInt(
            this.props.categoryData.categoryData.details.offer_exclusive,
            10
          ) === 0
          ? this.props.categoryData.categoryData.details.tour_details.tour_type
              .length > 0
            ? this.props.categoryData.categoryData.details.tour_details
            : null
          : this.props.categoryData.categoryData.details.tour_details
              .tour_destinations.length === 0 &&
            this.props.categoryData.categoryData.details.tour_details
              .tour_type === 0 &&
            this.props.categoryData.categoryData.details.tour_details
              .tour_duration == null &&
            this.props.categoryData.categoryData.details.tour_details
              .tour_start_from == null &&
            this.props.categoryData.categoryData.details.tour_details
              .tour_total_distance == null &&
            this.props.categoryData.categoryData.details.tour_details
              .tour_travel_time == null
          ? null
          : this.props.categoryData.categoryData.details.tour_details
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
          <img
            src="https://img.icons8.com/color/20/000000/star-half-empty.png"
            alt={keyword}
          />
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
    console.log(this.props.categoryData.categoryData.details);
    console.log(where);
    return (
      <div className="overview-container">
        <div className="box">
          <div className="columns">
            <div className="column is-5">
              <h4 className="ffqs fw2">
                {parseInt(this.props.detailUrlParam.result_type, 10) === 1
                  ? "Average cost for two :"
                  : "Price :"}

                <span style={{ color: "black", fontSize: "18px" }}>
                  {" "}
                  &#8377; {price}
                </span>
              </h4>
            </div>

            <div className="column is-4">
              <div>
                <span className="tag fw7">
                  <span className="ffqs fw2 f1-2">Popularity : </span>
                  <img
                    src="https://img.icons8.com/plasticine/20/000000/hearts.png"
                    alt={keyword}
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
              {parseInt(this.props.detailUrlParam.result_type, 10) === 4 &&
              parseInt(
                this.props.categoryData.categoryData.details.offer_verified,
                10
              ) === 1 ? (
                <span className="tag is-rounded is-success">Verified</span>
              ) : (
                <span className="rating">
                  {fullRating.map(function(i) {
                    return (
                      <img
                        src="https://img.icons8.com/color/20/000000/filled-star.png"
                        key={i}
                        alt={keyword}
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
                          alt={keyword}
                        />
                      );
                    })}
                  </span>
                </span>
              )}
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
            title={
              parseInt(this.props.detailUrlParam.result_type, 10) === 4
                ? "Description"
                : "About Merchant"
            }
            detail={about}
            flag={false}
            collapsed={this.state.collapsed}
            updateCollapsed={this.updateCollapsed}
          />
        ) : null}
        {tourDetail != null ? (
          <TourDetail
            tourDetail={tourDetail}
            exclusive={
              this.props.categoryData.categoryData.details.offer_exclusive
            }
          />
        ) : null}

        {menuImage.length > 0 ? (
          <Menu
            intializeImageArray={this.intializeImageArray}
            menuImage={menuImage}
            keyword={this.props.keyword}
          />
        ) : null}

        {highlight != null ? (
          <Text
            ReadMore={this.ReadMore}
            title={
              parseInt(this.props.detailUrlParam.result_type, 10) === 4
                ? "Highlight"
                : "Offer Highlight"
            }
            detail={highlight}
            flag={false}
            collapsed={this.state.collapsed}
            updateCollapsed={this.updateCollapsed}
          />
        ) : null}

        {happy != null ? (
          <Text
            ReadMore={this.ReadMore}
            title="Happy Hours"
            detail={happy}
            flag={true}
            happyHour={happyHour}
            collapsed={this.state.collapsed}
            updateCollapsed={this.updateCollapsed}
          />
        ) : null}

        {terms != null ? (
          <Text
            ReadMore={this.ReadMore}
            title="Terms"
            detail={terms}
            flag={false}
            collapsed={this.state.collapsed}
            updateCollapsed={this.updateCollapsed}
          />
        ) : null}

        {faqs != null ? (
          <Text
            ReadMore={this.ReadMore}
            title="Faqs"
            detail={faqs}
            flag={false}
            collapsed={this.state.collapsed}
            updateCollapsed={this.updateCollapsed}
          />
        ) : null}

        <div className="box">
          <div className="columns">
            <div className="column">
              <h4 className="ffqs cuisine-title" style={{ color: "black" }}>
                Where ?
              </h4>
              <div className="overview-underscore" />
              <h4 className="ff f10 f1-1 fw2 lh1-7">{where}</h4>
              {where == null ? (
                <EscapeMap
                  markers={
                    this.props.categoryData.categoryData.details.tour_details
                      .tour_coordinates
                  }
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBQRnONwuHy906feS53jF2jvDahM7TNw1k&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div style={{ height: `400px`, width: "auto" }} />
                  }
                  mapElement={<div style={{ height: `100%` }} />}
                  selectedMarker={this.state.selectedMarker}
                  onClick={this.handleClick}
                />
              ) : (
                <Map lat={lat} lng={lng} />
              )}
            </div>
          </div>
        </div>

        {parseInt(this.props.detailUrlParam.result_type, 10) === 1 ? (
          <div className="box">
            <div className="columns">
              <div className="column">
                <Zomato
                  zomatoData={this.props.zomatoData}
                  zomatoApiCall={this.zomatoApiCall}
                  isLoading={this.state.isLoading}
                />
              </div>
            </div>
          </div>
        ) : null}

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

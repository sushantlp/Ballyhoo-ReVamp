import styled, { keyframes } from "styled-components";
import { zoomInDown, zoomInUp } from "react-animations";
import "./city-model.css";

const zoomInAnimation = keyframes`${zoomInDown}`;
const zoomOutAnimation = keyframes`${zoomInUp}`;

const ZoomInDiv = styled.div`
  animation: 1s ${zoomInAnimation};
`;

const ZoomOutDiv = styled.div`
  animation: 1s ${zoomOutAnimation};
`;

const CityModel = props => {
  return (
    <React.Fragment>
      <div className="city-model-container">
        <div className={props.cityModel ? "modal is-active" : "modal"}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <img
                alt="Ballyhoo"
                role="presentation"
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_40/v1569659435/BallyhooV3/WEB/ballyhoo.png"
              />

              <div className="brand-title pl0-5em">Ballyhoo Today</div>
            </header>
            <section className="modal-card-body">
              <h1 className="text-align-centre fw2 ffqs">Select Your City</h1>

              <div className="spacer-is-2" />

              {props.hideSeek ? (
                <React.Fragment>
                  <ZoomOutDiv>
                    <div className="container justify-content-center">
                      <div className="columns is-multiline is-mobile">
                        {props.cityLocality.cityLocality
                          .filter(city => city.featured === 1)
                          .map((city, key) => {
                            return (
                              <div
                                className="column is-one-third-mobile"
                                key={key}
                                onClick={() => props.onCitySelected(city)}
                              >
                                <div className="jss359">
                                  <figure className="image is-96x96">
                                    <img
                                      className="img-resp is-rounded"
                                      alt={city.city_name}
                                      src={city.image_path}
                                    />

                                    <div className="pt0-5em text-align-centre all-city">
                                      <span className="ffqs">
                                        {city.city_name}
                                      </span>
                                    </div>
                                  </figure>
                                </div>
                                {/* <div className="pt0-5em text-align-centre all-city">
                                  <span className="ffqs">{city.city_name}</span>
                                </div> */}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </ZoomOutDiv>
                  <div className="spacer-is-2" />

                  <h4
                    className="text-align-centre all-city ffqs fw2"
                    // style={{ color: "#ff3860" }}
                    onClick={() => props.onClickHideSeek(false)}
                  >
                    View All Cities
                  </h4>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <ZoomInDiv>
                    <div className="container justify-content-center">
                      <div className="columns is-multiline is-mobile">
                        {props.cityLocality.cityLocality.map((city, key) => {
                          return (
                            <div
                              className="column is-one-third-mobile text-align-centre all-city"
                              key={key}
                              onClick={() => props.onCitySelected(city)}
                            >
                              <span className="ffqs">{city.city_name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </ZoomInDiv>

                  <div className="spacer-is-2" />

                  <h4
                    className="text-align-centre all-city ffqs fw2"
                    // style={{ color: "#ff3860" }}
                    onClick={() => props.onClickHideSeek(true)}
                  >
                    View All Cities
                  </h4>
                </React.Fragment>
              )}
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CityModel;

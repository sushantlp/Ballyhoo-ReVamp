import "./city-model.css";
const CityModel = props => {
  return (
    <React.Fragment>
      <div className="city-model-container">
        <div className={props.cityModel ? "modal is-active" : "modal"}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              {/* <h4 className="modal-card-title fw2 ffqs">BALLYHOO</h4> */}

              <img
                alt="Ballyhoo"
                role="presentation"
                src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,w_40/v1569659435/BallyhooV3/WEB/ballyhoo.png"
              />

              <div className="brand-title pl0-5em">Ballyhoo Today</div>
            </header>
            <section className="modal-card-body">
              <h1 style={{ textAlign: "center" }}>Select your city</h1>

              <br />
              <div className="container justify-content-center">
                <div className="columns">
                  <div className="column">
                    <div className="jss359">
                      <img
                        className="img-resp"
                        alt="Bangalore"
                        src="http:\/\/res.cloudinary.com\/dp67gawk6\/image\/upload\/w_500,h_500\/v1535979973\/ballyhoo\/CITY_IMAGES\/1.jpg"
                      />
                    </div>
                    <div className="pt0-5em text-align-centre">
                      <span className="ffqs">Bangalore</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="jss359">
                      <img
                        className="img-resp"
                        alt="Bangalore"
                        src="http:\/\/res.cloudinary.com\/dp67gawk6\/image\/upload\/w_500,h_500\/v1535979973\/ballyhoo\/CITY_IMAGES\/2.jpg"
                      />
                    </div>
                    <div className="pt0-5em text-align-centre">
                      <span className="ffqs">Delhi</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="jss359">
                      <img
                        className="img-resp"
                        alt="Bangalore"
                        src="https:\/\/res.cloudinary.com\/dp67gawk6\/image\/upload\/w_500,h_500\/v1543998344\/ballyhoo\/CITY_IMAGES\/6.jpg"
                      />
                    </div>
                    <div className="pt0-5em text-align-centre">
                      <span className="ffqs">Chandigarh</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="jss359">
                      <img
                        className="img-resp"
                        alt="Bangalore"
                        src="http:\/\/res.cloudinary.com\/dp67gawk6\/image\/upload\/w_500,h_500\/v1535979973\/ballyhoo\/CITY_IMAGES\/7.jpg"
                      />
                    </div>
                    <div className="pt0-5em text-align-centre">
                      <span className="ffqs">Chennai</span>
                    </div>
                  </div>

                  <div className="column">
                    <div className="jss359">
                      <img
                        className="img-resp"
                        alt="Bangalore"
                        src="https:\/\/res.cloudinary.com\/dp67gawk6\/image\/upload\/w_500,h_500\/v1543998613\/ballyhoo\/CITY_IMAGES\/9.jpg"
                      />
                    </div>
                    <div className="pt0-5em text-align-centre">
                      <span className="ffqs">Kolkata</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="jss359">
                      <img
                        className="img-resp"
                        alt="Bangalore"
                        src="http:\/\/res.cloudinary.com\/dp67gawk6\/image\/upload\/w_500,h_500\/v1535979973\/ballyhoo\/CITY_IMAGES\/12.jpg"
                      />
                    </div>
                    <div className="pt0-5em text-align-centre">
                      <span className="ffqs">Pune</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="jss359">
                      <img
                        className="img-resp"
                        alt="Bangalore"
                        src="http:\/\/res.cloudinary.com\/dp67gawk6\/image\/upload\/w_500,h_500\/v1535979973\/ballyhoo\/CITY_IMAGES\/13.jpg"
                      />
                    </div>
                    <div className="pt0-5em text-align-centre">
                      <span className="ffqs">Hyderabad</span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="jss359">
                      <img
                        className="img-resp"
                        alt="Bangalore"
                        src="http:\/\/res.cloudinary.com\/dp67gawk6\/image\/upload\/w_500,h_500\/v1535979973\/ballyhoo\/CITY_IMAGES\/14.jpg"
                      />
                    </div>
                    <div className="pt0-5em text-align-centre">
                      <span className="ffqs">Mumbai</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CityModel;

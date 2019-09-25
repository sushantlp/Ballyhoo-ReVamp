import "./headout.css";

const Headout = props => {
  return (
    <section className="section">
      <div className="container">
        <div className="download-section">
          <div className="phone-wrapper">
            <div className="iphone-wrapper">
              <div className="visible on-visible">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="https://res.cloudinary.com/dp67gawk6/image/upload/v1569318493/BallyhooV3/WEB/White-Phone-Mockup-3.png"
                  />
                  <img
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/v1569318493/BallyhooV3/WEB/White-Phone-Mockup-3.png"
                    alt="iphone"
                    className="image"
                    // width="230"
                    width="400"
                    height="470"
                    format="png"
                  />
                </picture>
              </div>
            </div>
          </div>

          <div className="middle-content">
            <div className="title">Ballyhoo on the go</div>
            <div className="line" />
            <div className="subtitle lh1_5">
              Download the app and join hundreds of thousands of happy
              <br />
              people and make every day more eventful &amp; more memorable with
              Ballyhoo Today.
            </div>
            <div className="download-links">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://apps.apple.com/in/app/ballyhoo-food-drinks-offers/id1138306421"
              >
                <div className="visible on-visible">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://cdn-imgix.headout.com/assets/images/badges/apple-store-badge.svg?auto=compress&amp;fm=webp&amp;h=96&amp;crop=faces&amp;fit=min"
                    />
                    <img
                      src="https://cdn-imgix.headout.com/assets/images/badges/apple-store-badge.svg?auto=compress&amp;fm=pjpg&amp;h=96&amp;crop=faces&amp;fit=min"
                      alt="Download iPhone app"
                      height="64"
                    />
                  </picture>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.sense.today.ballyhoo"
              >
                <div className="visible on-visible">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://cdn-imgix.headout.com/assets/images/badges/google-play-store-badge.svg?auto=compress&amp;fm=webp&amp;h=96&amp;crop=faces&amp;fit=min"
                    />
                    <img
                      src="https://cdn-imgix.headout.com/assets/images/badges/google-play-store-badge.svg?auto=compress&amp;fm=pjpg&amp;h=96&amp;crop=faces&amp;fit=min"
                      alt="Download Android app"
                      height="64"
                    />
                  </picture>
                </div>
              </a>
            </div>
          </div>

          <div className="phone-wrapper">
            <div className="android-wrapper">
              <div className="visible on-visible">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="https://res.cloudinary.com/dp67gawk6/image/upload/v1569307337/BallyhooV3/WEB/White-Phone-Mockup-1.png"
                  />
                  <img
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/v1569307337/BallyhooV3/WEB/White-Phone-Mockup-1.png"
                    alt="android"
                    className="image"
                    width="400"
                    height="470"
                    format="png"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headout;

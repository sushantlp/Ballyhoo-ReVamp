import "./headout.css";

const Headout = props => {
  return (
    // <section className="section">
    <div className="container">
      <div className="download-section">
        <div className="phone-wrapper">
          <div className="iphone-wrapper">
            <div className="visible on-visible">
              <picture>
                <source
                  type="image/webp"
                  srcSet="https://cdn-imgix.headout.com/assets/images/views/app-download/Apple-iPhone-7-Silver.png?auto=compress&amp;fm=webp&amp;w=345&amp;h=705&amp;crop=faces&amp;fit=min"
                />
                <img
                  src="https://cdn-imgix.headout.com/assets/images/views/app-download/Apple-iPhone-7-Silver.png?auto=compress&amp;fm=png&amp;w=345&amp;h=705&amp;crop=faces&amp;fit=min"
                  alt="iphone"
                  className="image"
                  width="230"
                  height="470"
                  format="png"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="middle-content">
          <div className="title">Headout on the go</div>
          <div className="line" />
          <div className="subtitle">
            Download our mobile app for easier &amp; faster checkout.
            <br />
            We can send you the download link to get started right away!
          </div>
          <div className="download-links">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://itunes.apple.com/us/app/tourlandish/id899327000?ls=1&amp;mt=8"
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
              href="https://play.google.com/store/apps/details?id=com.tourlandish.chronos&amp;hl=en"
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
                  srcSet="https://cdn-imgix.headout.com/assets/images/views/app-download/Google-Pixel-Really-Blue.png?auto=compress&amp;fm=webp&amp;w=345&amp;h=705&amp;crop=faces&amp;fit=min"
                />
                <img
                  src="https://cdn-imgix.headout.com/assets/images/views/app-download/Google-Pixel-Really-Blue.png?auto=compress&amp;fm=png&amp;w=345&amp;h=705&amp;crop=faces&amp;fit=min"
                  alt="android"
                  class="image"
                  width="230"
                  height="470"
                  format="png"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
    //  </section>
  );
};

export default Headout;

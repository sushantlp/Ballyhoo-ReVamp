import _ from "lodash";
import "./footer.css";

const Footer = props => {
  let city = [];

  if (!_.isEmpty(props)) city = props.cityLocality.cityLocality;

  return (
    <footer className="app-footer section is-medium">
      <div className="container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <div className="footer-rightside-summary">
              <a className="brand" href="/">
                <div className="brand-icon">
                  <img
                    // style={{ width: "50px" }}
                    alt="Ballyhoo"
                    role="presentation"
                    src="https://res.cloudinary.com/dp67gawk6/image/upload/v1569315724/BallyhooV3/WEB/logo.png"
                  />
                </div>
                <div className="brand-content">
                  <div className="brand-title"> Ballyhoo </div>
                  {/* <div className="brand-subtitle">Just Konnect</div> */}
                </div>
              </a>
              <hr className="spacer is-1" />
              <p className="short-story">
                The storytelling app for families - read diverse &amp;
                empowering stories or tell them in your own words.
              </p>
              <hr className="spacer is-1" />

              <a
                href="https://itunes.apple.com/us/app/bedtime-stories-read-tell/id1231933548"
                className="app-store-badge"
                target="_blank"
              >
                <img
                  role="presentation"
                  src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_40,w_120/v1481790564/ballyhoo/EMAIL/appstore1.png"
                />
              </a>

              <a
                href="https://itunes.apple.com/us/app/bedtime-stories-read-tell/id1231933548"
                className="app-store-badge"
                target="_blank"
                style={{ marginLeft: "0.5em" }}
              >
                <img
                  role="presentation"
                  src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_40,w_120/v1481790565/ballyhoo/EMAIL/playstore1.png"
                />
              </a>
            </div>
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column">
                <div className="menu">
                  <p className="menu-label"> Cities </p>
                  <ul className="menu-list">
                    {city.map((value, key) => {
                      return (
                        <li key={key}>
                          <a>{value.city_name}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="menu">
                  <p className="menu-label"> Company </p>
                  <ul className="menu-list">
                    <li>
                      <a href="/" target="_blank">
                        About Ballyhoo
                      </a>
                    </li>
                    <li>
                      <a href="/terms" target="_blank">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="/privacy" target="_blank">
                        Privacy Policy
                      </a>
                    </li>
                    {/* <li>
                      <a href="/" target="_blank">
                        Contact Us
                      </a>
                    </li> */}
                    <li>
                      <a href="/faq" target="_blank">
                        FAQ's
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="column">
                <div className="menu">
                  <p className="menu-label"> Connect with us </p>
                  <ul className="menu-list">
                    <li>
                      <a
                        href="https://facebook.com/getbedtimestories"
                        target="_blank"
                      >
                        <img
                          role="presentation"
                          src="https://getbedtimestories.com/assets/images/icons/social/facebook-f18752b0.svg?1553506572"
                        />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://facebook.com/getbedtimestories"
                        target="_blank"
                      >
                        <img
                          role="presentation"
                          src="https://getbedtimestories.com/assets/images/icons/social/instagram-89cb51bf.svg?1553506572"
                        />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://facebook.com/getbedtimestories"
                        target="_blank"
                      >
                        <img
                          role="presentation"
                          src="https://getbedtimestories.com/assets/images/icons/social/twitter-42c2f562.svg?1553506572"
                        />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://facebook.com/getbedtimestories"
                        target="_blank"
                      >
                        <img
                          role="presentation"
                          src="https://getbedtimestories.com/assets/images/icons/social/messenger-d2bb944d.svg?1553506572"
                        />
                        Messenger
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content has-text-centered">
          <p className="copyright">
            Copyright © 2019, <strong>Ballyhoo</strong> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Router from "next/router";
import Link from "next/link";
import _ from "lodash";
import "./footer.css";

// const changeCity = (cityId, cityName) => {
//   const city = cityName.replace(/ /g, "-").toLowerCase();

//   Router.push(
//     {
//       pathname: "/",
//       query: { city: city, city_id: cityId }
//     },
//     `/${city}/${cityId}`,
//     { shallow: false }
//   );
// };

const Footer = props => {
  let city = [];

  if (!_.isEmpty(props)) city = props.cityLocality.cityLocality;

  return (
    <footer className="app-footer section is-medium">
      <div className="container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <div className="footer-rightside-summary">
              <Link href="/">
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
                    <div className="brand-title">Ballyhoo Today</div>
                    {/* <div className="brand-subtitle">Just Konnect</div> */}
                  </div>
                </a>
              </Link>
              <hr className="spacer is-1" />
              <p className="short-story lh1_7">
                Explore only the best happening places with reviews, photos,
                prices and more all at once. Discover Urban Escapes or hidden
                jewels in your city for exclusive eventful experiences. Find
                some thing new everyday, be it - Club Parties, Weekend and Day
                out Escape packages, Indoor & Outdoor activities, Fine Dinning
                or Gastropub.
                {/* &amp; */}
              </p>
              <hr className="spacer is-1" />

              <a
                href="https://apps.apple.com/in/app/ballyhoo-food-drinks-offers/id1138306421"
                className="app-store-badge"
                target="_blank"
              >
                <img
                  role="presentation"
                  src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_40,w_120/v1481790564/ballyhoo/EMAIL/appstore1.png"
                />
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.sense.today.ballyhoo"
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
                        <li
                          key={key}
                          // onClick={() =>
                          //   changeCity(value.city_id, value.city_name)
                          // }
                        >
                          <a href="/">{value.city_name}</a>
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
                      <a href="/about" target="_blank">
                        About Ballyhoo
                      </a>
                    </li>
                    <li>
                      <a href="/term" target="_blank">
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
                        href="https://www.facebook.com/ballyhootoday/"
                        target="_blank"
                      >
                        <img
                          role="presentation"
                          src="https://img.icons8.com/color/25/000000/facebook.png"
                        />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/ballyhootoday/"
                        target="_blank"
                      >
                        <img
                          role="presentation"
                          src="https://img.icons8.com/color/25/000000/instagram.png"
                        />
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/BallyhooToday"
                        target="_blank"
                      >
                        <img
                          role="presentation"
                          src="https://img.icons8.com/color/25/000000/twitter.png"
                        />
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCJjD_ULskmt1pHxkztn2Zhg"
                        target="_blank"
                      >
                        <img
                          role="presentation"
                          src="https://img.icons8.com/color/25/000000/youtube-play.png"
                        />
                        Youtube
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
            Copyright © 2019, <strong>Ballyhoo Today</strong> All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

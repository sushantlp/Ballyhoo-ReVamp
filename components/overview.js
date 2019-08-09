import Map from "./map";

import "./overview.css";
const Overview = props => {
  return (
    <div className="overview-container">
      <div className="box">
        <div className="columns">
          <div className="column is-6">
            <h4 className="ffqs fw2">
              Average cost for two :{" "}
              <span className="fw7 f24 sfc3"> &#8377; 2,365</span>
            </h4>
          </div>

          <div className="column is-3">
            <div>
              <span className="tag fw7">
                <img src="https://img.icons8.com/color/17/000000/hearts.png" />
                <span className="ellipsis pl0_5">71%</span>
              </span>
            </div>
          </div>

          <div className="column is-3">
            <span className="rating">
              <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
              <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
              <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
              <img src="https://img.icons8.com/color/20/000000/star.png" />
              <img src="https://img.icons8.com/color/20/000000/star.png" />
            </span>
          </div>
        </div>
      </div>

      <hr className="spacer is-3" />

      <div className="box">
        <div className="cuisine-container">
          <div className="columns">
            <div className="column is-6">
              <h4 className="google cuisine-title">Cuisines</h4>
              <ul className="package-tags">
                <li className="ellipsis">Shikara Ride</li>
                <li className="ellipsis">Nature</li>
                <li className="ellipsis">Martand Temple</li>
                <li className="ellipsis">Hill station</li>
                <li className="ellipsis">Amusement Park</li>
                <li className="ellipsis">Sightseeing</li>
                <li className="ellipsis">Gondola Ride</li>
                <li className="ellipsis">Family</li>
                <li className="ellipsis">Budget</li>
              </ul>
            </div>

            <div className="column is-5 is-offset-1">
              <h4 className="google cuisine-title">Timings</h4>
              <ul className="package-tags">
                <li className="ellipsis">Tue 11:30 AM To 12:30 AM</li>
                <li className="ellipsis">Wed 11:30 AM To 12:30 AM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="columns">
          <div className="column">
            <h4 className="google cuisine-title">About Merchant</h4>
            <h4 className="fz1 pfc4 ffqs fw2 ls">
              Passengers embark at North Cove Marina in lower Manhattan, and the
              tour begins after a short safety briefing. The boat stops for
              photos at the Freedom Tower, circles around Battery Park, cruises
              up the East River and stops again for a photo opportunity
              underneath the Brooklyn Bridge.
            </h4>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="columns">
          <div className="column">
            <h4 className="google cuisine-title">Menu</h4>

            <div className="menu-container">
              <figure className="image">
                <img
                  src="https://b.zmtcdn.com/data/menus/410/18387410/c28fc94d82679806af3f1cf12b84b867.jpg?output-format=webp"
                  className="menu-image"
                />
              </figure>

              <figure className="image">
                <img
                  src="https://b.zmtcdn.com/data/menus/410/18387410/732cc23f9107fcfea18555372c176f1c.jpg"
                  className="menu-image"
                />
              </figure>

              <figure className="image">
                <img
                  src="https://b.zmtcdn.com/data/menus/410/18387410/4114c960cea71d7981bf0dc3358dbf9c.jpg"
                  className="menu-image"
                />
              </figure>

              <figure className="image">
                <img
                  src="https://b.zmtcdn.com/data/menus/410/18387410/5315c87be1738af261da3501271dfa15.jpg"
                  className="menu-image"
                />
              </figure>

              <figure className="image">
                <img
                  src="https://b.zmtcdn.com/data/menus/410/18387410/81c918ed61a86ecc2d16b66d18576909.jpg"
                  className="menu-image"
                />
              </figure>

              <figure className="image">
                <img
                  src="https://b.zmtcdn.com/data/menus/410/18387410/81c918ed61a86ecc2d16b66d18576909.jpg"
                  className="menu-image"
                />
              </figure>

              <span class="tag is-medium is-danger fw7">10 +</span>
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="columns">
          <div className="column">
            <h4 className="google cuisine-title">Offer Highlight</h4>
            <h4 className="fz1 pfc4 ffqs fw2 ls">
              This wonderful land of northeast India, is home to some of the
              most picturesque honeymoon destinations with spellbinding tourist
              attractions. This romantic 4 nights 5 days north east package from
              Delhi, Kolkata, Mumbai and other major cities of India takes you
              around some famous tourist places in northeast India including
              Shillong and Mawlynnong.
            </h4>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="columns">
          <div className="column">
            <h4 className="google cuisine-title">Where ?</h4>
            <h4 className="ff f10 f1-1 fw2">
              C. d'Arístides Maillol, 12, 08028 Barcelona, Spain
            </h4>
            <Map />
          </div>
        </div>
      </div>

      <div className="box">
        <div className="columns">
          <div className="column">
            <h4 className="google cuisine-title">
              Rating <span className="fs0-7 light-red">(By Zomato) </span>
            </h4>

            <div className="zomato-container">
              <h4 className="ff f1-1 fw2 mb0-3"> Amulya Jayadev</h4>
              <span className="rating">
                <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
                <img src="https://img.icons8.com/color/20/000000/star.png" />
                <img src="https://img.icons8.com/color/20/000000/star.png" />
              </span>

              <h4 className="fz1 pfc4 ffqs fw2 ls mt0-3">
                This wonderful land of northeast India, is home to some of the
                most picturesque honeymoon destinations with spellbinding
                tourist attractions. This romantic 4 nights 5 days north east
                package from Delhi, Kolkata, Mumbai and other major cities of
                India takes you around some famous tourist places in northeast
                India including Shillong and Mawlynnong.
              </h4>

              <h4 className="ff f1-1 fw2 mb0-3"> Rishi Dodeja</h4>
              <span className="rating">
                <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
                <img src="https://img.icons8.com/color/20/000000/star.png" />
                <img src="https://img.icons8.com/color/20/000000/star.png" />
              </span>

              <h4 className="fz1 pfc4 ffqs fw2 ls mt0-3">
                This wonderful land of northeast India, is home to some of the
                most picturesque honeymoon destinations with spellbinding
                tourist attractions. This romantic 4 nights 5 days north east
                package from Delhi, Kolkata, Mumbai and other major cities of
                India takes you around some famous tourist places in northeast
                India including Shillong and Mawlynnong.
              </h4>
            </div>

            <p class="buttons load-more">
              <a class="button is-medium is-warning">
                <span class="icon">
                  <img src="https://img.icons8.com/cotton/64/000000/circled-chevron-down.png" />
                </span>
                <span>Load More</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

import { Divider } from "semantic-ui-react";
import Map from "./map";
import "./overview.css";
const Overview = props => {
  return (
    <div className="overview-container">
      <div className="box">
        <div className="columns">
          <div className="column is-6">
            <h4 className="google partner-title">55 Wall Street</h4>
          </div>

          <div className="column is-3">
            <span className="tag radius20 fw7">
              <img src="https://img.icons8.com/color/17/000000/hearts.png" />
              <span className="ellipsis pl0_5">71%</span>
            </span>
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
            <h4 className="ff f10 f1-1 fw2">
              C. d'Arístides Maillol, 12, 08028 Barcelona, Spain
            </h4>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

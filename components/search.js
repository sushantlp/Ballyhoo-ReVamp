import { Dropdown } from "semantic-ui-react";
import "./search.css";

const Search = props => {
  const empty = [];

  return (
    <div
      className="search-container"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dp67gawk6/image/upload/v1568281013/BallyhooV3/WEB/List-Image/3.jpg')"

        // overflow: "hidden"
      }}
    >
      <section>
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-3 is-offset-1">
              <Dropdown
                placeholder="City"
                search
                fluid
                selection
                style={{ height: "50px" }}
                options={empty}
                value={empty}
                icon={
                  <img
                    src="https://img.icons8.com/carbon-copy/20/000000/define-location.png"
                    style={{
                      marginRight: "-1.1em",
                      marginTop: "0.3em",
                      float: "right",
                      color: "grey"
                    }}
                  />
                }
              />
            </div>

            <div className="column is-6">
              <Dropdown
                placeholder="City"
                search
                fluid
                selection
                style={{ height: "50px" }}
                options={empty}
                value={empty}
                // onChange={}
                icon={
                  <img
                    src="https://img.icons8.com/wired/20/000000/search.png"
                    style={{
                      marginRight: "-1.1em",
                      marginTop: "0.3em",
                      float: "right",
                      color: "grey"
                    }}
                  />
                }
              />
            </div>

            <div className="column is-2">
              <a
                className="button is-danger"
                style={{ height: "50px", fontWeight: "700" }}
              >
                SUBMIT
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;

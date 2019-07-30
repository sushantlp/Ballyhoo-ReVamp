import { Dropdown } from "semantic-ui-react";
import "./search.css";

const Search = props => {
  const empty = [];

  return (
    <div
      className="search-container"
      style={{
        backgroundImage:
          "url('https://img.traveltriangle.com/attachments/pictures/843472/original/Kashmir-tour-packages-s.jpg?tr=w-1366,h-305')"

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
                style={{ height: "3em" }}
                options={empty}
                value={empty}
                icon={
                  <img
                    src="https://img.icons8.com/carbon-copy/20/000000/define-location.png"
                    style={{
                      marginRight: "-2vh",
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
                style={{ height: "3em" }}
                options={empty}
                value={empty}
                // onChange={}
                icon={
                  <img
                    src="https://img.icons8.com/wired/20/000000/search.png"
                    style={{
                      marginRight: "-2vh",
                      float: "right",
                      color: "grey"
                    }}
                  />
                }
              />
            </div>

            <div className="column is-2">
              <a className="button is-danger">SUBMIT</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;

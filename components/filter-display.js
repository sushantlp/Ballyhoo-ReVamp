import "./filter-display.css";

const FilterDisplay = props => {
  return (
    <div className="filter-display-container">
      <div className="box">
        <div className="columns">
          <div className="column">
            <p> Filter</p>
            {/* <div className="tags has-addons are-medium">
              <span className="tag is-rounded">Family</span>
              <a className="tag is-delete" />
            </div> */}

            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons are-medium">
                  <span className="tag is-warning is-rounded">Family</span>
                  <a className="tag is-delete" />
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons are-medium">
                  <span className="tag is-warning is-rounded">1 to 3</span>
                  <a className="tag is-delete" />
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons are-medium">
                  <span className="tag is-warning is-rounded">
                    10,000 - 20,000
                  </span>
                  <a className="tag is-delete" />
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <div className="select is-medium is-pulled-right">
                <select>
                  <option>Recommended</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDisplay;

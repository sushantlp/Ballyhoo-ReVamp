import "./filter.css";
import "bulma-checkradio";

const Filter = props => {
  return (
    <div className="filter-container">
      <div className="box">
        <h3 className="google">Categories </h3>
        <div className="columns is-desktop is-multiline is-narrow">
          <div className="field">
            <div className="column">
              <input
                className="is-checkradio has-background-color is-danger"
                id="exampleCheckboxBackgroundColorDanger"
                type="checkbox"
                name="exampleCheckboxBackgroundColorDanger"
                checked="checked"
              />
              <label for="exampleCheckboxBackgroundColorDanger">
                Honeymoon
              </label>

              <input
                className="is-checkradio"
                id="exampleCheckboxBackgroundColorDanger"
                type="checkbox"
                name="exampleCheckboxBackgroundColorDanger"
              />
              <label for="exampleCheckboxBackgroundColorDanger">Family</label>
            </div>

            <div className="column">
              <input
                className="is-checkradio"
                id="exampleCheckboxBackgroundColorDanger"
                type="checkbox"
                name="exampleCheckboxBackgroundColorDanger"
              />
              <label for="exampleCheckboxBackgroundColorDanger">
                Friends/Group
              </label>
            </div>
          </div>
        </div>

        <h3 className="google">Budget Per Person (in Rs.)</h3>
        <div className="columns is-desktop is-multiline is-narrow">
          <div className="field">
            <div className="column">
              <input
                className="is-checkradio has-background-color is-danger"
                id="exampleCheckboxBackgroundColorDanger"
                type="checkbox"
                name="exampleCheckboxBackgroundColorDanger"
                checked="checked"
              />
              <label for="exampleCheckboxBackgroundColorDanger">
                Less Than 10,000
              </label>
            </div>

            <div className="column">
              <input
                className="is-checkradio"
                id="exampleCheckboxBackgroundColorDanger"
                type="checkbox"
                name="exampleCheckboxBackgroundColorDanger"
              />
              <label for="exampleCheckboxBackgroundColorDanger">
                10,000 - 20,000
              </label>
            </div>

            <div className="column">
              <input
                className="is-checkradio"
                id="exampleCheckboxBackgroundColorDanger"
                type="checkbox"
                name="exampleCheckboxBackgroundColorDanger"
              />
              <label for="exampleCheckboxBackgroundColorDanger">
                20,000 - 40,000
              </label>
            </div>

            <div className="column">
              <input
                className="is-checkradio"
                id="exampleCheckboxBackgroundColorDanger"
                type="checkbox"
                name="exampleCheckboxBackgroundColorDanger"
              />
              <label for="exampleCheckboxBackgroundColorDanger">
                40,000 - 60,000
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

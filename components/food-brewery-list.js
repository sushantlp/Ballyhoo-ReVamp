const FoodBrewery = props => {
  const list = props.listData.listData;

  return list.map((list, key) => {
    let description = list.p_about;
    if (description.length >= 250) {
      description = description.slice(0, 250) + " ...";
    }

    let fullRating = [];
    let emptyRating = [];
    let topRating = 5;
    let halfRating = undefined;

    const rating = list.p_rating + "";
    const ratingSplit = rating.split(".");

    // Half Star
    if (ratingSplit[1] !== undefined) {
      if (parseInt(ratingSplit[1], 10) === 0)
        topRating = topRating - Number(ratingSplit[0]);
      else {
        topRating = topRating - Number(ratingSplit[0]);
        topRating = topRating - 1;

        halfRating = (
          <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
        );
      }
    } else topRating = topRating - Number(ratingSplit[0]);

    // Full Star
    for (let i = 0; i < Number(ratingSplit[0]); i++) {
      fullRating.push(i);
    }

    // Empty Star
    for (let i = 0; i < topRating; i++) {
      emptyRating.push(i);
    }

    return (
      <React.Fragment key={key}>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img src={list.p_image} alt="Image" />
              </figure>
            </div>

            {list.p_promoted === 1 ? (
              <div className="ribbon ribbon-top-left">
                <span>Featured</span>
              </div>
            ) : null}

            <div className="media-content">
              <div className="content">
                <div className="columns mb0">
                  <div className="column">
                    <p className="title google">{list.p_name}</p>
                    <p className="subtitle is-6 mb8 plh1">{list.p_locality}</p>
                  </div>

                  <div className="column">
                    <span className="tag radius20 fw7">
                      <img src="https://img.icons8.com/color/17/000000/hearts.png" />
                      <span className="ellipsis pl0_5">
                        {list.p_popularity} %
                      </span>
                    </span>

                    <span className="rating">
                      {fullRating.map(function(i) {
                        return (
                          <img
                            src="https://img.icons8.com/color/20/000000/filled-star.png"
                            key={i}
                          />
                        );
                      })}
                      <span>{halfRating}</span>
                      <span>
                        {emptyRating.map(function(i) {
                          return (
                            <img
                              src="https://img.icons8.com/color/20/000000/star.png"
                              key={i}
                            />
                          );
                        })}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="columns mb0 ">
                  <div className="column pt0">
                    <span className="fw4 m0 iblock">
                      <span className="mr24">Average cost for two :</span>
                    </span>

                    <h5
                      className="m0 f20 fw9 flh28 mt0-5"
                      style={{ color: "#635f5f" }}
                    >
                      ₹ {list.p_cost_for_two}
                    </h5>
                  </div>
                  <div className="column pl8 pt0">
                    <div className="tags package-tags">
                      {list.p_cuisines.map((cuisine, key) => {
                        return (
                          <li className="tag is-rounded" key={key}>
                            {cuisine}
                          </li>
                        );
                      })}
                    </div>
                    {/* <div className="package-tag-box">
                      <ul className="package-tags at_package_tags">
                        {list.p_cuisines.map((cuisine, key) => {
                          return (
                            <li className="ellipsis" key={key}>
                              {cuisine}
                            </li>
                          );
                        })}
                      </ul>
                    </div> */}
                  </div>
                </div>

                <div className="css-clzwav f12 m0 fw4">
                  <p className="lh1-7">{description}</p>
                </div>
              </div>
            </div>
          </article>

          <footer className="card-footer">
            <div className="card-footer-item">
              <span
                className="span-flex pt0-5 pb0-5 cursor"
                onClick={() =>
                  props.foodCategoryApiCall(list.p_id, props.urlParam.key)
                }
              >
                <span className="pr2">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjQjBCRUM1IiBkPSJNNDYgMjFMNDMgMjEgNDMgMTggNDAgMTggNDAgMTUgNDYgMTV6TTQ2IDM2TDQzIDM2IDQzIDM5IDQwIDM5IDQwIDQyIDQ2IDQyek0xNiAzNkwxMyAzNiAxMyA0MiAxOSA0MiAxOSAzOSAxNiAzOXpNMTMgMzBIMTZWMzNIMTN6TTEzIDI0SDE2VjI3SDEzek00MyAzMEg0NlYzM0g0M3pNNDMgMjRINDZWMjdINDN6TTM0IDE1SDM3VjE4SDM0ek0zNCAzOUgzN1Y0MkgzNHpNMjggMTVIMzFWMThIMjh6TTIyIDE1SDI1VjE4SDIyek0yOCAzOUgzMVY0MkgyOHpNMjIgMzlIMjVWNDJIMjJ6Ij48L3BhdGg+PGc+PHBhdGggZmlsbD0iIzE1NjVDMCIgZD0iTTIsOWMwLDIuMjA5LDEuNzkxLDQsNCw0czQtMS43OTEsNC00UzguMjA5LDUsNiw1UzIsNi43OTEsMiw5eiBNNC40NDYsNy42MjFDNC43OTYsNy4yMjUsNS4zMDgsNyw1Ljg1Miw3YzEuMTEyLDAsMi4wMDgsMC43NjIsMi4xMzMsMS44MTRjMC4wNywwLjU4NC0wLjEwNSwxLjE2Ni0wLjQ4LDEuNTkyQzcuMTY1LDEwLjc4OSw2LjcwNiwxMSw2LjIwNiwxMWMtMS4wOCwwLTIuMDY0LTAuODc1LTIuMTkyLTEuOTQ3QzMuOTUsOC41Miw0LjEwNCw4LjAxMiw0LjQ0Niw3LjYyMXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTU2NUMwIiBkPSJNNiwxMi43MDljLTAuMDI3LDAtMC4wNTItMC4wMDgtMC4wNzktMC4wMDhjMi4wNjIsMC44MTQsNC4xODYsMS42ODYsNS45MzgsNC44NzNjMC4wNCwwLjA3LDAuMDk0LDAuMTMzLDAuMTYsMC4xOGwxMC4zNjIsNy4yNDRjMC4wNTIsMC4wMzksMS41NjQsMC45OTgsMy40MjIsMC45OThjMS4wMTUsMCwxLjkzNC0wLjE2MiwyLjczNS0wLjgxOEwyOSwyNC42NThsLTE0LjU3OC0xMC41N2MtMC4xOTYtMC4xMjMtMy44OTgtMi4zNzctNC43ODQtMi44NTRjLTAuMDM2LTAuMDItMC4xODctMC4xMDUtMC4zODEtMC4yMTdDOC41MzIsMTIuMDM5LDcuMzQ3LDEyLjcwOSw2LDEyLjcwOXoiPjwvcGF0aD48L2c+PGc+PHBhdGggZmlsbD0iIzIxOTZGMyIgZD0iTTYsMjcuOTk2YzIuMjA5LDAsNC0xLjc5MSw0LTRzLTEuNzkxLTQtNC00cy00LDEuNzkxLTQsNFMzLjc5MSwyNy45OTYsNiwyNy45OTZ6IE00LjAxNCwyMy45NDNjMC4xMjgtMS4wNzIsMS4xMTItMS45NDcsMi4xOTItMS45NDdjMC41LDAsMC45NTksMC4yMTEsMS4yOTgsMC41OTRjMC4zNzUsMC40MjYsMC41NTEsMS4wMDgsMC40OCwxLjU5MmMtMC4xMjUsMS4wNTMtMS4wMjEsMS44MTQtMi4xMzMsMS44MTRjLTAuNTQ0LDAtMS4wNTYtMC4yMjUtMS40MDUtMC42MjFDNC4xMDQsMjQuOTg0LDMuOTUsMjQuNDc3LDQuMDE0LDIzLjk0M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjMjE5NkYzIiBkPSJNMjguNTM5LDcuODE4QzI3LjczNyw3LjE2MiwyNi44MTgsNywyNS44MDQsN2MtMS44NTcsMC0zLjM3LDAuOTU5LTMuNDIyLDAuOTk4TDEyLjAyLDE1LjI0MmMtMC4wNjYsMC4wNDctMC4xMiwwLjEwOS0wLjE2LDAuMThjLTEuNzUzLDMuMTg4LTMuODc3LDQuMDU5LTUuOTM4LDQuODczYzAuMDI3LDAsMC4wNTItMC4wMDgsMC4wNzktMC4wMDhjMS4zNDcsMCwyLjUzMiwwLjY3LDMuMjU3LDEuNjkxYzAuMTk0LTAuMTExLDAuMzQ1LTAuMTk3LDAuMzgxLTAuMjE3YzAuODg2LTAuNDc3LDQuNTg4LTIuNzMsNC43ODQtMi44NTRMMjksOC4zMzhMMjguNTM5LDcuODE4eiBNMTQuMzI1LDE2Ljk5NmMtMC4zNzMsMC0wLjY3Ni0wLjMwMy0wLjY3Ni0wLjY3NmMwLTAuMzcxLDAuMzAzLTAuNjc0LDAuNjc2LTAuNjc0YzAuMzcxLDAsMC42NzUsMC4zMDMsMC42NzUsMC42NzRDMTUsMTYuNjkzLDE0LjY5NiwxNi45OTYsMTQuMzI1LDE2Ljk5NnoiPjwvcGF0aD48L2c+PC9zdmc+" />
                  <p className="f12">Offer</p>
                </span>

                <span className="pr2">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDI4OEQxIiBkPSJNMTksMTguM2wtMi44LDIuOGwxOC40LDE4LjRjMC44LDAuOCwyLDAuOCwyLjgsMGwwLDBjMC44LTAuOCwwLjgtMiwwLTIuOEwxOSwxOC4zeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwMjg4RDEiIGQ9Ik0xNS45LDI2LjVsNS43LTUuN0w3LjcsN0w3LjEsNy41Yy0yLjgsMi44LTIuOCw3LjQsMCwxMC4yTDE1LjksMjYuNXoiPjwvcGF0aD48Zz48cGF0aCBmaWxsPSIjMDNBOUY0IiBkPSJNMzEuMSwyMS43bC0yLjgtMi44TDEwLjQsMzYuN2MtMC44LDAuOC0wLjgsMiwwLDIuOGwwLDBjMC44LDAuOCwyLDAuOCwyLjgsMEwzMS4xLDIxLjd6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzAzQTlGNCIgZD0iTTMzLjkgNi4xMDAwMDAwMDAwMDAwMDFBOCAxMCAwIDEgMCAzMy45IDI2LjFBOCAxMCAwIDEgMCAzMy45IDYuMTAwMDAwMDAwMDAwMDAxWiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUuMDAxIDMzLjk0NSAxNi4wNTUpIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
                  <p className="f12">Buffet</p>
                </span>

                <span className="pr2" style={{ disabled: "true" }}>
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRkY5ODAwIiBkPSJNMzgsMzlIMTBjLTEuMSwwLTItMC45LTItMlYxN2gzMnYyMEM0MCwzOC4xLDM5LjEsMzksMzgsMzl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGQTcyNiIgZD0iTTQyLDE3SDZ2LTZjMC0xLjEsMC45LTIsMi0yaDMyYzEuMSwwLDIsMC45LDIsMlYxN3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjOUU1RTAwIiBkPSJNMjIgMTdIMjZWMzlIMjJ6TTMyIDNMMjggMyAyMiA5IDI2IDl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0M3NzYwMCIgZD0iTTIwIDNMMTYgMyAyMiA5IDIyIDE3IDI2IDE3IDI2IDl6Ij48L3BhdGg+PC9zdmc+"
                    style={{ paddingLeft: "0.6em" }}
                  />
                  <p className="f12">Package</p>
                </span>

                <span className="pr2">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjQ0ZEOERDIiBkPSJNNSwzOVYxNWgzOHYyNGMwLDIuMjA5LTEuNzkxLDQtNCw0SDlDNi43OTEsNDMsNSw0MS4yMDksNSwzOSI+PC9wYXRoPjxwYXRoIGZpbGw9IiNFQ0VGRjEiIGQ9Ik01IDI1SDQzVjMzSDV6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0IwQkVDNSIgZD0iTTEzIDI3SDE3VjMxSDEzek0xOSAyN0gyM1YzMUgxOXpNMzEgMjdIMzVWMzFIMzF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzkwQTRBRSIgZD0iTTEzIDIxSDE3VjI1SDEzek0xOSAyMUgyM1YyNUgxOXpNMjUgMjFIMjlWMjVIMjV6TTMxIDIxSDM1VjI1SDMxek0xMyAzM0gxN1YzN0gxM3pNMTkgMzNIMjNWMzdIMTl6TTI1IDMzSDI5VjM3SDI1ek0zMSAzM0gzNVYzN0gzMXoiPjwvcGF0aD48Zz48cGF0aCBmaWxsPSIjRjQ0MzM2IiBkPSJNMjUgMjdIMjlWMzFIMjV6TTQzIDExdjZINXYtNmMwLTIuMjA5IDEuNzkxLTQgNC00aDMwQzQxLjIwOSA3IDQzIDguNzkxIDQzIDExIj48L3BhdGg+PC9nPjxnPjxwYXRoIGZpbGw9IiNCNzFDMUMiIGQ9Ik0zNiAxMWMwIDEuNjU3LTEuMzQzIDMtMyAzcy0zLTEuMzQzLTMtMyAxLjM0My0zIDMtM1MzNiA5LjM0MyAzNiAxMU0xOCAxMWMwIDEuNjU3LTEuMzQzIDMtMyAzcy0zLTEuMzQzLTMtMyAxLjM0My0zIDMtM1MxOCA5LjM0MyAxOCAxMSI+PC9wYXRoPjwvZz48Zz48cGF0aCBmaWxsPSIjQjBCRUM1IiBkPSJNMzMgNGMtMS4xMDQgMC0yIC44OTYtMiAydjVjMCAxLjEwNC44OTYgMiAyIDJzMi0uODk2IDItMlY2QzM1IDQuODk2IDM0LjEwNCA0IDMzIDRNMTUgNGMtMS4xMDQgMC0yIC44OTYtMiAydjVjMCAxLjEwNC44OTYgMiAyIDJzMi0uODk2IDItMlY2QzE3IDQuODk2IDE2LjEwNCA0IDE1IDQiPjwvcGF0aD48L2c+PC9zdmc+" />
                  <p className="f12">Event</p>
                </span>
              </span>
            </div>

            <div className="card-footer-item">
              <span className="span-flex ">
                {parseInt(list.p_food_preference, 10) === 1 ? (
                  <span>
                    <img
                      src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
                      style={{ height: "1.5em" }}
                    />
                  </span>
                ) : parseInt(list.p_food_preference, 10) === 2 ? (
                  <span>
                    <img
                      src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                      style={{ height: "1.5em" }}
                    />
                  </span>
                ) : (
                  <span>
                    <span>
                      <img
                        src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
                        style={{ height: "1.5em" }}
                      />
                    </span>

                    <span>
                      <img
                        src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                        style={{ height: "1.5em" }}
                      />
                    </span>
                  </span>
                )}
              </span>
            </div>

            <div className="card-footer-item">
              <a
                className="button is-medium is-danger is-outlined"
                onClick={() =>
                  props.foodCategoryApiCall(list.p_id, props.urlParam.key)
                }
              >
                <span className="icon">
                  <img src="https://img.icons8.com/bubbles/50/000000/visible.png" />
                </span>
                <span>View Detail</span>
              </a>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  });
};

export default FoodBrewery;

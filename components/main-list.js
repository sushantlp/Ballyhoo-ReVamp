import "./main-list.css";
import FilterDisplay from "./filter-display";
const MainList = props => {
  return (
    <React.Fragment>
      <FilterDisplay />
      <div className="main-list-container">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img
                  src="https://cdn-imgix.headout.com/category/26/image/d405cabb-965f-4c15-8828-4276755636a2-NYCFoodandDrinks.jpg?auto=compress&fm=pjpg&w=480&h=480&crop=faces&fit=min"
                  alt="Image"
                />
              </figure>
            </div>

            <div className="ribbon ribbon-top-left">
              <span>Featured</span>
            </div>

            <div className="ribbon ribbon-bottom-right">
              <span style={{ backgroundColor: "#ffdd57", color: "black" }}>
                Exculsive
              </span>
            </div>

            <div className="media-content">
              <div className="content">
                <div className="columns mb0">
                  <div className="column">
                    <p className="title google">Kashmir Family Tour Package</p>
                    <p className="subtitle is-6 mb8 plh1">4 Days & 3 Nights</p>
                  </div>

                  <div className="column">
                    <span className="tag radius20 fw7">
                      <img src="https://img.icons8.com/color/17/000000/hearts.png" />
                      <span className="ellipsis pl0_5">71%</span>
                    </span>

                    <span className="rating">
                      <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                      <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                      <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
                      <img src="https://img.icons8.com/color/20/000000/star.png" />
                      <img src="https://img.icons8.com/color/20/000000/star.png" />
                    </span>
                  </div>
                </div>

                <div className="columns mb0 ">
                  <div className="column pt0">
                    <span className="f12 fw4 m0 pb8 iblock">
                      <span className="mr24 pfc4">Starting from:</span>
                      <span className="tag is-danger radius20 fw7">
                        12% off
                      </span>
                    </span>

                    <h5 className="sfc3 m0 f24 fw9 flh28 priceVal at_newprice">
                      ₹ 10,000/-
                      <span className="f12 pfc3 tdl ml8">₹ 11,351/-</span>
                    </h5>

                    <p className="f12 m0 pfc4 fw7">
                      Per Person on twin sharing
                    </p>
                  </div>
                  <div className="column pl8 pt0">
                    <div className="package-tag-box">
                      <ul className="package-tags at_package_tags">
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
                  </div>
                </div>

                <div className="css-clzwav f12 pfc4 m0 fw4">
                  <p>
                    The Kashmir tour itinerary begins with the pickup from the
                    Srinagar Airport by the agent’s representative. A private
                    cab will transfer you from the airport to a jetty around the
                    Dal Lake.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <footer className="card-footer">
            <div className="card-footer-item">
              <span className="span-flex">
                <span className="pr2">
                  <img src="https://img.icons8.com/color/48/000000/3-star-hotel.png" />

                  <p className="f12">Stay</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/around-the-globe.png"
                    style={{ paddingLeft: "0.3em" }}
                  />
                  <p className="f12">Travel</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/tripadvisor.png"
                    style={{ paddingLeft: "1.2em" }}
                  />
                  <p className="f12">SightSeeing</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/sandwich.png"
                    style={{ paddingLeft: "0.9em" }}
                  />
                  <p className="f12">BreakFast</p>
                </span>

                <span className="pr2">
                  <img
                    src="https://img.icons8.com/color/25/000000/parachute.png"
                    style={{ paddingLeft: "0.8em" }}
                  />
                  <p className="f12">Activities</p>
                </span>
              </span>
            </div>

            <div className="card-footer-item">
              <a className="button is-medium">
                <span className="icon">
                  <img src="https://img.icons8.com/bubbles/50/000000/visible.png" />
                </span>
                <span>View Detail</span>
              </a>
            </div>
          </footer>
        </div>

        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img
                  src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_480,w_480/v1457670910/ballyhoo/NON-VEG/10.jpg"
                  alt="Image"
                />
              </figure>
            </div>
            <div className="ribbon ribbon-top-left">
              <span>Featured</span>
            </div>
            <div className="media-content">
              <div className="content">
                <div className="columns mb0">
                  <div className="column">
                    <p className="title google">55 Wall Street</p>
                    <p className="subtitle is-6 mb8 plh1">JP Nagar</p>
                  </div>

                  <div className="column">
                    <span className="tag radius20 fw7">
                      <img src="https://img.icons8.com/color/17/000000/hearts.png" />
                      <span className="ellipsis pl0_5">71%</span>
                    </span>

                    <span className="rating">
                      <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                      <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                      <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
                      <img src="https://img.icons8.com/color/20/000000/star.png" />
                      <img src="https://img.icons8.com/color/20/000000/star.png" />
                    </span>
                  </div>
                </div>
                <div className="columns mb0 ">
                  <div className="column pt0">
                    <span className="f12 fw4 m0 pb8 iblock">
                      <span className="mr24 pfc4">Average cost for two:</span>
                    </span>

                    <h5 className="sfc3 m0 f24 fw9 flh28 priceVal at_newprice">
                      ₹ 1,300/-
                    </h5>
                  </div>
                  <div className="column pl8 pt0">
                    <div className="package-tag-box">
                      <ul className="package-tags at_package_tags">
                        <li className="ellipsis">North Indian Food</li>
                        <li className="ellipsis">Chineese Food</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="css-clzwav f12 pfc4 m0 fw4">
                  <p>
                    The Kashmir tour itinerary begins with the pickup from the
                    Srinagar Airport by the agent’s representative. A private
                    cab will transfer you from the airport to a jetty around the
                    Dal Lake.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <footer className="card-footer">
            <div className="card-footer-item">
              <span className="span-flex pt0-5 pb0-5">
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
                <span>
                  {/* <img
                    src="https://img.icons8.com/cute-clipart/64/000000/vegetarian-food-symbol.png"
                    style={{ height: "2em" }}
                  /> */}
                  <img
                    src="https://img.icons8.com/color/48/000000/vegetarian-food-symbol.png"
                    style={{ height: "1.5em" }}
                  />
                </span>

                <span>
                  {/* <img
                    src="https://img.icons8.com/cute-clipart/64/000000/non-vegetarian-food-symbol.png"
                    style={{ height: "2em" }}
                  /> */}

                  <img
                    src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                    style={{ height: "1.5em" }}
                  />
                </span>
              </span>
            </div>

            <div className="card-footer-item">
              <a className="button is-medium">
                <span className="icon">
                  <img src="https://img.icons8.com/bubbles/50/000000/visible.png" />
                </span>
                <span>View Detail</span>
              </a>
            </div>
          </footer>
        </div>

        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img
                  src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_480,w_480/v1457670910/OTHER_CATEGORY/ACTIVITY/5.jpg"
                  alt="Image"
                />
              </figure>
            </div>

            <div className="ribbon ribbon-top-left">
              <span>Featured</span>
            </div>
            <div className="media-content">
              <div className="content">
                <div className="columns mb0">
                  <div className="column">
                    <p className="title google">Play Arena</p>
                    <p className="subtitle is-6 mb8 plh1">Sarjapur</p>
                  </div>

                  <div className="column">
                    <span className="tag radius20 fw7">
                      <img src="https://img.icons8.com/color/17/000000/hearts.png" />
                      <span className="ellipsis pl0_5">71%</span>
                    </span>

                    <span className="rating">
                      <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                      <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                      <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
                      <img src="https://img.icons8.com/color/20/000000/star.png" />
                      <img src="https://img.icons8.com/color/20/000000/star.png" />
                    </span>
                  </div>
                </div>
                <div className="columns mb0 ">
                  <div className="column pt0">
                    <span className="f12 fw4 m0 pb8 iblock">
                      <span className="mr24 pfc4">Starting from:</span>
                      <span className="tag is-danger radius20 fw7">
                        12% off
                      </span>
                    </span>

                    <h5 className="sfc3 m0 f24 fw9 flh28 priceVal at_newprice">
                      ₹ 10,000/-
                      <span className="f12">onwards</span>
                      <span className="f12 pfc3 tdl ml8">₹ 11,351/-</span>
                    </h5>
                  </div>
                  <div className="column pl8 pt0">
                    <div className="package-tag-box">
                      <ul className="package-tags at_package_tags">
                        <li className="ellipsis">Bowling</li>
                        <li className="ellipsis">Archery</li>
                        <li className="ellipsis">Segway</li>
                        <li className="ellipsis">Lasertag</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="css-clzwav f12 pfc4 m0 fw4">
                  <p>
                    Arena is the fully loaded nucleus of our being. There’s
                    something for everyone — from zorbing to go-karting as well
                    as sports like tennis, badminton, football, swimming , Go
                    Karting, Segway, Bowling, Archery, Shooting, Wall climbing
                    etc.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <footer className="card-footer">
            <div className="card-footer-item">
              <span className="span-flex pt0-5 pb0-5">
                <span className="pr2">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjUiIGhlaWdodD0iMjUiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRkY5ODAwIiBkPSJNMzgsMzlIMTBjLTEuMSwwLTItMC45LTItMlYxN2gzMnYyMEM0MCwzOC4xLDM5LjEsMzksMzgsMzl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGQTcyNiIgZD0iTTQyLDE3SDZ2LTZjMC0xLjEsMC45LTIsMi0yaDMyYzEuMSwwLDIsMC45LDIsMlYxN3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjOUU1RTAwIiBkPSJNMjIgMTdIMjZWMzlIMjJ6TTMyIDNMMjggMyAyMiA5IDI2IDl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0M3NzYwMCIgZD0iTTIwIDNMMTYgMyAyMiA5IDIyIDE3IDI2IDE3IDI2IDl6Ij48L3BhdGg+PC9zdmc+"
                    style={{ paddingLeft: "0.6em" }}
                  />
                  <p className="f12">Package</p>
                </span>
              </span>
            </div>

            <div className="card-footer-item">
              <a className="button is-medium">
                <span className="icon">
                  <img src="https://img.icons8.com/bubbles/50/000000/visible.png" />
                </span>
                <span>View Detail</span>
              </a>
            </div>
          </footer>
        </div>

        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img
                  src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_480,w_480/v1457670910/OTHER_CATEGORY/SALOON/4.jpg"
                  alt="Image"
                />
              </figure>
            </div>

            <div className="ribbon ribbon-top-left">
              <span>Featured</span>
            </div>
            <div className="media-content">
              <div className="content">
                <div className="columns mb0">
                  <div className="column">
                    <p className="title google">Bounce Koramangala</p>
                    <p className="subtitle is-6 mb8 plh1">Koramangala</p>
                  </div>

                  <div className="column">
                    <span className="tag radius20 fw7">
                      <img src="https://img.icons8.com/color/17/000000/hearts.png" />
                      <span className="ellipsis pl0_5">71%</span>
                    </span>

                    <span className="rating">
                      <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                      <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                      <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
                      <img src="https://img.icons8.com/color/20/000000/star.png" />
                      <img src="https://img.icons8.com/color/20/000000/star.png" />
                    </span>
                  </div>
                </div>
                <div className="columns mb0 ">
                  <div className="column pt0">
                    <span className="f12 fw4 m0 pb8 iblock">
                      <span className="mr24 pfc4">Starting from:</span>
                      <span className="tag is-danger radius20 fw7">
                        12% off
                      </span>
                    </span>

                    <h5 className="sfc3 m0 f24 fw9 flh28 priceVal at_newprice">
                      ₹ 699.00/-
                      <span className="f12">onwards</span>
                      <span className="f12 pfc3 tdl ml8">₹ 500.00/-</span>
                    </h5>
                  </div>
                  <div className="column pl8 pt0">
                    <div className="package-tag-box">
                      <ul className="package-tags at_package_tags">
                        <li className="ellipsis">Summer</li>
                        <li className="ellipsis">Hair</li>
                        <li className="ellipsis">Skin</li>
                        <li className="ellipsis">Beauty</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="css-clzwav f12 pfc4 m0 fw4">
                  <p>
                    Arena is the fully loaded nucleus of our being. There’s
                    something for everyone — from zorbing to go-karting as well
                    as sports like tennis, badminton, football, swimming , Go
                    Karting, Segway, Bowling, Archery, Shooting, Wall climbing
                    etc.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <footer className="card-footer">
            <div className="card-footer-item">
              <span className="span-flex">
                <span>
                  <img src="https://img.icons8.com/bubbles/50/000000/birthday-boy.png" />
                </span>

                <span>
                  <img src="https://img.icons8.com/bubbles/50/000000/birthday-girl.png" />
                </span>
              </span>
            </div>

            <div className="card-footer-item">
              <a className="button is-medium">
                <span className="icon">
                  <img src="https://img.icons8.com/bubbles/50/000000/visible.png" />
                </span>
                <span>View Detail</span>
              </a>
            </div>
          </footer>
        </div>

        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image">
                <img
                  src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_480,w_480/v1457670910/ballyhoo/EVENTS/LivePerformance/5.jpg"
                  alt="Image"
                />
              </figure>
            </div>

            <div className="ribbon ribbon-top-left">
              <span>Featured</span>
            </div>
            <div className="media-content">
              <div className="content">
                <div className="columns mb0">
                  <div className="column">
                    <p className="title google">The Comedy Club</p>
                    <p
                      className="subtitle is-6 mb-4 plh1"
                      style={{ color: "black" }}
                    >
                      The Humming Tree
                    </p>
                    <p className="subtitle is-6 mb8 plh1">Koramangala</p>
                  </div>

                  <div className="column">
                    <span className="tag radius20 fw7">
                      <img src="https://img.icons8.com/color/17/000000/hearts.png" />
                      <span className="ellipsis pl0_5">71%</span>
                    </span>

                    <span className="rating">
                      <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                      <img src="https://img.icons8.com/color/20/000000/filled-star.png" />
                      <img src="https://img.icons8.com/color/20/000000/star-half-empty.png" />
                      <img src="https://img.icons8.com/color/20/000000/star.png" />
                      <img src="https://img.icons8.com/color/20/000000/star.png" />
                    </span>
                  </div>
                </div>
                <div className="columns mb0 ">
                  <div className="column pt0">
                    <span className="f12 fw4 m0 pb8 iblock">
                      <span className="mr24 pfc4">Starting from:</span>
                      <span className="tag is-danger radius20 fw7">
                        12% off
                      </span>
                    </span>

                    <h5 className="sfc3 m0 f24 fw9 flh28 priceVal at_newprice">
                      ₹ 699.00/-
                      <span className="f12">onwards</span>
                      <span className="f12 pfc3 tdl ml8">₹ 500.00/-</span>
                    </h5>
                  </div>
                  <div className="column pl8 pt0">
                    <div className="package-tag-box">
                      <ul className="package-tags at_package_tags">
                        <li className="ellipsis">Comedy</li>
                        <li className="ellipsis">StandupComedy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="css-clzwav f12 pfc4 m0 fw4">
                  <p>
                    Arena is the fully loaded nucleus of our being. There’s
                    something for everyone — from zorbing to go-karting as well
                    as sports like tennis, badminton, football, swimming , Go
                    Karting, Segway, Bowling, Archery, Shooting, Wall climbing
                    etc.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <footer className="card-footer">
            <div className="card-footer-item">
              <span className="span-flex ">
                <span>
                  <img src="https://img.icons8.com/cute-clipart/50/000000/date-to.png" />
                  <p>
                    <code>Aug Sat 03</code>
                  </p>
                </span>
              </span>
            </div>

            <div className="card-footer-item">
              <a className="button is-medium">
                <span className="icon">
                  <img src="https://img.icons8.com/bubbles/50/000000/visible.png" />
                </span>
                <span>View Detail</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainList;

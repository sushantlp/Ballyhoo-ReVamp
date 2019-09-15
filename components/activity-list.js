const ActivityList = props => {
  const list = props.listData.listData;

  //src="https://res.cloudinary.com/dp67gawk6/image/upload/c_scale,h_480,w_480/v1457670910/OTHER_CATEGORY/ACTIVITY/5.jpg"
  return (
    <React.Fragment>
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
                    <span className="tag is-danger radius20 fw7">12% off</span>
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
                  something for everyone — from zorbing to go-karting as well as
                  sports like tennis, badminton, football, swimming , Go
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
    </React.Fragment>
  );
};

export default ActivityList;

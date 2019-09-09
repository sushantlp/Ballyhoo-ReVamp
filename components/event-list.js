const EventList = props => {
  return (
    <React.Fragment>
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
                    <span className="tag is-danger radius20 fw7">12% off</span>
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
            <p className="title google">The Humming Tree</p>
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

export default EventList;

import "./main-list.css";
const MainList = props => {
  return (
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
          <div className="media-content">
            <div className="content">
              <p className="title is-5">Kashmir Family Tour Package</p>
              <p className="subtitle is-6 mb8 plh1">4 Days & 3 Nights</p>

              <div className="columns">
                <div className="column">
                  <span>
                    <span className="mr24 pfc4">Starting from:</span>
                    <span className="tag is-primary radius20 fw700">
                      12% off
                    </span>
                  </span>
                </div>
                <div className="column pl8">
                  <div className="package-tag-box">
                    <ul class="package-tags at_package_tags">
                      <li class="ellipsis">Shikara Ride</li>
                      <li class="ellipsis">Nature</li>
                      <li class="ellipsis">Martand Temple</li>
                      <li class="ellipsis">Hill station</li>
                      <li class="ellipsis">Amusement Park</li>
                      <li class="ellipsis">Sightseeing</li>
                      <li class="ellipsis">Gondola Ride</li>
                      <li class="ellipsis">Family</li>
                      <li class="ellipsis">Budget</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <footer className="card-footer">
          <div className="card-footer-item">
            <a className="button is-medium">
              <span className="icon">
                <img src="https://img.icons8.com/office/23/000000/hospital.png" />
              </span>
              <span>7898130226</span>
            </a>
          </div>

          <div className="card-footer-item">
            <a className="button is-medium">
              <span className="icon">
                <img src="https://img.icons8.com/plasticine/30/000000/visible.png" />
              </span>
              <span>View Detail</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainList;

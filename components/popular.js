import Spinner from "./spinner";
import "./popular.css";
// import { url } from "inspector";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (
      this.props.homeScreen.status === "START" ||
      this.props.homeScreen.status === "FAIL"
    )
      return <Spinner />;

    if (this.props.homeScreen.homeScreen.popular_escapes.length === 0)
      return null;

    const popular = this.props.homeScreen.homeScreen.popular_escapes;

    return (
      <div className="container">
        {/* <div className="discover-container"> */}
        <div className="popular-header-container">
          <h2 className="popular-header">Popular</h2>
          <div className="underscore" />
        </div>
        {/* </div> */}

        <div className="popular_section">
          <div className="tilecontainer">
            <div className="columns is-mobile">
              <div
                className="column is-2 t1"
                style={{
                  backgroundImage: `url(${popular[0].img})`
                }}
              >
                <p className="tiletext">{popular[0].title}</p>
              </div>

              <div
                className="column is-3 t2"
                style={{
                  backgroundImage: `url(${popular[1].img})`
                }}
              >
                <p className="tiletext">{popular[1].title}</p>
              </div>

              <div
                className="column is-3 t3"
                style={{
                  backgroundImage: `url(${popular[2].img})`
                }}
              >
                <p className="tiletext">{popular[2].title}</p>
              </div>

              <div
                className="column is-4 t4"
                style={{
                  backgroundImage: `url(${popular[3].img})`
                }}
              >
                <p className="tiletext">{popular[3].title}</p>
              </div>
            </div>

            <div className="columns  is-mobile">
              <div
                className="column is-3 t5"
                style={{
                  backgroundImage: `url(${popular[4].img})`
                }}
              >
                <p className="tiletext">{popular[4].title}</p>
              </div>

              <div
                className="column is-3 t6"
                style={{
                  backgroundImage: `url(${popular[5].img})`
                }}
              >
                <p className="tiletext">{popular[5].title}</p>
              </div>

              <div
                className="column is-4 t7"
                style={{
                  backgroundImage: `url(${popular[6].img})`
                }}
              >
                <p className="tiletext">{popular[6].title}</p>
              </div>
              <div
                className="column is-2 t8"
                style={{
                  backgroundImage: `url(${popular[7].img})`
                }}
              >
                <p className="tiletext">{popular[7].title}</p>
              </div>
            </div>
            <br />
            {/* <br /> */}
          </div>
        </div>
      </div>
    );
  }
}

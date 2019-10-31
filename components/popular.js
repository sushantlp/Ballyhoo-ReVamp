import Router from "next/router";
import "./popular.css";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      hover6: false,
      hover7: false,
      hover8: false
    };
  }

  toggleHoverEnter = index => {
    if (index === 1) this.setState({ hover1: true });
    else if (index === 2) this.setState({ hover2: true });
    else if (index === 3) this.setState({ hover3: true });
    else if (index === 4) this.setState({ hover4: true });
    else if (index === 5) this.setState({ hover5: true });
    else if (index === 6) this.setState({ hover6: true });
    else if (index === 7) this.setState({ hover7: true });
    else if (index === 8) this.setState({ hover8: true });
  };

  toggleHoverLeave = index => {
    if (index === 1) this.setState({ hover1: false });
    else if (index === 2) this.setState({ hover2: false });
    else if (index === 3) this.setState({ hover3: false });
    else if (index === 4) this.setState({ hover4: false });
    else if (index === 5) this.setState({ hover5: false });
    else if (index === 6) this.setState({ hover6: false });
    else if (index === 7) this.setState({ hover7: false });
    else if (index === 8) this.setState({ hover8: false });
  };

  onClickPopular = (popular, props) => {
    props.changeLoadingState(true);
    const { city, city_id } = Router.router.query;

    let title = popular.title.replace(/[^a-zA-Z ]/g, "");
    title = title.replace(/ /g, "-").toLowerCase();
    title = title.replace(/-+/gi, "-");

    const secret = `${city_id}b${popular.api_type}b${popular.key}b${
      popular.response_type
    }b${1}b${0}`;
    Router.push(
      {
        pathname: "/list",
        query: {
          city: city,
          title: title,
          secret: secret
        }
      },
      `/${city}/${title}/${secret}`
    );
  };

  render() {
    if (
      this.props.homeScreen.status === "START" ||
      this.props.homeScreen.status === "FAIL"
    )
      return <div />;

    if (this.props.homeScreen.homeScreen.popular_escapes.length === 0)
      return null;

    const popular = this.props.homeScreen.homeScreen.popular_escapes;

    return (
      <div className="container" style={{ marginTop: "3em" }}>
        <div className="popular-header-container">
          <h2 className="popular-header">Plan Your Escape</h2>
          <div className="underscore" />
        </div>

        <div className="popular_section">
          <div className="tilecontainer">
            <div className="columns is-mobile">
              <div
                className="column is-2 t1"
                style={{
                  backgroundImage: `url(${popular[0].img})`
                }}
                onMouseEnter={() => this.toggleHoverEnter(1)}
                onMouseLeave={() => this.toggleHoverLeave(1)}
                onClick={() => this.onClickPopular(popular[0], this.props)}
              ></div>

              {this.state.hover1 ? (
                <p
                  className="tiletext"
                  style={{ left: "1.3%" }}
                  onMouseEnter={() => this.toggleHoverEnter(1)}
                  onClick={() => this.onClickPopular(popular[0], this.props)}
                >
                  {popular[0].title}
                </p>
              ) : null}

              <div
                className="column is-3 t2"
                style={{
                  backgroundImage: `url(${popular[1].img})`
                }}
                onMouseEnter={() => this.toggleHoverEnter(2)}
                onMouseLeave={() => this.toggleHoverLeave(2)}
                onClick={() => this.onClickPopular(popular[1], this.props)}
              ></div>

              {this.state.hover2 ? (
                <p
                  className="tiletext"
                  style={{ left: "24%" }}
                  onMouseEnter={() => this.toggleHoverEnter(2)}
                  onClick={() => this.onClickPopular(popular[1], this.props)}
                >
                  {popular[1].title}
                </p>
              ) : null}

              <div
                className="column is-3 t3"
                style={{
                  backgroundImage: `url(${popular[2].img})`
                }}
                onMouseEnter={() => this.toggleHoverEnter(3)}
                onMouseLeave={() => this.toggleHoverLeave(3)}
                onClick={() => this.onClickPopular(popular[2], this.props)}
              ></div>

              {this.state.hover3 ? (
                <p
                  className="tiletext"
                  style={{ left: "48%" }}
                  onMouseEnter={() => this.toggleHoverEnter(3)}
                  onClick={() => this.onClickPopular(popular[2], this.props)}
                >
                  {popular[2].title}
                </p>
              ) : null}

              <div
                className="column is-4 t4"
                style={{
                  backgroundImage: `url(${popular[3].img})`
                }}
                onMouseEnter={() => this.toggleHoverEnter(4)}
                onMouseLeave={() => this.toggleHoverLeave(4)}
                onClick={() => this.onClickPopular(popular[3], this.props)}
              ></div>

              {this.state.hover4 ? (
                <p
                  className="tiletext"
                  style={{ left: "77%" }}
                  onMouseEnter={() => this.toggleHoverEnter(4)}
                  onClick={() => this.onClickPopular(popular[3], this.props)}
                >
                  {popular[3].title}
                </p>
              ) : null}
            </div>

            <div className="columns  is-mobile">
              <div
                className="column is-3 t5"
                style={{
                  backgroundImage: `url(${popular[4].img})`
                }}
                onMouseEnter={() => this.toggleHoverEnter(5)}
                onMouseLeave={() => this.toggleHoverLeave(5)}
                onClick={() => this.onClickPopular(popular[4], this.props)}
              ></div>

              {this.state.hover5 ? (
                <p
                  className="tiletext"
                  style={{ left: "9%" }}
                  onMouseEnter={() => this.toggleHoverEnter(5)}
                  onClick={() => this.onClickPopular(popular[4], this.props)}
                >
                  {popular[4].title}
                </p>
              ) : null}

              <div
                className="column is-3 t6"
                style={{
                  backgroundImage: `url(${popular[5].img})`
                }}
                onMouseEnter={() => this.toggleHoverEnter(6)}
                onMouseLeave={() => this.toggleHoverLeave(6)}
                onClick={() => this.onClickPopular(popular[5], this.props)}
              ></div>

              {this.state.hover6 ? (
                <p
                  className="tiletext"
                  style={{ left: "33%" }}
                  onMouseEnter={() => this.toggleHoverEnter(6)}
                  onClick={() => this.onClickPopular(popular[5], this.props)}
                >
                  {popular[5].title}
                </p>
              ) : null}

              <div
                className="column is-4 t7"
                style={{
                  backgroundImage: `url(${popular[7].img})`
                }}
                onMouseEnter={() => this.toggleHoverEnter(8)}
                onMouseLeave={() => this.toggleHoverLeave(8)}
                onClick={() => this.onClickPopular(popular[7], this.props)}
              ></div>

              {this.state.hover8 ? (
                <p
                  className="tiletext"
                  style={{ left: "57%" }}
                  onMouseEnter={() => this.toggleHoverEnter(8)}
                  onClick={() => this.onClickPopular(popular[7], this.props)}
                >
                  {popular[7].title}
                </p>
              ) : null}

              <div
                className="column is-2 t8"
                style={{
                  backgroundImage: `url(${popular[6].img})`
                }}
                onMouseEnter={() => this.toggleHoverEnter(7)}
                onMouseLeave={() => this.toggleHoverLeave(7)}
                onClick={() => this.onClickPopular(popular[6], this.props)}
              ></div>

              {this.state.hover7 ? (
                <p
                  className="tiletext"
                  style={{ left: "88%" }}
                  onMouseEnter={() => this.toggleHoverEnter(7)}
                  onClick={() => this.onClickPopular(popular[6], this.props)}
                >
                  {popular[6].title}
                </p>
              ) : null}
              {/* <p
                className={this.state.hover8 ? "tiletext-hover" : "tiletext"}
                style={{ left: "88%" }}
              >
                {popular[6].title}
              </p> */}
            </div>
            <br />
            {/* <br /> */}
          </div>
        </div>
      </div>
    );
  }
}

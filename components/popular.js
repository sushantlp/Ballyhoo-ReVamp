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

  toggleHover = index => {
    if (index === 1) this.setState({ hover1: !this.state.hover1 });
    else if (index === 2) this.setState({ hover2: !this.state.hover2 });
    else if (index === 3) this.setState({ hover3: !this.state.hover3 });
    else if (index === 4) this.setState({ hover4: !this.state.hover4 });
    else if (index === 5) this.setState({ hover5: !this.state.hover5 });
    else if (index === 6) this.setState({ hover6: !this.state.hover6 });
    else if (index === 7) this.setState({ hover7: !this.state.hover7 });
    else if (index === 8) this.setState({ hover8: !this.state.hover8 });
  };

  onClickPopular = popular => {
    const { city, city_id } = Router.router.query;
    const title = popular.title.replace(/ /g, "-").toLowerCase();
    const secret = `${city_id}-${popular.api_type}-${popular.key}-${
      popular.response_type
    }-${1}-${0}`;
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
      <div className="container">
        <div className="popular-header-container">
          <h2 className="popular-header">Plan your Escape</h2>
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
                onMouseEnter={() => this.toggleHover(1)}
                onMouseLeave={() => this.toggleHover(1)}
                onClick={() => this.onClickPopular(popular[0])}
              >
                <p
                  className={this.state.hover1 ? "tiletext-hover" : "tiletext"}
                >
                  {popular[0].title}
                </p>
              </div>

              <div
                className="column is-3 t2"
                style={{
                  backgroundImage: `url(${popular[1].img})`
                }}
                onMouseEnter={() => this.toggleHover(2)}
                onMouseLeave={() => this.toggleHover(2)}
                onClick={() => this.onClickPopular(popular[1])}
              >
                <p
                  className={this.state.hover2 ? "tiletext-hover" : "tiletext"}
                  style={{ left: "10vh" }}
                >
                  {popular[1].title}
                </p>
              </div>

              <div
                className="column is-3 t3"
                style={{
                  backgroundImage: `url(${popular[2].img})`
                }}
                onMouseEnter={() => this.toggleHover(3)}
                onMouseLeave={() => this.toggleHover(3)}
                onClick={() => this.onClickPopular(popular[2])}
              >
                <p
                  className={this.state.hover3 ? "tiletext-hover" : "tiletext"}
                  style={{ left: "10vh" }}
                >
                  {popular[2].title}
                </p>
              </div>

              <div
                className="column is-4 t4"
                style={{
                  backgroundImage: `url(${popular[3].img})`
                }}
                onMouseEnter={() => this.toggleHover(4)}
                onMouseLeave={() => this.toggleHover(4)}
                onClick={() => this.onClickPopular(popular[3])}
              >
                <p
                  className={this.state.hover4 ? "tiletext-hover" : "tiletext"}
                  style={{ left: "20vh" }}
                >
                  {popular[3].title}
                </p>
              </div>
            </div>

            <div className="columns  is-mobile">
              <div
                className="column is-3 t5"
                style={{
                  backgroundImage: `url(${popular[4].img})`
                }}
                onMouseEnter={() => this.toggleHover(5)}
                onMouseLeave={() => this.toggleHover(5)}
                onClick={() => this.onClickPopular(popular[4])}
              >
                <p
                  className={this.state.hover5 ? "tiletext-hover" : "tiletext"}
                  style={{ left: "10vh" }}
                >
                  {popular[4].title}
                </p>
              </div>

              <div
                className="column is-3 t6"
                style={{
                  backgroundImage: `url(${popular[5].img})`
                }}
                onMouseEnter={() => this.toggleHover(6)}
                onMouseLeave={() => this.toggleHover(6)}
                onClick={() => this.onClickPopular(popular[5])}
              >
                <p
                  className={this.state.hover6 ? "tiletext-hover" : "tiletext"}
                  style={{ left: "10vh" }}
                >
                  {popular[5].title}
                </p>
              </div>

              <div
                className="column is-4 t7"
                style={{
                  backgroundImage: `url(${popular[6].img})`
                }}
                onMouseEnter={() => this.toggleHover(7)}
                onMouseLeave={() => this.toggleHover(7)}
                onClick={() => this.onClickPopular(popular[6])}
              >
                <p
                  className={this.state.hover7 ? "tiletext-hover" : "tiletext"}
                  style={{ left: "20vh" }}
                >
                  {popular[6].title}
                </p>
              </div>
              <div
                className="column is-2 t8"
                style={{
                  backgroundImage: `url(${popular[7].img})`
                }}
                onMouseEnter={() => this.toggleHover(8)}
                onMouseLeave={() => this.toggleHover(8)}
                onClick={() => this.onClickPopular(popular[7])}
              >
                <p
                  className={this.state.hover8 ? "tiletext-hover" : "tiletext"}
                >
                  {popular[7].title}
                </p>
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

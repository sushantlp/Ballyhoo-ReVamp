import Router from "next/router";

import Spinner from "./spinner";
import Search from "./search";
import MainList from "./main-list";
import Filter from "./filter";
// import Similar from "./similar";
import TrendingList from "./trending-list";

class ParentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response_type: 0,
      page: 1,
      cityId: 1
    };
  }

  componentDidMount() {
    const { secret } = Router.router.query;
    let slice = [];

    // Index Zero=cityId, One=apiType, Two=Key, Three=responseType, Four=page
    if (this.props.routeParam.length === 0) slice = secret.split("-");
    else slice = this.props.routeParam.secret.split("-");

    if (slice.length < 5) Router.push("/");

    this.setState({
      response_type: slice[3],
      page: slice[4],
      cityId: slice[0]
    });
  }

  render() {
    if (
      this.props.cityLocality.status === "START" ||
      this.props.cityLocality.status === "FAIL"
    )
      return <Spinner />;

    if (
      this.props.listData.status === "START" ||
      this.props.listData.status === "FAIL"
    )
      return <Spinner />;

    if (this.state.response_type === 0) return <Spinner />;

    return (
      <React.Fragment>
        <Search
          cityLocality={this.props.cityLocality}
          parentListState={this.state}
        />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <Filter scrolling={this.props.scrolling} />

                {/* <Similar /> */}
              </div>
              <div className="column is-8 is-offset-1">
                <MainList
                  listData={this.props.listData}
                  parentListState={this.state}
                />
              </div>
            </div>
          </div>
        </section>

        <TrendingList />
      </React.Fragment>
    );
  }
}

export default ParentList;

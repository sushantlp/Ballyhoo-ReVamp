import Spinner from "./spinner";
import Search from "./search";
import MainList from "./main-list";
import Filter from "./filter";
import Space from "./loading-space";
// import Similar from "./similar";
import TrendingList from "./trending-list";

class ParentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      isLoading: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.listData !== nextProps.listData) {
      this.updateisLoadingState(false);
    }
  }

  updateisLoadingState = bool => {
    this.setState({
      isLoading: bool
    });
  };

  onLoadMoreList = nextPage => {
    this.updateisLoadingState(true);
    this.props.onLoadMoreList(
      this.props.urlParam.city_id,
      this.props.urlParam.api_type,
      this.props.urlParam.key,
      nextPage
    );
  };

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

    if (this.props.urlParam.response_type === 0)
      return (
        <React.Fragment>
          {" "}
          <Spinner />
          {/* <Space /> */}
        </React.Fragment>
      );

    return (
      <React.Fragment>
        <Search
          cityLocality={this.props.cityLocality}
          slidderImage={this.props.slidderImage}
          parentListState={this.state}
          searchData={this.props.searchData}
          urlParam={this.props.urlParam}
          onSearchKeyChange={this.props.onSearchKeyChange}
        />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <Filter
                  scrolling={this.props.scrolling}
                  urlParam={this.props.urlParam}
                />

                {/* <Similar /> */}
              </div>
              <div className="column is-8 is-offset-1">
                <MainList
                  listData={this.props.listData}
                  parentListState={this.state}
                  onLoadMoreList={this.onLoadMoreList}
                  categoryApiCall={this.props.categoryApiCall}
                  foodCategoryApiCall={this.props.foodCategoryApiCall}
                  urlParam={this.props.urlParam}
                />
              </div>
            </div>
          </div>
        </section>

        <TrendingList
          recommendation={this.props.recommendation}
          routeParam={this.props.routeParam}
        />
      </React.Fragment>
    );
  }
}

export default ParentList;

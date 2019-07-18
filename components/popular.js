import "./popular.css";

export default class Popular extends React.Component {
  render() {
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
              <div className="column is-2 t1">
                <p className="tiletext">City Tours</p>
              </div>
              <div className="column is-3 t2">
                <p className="tiletext">Amsterdam Attractions</p>
              </div>
              <div className="column is-3 t3">
                <p className="tiletext">Attractions</p>
              </div>
              <div className="column is-4 t4">
                <p className="tiletext">Madrid Attractions</p>
              </div>
            </div>
            <div className="columns  is-mobile">
              <div className="column is-3 t5">
                <p className="tiletext">Melbourne Opera</p>
              </div>
              <div className="column is-3 t6">
                <p className="tiletext">Broadway Show Tickets</p>
              </div>
              <div className="column is-4 t7">
                <p className="tiletext">Weekend in Prague</p>
              </div>
              <div className="column is-2 t8">
                <p className="tiletext">Pompeii</p>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

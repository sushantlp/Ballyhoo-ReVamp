const Menu = props => {
  const count = props.menuImage.length;
  return (
    <div className="box">
      <div className="columns">
        <div className="column">
          <h4 className="ffqs cuisine-title">Menu</h4>
          <div className="menu-underscore" />
          <div className="menu-container">
            {props.menuImage.map(function(value, key) {
              if (key < 6)
                return (
                  <figure
                    className="image"
                    onClick={() =>
                      props.intializeImageArray(true, props.menuImage)
                    }
                    key={key}
                  >
                    <img src={value} className="menu-image" />
                  </figure>
                );
            })}

            <span
              className="tag is-medium is-danger fw7"
              onClick={() => props.intializeImageArray(true, props.menuImage)}
            >
              {count} +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

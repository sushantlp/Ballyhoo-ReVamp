const Menu = props => {
  return (
    <div className="box">
      <div className="columns">
        <div className="column">
          <h4 className="ffqs cuisine-title">Menu</h4>
          <div className="menu-underscore" />
          <div className="menu-container">
            <figure
              className="image"
              onClick={() => props.intializeImageArray(true)}
            >
              <img
                src="https://b.zmtcdn.com/data/menus/410/18387410/c28fc94d82679806af3f1cf12b84b867.jpg?output-format=webp"
                className="menu-image"
              />
            </figure>

            <figure
              className="image"
              onClick={() => props.intializeImageArray(true)}
            >
              <img
                src="https://b.zmtcdn.com/data/menus/410/18387410/732cc23f9107fcfea18555372c176f1c.jpg"
                className="menu-image"
              />
            </figure>

            <figure
              className="image"
              onClick={() => props.intializeImageArray(true)}
            >
              <img
                src="https://b.zmtcdn.com/data/menus/410/18387410/4114c960cea71d7981bf0dc3358dbf9c.jpg"
                className="menu-image"
              />
            </figure>

            <figure
              className="image"
              onClick={() => props.intializeImageArray(true)}
            >
              <img
                src="https://b.zmtcdn.com/data/menus/410/18387410/5315c87be1738af261da3501271dfa15.jpg"
                className="menu-image"
              />
            </figure>

            <figure
              className="image"
              onClick={() => props.intializeImageArray(true)}
            >
              <img
                src="https://b.zmtcdn.com/data/menus/410/18387410/81c918ed61a86ecc2d16b66d18576909.jpg"
                className="menu-image"
              />
            </figure>

            <figure
              className="image"
              onClick={() => props.intializeImageArray(true)}
            >
              <img
                src="https://b.zmtcdn.com/data/menus/410/18387410/81c918ed61a86ecc2d16b66d18576909.jpg"
                className="menu-image"
              />
            </figure>

            <span
              className="tag is-medium is-danger fw7"
              onClick={() => props.intializeImageArray(true)}
            >
              10 +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

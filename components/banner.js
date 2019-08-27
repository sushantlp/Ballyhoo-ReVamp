const Banner = props => {
  return (
    <section className="hero is-small has-bg-img">
      <div className="hero-body">
        <div className="container">
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "90%"
            }}
            src={props.image}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

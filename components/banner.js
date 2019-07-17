const Banner = props => {
  return (
    <section class="hero is-small has-bg-img">
      <div class="hero-body">
        <div class="container">
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

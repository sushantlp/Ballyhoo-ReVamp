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
            src="https://img.traveltriangle.com/public-product/mkt/honeymoon+small.jpg?tr=w-1000,h-120px"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

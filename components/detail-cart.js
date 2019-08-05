import "./detail-cart.css";
const DetailCart = props => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div class="activity-column-minor">
            <div class="price-block has-price">
              <div class="activity-features-price top-border-highlight">
                <p class="price">
                  <span class="price-from">From</span>
                  <strong class="price-actual">₹&nbsp;2,362</strong>
                  <span class="price-explanation">per person</span>
                </p>
                <div class="btn-wrap">
                  <a
                    class="btn btn-cta btn-small"
                    href="#booking-assistant"
                    id="btn-booking-header"
                    data-cta-clicked="Continue booking"
                  >
                    Book now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DetailCart;

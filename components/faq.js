import { Header, Segment } from "semantic-ui-react";
import "./faq.css";

const FaqComponent = () => (
  <div className="section">
    <div className="faq-container">
      <div className="container">
        <div>
          <h4 className="faq-header">FAQ'S</h4>
          <div className="faq-underscore" />
        </div>

        <h3 className="ffqs fw2">
          Ballyhoo Today is a hyper-local that helps you find the best deals on
          restaurants, pubs, breweries, night life and much more around you,
          just when you want. Find a deal that catches your fancy, pay for it
          through the app, and go to the merchant location to redeem it.
        </h3>

        <h3 className="ffqs">FIND DEALS WHERE YOU ARE</h3>
        <h4 className="ffqs fw2 mt1">
          Ballyhoo uses your location to show the best deals near you. We can
          even alert you when a great discount comes up in your neighbourhood,
          if you want us to do so.
        </h4>

        <h3 className="ffqs"> SEAMLESS PAYMENT</h3>
        <h4 className="ffqs fw2 mt1">
          You can buy most deals by paying the full amount through the app, and
          redeem at the merchant for a cashless experience.
        </h4>

        <h3 className="ffqs">CONFIRMATION CODE</h3>
        <h4 className="ffqs fw2 mt1">
          This is just a friendly service for you to get a confirmed code for
          the deal. The payments in full can be done at merchant.
        </h4>

        <h3 className="ffqs"> NO PLANNING REQUIRED</h3>

        <h4 className="ffqs fw2 mt1">
          Ballyhoo is meant for immediate consumption. Just open the app, buy a
          deal, and you can redeem it immediately.
        </h4>

        <h3 className="ffqs">EASY REDEMPTION</h3>
        <h4 className="ffqs fw2 mt1">
          You can redeem deals with just a tap on a button - no printouts
          required!
        </h4>

        <h3 className="ffqs">THE BEST DEALS</h3>
        <h4 className="ffqs fw2 mt1">
          We work incredibly hard to get you the best discounts on the services
          you use the most. But please do not believe us- Try and decide
          yourself
        </h4>

        <h3 className="ffqs">REALTIME..?</h3>

        <h4 className="ffqs fw2 mt1">
          We encourage businesses to offer a deal in real-time i.e. rest assured
          the deals get updated atleast daily and sometimes hourly!
        </h4>

        <h3 className="ffqs">
          How will I get a confirmation once I buy a deal?
        </h3>

        <h4 className="ffqs fw2 mt1">
          You will receive a notification alert with a numeric code which you
          would use while redeeming the deal
        </h4>

        <h3 className="ffqs">
          How do I redeem a deal that I’ve bought through the Ballyhoo app?
        </h3>
        <h4 className="ffqs fw2 mt1">
          Once your payment is confirmed just present a confirmation code to
          merchant before billing or payment
        </h4>

        <h3 className="ffqs"> Do I need to take a print out of it?</h3>
        <h4 className="ffqs fw2 mt1">Absolutely not.</h4>

        <h3 className="ffqs">
          Are the deals time bound or I can go avail them anytime?
        </h3>
        <h4 className="ffqs fw2 mt1">
          Yes, almost every deal has an expiry date and time within which you
          would need to redeem.
        </h4>

        <h3 className="ffqs">
          Is the reservation or the booking taken care by Ballyhoo?
        </h3>
        <h4 className="ffqs fw2 mt1">
          No. Please call the respective merchant and take a prior appointment
          to avoid any hassle.
        </h4>

        <h3 className="ffqs">
          What if the merchant refuses to honour my deal?
        </h3>
        <h4 className="ffqs fw2 mt1">
          Please write to us at contact@ballyhoo.today
        </h4>

        <h3 className="ffqs">
          Do I get an alert before my purchase is about to expire?
        </h3>
        <h4 className="ffqs fw2 mt1">
          Yes we do our best to remind you but we strongly advice to redeem the
          deals asap as the ballyhoo deals are all real-time, hence the expiry
          time would be very short.
        </h4>

        <Segment>
          <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
            Can I cancel the deal after making a booking at the hotel or
            wellness centre?
          </Header>
          <p>
            Almost always NO. We work hard to get you an awesome deal and due to
            its nature of real-time we do not offer any cancellations or refunds
          </p>
        </Segment>
        <Segment>
          <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
            {" "}
            How can I cancel the deal?
          </Header>
          <p>Not possible.</p>
        </Segment>
        <Segment>
          <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
            {" "}
            Refund
          </Header>
          <p>
            In a rare scenario where merchant is not abel to fulfill an agreed
            obligation we will consider for refund? 48 hours.
          </p>
        </Segment>
        <Segment>
          <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
            What do I do, if I don’t get my refund on time?
          </Header>
          <p>
            Please write back to us at
            <a href="mailto:contact@ballyhoo.today" target="_top">
              &nbsp; contact@ballyhoo.today &nbsp;
            </a>
            Contact Us
          </p>
        </Segment>
        <Segment>
          <Header as="h4" style={{ color: "rgba(0,0,0,.68)" }}>
            I have a problem, where and whom should I contact for it?
          </Header>
          <p>
            Please reach out to us at
            <a href="mailto:contact@ballyhoo.today" target="_top">
              &nbsp; contact@ballyhoo.today .
            </a>
          </p>
        </Segment>
      </div>
    </div>
  </div>
);

export default FaqComponent;

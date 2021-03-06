import "./privacy.css";
const PrivacyComponent = () => (
  <div className="section">
    <div className="container">
      <div className="privacy-container">
        <div>
          <h4 className="privacy-header">PRIVACY POLICY.</h4>
          <div className="privacy-underscore" />
        </div>

        <h3 className="ffqs mt1">
          {" "}
          1. What Personal Information Does Ballyhoo Collect ?
        </h3>
        <h4 className="ffqs fw2 mt1 lh1_7">
          Your phone number
          <br />
          Your location information from time to time
          <br />
          Any personal information that you choose to provide such as name,
          email, gender.
          <br />
          Information about your device such as hardware information, operating
          system version, carrier info if available.
        </h4>

        <h3 className="ffqs mt1">2. Why is this information collected?</h3>
        <h4 className="ffqs fw2 mt1 lh1_7">
          Your Services account will be associated with your phone number and
          this account will be used for all our Services that you use.
          Information you provide to one of our Services may be used with other
          Services from us that you or your friends use. For example, location
          information we receive in connection with your use of one of our apps
          may be used to customize the content you and your friends see in
          another of our apps. We may also draw upon this Personal Information
          in order to adapt the Services of our community to your needs, to
          research the effectiveness of our network and Services, and to develop
          new tools for the community.The contact information you provide may be
          used by Ballyhoo to send you timely and relevant promotions. By
          accepting this privacy policy, you give liveintech the right to
          contact you by SMS or e-mail for such promotions.
        </h4>

        <h4 className="ffqs fw2 mt1 lh1_7">
          Ballyhoo provides you, the user, with deals in vairous categories
          which are highly customized to your location, indicated tastes and
          probable use. Since the deals are real-time short lived and sensitive,
          we need to collect the above information on a periodic basis. Your
          contact information is collected in order to enable you to share the
          deals that you discover on our platform with your friends at
          real-time.
        </h4>

        <h3 className="ffqs mt1">3. How is My Information Shared?</h3>
        <h4 className="ffqs fw2 mt1 lh1_7">
          Followers and people/brands you follow on Ballyhoo: Followers can see
          your publicly available information and you can see the publicly
          available information of users you follow, as described below (under{" "}
          {`"Publicly Available
					Information and Apps"`}
          ).
        </h4>

        <h4 className="ffqs fw2 mt1 lh1_7">
          Individuals reading this information may use it or disclose it to
          other individuals or entities without our control and without your
          knowledge. We therefore urge you to think carefully about including
          any specific information you may deem private in comments, plans or
          tips or other content (location or otherwise) that you create in the
          Services.
        </h4>

        <h4 className="ffqs fw2 mt1 lh1_7">
          Businesses, Locations, Events and Brands: One of the key purposes of
          the Services is to help users learn about businesses, locations,
          events and brands (for example, a restaurant or a movie theater or a
          hotel) that are relevant to them, and for these entities to provide
          information about themselves, their locations and events to users, as
          well as to reward users when they visit their location or event
          through offers and specials.
        </h4>

        <h4 className="ffqs fw2 mt1 lh1_7">
          Publicly Available Information: When you use the Services, certain
          information is public, such as your public user profile information,
          tips, likes, saves, public photos, lists that you create and save,
          tastes and lists of friends and/or followers (as applicable to a
          particular Service), and may be searchable by search engines and be
          shared with or disclosed to third parties, including through our API
          to a wide range of users and services. We may also share or disclose
          aggregated and anonymous data, such as de-identified location data, to
          third parties, including users you may follow and users of our
          Service, for analytical or other purposes.
        </h4>

        <h3 className="ffqs mt1"> 5. Determining your location</h3>
        <h4 className="ffqs fw2 mt1 lh1_7">
          The Services deal with location, so in order to work, the Services
          need to know your location. Whenever you open and use/interact with
          our apps on your mobile device or go to one of our Sites, we use the
          location information from your mobile device or browser (e.g.,
          latitude and longitude) to tailor the Services experience to your
          current location (i.e., we'll show you a list of nearby locations,
          friends and tips). This information is NOT shared in a form that is
          identified with you with others unless you are using a service that
          they offer. Also, the Services use your mobile device's ‘background
          location to provide the Services, including to send you notifications
          of tips/friends/plans/interesting things etc. near you. If you have
          ‘background location turned on, the Ballyhoo app will, from time to
          time, tell us about your device's location even if you are not
          directly interacting with the application.
        </h4>

        <h3 className="ffqs mt1">6. Sharing Location with the Ballyhoo app</h3>
        <h4 className="ffqs fw2 mt1 lh1_7">
          Your real-time location is not shared with anyone on the Ballyhoo app
          in a form that identifies you.If you use a service from one of our
          merchants, write a tip, like or otherwise interact with a place, users
          may infer that you have been to that location. Some content, like
          tips, are time stamped and other users could use that information to
          infer when you were at a place even though tips can be posted when you
          aren't at the place you are leaving a tip about.
        </h4>

        <h4 className="ffqs fw2 mt1 lh1_7">
          Your location data is ONLY shared with others when you proactively
          decide to "purchase" a deal from one of the merchants on our platform.
          "Others" in this scenario ONLY represents the owner of the service /
          product that you have purchased.
        </h4>

        <h4 className="ffqs fw2 mt1 lh1_7">
          By default, location sharing is turned on and at a radius level is
          shared with your Ballyhoo friends and is updated from time to time
          using your background location. You can turn off neighborhood sharing.
          Your location is also shared when you proactively decide to "purchase
          with a "check in" is the location information of that place.
        </h4>

        <h3 className="ffqs mt1">9. Your Location History</h3>

        <h4 className="ffqs fw2 mt1 lh1_7">
          We store your location history to provide you better quality deals.
          This information is treated as private under any and all circumstances
          and is NEVER shared.
        </h4>
      </div>
    </div>
  </div>
);

export default PrivacyComponent;

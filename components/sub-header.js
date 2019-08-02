import "./sub-header.css";

const SubHeader = props => {
  return (
    <div
      className="sub-header-container"
      style={{
        borderWidth: 0,
        position: props.scrolling ? "fixed" : "relative",
        top: 0,
        width: "100vw",
        zIndex: props.scrolling ? "999" : "1"
      }}
    >
      <section className="bg-white text-sm py-2 shadow">
        <div className="container mx-auto py-2 text-center">
          <a
            href="/featured"
            className="text-lf-teal text-grey-dark mx-2 px-2 text-lf-teal font-lf-bold"
          >
            Featured
          </a>
          <a href="/recent" className="text-lf-teal text-grey-dark mx-2 px-2">
            Recent
          </a>
          <a href="/popular" className="text-lf-teal text-grey-dark mx-2 px-2">
            Popular
          </a>
          <a
            href="/animators"
            className="text-lf-teal text-grey-dark mx-2 px-2"
          >
            Animators
          </a>
          <a
            href="/marketplace"
            className="text-lf-teal text-grey-dark mx-2 px-2"
          >
            Marketplace
          </a>
          <span>
            {/* <span href="/" class="text-grey-dark mx-2 px-2 font-lf-bold">
            Popular Tags:
          </span> */}
            <a
              href="/aep"
              className="text-lf-teal text-grey-dark mx-2 px-2 inline-block mt-4 md:mt-0 "
            >
              AEP
            </a>
            <a
              href="/loading"
              className="text-lf-teal text-grey-dark mx-2 px-2 inline-block mt-4 md:mt-0 "
            >
              Loading
            </a>
            <a
              href="/heart"
              className="text-lf-teal text-grey-dark mx-2 px-2 inline-block mt-4 md:mt-0 "
            >
              Hearts
            </a>
            <a
              href="/checkmark"
              className="text-lf-teal text-grey-dark mx-2 px-2 inline-block mt-4 md:mt-0 "
            >
              Checkmarks
            </a>
          </span>

          {/* <a class="button is-danger is-outlined">PLAN MY HOLIDAY</a> */}
        </div>
      </section>
    </div>
  );
};

export default SubHeader;

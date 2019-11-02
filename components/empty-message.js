import "./empty-message.css";
const EmptyMessage = props => {
  return (
    <div className="empty-message-container">
      <div className="columns is-mobile">
        <div
          className="column is-half
is-offset-two-fifths"
        >
          <figure className="image is-64x64">
            <img src={props.img} alt={props.title} />
          </figure>
        </div>
      </div>

      <h1 className="ffqs fw2 align-centre letter-spacing-2px">
        {props.description}
      </h1>
    </div>
  );
};

export default EmptyMessage;

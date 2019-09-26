import { ClipLoader } from "halogenium";
import "./spinner.css";

const Spinner = props => {
  return (
    <div className="spinner-container">
      <ClipLoader color="#ff3860" size="100px" margin="1px" />
    </div>
  );
};

export default Spinner;

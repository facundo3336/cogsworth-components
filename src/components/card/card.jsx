import { Button } from "../button/button";
import { Textfield } from "../textfield/textfield";
import { Link } from "react-router-dom";
import { ReactComponent as Apple } from "../../assets/apple.svg";
import { ReactComponent as Microsoft } from "../../assets/microsoft.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Google } from "../../assets/google.svg";
import "./card.scss";

export const Card = () => {
  return (
    <div className="card">
      <h1>Log In</h1>
      <div className="textfieldContainer">
        <Textfield text="Email Adress" />
        <Textfield text="Password" />
      </div>
      <Link className="forgotPassword" to="/">
        Forgot password?
      </Link>
      <Button variant="primary">LOG IN</Button>
      <div className="greyLinesContainer">
        <div className="greyLine"></div>
        <div className="orLogWithContainer">
          <span>Or Log In with:</span>
        </div>
        <div className="greyLine"></div>
      </div>

      <div className="logosContainer">
        <Button variant="secondary">
          <div className="image">
            <Apple></Apple>
            <span>APPLE</span>
          </div>
        </Button>
        <Button variant="secondary">
          <div className="image">
            <Microsoft></Microsoft>
            <span>MICROSOFT</span>
          </div>
        </Button>
        <Button variant="secondary">
          <div className="image">
            <Google></Google>
            <span>GOOGLE</span>
          </div>
        </Button>
        <Button variant="secondary">
          <div className="image">
            <Linkedin></Linkedin>
            <span>LINKEDIN</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

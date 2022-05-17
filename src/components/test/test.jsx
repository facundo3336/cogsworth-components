import { Link } from "react-router-dom";
import { Card } from "../card/card";
import { Logo } from "../logo/logo";
import "./test.scss";

export const Test = () => {
  return (
    <div className="test">
      <Logo />
      <Card />
      <div className="accountTextContainer">
        <span>Don't have an account?</span>
        <Link to="/">Sign up</Link>
      </div>
    </div>
  );
};

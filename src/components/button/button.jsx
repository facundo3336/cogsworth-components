import "./button.scss";
import { Link } from "react-router-dom";

export const Button = ({ children, variant }) => {
  return (
    <Link to="/">
      <button className={variant}>{children}</button>
    </Link>
  );
};

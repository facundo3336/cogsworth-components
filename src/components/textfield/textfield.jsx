import "./textfield.scss";

export const Textfield = ({ text }) => {
  return <input className="textfield" type="text" placeholder={text} />;
};

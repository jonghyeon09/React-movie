import PropTypes from "prop-types";
import styles from "./Buttom.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}
// eslint-disable-next-line react/no-typos
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;

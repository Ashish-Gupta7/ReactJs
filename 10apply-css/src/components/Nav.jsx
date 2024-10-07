import css from "./Nav.module.css";

const Nav = () => {
  return (
    <div className="child">
      <h2>Nav</h2>
      <h3 className={`${css.temp}`}>Nav module css</h3>
    </div>
  );
};

export default Nav;

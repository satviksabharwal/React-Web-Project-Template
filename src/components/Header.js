import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogOut } from "../actions/auth";
import "../styles/component/header.css";
import "../styles/component/content-container.css";
import "../styles/component/button.css";

export const Header = ({ startLogOut }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>web-project-template</h1>
        </Link>
        <button className="button button--link" onClick={startLogOut}>
          Log Out
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut()),
});

export default connect(undefined, mapDispatchToProps)(Header);

import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import "../styles/component/box-style.css";
import "../styles/component/button.css";

export const LoginPage = ({ startLogin }) => (
  <div className="box-style">
    <div className="box-style__box">
      <h1 className="box-style__title">web-project-template</h1>
      <p>Tag Line for app</p>
      <button className="button" onClick={startLogin}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

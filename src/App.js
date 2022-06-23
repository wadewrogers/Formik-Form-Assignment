import React from "react";
import { useFormik } from "formik";

const buttonStyle = {
  paddingTop: "10px",
};

function App() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
      console.log("form: ", values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.username) {
        errors.username = "Field Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
      ) {
        errors.username = "username should be an email";
      }

      if (!values.password) {
        errors.password = "Field Required";
      } else if (values.password.length < 8) {
        errors.password = "Should be 8 character minimum";
      }
      return errors;
    },
  });

  return (
    <div>
      <p>Sign Up Form </p>
      <form onSubmit={formik.handleSubmit}>
        <div> User Name </div>
        <input
          type="text"
          name="username"
          id="emailField"
          value={formik.values.username}
          onChange={formik.handleChange}
        />{" "}
        {formik.errors.username ? (
          <div id="emailError"> {formik.errors.username} </div>
        ) : null}{" "}
        <div> Password </div>{" "}
        <input
          type="text"
          name="password"
          id="pswField"
          value={formik.values.password}
          onChange={formik.handleChange}
        />{" "}
        {formik.errors.password ? (
          <div id="pswError"> {formik.errors.password} </div>
        ) : null}{" "}
        <br />
        <div style={buttonStyle}>
          <button className="submitButton" type="submit">
            {" "}
            Submit{" "}
          </button>{" "}
        </div>
      </form>{" "}
    </div>
  );
}

export default App;

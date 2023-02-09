import React from "react";
import useForm from "./useForm";
import { signupForm } from "./utils/formConfig";
import image from "./com.jpg";

import "./styles.css";
import "./SignupForm.css";

export default function SignupForm() {
  const { renderFormInputs, isFormValid } = useForm(signupForm);

  return (
    <div className="container">
      <div>
        <img src={image} alt="image-logo" />
      </div>
      <div>
        <form className="signupForm">
          <h1>Sign Up</h1>
          {renderFormInputs()}
          <button type="submit" disabled={!isFormValid()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

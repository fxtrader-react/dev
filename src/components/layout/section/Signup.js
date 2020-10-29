import React, { useState, useRef } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { projectFirestore } from "../../../firebase/config";

export default function Signup() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const history = useHistory();

  function completeRegistration() {
    console.log(usernameRef.current.value, emailRef.current.value);
    projectFirestore
      .collection("users")
      .add({
        username: usernameRef.current.value,
        email: emailRef.current.value,
        //createdAt: projectFirestore.fieldValue.serverTimestamp(),
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        setError(error);
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
    //   return setError("Passwords do not match");
    // }
    try {
      console.log(1);
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      await completeRegistration();
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="container">
      {error && <h4 style={{ color: "white" }}>{error}</h4>}{" "}
      <div className="card">
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            ref={usernameRef}
          />
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            ref={emailRef}
          />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            ref={passwordRef}
          />
          {/* <input
            type="password"
            className="form-control"
            id="password-confirm"
            placeholder="Password Confirmation"
            ref={passwordConfirmationRef}
          /> */}
          <button disabled={loading}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

import React, { useState, createRef, useRef } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { projectFirestore } from "../../../firebase/config";
import moment from "moment";

export default function Support() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { currentUser } = useAuth();
  let messageRef = createRef();

  const styles = {
    display: "flex",
    minHeight: "100%",
  };

  async function addMessage() {
    console.log(currentUser.email, messageRef.current.value);
    const uid = new Date();
    projectFirestore
      .collection("messages")
      .doc(uid)
      .set({
        message: messageRef.current.value,
        date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    console.error("Error adding document: ", error);
  }

  const renderTicketSubjects = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(messageRef);
    try {
      addMessage();
    } catch {}
  };

  return (
    <div className="container" id="support" style={styles}>
      <div style={{ backgroundColor: "red", minWidth: "30%" }}>
        <button>Create new</button>
        <h2>left panel</h2>
      </div>
      <div style={{ backgroundColor: "blue", width: "100%" }}>
        <h2>right panel</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            id="message"
            placeholder="Enter Message"
            ref={messageRef}
            //value={messageRef.current.value}
          />
          <button>Send message</button>
        </form>
      </div>
    </div>
  );
}

import React, { useState, useEffect, createRef, useRef } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { projectFirestore } from "../../../firebase/config";
import moment from "moment";

export default function Support() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const { currentUser } = useAuth();
  const messageRef = useRef();
  const bottomRef = useRef();

  async function fetchMessages() {
    try {
      const querySnapshot = await projectFirestore
        .collection("messages")
        .where("email", "==", currentUser.email)
        .get();
      const fetched = querySnapshot.docs.map((doc) => doc.data());
      await setData(fetched);
      bottomRef.current.scrollIntoView();
    } catch {}
    return;
  }

  async function addMessage() {
    setLoading(true);
    const uid = new Date().getTime().toString();
    projectFirestore
      .collection("messages")
      .doc(uid)
      .set({
        email: currentUser.email,
        message: messageRef.current.value,
        key: uid,
        status: "unread",
        date_created: moment().format("DD-MM-YYYY hh:mm:ss"),
      })
      .then(function (docRef) {
        fetchMessages();
        setLoading(false);
        messageRef.current.value = "";
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    return;
  }

  async function deleteAllMessages() {
    try {
      console.log(3);
      setLoading(true);
      const snapshot = await projectFirestore
        .collection("messages")
        .where("email", "==", currentUser.email)
        .get();
      await snapshot.forEach((doc) => {
        projectFirestore.collection("messages").doc(doc.id).delete();
      });
      await setData();
    } catch {
      console.log("Error deleting messages");
    }
    setLoading(false);
    console.log(4);
  }

  async function deleteMessage(uid) {
    try {
      console.log(8);
      console.log(uid);
      setLoading(true);
      await projectFirestore.collection("messages").doc(uid).delete();
    } catch {
      console.log("Error deleting this message");
    }
    setLoading(false);
    fetchMessages();
  }

  const renderMessages =
    data &&
    data.map((query, index) => (
      <div className="card message" key={query.key}>
        <h4>{query.email}</h4>
        <p>{query.message}</p>
        <p>{query.date_created}</p>
        {/* <button onClick={() => deleteMessage(query.key)}>Delete</button> */}
      </div>
    ));

  useEffect(() => {
    console.log(5);
    fetchMessages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageRef.current.value !== "") {
      addMessage();
      e.target.value = "";
    } else {
      console.log("Empty messages prohibited");
    }
  };

  return (
    <>
      <button>Create new</button>
      <button disabled={loading} onClick={deleteAllMessages}>
        Delete all
      </button>

      <div className="support-container">
        {/* <div style={{ backgroundColor: "red", minWidth: "30%" }}> */}
        <div className="subject-container"></div>

        <div className="messages-container">
          {renderMessages}
          <div ref={bottomRef}></div>

          <div className="support-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                id="message"
                //value={message}
                autoComplete="off"
                placeholder="Enter Message"
                ref={messageRef}
              />
              <br />
              <button disabled={loading}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

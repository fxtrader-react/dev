import React from "react";

const fetchMessages = () => {
  console.log("fetching");
  projectFirestore
    .collection("messages")
    .where("email", "==", currentUser.email)
    .get()
    .then(function (querySnapshot) {
      const fetched = querySnapshot.docs.map((doc) => doc.data());
      setData(fetched);
      console.log(fetched);

      //     firebase.firestore().collection("users")
      // .where('uid', '==', this.state.uid)
      // .get()
      // .then(querySnapshot => {
      //   this.setState({ post_user_name: querySnapshot.docs[0].data().name });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  return;
};

async function addMessage() {
  setLoading(true);
  const uid = new Date().getTime().toString();
  console.log(moment().format("DD-MM-YYYY hh:mm:ss"));
  // console.log(currentUser.email, uid, messageRef.current.value);
  projectFirestore
    .collection("messages")
    .doc(uid)
    .set({
      email: currentUser.email,
      message: messageRef.current.value,
      // message: messageRef.current.value,
      date_created: moment().format("DD-MM-YYYY hh:mm:ss"),
    })
    .then(function (docRef) {
      fetchMessages();
      setLoading(false);
      console.log("Document written with ID: ");
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
  console.error("Error adding document: ", error);
}

async function deleteMessages() {
  try {
    setLoading(true);
    const snapshot = await projectFirestore
      .collection("messages")
      .where("email", "==", currentUser.email)
      .get();
    await snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      projectFirestore.collection("messages").doc(doc.id).delete();
    });
    await fetchMessages();
  } catch {
    console.log("Error deleting messages");
  }
  setLoading(false);
}

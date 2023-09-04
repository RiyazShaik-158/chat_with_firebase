import React, { useState } from "react";
import { auth, db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  
  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter a valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser!;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
  };

  return (
    <form className="send-message" onSubmit={sendMessage}>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMessage;

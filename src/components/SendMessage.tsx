import React, { useState } from "react";
import { auth, db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { TextField,InputAdornment } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';

const SendMessage: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  // const theme = createTheme({
  //   components:{
  //     MuiTextField:{
  //       styleOverrides:{
  //         root:({ownerState}) => {
  //           ...(ownerState.variant === 'outlined'
  //             && {
  //               backgroundColor : '#fff',
  //               fontWeight : '500',
  //               fontSize : '16px',
  //               width :'95%',
  //               borderRadius : '10px'
  //             }
  //           )
  //         }
  //       }
  //     }
  //   }
  // })
  
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
      {/* <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      /> */}
      {/* <TextField
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      /> */}
      {/* <ThemeProvider theme={theme}>
      <TextField 
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        // className={"sendMessage"}
        InputProps={{
          endAdornment:(
            <InputAdornment position='end'>
              <TelegramIcon className="telegram_send" onClick={sendMessage}/>
            </InputAdornment>
          ),
        }}
        inputProps={{style:{
          backgroundColor: '#fff',
          borderRadius: '25px',
          width: '95%',
        }}}
      />
      </ThemeProvider> */}
       <TextField 
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        // className={"sendMessage"}
        InputProps={{
          endAdornment:(
            <InputAdornment position='end'>
              <TelegramIcon className="telegram_send" onClick={sendMessage}/>
            </InputAdornment>
          ),
        }}
        inputProps={{style:{
          backgroundColor: '#fff',
          borderRadius: '25px',
          height:'20px',
          width: '95%',
        }}}
      />
      {/* <button type="submit">Send</button> */}
    </form>
  );
};

export default SendMessage;

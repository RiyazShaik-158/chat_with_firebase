import './App.css';
import { auth } from "./components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Welcome from './components/Welcome';
import ChatBox from './components/ChatBox';
import NavBar from './components/Navbar';

function App() {
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}

export default App;
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Upload from "./components/Upload";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <h1>Auth + Image Upload App</h1>

      <div className="container">
        <Signup />
      </div>

      <div className="container">
        <Login />
      </div>

      <div className="container">
        <Upload />
      </div>

      <div className="container">
        <Profile />
      </div>
    </div>
  );
}

export default App;
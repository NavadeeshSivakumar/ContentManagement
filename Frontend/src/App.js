import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginSignup/LoginForm";
import UserProfile from "./Components/User/UserProfile";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Post/pages/Home";
import Blog from "./Post/pages/Blog";
import About from "./Components/LandingPage/About";
import AddPost from "./Components/User/AddPost";
import Work from "./Components/LandingPage/Work";
import Chat from "./Components/User/Chat";

function App() {
  return (
    <BrowserRouter>
      <div className="Container">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/hello" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

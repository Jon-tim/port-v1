import { Routes, Route } from "react-router-dom";
import BlogPage from "./component/BlogPage";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Works from "./pages/Works";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;

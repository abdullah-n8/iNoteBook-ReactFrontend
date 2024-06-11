import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

function App() {
  return (
    <Router>
      <NoteState>
      <Navbar />
      <div className="container">
        <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>
      </div>

    </NoteState>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import videos from "./pages/videos";
import Book from "./pages/Book";
import Videos from "./pages/videos";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Videos />} />
        {/* <Route path="/videos" element={<videos />} /> */}
        <Route path="/book/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




import Movie from "./components/Movie";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

import Movie from "./components/Movie";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router basename="/movie">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:movieId" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;

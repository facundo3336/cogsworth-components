import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Test } from "./components/test/test.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

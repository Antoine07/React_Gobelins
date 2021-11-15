import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Log from "./components/Log";
import Navigate from "./components/Navigate";
import GlobalStyle from "./Styles/Global";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="logs" element={<Log />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

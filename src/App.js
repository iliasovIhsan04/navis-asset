import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AboutUs from "./pages/AboutUs";
import Price from "./pages/Price";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path={`/`} element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/price" element={<Price />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;

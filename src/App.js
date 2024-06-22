import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AboutUs from "./pages/AboutUs";
import Price from "./pages/Price";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";
import Application from "./pages/Application";
import AllNews from "./pages/AllNews";
import NewsDetails from "./pages/NewsDetails";

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
        <Route path="/application" element={<Application />} />
        <Route path="/all-news" element={<AllNews />} />
        <Route path="/news-details/:slug" element={<NewsDetails />} />
      </Routes>
    </div>
  );
}

export default App;

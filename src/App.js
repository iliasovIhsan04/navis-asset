import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} /> 
      </Routes>
    </div>
  );
}

export default App;

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./pages/header";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;

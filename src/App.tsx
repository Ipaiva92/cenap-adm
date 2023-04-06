import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Header from "./components/header";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <>
      {/* <Header /> */}
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

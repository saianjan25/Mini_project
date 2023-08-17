import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./features/RequireAuth";
import IndexPage from "./Pages/Indexpage";
import Login from "./components/Login";
import RegisterPage from "./Pages/RegisterPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path="/home" element={<RequireAuth />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./Pages/Indexpage";
import LoginPage from "./Pages/Loginpage";
import RegisterPage from "./Pages/RegisterPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />}/>
          <Route path={'/register'} element={<RegisterPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    )
}

export default App

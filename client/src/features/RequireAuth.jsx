import { Navigate, Outlet } from "react-router-dom";
import Header from "../Header";

const RequireAuth = () => {
  const token = localStorage.getItem("token");

  return token ? (
    <div className="p-4 sm:px-14 sm:py-5 text-gray-600  h-screen">
      <Header />
      <Outlet />
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default RequireAuth;

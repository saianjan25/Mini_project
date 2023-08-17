import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <main className="p-4 sm:px-14 sm:py-5 text-gray-600  h-screen">
      <Header />
      <Outlet />
    </main>
  );
}

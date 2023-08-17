import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "./redux/userSlice";

export default function Header() {
  const { token } = useSelector((state) => state["user"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login",{replace : true});
  };
  return (
    <header className="flex justify-between items-center mb-8">
      <Link to="/" className="font-bold text-2xl text-rose-600">
        StoryLine
      </Link>
      <div>
        {token ? (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded-md">
            Login
          </button>
        )}
      </div>
    </header>
  );
}

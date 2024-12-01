import { Link, useNavigate } from "react-router-dom";
import { useSessionStore } from "@/store/useSessionStore";

//==> Components <==//
import { Button } from "@/components/button";

export function Navbar() {
  const { user, clearSession } = useSessionStore();
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 px-4 lg:px-8 shadow-sm sm:shadow-none">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/packages">Paket Data</Link>
            </li>
            <li>
              <Link to="/contact">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl text-primary-base">
          DataKu
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/packages">Paket Data</Link>
            </li>
            <li>
              <Link to="/contact">About Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* User Actions */}
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-primary"
            >
              <span className="text-white font-bold">
                {user.username.charAt(0).toUpperCase()}
              </span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              <li className="menu-title px-4 py-2 bg-base-200 rounded-lg">
                <span className="text-sm font-semibold truncate">
                  {user.email}
                </span>
              </li>
              <li>
                <a onClick={() => navigate(`/profile/${user.id}`)}>Profile</a>
              </li>
              <li>
                <a onClick={() => clearSession()} className="text-error">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button
              onClick={() => navigate("/login")}
              className="btn-sm md:btn-md px-4 md:px-8 rounded-full"
              colorType="primary"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/register")}
              className="btn-sm md:btn-md px-4 md:px-8 rounded-full hidden sm:block"
              colorType="secondary"
            >
              Register
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Logo, Container, Button } from "../";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ThemeMode } from "../../frachers/Theme/ThemeSlice";
import { logout } from "../../frachers/Auth/AuthSlice";
import authServices from "../../Appwrite/Auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.Auth.status);
  // const authStatus = true;
  // console.log(authStatus);

  const handelThemeMode = (e) => {
    dispatch(ThemeMode());
  };
  const logoutHandler = () => {
    authServices.Logout().then(() => {
      dispatch(logout());
    });
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },

    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const AuthItem = [
    {
      name: "Login",
      slug: "/login",
    },
    {
      name: "Signup",
      slug: "/signup",
    },
  ];
  return (
    <header>
      <Container>
        <div className="relative w-full ">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="hidden grow items-start lg:flex">
              <ul className="ml-12 inline-flex space-x-8">
                {navItems.map((nav) => (
                  <li
                    key={nav.name}
                    className="text-base "
                    hidden={!nav.active}
                  >
                    <Link to={nav.slug}>{nav.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center ml-3">
              <label
                className="relative cursor-pointer p-2"
                htmlFor="light-switch"
                onClick={handelThemeMode}
              >
                <svg
                  className="dark:hidden"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-slate-300"
                    d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                  />
                  <path
                    className="fill-slate-400"
                    d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                  />
                </svg>
                <svg
                  className="hidden dark:block"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-slate-400"
                    d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                  />
                  <path
                    className="fill-slate-500"
                    d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                  />
                </svg>
                <span className="sr-only">Switch to light / dark version</span>
              </label>
            </div>

            {!authStatus ? (
              AuthItem.map((Item) => (
                <div className="hidden lg:block ml-2" key={Item.name}>
                  <Link to={Item.slug}>
                    <Button>{Item.name} </Button>
                  </Link>
                </div>
              ))
            ) : (
              <Button onClick={logoutHandler}>LogOut</Button>
            )}

            <div className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 cursor-pointer"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;

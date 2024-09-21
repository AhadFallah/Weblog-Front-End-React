import React, { useEffect, useState } from "react";
import DarkMode from "./darkMode";
import axiosClient from "../../config/axiosClient";
import { Link, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import NavbarAtom from "../../atoms/navbar";
function Navbar(props) {
  const showMenu = () => {
    setToggle(!toggle);
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("menu").classList.toggle("text-center");
    document.getElementById("icon").classList.toggle("w-screen");
  };
  const [navbarAtom,setNavbarAtom]=useRecoilState(NavbarAtom);

  const [hoverCategory, setHoverCategory] = useState(false);
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverTag, setHoverTag] = useState(false);
  const [hoverSearch, setHoverSearch] = useState(false);
  const [hoverContactUs, setHoverContactUs] = useState(false);
  const [hoverLogin, setHoverLogin] = useState(false);
  useEffect(() => {
    axiosClient
      .get("categories")
      .then((data) => {
        setCategories(data.data.categories);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <React.Fragment>
    <header
      class="lg:px-16 px-4 bg-inherit flex flex-wrap items-center py-4 mt-5 "
      dir="rtl"
    >
      <div class="flex-1 flex flex-wrap justify-between items-center">
        <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul class="md:flex items-center justify-between text-base text-inherit pt-4 md:pt-0">
              <li>
                <span class="md:px-4 py-3  block">
                  <DarkMode />
                </span>
              </li>
              <li>
                <hr
                  className="bg-black dark:bg-white h-1 ease-out transition-transform duration-300"
                  style={{
                    transform: navbarAtom.homeActive ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
                <Link
                  class="md:px-4 py-3  block"
                 to ="/Home"
                  onMouseEnter={() => {
                    setHoverHome(true);
                  }}
                  onMouseLeave={() => setHoverHome(false)}
                >
                  خانه
                </Link>
                <hr
                  className="bg-black dark:bg-white h-1 ease-out transition-transform duration-300"
                  style={{
                    transform: hoverHome ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </li>
              <li
                onMouseEnter={() => {
                  document
                    .getElementById("subMenu")
                    .classList.toggle("md:grid");
                  setHoverCategory(true);
                }}
                onMouseLeave={() => {
                  document
                    .getElementById("subMenu")
                    .classList.toggle("md:grid");
                  setHoverCategory(false);
                }}
              >   <hr
                  className="bg-black dark:bg-white h-1 ease-out transition-transform duration-300"
                  style={{
                    transform: navbarAtom.categoryActive ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
                <a class="md:px-4 py-3  block">
                  دسته بندی
                </a>
                <hr
                  className="bg-black dark:bg-white h-1 ease-out transition-transform duration-300"
                  style={{
                    transform: hoverCategory ? "scaleX(1)" : "scaleX(0)",
                  }}
                />

                {/*sub menu */}
                <ul
                  id={"subMenu"}
                  className="hidden md:absolute w-fit bg-slate-50  dark:bg-slate-800 grid-cols-1 transition-transform duration-300 ease-in rounded-md "
                  style={{
                    transform: hoverCategory ? "scaleY(1)" : "scaleY(0)",
                  }}
                >
                  {" "}
                  {categories.map((category) => (
                    <li
                      className="w-52 p-3 m-2 relative border border-slate-200"
                      onMouseEnter={() => {
                        if (category.subCategories.length != 0) {
                          document
                            .getElementById(category.id)
                            .classList.toggle("md:block");
                        }
                      }}
                      onMouseLeave={() => {
                        if (category.subCategories.length != 0) {
                          document
                            .getElementById(category.id)
                            .classList.toggle("md:block");
                        }
                      }}
                    >
                      {" "}
                      <Link to="/category" state={{id:category.id,name:category.name}}  className="grid grid-cols-5 items-center">
                        <span className="col-span-4 text-center">
                          {category.name}
                        </span>
                        {category.subCategories.length != 0 ? (
                          <svg
                            className="w-4 h-5 fill-1a-black dark:fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512"
                          >
                            <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
                          </svg>
                        ) : null}
                      </Link>
                      {category.subCategories.length != 0 ? (
                        <ul
                          id={category.id}
                          className="hidden md:absolute w-fit -left-56 mr-5   bg-slate-50 dark:bg-slate-800 -top-3 rounded-l-md "
                        >
                          {category.subCategories.map((sub) => (
                            <li className="w-52 p-3 m-2 border border-slate-200">
                              <Link
                               to="/category" state={{id:sub.id,name:sub.name}}
                                className="grid grid-cols-5 items-center"
                              >
                                <span className="col-span-4 text-center">
                                  {sub.name}{" "}
                                </span>
                                {sub.subCategories.length != 0 ? (
                                  <svg
                                    className="w-4 h-5 fill-1a-black dark:fill-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 512"
                                  >
                                    <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
                                  </svg>
                                ) : null}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a
                  class="md:px-4 py-3  block"
                  href="#"
                  onMouseEnter={() => setHoverTag(true)}
                  onMouseLeave={() => setHoverTag(false)}
                >
                  تگ ها
                </a>
                <hr
                  className="bg-black dark:bg-white h-1 ease-out transition-transform duration-300"
                  style={{
                    transform: hoverTag ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </li>
              <li>
                <a
                  class="md:px-4 py-3  block"
                  href="#"
                  onMouseEnter={() => setHoverContactUs(true)}
                  onMouseLeave={() => setHoverContactUs(false)}
                >
                  ارتباط با ما
                </a>
                <hr
                  className="bg-black h-1 dark:bg-white ease-out transition-transform duration-300"
                  style={{
                    transform: hoverContactUs ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </li>
              <li></li>
            </ul>
          </nav>
        </div>

        <label for="menu-toggle" class="pointer-cursor md:hidden block ">
          <svg
            class="fill-black dark:fill-white text-gray-900  content-center"
            id="icon"
            onClick={showMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />
      </div>

      <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-base text-inherit font-bold pt-4 md:pt-0">
            <li>
              <a
                class="md:px-4 py-3  block"
                href="#"
                onMouseEnter={() => setHoverLogin(true)}
                onMouseLeave={() => setHoverLogin(false)}
              >
                ثبت نام/ورود{" "}
              </a>
              <hr
                className="bg-black dark:bg-white h-1 ease-out transition-transform duration-300"
                style={{
                  transform: hoverLogin ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </li>
          </ul>
        </nav>
      </div>
      <hr className="h-2 w-full mx-20 mt-11" />
      <h1 className=" lg:text-10xl md:text-9xl sm:text-8xl  text-5xl mb-3 font-black w-full h-full text-center">
        {navbarAtom.title}
      </h1>
      <hr className="h-2 w-full mx-20 mt-5 " />
    </header>
    <Outlet/>
</React.Fragment>
  );
}

export default  Navbar;

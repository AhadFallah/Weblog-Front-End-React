import { useState } from "react";
import DarkMode from "./darkMode";
function Navbar(props) {
  const showMenu = () => {
    setToggle(!toggle);
    document.getElementById("menu").classList.toggle("hidden");
    document.getElementById("menu").classList.toggle("text-center");
    document.getElementById("icon").classList.toggle("w-screen");
  };
  const [hoverCategory, setHoverCategory] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverTag, setHoverTag] = useState(false);
  const [hoverSearch, setHoverSearch] = useState(false);
  const [hoverContactUs, setHoverContactUs] = useState(false);
  const [hoverLogin, setHoverLogin] = useState(false);
  return (
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
              <li
                className={
                  props.activeHome ? "bg-slate-100 dark:bg-slate-800" : null
                }
              >
                <hr
                  className="bg-black dark:bg-white h-1 ease-out transition-transform duration-300"
                  style={{
                    transform: props.activeHome ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
                <a
                  class="md:px-4 py-3  block"
                  href="#"
                  onMouseEnter={() => setHoverHome(true)}
                  onMouseLeave={() => setHoverHome(false)}
                >
                  خانه
                </a>
                <hr
                  className="bg-black dark:bg-white h-1 ease-out transition-transform duration-300"
                  style={{
                    transform: hoverHome ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </li>
              <li>
                <a
                  class="md:px-4 py-3  block"
                  href="#"
                  onMouseEnter={() => setHoverCategory(true)}
                  onMouseLeave={() => setHoverCategory(false)}
                >
                  دسته بندی
                </a>
                <hr
                  className="bg-black dark:bg-white h-1 ease-out transition-transform duration-300"
                  style={{
                    transform: hoverCategory ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
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
                  onMouseEnter={() => setHoverSearch(true)}
                  onMouseLeave={() => setHoverSearch(false)}
                >
                  جست و جو
                </a>
                <hr
                  className="bg-black dark:bg-white h-1 ease-out transition-transform duration-300"
                  style={{
                    transform: hoverSearch ? "scaleX(1)" : "scaleX(0)",
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
        روزمره بلاگ
      </h1>
      <hr className="h-2 w-full mx-20 " />
    </header>
  );
}

export default Navbar;

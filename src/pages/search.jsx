import React, { useEffect, useState } from "react";
import Newest from "../components/home/newest";
import axiosClient from "../config/axiosClient";
import { useLocation } from "react-router-dom";
import NavbarAtom from "../atoms/navbar";
import { useRecoilState } from "recoil";

function Search() {
  const [newest, setNewest] = useState();
  const [page, setPage] = useState("articles");
  const [all, setAll] = useState();
  const [loading, setLoading] = useState(true);
  const data = useLocation();
  const [search, setSearch] = useState(data.state);
  const defaultValue = {
    search: true,
    title: "",
  };
  const [navbarAtom, setNavbarAtom] = useRecoilState(NavbarAtom);
  useEffect(() => {
    axiosClient
      .get(page, {
        params: {
          search: search,
        },
      })
      .then((data) => {
        setNewest(data.data.newest.data);
        setAll(data.data.newest);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, search]);
  useEffect(() => {
    setNavbarAtom(defaultValue);
  }, [data]);
  return (
    <div className="bg-white dark:bg-1a-black h-full w-full text-1a-black dark:text-white">
      {loading ? (
        <div>loading...</div>
      ) : (
        <React.Fragment>
            <div className="w-full grid justify-center mb-5" dir="rtl">
                <h1 className="text-2xl font-black text-center   ">جست و جوی مقاله مورد نظر...</h1>
                <h2 className="text-lg font-black text-center ">با وارد کردن کلمات کلیدی مقاله مورد نظر خود را پیدا کنید.</h2>
            </div>
          <div className=" flex w-full  justify-center ">
            <div className="w-2/4">
              <input
                type="text"
                dir="rtl"
                onChange={(e) => setSearch(e.target.value)}
       
                value={search}
                placeholder="جست و جو..."
                class="rounded-xl w-full h-20 max-w-full dark:bg-1a-black  py-2 pr-5 outline-none border-2 border-gray-100 dark:border-slate-700 shadow-md hover:outline-none focus:ring-1a-black dark:focus:ring-white focus:border-1a-black dark:focus:border-white"
              />
            </div>
            <div></div>
          </div>
          {newest.length >= 6 ? <Newest articles={newest} /> : null}
          <div className="w-full text-center mt-5">
            {" "}
            <nav
              class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px mt-4 mb-4"
              aria-label="Pagination"
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(all.prev_page_url);
                }}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-1a-black text-sm font-medium text-gray-700 dark:text-white hover:dark:bg-slate-700 hover:bg-gray-50"
              >
                <span class="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </a>
              {all.links
                .slice(1, -1)
                .filter(
                  (link) =>
                    Math.abs(Number(all.current_page) - Number(link.label)) <= 3
                ) // Only keep links within 3 pages of the current page
                .slice(0, 5)
                .map((link) => {
                  return (
                    <a
                      key={link.url} // Make sure to provide a unique key
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setPage(link.url);
                      }}
                      className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white dark:bg-1a-black ${
                        all.current_page == link.label
                          ? "bg-slate-300 dark:bg-slate-700"
                          : ""
                      } text-sm font-medium text-gray-700 dark:text-white hover:dark:bg-slate-700 hover:bg-gray-100`}
                    >
                      {link.label}
                    </a>
                  );
                })}

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(all.next_page_url);
                }}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white dark:bg-1a-black text-sm font-medium text-gray-700 dark:text-white hover:dark:bg-slate-700 hover:bg-gray-50"
              >
                <span class="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </nav>
            <p className="text-sm mt-5 mb-5">&#169; 2024 github instagram</p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default Search;

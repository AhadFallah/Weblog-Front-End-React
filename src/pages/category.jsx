import React, { useEffect, useState } from "react";
import Navbar from "../components/home/navbar";
import Newest from "../components/home/newest";
import axiosClient from "../config/axiosClient";
import { useLocation } from "react-router-dom";
import NavbarAtom from "../atoms/navbar";
import { useRecoilState } from "recoil";

function Category() {
  const [newest, setNewest] = useState([]);
  const [page, setPage] = useState("articles");
  const [all, setAll] = useState();
  const [loading, setLoading] = useState(true);
  const data = useLocation();
  const defaultValue = {
    homeActive: false,
    categoryActive: true,
    tagActive: false,
    contactUsActive: false,
    Login: false,
    title: data.state.name,
  };
  const [navbarAtom, setNavbarAtom] = useRecoilState(NavbarAtom);
  useEffect(() => {
    axiosClient
      .get(page, {
        params: {
          category_id: data.state.id,
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
  }, [page, data]);
  useEffect(() => {
    if (loading == false && newest.length == 0) {
      setNavbarAtom({ title: "پیدا نشد!" });
    } else {
      setNavbarAtom(defaultValue);
    }
  }, [data, newest]);
  return (
    <div className="bg-white dark:bg-1a-black h-full w-full text-1a-black dark:text-white">
      {loading ? (
        <div>loading...</div>
      ) : (
        <React.Fragment>
          {newest.length !== 0 ? <Newest articles={newest} /> : null}
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

export default Category;

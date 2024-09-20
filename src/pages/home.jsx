import { useEffect, useState } from "react";
import Navbar from "../components/home/navbar";
import Newest from "../components/home/newest";
import Pagination from "../components/home/pagination";
import Popular from "../components/home/popular";
import axiosClient from "../config/axiosClient";

function Home() {
  const [popular, setPopular] = useState();
  const [newest, setNewest] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosClient
      .get("articles")
      .then((data) => {
        setPopular(data.data.popular);
        setNewest(data.data.newest.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (loading == true) {
    return <div>loading...</div>;
  } else {
    console.log(popular);
    return (
      <div className="bg-white dark:bg-1a-black h-full w-full text-1a-black dark:text-white">
        <Navbar />
        {popular.length >= 4 ? <Popular articles={popular} /> : null}
        {newest.length >= 6 ? <Newest articles={newest} /> : null}
        <div className="w-full text-center mt-5">
          <Pagination />
          <p className="text-sm mt-5">&#169; 2024 github instagram</p>
        </div>
      </div>
    );
  }
}

export default Home;

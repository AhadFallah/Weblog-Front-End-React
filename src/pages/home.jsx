import Navbar from "../components/home/navbar";
import Newest from "../components/home/newest";
import Pagination from "../components/home/pagination";
import Popular from "../components/home/popular";

function Home() {
    return (
    <div className="bg-white dark:bg-1a-black h-full w-screen text-1a-black dark:text-white">
      <Navbar />
      <Popular />
      <Newest />
      <div className="w-full text-center mt-5">
        <Pagination />
        <p className="text-sm mt-5">&#169; 2024 github instagram</p>
      </div>
    </div>
      );
}

export default Home;
function Newest(props) {
  const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
  return (
    <div className="md:mx-32 sm:mx-12 mx-5">
      <div className="text-right mt-5 font-bold">
        <label htmlFor="">تازه ترین ها</label>
      </div>
      <div
        className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 mt-5 gap-4"
        dir="rtl"
      >
        {props.articles.map((article) => (
        <div className="xl:col-span-1 lg:col-span-2 col-span-1">
          <div>
            <div className="rounded-xl h-56 overflow-hidden w-full  ">
              <img
                className="w-full h-full object-cover"
                src={article.cover}
                alt=""
              />
            </div>
            <div className="mr-2">
              <h2 className="mt-5 text-violet-600 dark:text-white font-bold text-sm">
                آخرین تغییر در {article.create}
              </h2>
              <h1 className=" mt-3 text-xl font-bold ">{article.name}</h1>
              <p className="w-full  mt-3 px-3 text-sm text-gray-600 dark:text-white">
                {article.description}
             </p>
              <div className="mt-5 flex flex-wrap">
                {article.tags.map(tag=>(
              <a
                  href="#"
                  class=" stroke-black stroke-5 text-white  py-1 px-4 rounded-lg text-xs m-1"
                  style={{backgroundColor:getRandomColor() ,textShadow: "1px 1px 1px black"}}
                >
                  {tag.name}                </a>
   
                ))}
              
              </div>
            </div>
          </div>
        </div>
        ))}

      </div>
    </div>
  );
}

export default Newest;

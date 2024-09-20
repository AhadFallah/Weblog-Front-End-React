function Popular(props) {
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
        <label htmlFor="">محبوب ترین ها</label>
      </div>
      <div
        className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-5  "
        dir="rtl"
      >
        <div className="flex flex-wrap w-full h-full  xl:col-span-2 sm:col-span-2">
          <div className="xl:flex w-full">
            <div className="rounded-xl overflow-hidden w-full text-center  h-56 ">
              <img
                className="w-full h-full object-cover"
                src={props.articles[0].cover}
                alt=""
              />
            </div>
            <div className="mr-2">
              <h2 className="mt-5 text-violet-600 dark:text-white font-bold text-sm">
                آخرین تغییر در {props.articles[0].create}
                              </h2>
              <h1 className=" mt-3 text-xl font-bold ">
                {props.articles[0].name}{" "}
              </h1>
              <p className="w-full xl:max-w-2xl  mt-3 px-3 text-sm text-gray-600 dark:text-white">
                {props.articles[0].description}{" "}
              </p>
              <div className="mt-5 flex flex-wrap">
                {props.articles[0].tags.map((tag) => (
                  <a
                    href="#"
                    class=" stroke-black stroke-5 text-white  py-1 px-4 rounded-lg text-xs m-1"
                    style={{
                      backgroundColor: getRandomColor(),
                      textShadow: "1px 1px 1px black",
                    }}
                  >
                    {tag.name}{" "}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 xl:flex w-full">
            <div className="rounded-xl overflow-hidden w-full text-center  h-56 ">
              <img
                className="w-full h-full object-cover"
                src={props.articles[1].cover}
                alt=""
              />
            </div>
            <div className="mr-2">
              <h2 className="mt-5 text-violet-600 dark:text-white font-bold text-sm">
                آخرین تغییر در {props.articles[1].create}
              </h2>
              <h1 className=" mt-3 text-xl font-bold ">
                {props.articles[1].name}
              </h1>
              <p className="w-full xl:max-w-2xl mt-3 px-3 text-sm text-gray-600 dark:text-white">
                {props.articles[1].description}
              </p>
              <div className="mt-5 flex flex-wrap">
                {props.articles[1].tags.map((tag) => (
                  <a
                    href="#"
                    class=" stroke-black stroke-5 text-white  py-1 px-4 rounded-lg text-xs m-1"
                    style={{
                      backgroundColor: getRandomColor(),
                      textShadow: "1px 1px 1px black",
                    }}
                  >
                    {tag.name}{" "}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full lg:col-span-2">
          <div>
            <div className="rounded-xl overflow-hidden w-full  ">
              <img
                className="w-full h-60 object-cover"
                src={props.articles[2].cover}
                alt=""
              />
            </div>
            <div>
              <h2 className="mt-5 text-violet-600 dark:text-white font-bold text-sm">

                آخرین تغییر در {props.articles[2].create}
              </h2>
              <h1 className=" mt-3 text-xl font-bold ">
                {props.articles[2].name}
              </h1>
              <p className="w-full  mt-3 px-3 text-sm text-gray-600 dark:text-white">
                {props.articles[2].description}
              </p>
              <div className="mt-5 flex flex-wrap">
                {props.articles[2].tags.map((tag) => (
                  <a
                    href="#"
                    class=" stroke-black stroke-5 text-white  py-1 px-4 rounded-lg text-xs m-1"
                    style={{
                      backgroundColor: getRandomColor(),
                      textShadow: "1px 1px 1px black",
                    }}
                  >
                    {tag.name}{" "}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full xl:col-span-4 sm:col-span-2">
          <div className="mt-5 xl:flex">
            <div className="rounded-xl h-60 overflow-hidden w-full  ">
              <img
                className="w-full h-full object-cover"
                src={props.articles[3].cover}
                alt=""
              />
            </div>
            <div className="mr-2">
              <h2 className="mt-5 text-violet-600 dark:text-white font-bold text-sm">
                آخرین تغییر در {props.articles[3].create}
              </h2>
              <h1 className=" mt-3 text-xl font-bold ">
                {props.articles[3].name}
              </h1>
              <p className="w-full  mt-3 px-3 text-sm text-gray-600 dark:text-white">
                {props.articles[3].description}
              </p>
              <div className="mt-5 flex flex-wrap">
                {props.articles[3].tags.map((tag) => (
                  <a
                    href="#"
                    class=" stroke-black stroke-5 text-white  py-1 px-4 rounded-lg text-xs m-1"
                    style={{
                      backgroundColor: getRandomColor(),
                      textShadow: "1px 1px 1px black",
                    }}
                  >
                    {tag.name}{" "}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;

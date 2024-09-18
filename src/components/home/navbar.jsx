import DarkMode from "./darkMode";

function Navbar() {
    const showMenu=()=>{
        document.getElementById('menu').classList.toggle('hidden');
        document.getElementById('menu').classList.toggle('text-center');
        document.getElementById('icon').classList.toggle('w-screen');
    }
    return ( 
<header class="lg:px-16 px-4 bg-inherit flex flex-wrap items-center py-4 " dir="rtl">
    <div class="flex-1 flex flex-wrap justify-between items-center">
    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul class="md:flex items-center justify-between text-base text-inherit pt-4 md:pt-0">
                <li><span class="md:p-4 py-3 px-0 block"><DarkMode/></span></li>
                <li><a class="md:p-4 py-3 px-0 block " href="#">خانه</a>
                <hr className="bg-black h-1" />  </li>
                <li><a class="md:p-4 py-3 px-0 block" href="#">دسته بندی</a></li>
                <li><a class="md:p-4 py-3 px-0 block" href="#">تگ ها</a></li>
                <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">جست و جو</a></li>
                <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">ارتباط با ما</a></li>
                <li>


                </li>
            </ul>
        </nav>
    </div>
    <label for="menu-toggle" class="pointer-cursor md:hidden block ">
      <svg class="fill-black dark:fill-white text-gray-900  content-center" id='icon'
      onClick={showMenu}
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />


    </div>

    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul class="md:flex items-center justify-between text-base text-inherit font-bold pt-4 md:pt-0">
       
                <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">ورود/ثبت نام</a></li>
            </ul>
        </nav>
    </div>


            <hr className="h-2 w-full mx-20 mt-11" />
            <h1 className=" lg:text-10xl md:text-9xl sm:text-8xl  text-5xl mb-3 font-black w-full h-full text-center">روزمره بلاگ</h1>
            <hr className="h-2 w-full mx-20 " />

</header>

     );
}


export default Navbar;

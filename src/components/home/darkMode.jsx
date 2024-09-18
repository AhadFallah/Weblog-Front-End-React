import { useEffect } from "react";

function DarkMode() {
    // Function to toggle dark mode
    const dark = () => {
        document.documentElement.classList.toggle('dark');

        // Check the current localStorage value and toggle it
        const darkMode = localStorage.getItem('dark');
        if (darkMode === 'true') {
            localStorage.setItem('dark', 'false'); // Disable dark mode
        } else {
            localStorage.setItem('dark', 'true'); // Enable dark mode
        }
    };

    // Use useEffect to apply dark mode based on localStorage when the component mounts
    useEffect(() => {
        if (localStorage.getItem('dark') === 'true') {
            document.documentElement.classList.add('dark'); // Enable dark mode if stored as 'true'
        } else {
            document.documentElement.classList.remove('dark'); // Disable dark mode if stored as 'false'
        }
    }, []);
    return ( 
  <button onClick={dark}
        class="h-12 w-12 rounded-lg p-2 hover:bg-gray-700 dark:hover:bg-gray-100 bg-1a-black dark:bg-white">
        <svg class="fill-white block dark:hidden " fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        <svg class="fill-yellow-500 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
    </button>
     );
}

export default DarkMode;
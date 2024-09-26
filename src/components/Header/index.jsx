import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const handleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center border-b-2 dark:border-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Elysium</h1>
      <div className="md:hidden">
        <IoMenu
          onClick={handleMenu}
          className="text-3xl cursor-pointer text-gray-900 dark:text-white"
        />
      </div>
      <nav className={`md:flex ${menuIsActive ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent`}>
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 p-4 md:p-0">
          <li>
            <Link to="/AT-Fundamentos_React/" className="text-lg text-gray-900 dark:text-white">Home</Link>
          </li>
          <li>
            <Link to="/favoritos" className="text-lg text-gray-900 dark:text-white">Favoritos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

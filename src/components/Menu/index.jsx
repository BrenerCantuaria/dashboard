import {
  AiFillHome,
  AiOutlineDashboard,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header className="p-2 bg-gray-900 w-full fixed top-0 z-10">
      <nav>
        <ul className="text-white flex gap-4 justify-center text-center items-center text-sm lg:text-base">
          <li>
            <Link to="/">
              <span className="hidden sm:inline">Dashboard</span>
              <span className="sm:hidden">
                <AiFillHome size={25}/>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/Cadastro">
              <span className="hidden sm:inline">Cadastrar Produto</span>
              <span className="sm:hidden">
                <AiOutlineShoppingCart size={25}/>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/Produtos">
              <span className="hidden sm:inline">Lista produtos</span>
              <span className="sm:hidden">
                <AiOutlineDashboard size={25}/>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

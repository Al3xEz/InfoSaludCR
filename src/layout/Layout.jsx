import { Outlet, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faCircle as circleSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import useMyContext from "../hooks/useContext";

const Layout = () => {
  const location = useLocation();
  const { cantidadCarrito } = useMyContext();

  return (
    <div className="md:flex bg-sky-600 h-screen md:h-fit">
      <aside className="md:w-[350px] md:p-8 flex md:flex-col justify-between text-white md:h-screen md:sticky md:top-0 md:pr-0 h-16 items-center md:items-stretch">
        <header>
          <Link to="/">
            <h1 className=" pl-2 md:p-0 font-bold text-3xl">InfoSaludCR</h1>
          </Link>
        </header>

        <div className="md:hidden text-2xl">
          <Link className={`w-full p-4 rounded-l-full relative`} to="/carrito">
            <span>
              <FontAwesomeIcon icon={faCartPlus} />
            </span>{" "}
            <span className="ml-1">{cantidadCarrito}</span>
          </Link>
        </div>

        <nav className="hidden md:block">
          <ul className="bg-transparent text-lg flex md:flex-col gap-4 font-semibold">
            <li className="flex gap-4 items-center">
              <Link
                className={`${
                  location.pathname === "/" &&
                  "bg-gray-100 text-sky-600 before:absolute before:w-4 before:h-8 before:bottom-full before:right-0 before:rounded-br-3xl before:shadow-[0_1rem_0_#F3F4F6] after:absolute after:w-4 after:h-8 after:top-full after:right-0 after:rounded-tr-3xl after:shadow-[0_-1rem_0_#F3F4F6]"
                } w-full p-4 rounded-l-full relative `}
                to="/"
              >
                <span
                  className={`${location.pathname === "/" && "text-red-600"}`}
                >
                  {location.pathname === "/" ? (
                    <FontAwesomeIcon icon={circleSolid} />
                  ) : (
                    <FontAwesomeIcon icon={faCircle} />
                  )}
                </span>{" "}
                Todos los productos
              </Link>
            </li>
            <li className="flex gap-4 items-center">
              <Link
                className={`${
                  location.pathname === "/pulseras" &&
                  "bg-gray-100 text-sky-600 before:absolute before:w-4 before:h-8 before:bottom-full before:right-0 before:rounded-br-3xl before:shadow-[0_1rem_0_#F3F4F6] after:absolute after:w-4 after:h-8 after:top-full after:right-0 after:rounded-tr-3xl after:shadow-[0_-1rem_0_#F3F4F6]"
                } w-full p-4 rounded-l-full relative `}
                to="/pulseras"
              >
                <span
                  className={`${
                    location.pathname === "/pulseras" && "text-red-600"
                  }`}
                >
                  {location.pathname === "/pulseras" ? (
                    <FontAwesomeIcon icon={circleSolid} />
                  ) : (
                    <FontAwesomeIcon icon={faCircle} />
                  )}
                </span>{" "}
                Pulseras
              </Link>
            </li>
            <li className="flex gap-4 items-center">
              <Link
                className={`${
                  location.pathname === "/collares" &&
                  "bg-gray-100 text-sky-600 before:absolute before:w-4 before:h-8 before:bottom-full before:right-0 before:rounded-br-3xl before:shadow-[0_1rem_0_#F3F4F6] after:absolute after:w-4 after:h-8 after:top-full after:right-0 after:rounded-tr-3xl after:shadow-[0_-1rem_0_#F3F4F6]"
                } w-full p-4 rounded-l-full relative `}
                to="collares"
              >
                <span
                  className={`${
                    location.pathname === "/collares" && "text-red-600"
                  }`}
                >
                  {location.pathname === "/collares" ? (
                    <FontAwesomeIcon icon={circleSolid} />
                  ) : (
                    <FontAwesomeIcon icon={faCircle} />
                  )}
                </span>{" "}
                Collares
              </Link>
            </li>
            <li className="flex gap-4 items-center">
              <Link
                className={`${
                  location.pathname === "/anillos" &&
                  "bg-gray-100 text-sky-600 before:absolute before:w-4 before:h-8 before:bottom-full before:right-0 before:rounded-br-3xl before:shadow-[0_1rem_0_#F3F4F6] after:absolute after:w-4 after:h-8 after:top-full after:right-0 after:rounded-tr-3xl after:shadow-[0_-1rem_0_#F3F4F6]"
                } w-full p-4 rounded-l-full relative `}
                to="/anillos"
              >
                <span
                  className={`${
                    location.pathname === "/anillos" && "text-red-600"
                  }`}
                >
                  {location.pathname === "/anillos" ? (
                    <FontAwesomeIcon icon={circleSolid} />
                  ) : (
                    <FontAwesomeIcon icon={faCircle} />
                  )}
                </span>{" "}
                Anillos
              </Link>
            </li>
            <li className="flex gap-4 items-center mt-12">
              <Link
                className={`${
                  location.pathname === "/carrito" &&
                  "bg-gray-100 text-sky-600 before:absolute before:w-4 before:h-8 before:bottom-full before:right-0 before:rounded-br-3xl before:shadow-[0_1rem_0_#F3F4F6] after:absolute after:w-4 after:h-8 after:top-full after:right-0 after:rounded-tr-3xl after:shadow-[0_-1rem_0_#F3F4F6]"
                } w-full p-4 rounded-l-full relative`}
                to="/carrito"
              >
                <span
                  className={`${
                    location.pathname === "/carrito" && "text-red-600"
                  }`}
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                </span>{" "}
                Carrito{" "}
                <span
                  className={`${
                    location.pathname === "/carrito"
                      ? "text-white bg-sky-600"
                      : "bg-gray-100 text-sky-600"
                  }  px-[0.40rem] ml-1 rounded-lg`}
                >
                  {cantidadCarrito}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <footer className="hidden md:block">
          <p className=" text-sky-100">© 2022 InfoSaludCR</p>
        </footer>
      </aside>
      <main className="mx-auto md:w-full md:m-4 bg-gray-100 md:ml-0 md:rounded-3xl md:p-12 p-2">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

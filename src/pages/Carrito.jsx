import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faFaceFrownOpen } from "@fortawesome/free-regular-svg-icons";
import Alert from "../components/Alert";
import useMyContext from "../hooks/useContext";

const Carrito = () => {
  const { carrito, setCarrito, setCantidadCarrito, eliminarProducto } =
    useMyContext();
  const [total, setTotal] = useState(0);
  const [alerta, setAlerta] = useState({});

  useEffect(() => {
    calcularTotal();
  }, [carrito]);
  const calcularTotal = () => {
    const totalCalc = carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );

    setTotal(totalCalc);
  };

  return (
    <main>
      <div className="flex items-center justify-between mb-8 pl-4 pt-4 md:p-0">
        <h2 className="text-red-600 font-bold text-3xl ">Carrito</h2>

        <Link
          className="md:hidden mr-2 p-2 bg-sky-600 rounded-2xl text-white"
          to="/"
        >
          Volver a la tienda
        </Link>
      </div>
      <div className=""></div>
      {carrito.length > 0 ? (
        <>
          <div className="flex flex-col gap-4">
            {carrito.map((producto) => (
              <div
                key={producto.id}
                className="flex justify-between bg-gray-200 text-sky-600 p-2 pr-6 rounded-2xl items-center"
              >
                <img
                  className="w-16 rounded-xl"
                  src={producto.imagen}
                  alt={producto.titulo}
                />
                <div>
                  <p className="hidden md:block text-sm">Nombre</p>
                  <p className="hidden md:block font-bold md:text-xl">
                    {producto.titulo}
                  </p>
                </div>
                <div>
                  <p>Cantidad</p>
                  <p className="text-center">{producto.cantidad}</p>
                </div>
                <div>
                  <p>Precio</p>
                  <p className="text-center">₡{producto.precio}</p>
                </div>
                <div>
                  <p>SubTotal</p>
                  <p className="text-center">
                    ₡{producto.precio * producto.cantidad}
                  </p>
                </div>
                <button
                  id={producto.id}
                  onClick={eliminarProducto}
                  className="hidden md:block text-red-600"
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            ))}
          </div>
          <div className="md:flex md:justify-between text-center md:text-start mt-8">
            <div>
              <button
                onClick={() => {
                  setCarrito([]);
                  setCantidadCarrito(0);
                }}
                className="p-4 bg-gray-200 text-red-600 rounded-2xl font-bold md:uppercase mb-8 md:mb-0"
              >
                Vaciar Carrito
              </button>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex">
                <div className="flex gap-3 p-4 bg-gray-200 text-sky-600 rounded-l-2xl font-bold md:uppercase">
                  <p>Total:</p>
                  <p>₡{total}</p>
                </div>
                <button
                  onClick={() => {
                    setAlerta({
                      mensaje: "Muchas gracias por su compra",
                      error: false,
                    });
                    setTimeout(() => {
                      setCarrito([]);
                      setCantidadCarrito(0);
                    }, 3000);
                  }}
                  className="p-4 bg-sky-600 text-white rounded-r-2xl font-bold md:uppercase"
                >
                  Comprar ahora
                </button>
              </div>
              {alerta.mensaje && <Alert alerta={alerta} />}
            </div>
          </div>
        </>
      ) : (
        <p className="font-bold text-xl">
          Carrito Vacío <FontAwesomeIcon icon={faFaceFrownOpen} />
        </p>
      )}
    </main>
  );
};

export default Carrito;

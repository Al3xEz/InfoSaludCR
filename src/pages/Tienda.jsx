import { collares } from "../helpers/Productos";
import { pulseras } from "../helpers/Productos";
import { anillos } from "../helpers/Productos";
import useMyContext from "../hooks/useContext";

const Tienda = () => {
  const { agregarAlCarrito } = useMyContext();

  return (
    <main>
      <h2 className="text-red-600 font-bold text-3xl mb-8 pt-4 pl-4 md:p-0 text-center md:text-start">
        Todos los productos
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {pulseras.map((pulsera) => (
          <div key={pulsera.id}>
            <img className="rounded-xl" src={pulsera.imagen} />
            <div className="bg-sky-600 rounded-xl p-2 text-white mt-[-2rem] relative flex flex-col gap-1">
              <h3 className="text-xl font-bold">{pulsera.titulo}</h3>
              <p className="text-xl">₡{pulsera.precio}</p>
              <button
                onClick={agregarAlCarrito}
                className="bg-white text-sky-600 p-[0.35rem] uppercase rounded-3xl border-2 border-white hover:bg-sky-800 hover:text-white mt-1 font-semibold transition-all duration-200"
                id={pulsera.id}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
        {collares.map((collar) => (
          <div key={collar.id}>
            <img className="rounded-xl" src={collar.imagen} />
            <div className="bg-sky-600 rounded-xl p-2 text-white mt-[-2rem] relative flex flex-col gap-1">
              <h3 className="text-xl font-bold">{collar.titulo}</h3>
              <p className="text-xl">₡{collar.precio}</p>
              <button
                onClick={agregarAlCarrito}
                className="bg-white text-sky-600 p-[0.35rem] uppercase rounded-3xl border-2 border-white hover:bg-sky-800 hover:text-white mt-1 font-semibold transition-all duration-200"
                id={collar.id}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
        {anillos.map((anillo) => (
          <div key={anillo.id}>
            <img className="rounded-xl" src={anillo.imagen} />
            <div className="bg-sky-600 rounded-xl p-2 text-white mt-[-2rem] relative flex flex-col gap-1">
              <h3 className="text-xl font-bold">{anillo.titulo}</h3>
              <p className="text-xl">₡{anillo.precio}</p>
              <button
                onClick={agregarAlCarrito}
                className="bg-white text-sky-600 p-[0.35rem] uppercase rounded-3xl border-2 border-white hover:bg-sky-800 hover:text-white mt-1 font-semibold transition-all duration-200"
                id={anillo.id}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Tienda;

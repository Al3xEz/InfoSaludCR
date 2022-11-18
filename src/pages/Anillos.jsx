import { anillos } from "../helpers/Productos";
import useMyContext from "../hooks/useContext";

const Anillos = () => {
  const { agregarAlCarrito } = useMyContext();
  return (
    <div>
      <h2 className="text-red-600 font-bold text-3xl mb-8">Anillos</h2>
      <div className="grid grid-cols-4 gap-5">
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
    </div>
  );
};

export default Anillos;

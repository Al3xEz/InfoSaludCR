import { useState, useEffect, createContext } from "react";
import { productos } from "../helpers/Productos";

//Create context
const Context = createContext();

export const Provider = ({ children }) => {
  //Hooks
  const [carrito, setCarrito] = useState([]);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  const agregarAlCarrito = (e) => {
    const productoId = e.target.id;
    const productoAgregado = productos.find(
      (producto) => producto.id === productoId
    );

    if (carrito.some((producto) => producto.id === productoId)) {
      const index = carrito.findIndex((producto) => producto.id === productoId);
      const nuevoCarrito = carrito;
      nuevoCarrito[index].cantidad++;
      setCarrito(nuevoCarrito);
    } else {
      productoAgregado.cantidad = 1;
      setCarrito([...carrito, productoAgregado]);
    }
    setCantidadCarrito(cantidadCarrito + 1);
  };

  const eliminarProducto = (e) => {
    const productoId = e.currentTarget.id;
    let newCantidad = cantidadCarrito;
    const index = carrito.findIndex((producto) => producto.id === productoId);
    console.log(index);
    const nuevoCarrito = carrito.filter(
      (producto) => producto.id !== productoId
    );

    setCantidadCarrito(newCantidad - carrito[index].cantidad);
    setCarrito(nuevoCarrito);
  };

  return (
    <Context.Provider
      value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
        cantidadCarrito,
        setCantidadCarrito,
        eliminarProducto,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

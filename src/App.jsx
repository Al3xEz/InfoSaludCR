import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Tienda from "./pages/Tienda";
import Anillos from "./pages/Anillos";
import Pulseras from "./pages/Pulseras";
import Collares from "./pages/Collares";
import Carrito from "./pages/Carrito";
import { Provider } from "./context/contextProvider";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Tienda />} />
          <Route path="/collares" element={<Collares />} />
          <Route path="/pulseras" element={<Pulseras />} />
          <Route path="/anillos" element={<Anillos />} />
          <Route path="/carrito" element={<Carrito />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;

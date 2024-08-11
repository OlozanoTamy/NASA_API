import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import NasaImage from "../views/NasaImage";
import Contact from "../views/Contact";
import Asteroides from "../views/Asteroides";
//Es un arreglo de objetos,donde cada objeto tiene su propia ruta
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nasa-image",
    element: <NasaImage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/nasa-asteroides",
    element: <Asteroides />,
  },
]);

//Es es un componente que va a exportar las rutas
const MyRoutes = () => <RouterProvider router={router} />;
export default MyRoutes;

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single.jsx";
import Planets from "./pages/Planets.jsx";
import Vehicles from "./pages/Vehicles.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route index element={<Home />} />
      <Route path="single/:id" element={<Single />} />
      <Route path="planets" element={<Planets />} />
      <Route path="vehicles" element={<Vehicles />} />
    </Route>
  )
);

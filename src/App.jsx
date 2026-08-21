import { Routes, Route } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Teams from "./pages/Teams";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/teams"
          element={<Teams />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Route>
    </Routes>
  );
}
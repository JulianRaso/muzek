import { useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/heather/Header";
import Footer from "./components/footer/Footer";
import EventsCard from "./components/eventCards/EventsCard";
import LandingPage from "./components/landingPage/LandingPage";
import AboutUs from "./components/aboutUs/AboutUs";
import Products from "./components/products/Products";
import NotPageFnd from "./components/unknownPage/NotPageFnd";

// Static data import
import landingPageImages from "./data/landingPageImages.json";
import landingProductsImages from "./data/landingProductsImages.json";
import events from "./data/events.json";
import products from "./data/products.json";

// Route for components
const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage landingPageImages={landingPageImages} />,
    errorElement: <NotPageFnd />,
  },
  {
    path: "/services",
    element: (
      <Products products={products} landingImages={landingProductsImages} />
    ),
    errorElement: <NotPageFnd />,
  },
  {
    path: "/clients",
    element: (
      <div className="eventsContainer">
        {events.map((event, index) => (
          <EventsCard key={index} object={events[index]} />
        ))}
      </div>
    ),
    errorElement: <NotPageFnd />,
  },
  { path: "/aboutUs", element: <AboutUs />, errorElement: <NotPageFnd /> },
]);

export default function App() {
  const [navbarStatus, setNavbarStatus] = useState(false);

  function handleNavbar() {
    setNavbarStatus(!navbarStatus);
  }

  return (
    <div className="container">
      <Header navbarStatus={navbarStatus} handleNavbar={handleNavbar} />
      <div className="appBody" onClick={navbarStatus ? handleNavbar : ""}>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

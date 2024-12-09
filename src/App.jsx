import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/heather/Header";
import Footer from "./components/footer/Footer";
import EventsCard from "./components/eventCards/EventsCard";
import LandingPage from "./components/landingPage/LandingPage";
import AboutUs from "./components/aboutUs/AboutUs";
import Products from "./components/products/Products";
import NotPageFnd from "./components/unknownPage/NotPageFnd";

const events = [
  {
    title: "XV AÑOS ISABELLA",
    image: [
      "./clients/Client1.jpg",
      "./clients/Client2.jpg",
      "./clients/Client3.jpg",
      "./clients/Client4.jpg",
    ],
    description:
      "El Quince de Isabella fue un evento inolvidable que reunió a más de 300 personas. Gracias al salón La Lola Multiespacio, la ambientación de Cristina Meana y la música de nuestro DJ Enzo Encinas, se logró crear, una vez más, una noche verdaderamente especial.",
  },
  {
    title: "Boda de Emiliano & Alexia",
    image: [
      "./clients/Cliente2/Client1.jpg",
      "./clients/Cliente2/Client2.jpg",
      "./clients/Cliente2/Client3.jpg",
      "./clients/Cliente2/Client4.jpg",
    ],
    description:
      "Los sueños se hacen realidad y a nosotros nos encanta ayudarlos a cumplirlos 🖤 Boda Emiliano & Alexi",
  },
  {
    title: "Fiesta Nacional del Sol 2023 en San Juan",
    image: [
      "./clients/event1.jpg",
      "./clients/event2.jpg",
      "./clients/event4.jpg",
      "./clients/event5.jpg",
    ],
    description:
      "La Fiesta Nacional del Sol 2023 en San Juan destacó por sus espectáculos musicales y artísticos, con un montaje de sonido e iluminación que realzó cada presentación.",
  },
  {
    title: "Cosquín Rock 2024",
    image: [
      "./clients/event1.jpg",
      "./clients/event2.jpg",
      "./clients/event4.jpg",
      "./clients/event5.jpg",
    ],
    description:
      "El festival Cosquín Rock 2024, realizado en Córdoba, ofreció una experiencia única con múltiples escenarios y una producción técnica de sonido e iluminación que potenció las actuaciones de las bandas.",
  },
  {
    title: "Festival Nacional de Folklore de Cosquín 2023",
    image: [
      "./clients/event1.jpg",
      "./clients/event2.jpg",
      "./clients/event4.jpg",
      "./clients/event5.jpg",
    ],
    description:
      "El Festival Nacional de Folklore de Cosquín 2023 celebró la música tradicional argentina con una puesta en escena que combinó sonido e iluminación para resaltar cada actuación.",
  },
  {
    title: "Personal Fest 2023 en Buenos Aires",
    image: [
      "./clients/event1.jpg",
      "./clients/event2.jpg",
      "./clients/event4.jpg",
      "./clients/event5.jpg",
    ],
    description:
      "El Personal Fest 2023 en Buenos Aires presentó una variedad de artistas internacionales y locales, con una producción de sonido e iluminación que brindó una experiencia inolvidable al público.",
  },
  {
    title: "Festival Internacional de Jazz de Buenos Aires 2023",
    image: [
      "./clients/event1.jpg",
      "./clients/event2.jpg",
      "./clients/event4.jpg",
      "./clients/event5.jpg",
    ],
    description:
      "El Festival Internacional de Jazz de Buenos Aires 2023 ofreció conciertos de destacados músicos nacionales e internacionales, con una cuidada ambientación de sonido e iluminación que realzó cada presentación.",
  },
  {
    title: "Festival de la Chaya 2023 en La Rioja",
    image: [
      "./clients/event1.jpg",
      "./clients/event2.jpg",
      "./clients/event4.jpg",
      "./clients/event5.jpg",
    ],
    description:
      "El Festival de la Chaya 2023 en La Rioja combinó música, danza y tradición, con una producción técnica de sonido e iluminación que destacó en cada jornada del evento.",
  },
  {
    title: "Festival Nacional de la Vendimia 2023 en Mendoza",
    image: [
      "./clients/event1.jpg",
      "./clients/event2.jpg",
      "./clients/event4.jpg",
      "./clients/event5.jpg",
    ],
    description:
      "El Festival Nacional de la Vendimia 2023 en Mendoza celebró la cosecha de la uva con espectáculos artísticos y una destacada producción de sonido e iluminación que embelleció cada acto.",
  },
  {
    title: "Festival Internacional de Cine de Mar del Plata 2023",
    image: [
      "./clients/event1.jpg",
      "./clients/event2.jpg",
      "./clients/event4.jpg",
      "./clients/event5.jpg",
    ],
    description:
      "El Festival Internacional de Cine de Mar del Plata 2023 proyectó una selección de películas nacionales e internacionales, con salas equipadas con sistemas de sonido e iluminación de alta calidad.",
  },
];

const products = [
  {
    title: "Especialista en Sonido",
    image: ["./producs/soundProfesional/soundProf.jpg"],
    description:
      "Contamos con especialistas en sonido durante todo el evento para garantizar un sonido claro sin distorciones.",
  },
  {
    title: "Sonido",
    image: [
      "./producs/audioEquipment/arraySpeakers.png",
      "./producs/audioEquipment/soundSystem.png",
      "./producs/audioEquipment/soundSystem2.png",
      "./producs/audioEquipment/floorAmplifier.png",
    ],
    description:
      "El audio es un elemento clave en todo evento, por ello, contamos con la ultima generacion de equipos de sonido del mercado para ofrecerte lo mejor.",
  },
  {
    title: "Iluminacion",
    image: [
      "./producs/lights/light1.png",
      "./producs/lights/light2.png",
      "./producs/lights/light3.png",
      "./producs/lights/light4.png",
    ],
    description:
      "Contamos con los ultimos equipos de iluminacion para lograr que cada evento tenga recuerdos unicos.",
  },
  {
    title: "Escenarios",
    image: [
      "./producs/stageEquipment/stageEstructure.png",
      "./producs/stageEquipment/stage2.png",
      "./producs/stageEquipment/stage3.png",
    ],
    description:
      "Sabemos que la estructura del lugar no siempre acompaña. En Muzek, contamos con una amplia variedad de estructuras para mejorar los efectos de Sonido e Iluminacion.",
  },
];

const landingProductsImages = [
  "./landingProducts/event.jpg",
  "./landingProducts/event2.png",
  "./landingProducts/event3.webp",
];

const landingPageImages = [
  "./landingPage/event1.jpg",
  "./clients/Client2.jpg",
  "./clients/Client3.jpg",
  "./clients/Client4.jpg",
  "./clients/Cliente2/Client1.jpg",
  "./clients/Cliente2/Client2.jpg",
  "./clients/Cliente2/Client3.jpg",
  "./clients/Cliente2/Client4.jpg",
];

const router = createBrowserRouter([
  {
    path: "",
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
  { path: "/aboutUs", element: <AboutUs /> },
]);

export default function App() {
  return (
    <div className="container">
      <Header />
      <div className="appBody">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

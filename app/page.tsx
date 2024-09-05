"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarComponent from "./components/NavbarComponent";
import {
  Hero,
  Nosotros,
  Servicios,
  Productos,
  Estadisticas,
  Adn,
  MeetAllCustomers,
  Marketing,
  Demo,
} from "./sections";
import FooterComponent from "./components/FooterComponent";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
    });
  }, []);

  return (
    <main>
      <header className="bg-silver">
        <NavbarComponent />
        <section className="bg-silver">
          <Hero />
        </section>
      </header>
      <section className="bg-white">
        <Nosotros />

        <Servicios />
        <Productos />
      </section>
      <section className="bg-silver">
        <Adn />
        <Estadisticas />
      </section>

      <footer className="bg-secondary">
        <FooterComponent />
      </footer>
    </main>
  );
}

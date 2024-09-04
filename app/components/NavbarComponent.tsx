"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";


const NavbarContent = [
  {
    title: "Inicio",
    link: "/",
  },
  {
    title: "Nosotros",
    link: "#nosotros",
  },
  {
    title: "Servicios",
    link: "#servicios",
  },
  {
    title: "Productos",
    link: "#productos",
  },
  
   {
    title: "Contacto",
    link: "#contacto",
  },
];

const NavbarComponent = () => {
  return (
    <Navbar className="bg-silver navbar py-2" collapseOnSelect expand="lg" data-aos="fade-down">
      <Container>
        <Link
          href="/"
          className="logo-container navbar-brand d-flex flex-row align-items-center gap-1"
        >
          <Image className="logo" src="/Stats/logo-fieldcom (4).svg" width={210} height={55} alt="logo" />
          
        </Link>
        <NavbarToggle aria-controls="navbarScroll" className="border-primary border-3" />
        <NavbarCollapse id="navbarScroll">
          <Nav className="ms-auto font-bold fw-bolder">
            {NavbarContent.map((item) => (
              <Link
                href={item.link}
                key={item.title}
                className={`nav-link text-navtext ${
                  item.title === "Home" ? "active" : ""
                } nav-item-hover`}
              >
                {item.title}
              </Link>
            ))}
          </Nav>
          
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

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
    <Navbar className="bg-primary  py-2" collapseOnSelect expand="lg" data-aos="fade-down">
      <Container>
        <Link
          href="/"
          className="navbar-brand d-flex flex-row align-items-center gap-2"
        >
          <Image src="/logo.png" width={150} height={40} alt="logo" />
          
        </Link>
        <NavbarToggle aria-controls="navbarScroll" />
        <NavbarCollapse id="navbarScroll">
          <Nav className="mx-auto font-bold fw-bolder">
            {NavbarContent.map((item) => (
              <Link
                href={item.link}
                key={item.title}
                className={`nav-link text-navtext ${
                  item.title === "Home" ? "active" : ""
                }`}
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

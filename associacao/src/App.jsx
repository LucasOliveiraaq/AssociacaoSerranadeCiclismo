import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Users,
  Target,
  Award,
} from "lucide-react";

import imgPedal from "./assets/pedal.png";
import imgPedal1 from "./assets/Pedal1.png";
import imgPedal2 from "./assets/pedal2.png";

import asc from "./assets/Asc.png";
import asc2 from "./assets/Asc2.png";
import asc3 from "./assets/Asc3.png";

import odonto from "./assets/odonto.png";

import logo from "./assets/logo.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);

  const carouselImages = [imgPedal, imgPedal1, imgPedal2];

  const galleryImages = [asc, asc2, asc3];

  const sponsors = [{ name: "Sponsor 1", logo: odonto }];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGalleryImage((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src={logo} alt="Logo ASC" className="logo-image" />
              <div className="logo-text">
                <h1>ASC</h1>
                <p>Associação Serrana de Ciclismo</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              <button
                onClick={() => scrollToSection("home")}
                className="nav-link"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="nav-link"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("sponsors")}
                className="nav-link"
              >
                Apoiadores
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="nav-link"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn btn-primary btn-rounded"
              >
                Junte-se a nós
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className={`nav-mobile ${isMenuOpen ? "active" : ""}`}>
            <button
              onClick={() => scrollToSection("home")}
              className="nav-link"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("sponsors")}
              className="nav-link"
            >
              Apoiadores
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn btn-primary btn-rounded"
            >
              Junte-se a nós
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section id="home" className="hero">
        <div className="carousel-container">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
              <div className="carousel-overlay"></div>
            </div>
          ))}
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">
              Pedale com a<span className="gradient-text"> ASC</span>
            </h2>
            <p className="hero-subtitle">
              Associação Serrana de Ciclismo - Lages
            </p>
            <button
              onClick={() => scrollToSection("about")}
              className="btn btn-primary btn-rounded"
            >
              Conheça Nossa História
            </button>
          </div>
        </div>

        {/* Carousel Navigation */}
        <button onClick={prevSlide} className="carousel-nav prev">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="carousel-nav next">
          <ChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h3>
                Sobre a <span className="gradient-text">ASC</span>
              </h3>
              <p>
                A ASSOCIAÇÃO SERRANA DE CICLISMO é uma entidade sem fins
                lucrativos que visa benefícios ao ciclismo e aos ciclistas da
                região serrana de Santa Catarina, com ações sociais,
                mobilizações, pedais de aventura, competições, provas, desafios
                e cicloturismo, ainda fomentando continuamente a inclusão de
                novos ciclistas.
              </p>
              <p>
                Ao se cadastrar como ciclista na ASC você se torna um cidadão
                ativo, contribuindo para esta mudança e terá todos os benefícios
                desta associação.
              </p>
              <p>
                Através das decisões coletivas, alinhamos metas e diretrizes
                para a ASC, a exemplo da aquisição de uma carreta para 20
                bicicletas que será utilizada pela associação para pedais em
                grupo, provas, treinamentos e/ou cicloturismo que requeiram
                deslocamento com veículos.
              </p>
              <p>
                Alinhada com o setor público, vamos apresentar projetos para o
                recebimento de bolsa-atleta e outras verbas para serem aplicadas
                diretamente em nossas atividades envolvendo o ciclismo.
              </p>
              <p></p>
            </div>

            <div className="gallery-container">
              <div className="gallery">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`gallery-slide ${
                      index === currentGalleryImage ? "active" : ""
                    }`}
                  >
                    <img src={image} alt={`Gallery ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className="gallery-decoration bottom-right"></div>
              <div className="gallery-decoration top-left"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="sponsors">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Nossos Apoiadores</h3>
          </div>

          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <img src={sponsor.logo} alt={sponsor.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{ padding: "5rem 0", backgroundColor: "#f9fafb" }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "2.25rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  marginBottom: "1.5rem",
                }}
              >
                Entre em Contato
              </h3>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#4b5563",
                  marginBottom: "2rem",
                  lineHeight: "1.75rem",
                }}
              >
                Ficou interessado em fazer parte da nossa comunidade? Entre em
                contato conosco e venha pedalar junto! Estamos localizados em
                Lages, Santa Catarina, e sempre recebemos novos ciclistas de
                braços abertos.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: "#dbeafe",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MapPin size={24} style={{ color: "#2563eb" }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: "600", color: "#1f2937" }}>
                      Endereço
                    </h4>
                    <p>Lages, Santa Catarina - Brasil</p>
                  </div>
                </div>

                 {/*<div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: "#d1fae5",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Mail size={24} style={{ color: "#059669" }} />
                  </div>
                 <div>
                    <h4 style={{ fontWeight: "600", color: "#1f2937" }}>
                      Email
                    </h4>
                    <p>contato@asc.com.br</p>
                  </div>
                </div> */}
              </div> 

              <div style={{ marginTop: "2rem" }}>
                <h4
                  style={{
                    fontWeight: "600",
                    color: "#1f2937",
                    marginBottom: "1rem",
                  }}
                >
                  Siga-nos nas redes sociais
                </h4>
                <div
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <a
                    href="https://instagram.com/ciclistas_lageanos"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      textDecoration: "none",
                      color: "#1f2937",
                    }}
                  >
                    <Instagram size={20} />
                    <span>@ciclistas_lageanos</span>
                  </a>
                  <a
                    href="https://instagram.com/associacaoserranadeciclismo"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      textDecoration: "none",
                      color: "#1f2937",
                    }}
                  >
                    <Instagram size={20} />
                    <span>@associacaoserranadeciclismo</span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>
                Seja um Ciclista ASC
              </h4>

              <div style={{ marginBottom: "1.5rem" }}>
                <p style={{ marginBottom: "0.5rem", color: "#374151" }}>
                  Cadastre-se e aproveite todos os benefícios da nossa
                  associação.
                </p>
                <a
                  href="https://tr.ee/bN3FC3JCHV"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Cadastrar Ciclista
                </a>
              </div>

              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "1rem",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={require("./assets/Contrato.png")}
                  alt="Instrumento Assinado"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>
                Nossa Localização
              </h4>
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "1rem",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56832.84351822308!2d-50.36168842167969!3d-27.816063999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df46f4b8b7d4e5%3A0x7d4b4b4b4b4b4b4b!2sLages%2C%20SC!5e0!3m2!1spt!2sbr!4v1642000000000!5m2!1spt!2sbr"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Lages, Santa Catarina"
                ></iframe>
              </div>
              <p style={{ color: "#4b5563" }}>
                Lages, conhecida como a "Princesa da Serra"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="logo">
                <img src={logo} alt="Logo ASC" className="logo-image" />
                <div className="logo-text">
                  <h4>ASC</h4>
                  <p>Associação Serrana de Ciclismo</p>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h4>Links Rápidos</h4>
              <ul className="footer-links">
                <li>
                  <button onClick={() => scrollToSection("home")}>
                    Início
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("about")}>
                    Sobre
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("sponsors")}>
                    Apoiadores
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")}>
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Diretrizes</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#">Termos de Uso</a>
                </li>
                <li>
                  <a href="#">Código de Conduta</a>
                </li>
                <li>
                  <a href="#">Regulamentos</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © 2025 Associação Serrana de Ciclismo. Todos os direitos
              reservados. | Desenvolvido por{" "}
              <a
                href="https://www.linkedin.com/in/lucas-pinheiro-de-oliveira-b2a5a6222/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lucas Oliveira
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

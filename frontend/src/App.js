import { useState, useEffect } from "react";
import "@/App.css";
import Marquee from "react-fast-marquee";
import { 
  Phone, 
  MapPin, 
  Truck, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Route, 
  Calendar,
  Star,
  Menu,
  X,
  ChevronRight,
  Tractor,
  Car
} from "lucide-react";

// Assets URLs
const ASSETS = {
  logo: "https://customer-assets.emergentagent.com/job_agro-socorro-go/artifacts/phj7ps3f_WhatsApp%20Image%202026-03-23%20at%2012.38.36.jpeg",
  service1: "https://customer-assets.emergentagent.com/job_a40e9845-d494-4082-b081-c47d89234391/artifacts/pxeqkyvv_WhatsApp%20Image%202026-03-24%20at%2015.11.16.jpeg",
  service2: "https://customer-assets.emergentagent.com/job_a40e9845-d494-4082-b081-c47d89234391/artifacts/k1u33p30_WhatsApp%20Image%202026-03-24%20at%2015.11.17-2.jpeg",
  service3: "https://customer-assets.emergentagent.com/job_a40e9845-d494-4082-b081-c47d89234391/artifacts/i95yg8rf_WhatsApp%20Image%202026-03-24%20at%2015.11.30.jpeg",
  service4: "https://customer-assets.emergentagent.com/job_a40e9845-d494-4082-b081-c47d89234391/artifacts/kvob25yi_WhatsApp%20Image%202026-03-24%20at%2015.11.17.jpeg",
  bgAsphalt: "https://customer-assets.emergentagent.com/job_agro-socorro-go/artifacts/os5yuqri_WhatsApp%20Image%202026-03-24%20at%2015.11.16.jpeg",
  bgPattern: "https://static.prod-images.emergentagent.com/jobs/a40e9845-d494-4082-b081-c47d89234391/images/a33f2258c82cc1fb29a105c08aa32aa44fc0fc57ad106d57fb412fd7eb703964.png"
};

// Phone numbers
const PHONE_1 = "62984043652";
const PHONE_2 = "62991563645";
const PHONE_DISPLAY_1 = "(62) 98404-3652";
const PHONE_DISPLAY_2 = "(62) 99156-3645";

// WhatsApp message
const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Preciso de um guincho. Podem me ajudar?");

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#galeria", label: "Galeria" },
    { href: "#contato", label: "Contato" }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white border-b border-[#211d1b]/10 ${
        isScrolled ? "header-scrolled" : ""
      }`}
      data-testid="header"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Desktop Logo */}
          <a href="#" className="hidden lg:block" data-testid="logo-desktop">
            <img 
              src="https://customer-assets.emergentagent.com/job_agro-socorro-go/artifacts/mp5iutsz_WhatsApp%20Image%202026-03-23%20at%2012.38.36.png" 
              alt="Alex do Guincho" 
              className="h-14 w-auto"
            />
          </a>

          {/* Mobile Centered Logo */}
          <div className="lg:hidden absolute left-1/2 -translate-x-1/2">
            <a href="#" data-testid="logo-mobile">
              <img 
                src="https://customer-assets.emergentagent.com/job_agro-socorro-go/artifacts/mp5iutsz_WhatsApp%20Image%202026-03-23%20at%2012.38.36.png" 
                alt="Alex do Guincho" 
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-['Oswald'] uppercase tracking-widest text-sm text-[#211d1b] hover:text-[#f4eb24] transition-colors"
                data-testid={`nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={`tel:+${PHONE_1}`}
            className="hidden lg:flex items-center gap-2 bg-[#f4eb24] text-[#211d1b] font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#dcd312] transition-colors btn-shine"
            data-testid="header-call-btn"
          >
            <Phone size={18} />
            <span>Ligar Agora</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden ml-auto p-2 text-[#211d1b]"
            data-testid="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Empty div for spacing on mobile */}
          <div className="lg:hidden w-10" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#eaebea] border-t border-[#211d1b]/10" data-testid="mobile-menu">
          <nav className="flex flex-col py-6 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-['Oswald'] uppercase tracking-widest text-lg text-[#211d1b] py-4 border-b border-[#211d1b]/10 hover:text-[#f4eb24] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section 
      className="min-h-[90vh] flex items-center relative overflow-hidden bg-[#211d1b] pt-[100px]"
      style={{
        backgroundImage: `url(${ASSETS.bgAsphalt})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      data-testid="hero-section"
    >
      <div className="hero-overlay absolute inset-0" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Alex do Guincho */}
          <img 
            src="https://customer-assets.emergentagent.com/job_agro-socorro-go/artifacts/rasag607_WhatsApp_Image_2026-03-26_at_16.38.52-removebg-preview.png" 
            alt="Alex do Guincho" 
            className="h-48 md:h-64 lg:h-72 w-auto mb-6 mx-auto"
          />

          {/* Overline */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#f4eb24] mb-6">
            Atendimento 24h<br />Goianápolis e Região
          </p>

          {/* Main Title */}
          <h1 className="font-['Oswald'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[#eaebea] mb-6 inline-block">
            <span className="block">AUTO SOCORRO</span>
            <span className="block text-[#f4eb24] tracking-[-0.02em]">GOIANÁPOLIS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#eaebea]/80 mb-8 max-w-2xl leading-relaxed mx-auto">
            Guincho leve, pesado e transporte agrícola com atendimento rápido e seguro em toda região.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-10 justify-center">
            {[
              { icon: AlertTriangle, text: "Atendimento 24 horas" },
              { icon: Car, text: "Guincho leve e pesado" },
              { icon: Tractor, text: "Transporte agrícola" },
              { icon: MapPin, text: "Goianápolis e região" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 bg-[#eaebea]/10 px-4 py-2 text-[#eaebea]"
              >
                <item.icon size={18} className="text-[#f4eb24]" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:+${PHONE_1}`}
              className="bg-[#f4eb24] text-[#211d1b] font-bold uppercase tracking-widest hover:bg-[#dcd312] transition-colors px-8 py-5 flex items-center justify-center gap-3 btn-shine"
              data-testid="hero-call-btn"
            >
              <Phone size={20} />
              Ligar Agora
            </a>
            <a
              href={`https://wa.me/${PHONE_1}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold uppercase tracking-widest hover:bg-[#1da851] transition-colors px-8 py-5 flex items-center justify-center gap-3"
              data-testid="hero-whatsapp-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="absolute bottom-0 left-0 w-full bg-[#f4eb24] py-4">
        <Marquee gradient={false} speed={50}>
          <span className="marquee-content text-[#211d1b] text-lg mx-8">
            ATENDIMENTO 24 HORAS
          </span>
          <span className="marquee-content text-[#211d1b] text-lg mx-8">•</span>
          <span className="marquee-content text-[#211d1b] text-lg mx-8">
            GOIANÁPOLIS E REGIÃO
          </span>
          <span className="marquee-content text-[#211d1b] text-lg mx-8">•</span>
          <span className="marquee-content text-[#211d1b] text-lg mx-8">
            GUINCHO LEVE E PESADO
          </span>
          <span className="marquee-content text-[#211d1b] text-lg mx-8">•</span>
          <span className="marquee-content text-[#211d1b] text-lg mx-8">
            TRANSPORTE AGRÍCOLA
          </span>
          <span className="marquee-content text-[#211d1b] text-lg mx-8">•</span>
        </Marquee>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="sobre" className="bg-[#eaebea] py-20 md:py-32" data-testid="about-section">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#211d1b]/60 mb-4">
              Sobre a Empresa
            </p>
            <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#211d1b] mb-6">
              Experiência e Confiança<br />
              em <span className="text-[#f4eb24]" style={{ WebkitTextStroke: '1px #211d1b' }}>Auto Socorro</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#211d1b]/80 mb-8">
              A <strong>Auto Socorro Goianápolis e Agro Serviços LTDA</strong> é especializada em guincho e transporte com atendimento rápido e seguro. Trabalhamos com veículos leves, pesados e máquinas agrícolas, garantindo agilidade e segurança em qualquer situação.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-[#211d1b]/80 mb-8">
              <strong>Atendimento 24 horas por dia</strong> em Goianápolis e toda região.
            </p>

            {/* Trust markers */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "24h", label: "Atendimento" },
                { value: "+10", label: "Anos de experiência" },
                { value: "+1000", label: "Clientes atendidos" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <p className="font-['Oswald'] text-4xl font-bold text-[#f4eb24]" style={{ WebkitTextStroke: '1px #211d1b' }}>
                    {item.value}
                  </p>
                  <p className="text-sm text-[#211d1b]/60 uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src={ASSETS.service1} 
                alt="Serviço de guincho" 
                className="w-full h-48 md:h-64 object-cover"
              />
              <img 
                src={ASSETS.service3} 
                alt="Transporte agrícola" 
                className="w-full h-32 md:h-40 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img 
                src={ASSETS.service4} 
                alt="Auto socorro" 
                className="w-full h-32 md:h-40 object-cover"
              />
              <img 
                src={ASSETS.service2} 
                alt="Guincho pesado" 
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Guincho Leve",
      description: "Remoção de carros, motos e utilitários",
      span: "md:col-span-6"
    },
    {
      icon: Truck,
      title: "Guincho Pesado",
      description: "Caminhões, vans e veículos grandes",
      span: "md:col-span-6"
    },
    {
      icon: Tractor,
      title: "Transporte Agrícola",
      description: "Tratores e implementos",
      span: "md:col-span-4"
    },
    {
      icon: Wrench,
      title: "Auto Socorro 24h",
      description: "Pane seca, bateria, pneu furado",
      span: "md:col-span-4"
    },
    {
      icon: Route,
      title: "Atendimento Rodoviário",
      description: "Socorro em estradas",
      span: "md:col-span-4"
    },
    {
      icon: Calendar,
      title: "Transporte Programado",
      description: "Remoções agendadas",
      span: "md:col-span-12"
    }
  ];

  return (
    <section id="servicos" className="bg-[#211d1b] py-20 md:py-32" data-testid="services-section">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#eaebea]/60 mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#eaebea]">
            Soluções Completas em <span className="text-[#f4eb24]">Guincho</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.span} service-card border border-[#eaebea]/10 p-8 group`}
              data-testid={`service-card-${index}`}
            >
              <div className="flex flex-col h-full">
                <service.icon 
                  size={40} 
                  className="text-[#f4eb24] mb-6 group-hover:scale-110 transition-transform" 
                />
                <h3 className="font-['Oswald'] text-2xl sm:text-3xl font-semibold tracking-tight text-[#eaebea] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#eaebea]/70">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Differentiators Section
const DifferentiatorsSection = () => {
  const differentiators = [
    { icon: Clock, title: "Atendimento 24 horas" },
    { icon: AlertTriangle, title: "Chegada rápida" },
    { icon: Truck, title: "Guincho leve e pesado" },
    { icon: Tractor, title: "Transporte agrícola" },
    { icon: MapPin, title: "Atendimento rural" },
    { icon: ShieldCheck, title: "Equipe especializada" },
    { icon: Star, title: "Preço justo" }
  ];

  return (
    <section className="bg-[#eaebea] py-20 md:py-32" data-testid="differentiators-section">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#211d1b]/60 mb-4">
            Por que nos escolher
          </p>
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#211d1b]">
            Nossos <span className="text-[#f4eb24]" style={{ WebkitTextStroke: '1px #211d1b' }}>Diferenciais</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#211d1b]/10">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`differential-item p-8 flex flex-col items-center text-center ${
                index === differentiators.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              data-testid={`differential-${index}`}
            >
              <div className="w-16 h-16 bg-[#211d1b] flex items-center justify-center mb-6">
                <item.icon size={28} className="text-[#f4eb24]" />
              </div>
              <h3 className="font-['Oswald'] text-xl font-semibold uppercase tracking-tight text-[#211d1b]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const images = [
    { src: ASSETS.service1, alt: "Transporte de tratores" },
    { src: ASSETS.service2, alt: "Guincho pesado com tratores" },
    { src: ASSETS.service3, alt: "Transporte de máquina agrícola" },
    { src: ASSETS.service4, alt: "Guincho leve com carro" }
  ];

  return (
    <section id="galeria" className="bg-[#211d1b] pt-20 pb-0" data-testid="gallery-section">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#eaebea]/60 mb-4">
            Serviços Realizados
          </p>
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#eaebea]">
            Confira Nossos <span className="text-[#f4eb24]">Atendimentos</span>
          </h2>
        </div>
      </div>

      {/* Full Width Gallery */}
      <div className="gallery-grid px-2 md:px-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image w-full h-48 sm:h-64 md:h-80 object-cover cursor-pointer"
              data-testid={`gallery-image-${index}`}
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 py-16">
        <div className="text-center">
          <p className="text-lg text-[#eaebea]/80 mb-8">
            Precisa de um atendimento como esses? <strong>Fale conosco agora.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:+${PHONE_1}`}
              className="bg-[#f4eb24] text-[#211d1b] font-bold uppercase tracking-widest hover:bg-[#dcd312] transition-colors px-8 py-5 flex items-center justify-center gap-3 btn-shine"
              data-testid="gallery-call-btn"
            >
              <Phone size={20} />
              Ligar Agora
            </a>
            <a
              href={`https://wa.me/${PHONE_1}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold uppercase tracking-widest hover:bg-[#1da851] transition-colors px-8 py-5 flex items-center justify-center gap-3"
              data-testid="gallery-whatsapp-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Coverage Area Section
const CoverageAreaSection = () => {
  const areas = [
    "Goianápolis",
    "Anápolis",
    "Goiânia",
    "Nerópolis",
    "Terezópolis",
    "Leopoldo de Bulhões",
    "E toda região"
  ];

  return (
    <section className="bg-[#eaebea] py-20 md:py-32" data-testid="coverage-section">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text */}
          <div>
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#211d1b]/60 mb-4">
              Área de Atendimento
            </p>
            <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#211d1b] mb-6">
              Atendemos <span className="text-[#f4eb24]" style={{ WebkitTextStroke: '1px #211d1b' }}>Toda a Região</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#211d1b]/80">
              Cobrimos Goianápolis e cidades vizinhas com atendimento rápido e eficiente. Não importa onde você esteja, estamos prontos para ajudar.
            </p>
          </div>

          {/* Areas Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {areas.map((area, index) => (
              <div
                key={index}
                className="area-badge flex items-center gap-2 bg-[#211d1b] text-[#eaebea] px-4 py-4 cursor-default"
                data-testid={`area-${index}`}
              >
                <MapPin size={18} className="text-[#f4eb24] flex-shrink-0" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Emergency Call Section
const EmergencyCallSection = () => {
  return (
    <section 
      id="contato"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${ASSETS.bgPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      data-testid="emergency-section"
    >
      <div className="emergency-overlay absolute inset-0" />
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 text-center">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#f4eb24] mb-4">
          Chamada de Emergência
        </p>
        <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#eaebea] mb-4">
          Precisando de Guincho em<br />
          <span className="text-[#f4eb24]">Goianápolis?</span>
        </h2>
        <p className="text-lg text-[#eaebea]/80 mb-10">
          Atendimento imediato 24 horas
        </p>

        {/* Phone Numbers */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
          <a 
            href={`tel:+${PHONE_1}`}
            className="flex items-center justify-center gap-3 group"
            data-testid="emergency-phone-1"
          >
            <Phone size={28} className="text-[#f4eb24]" />
            <span className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4eb24] group-hover:underline">
              {PHONE_DISPLAY_1}
            </span>
          </a>
          <a 
            href={`tel:+${PHONE_2}`}
            className="flex items-center justify-center gap-3 group"
            data-testid="emergency-phone-2"
          >
            <Phone size={28} className="text-[#f4eb24]" />
            <span className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#f4eb24] group-hover:underline">
              {PHONE_DISPLAY_2}
            </span>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:+${PHONE_1}`}
            className="bg-[#f4eb24] text-[#211d1b] font-bold uppercase tracking-widest hover:bg-[#dcd312] transition-colors px-8 py-5 flex items-center justify-center gap-3 btn-shine"
            data-testid="emergency-call-btn"
          >
            <Phone size={20} />
            Ligar Agora
          </a>
          <a
            href={`https://wa.me/${PHONE_1}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-bold uppercase tracking-widest hover:bg-[#1da851] transition-colors px-8 py-5 flex items-center justify-center gap-3"
            data-testid="emergency-whatsapp-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const ReviewsSection = () => {
  const reviews = [
    {
      text: "Atendimento muito rápido e profissional. Chegaram em menos de 30 minutos!",
      author: "João S."
    },
    {
      text: "Guincho chegou antes do previsto. Excelente serviço, recomendo!",
      author: "Maria L."
    },
    {
      text: "Transportaram meu trator com muita segurança. Equipe competente.",
      author: "Carlos M."
    },
    {
      text: "Excelente atendimento 24 horas. Me salvaram de madrugada!",
      author: "Ana P."
    }
  ];

  return (
    <section className="bg-[#eaebea] py-20 md:py-32" data-testid="reviews-section">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#211d1b]/60 mb-4">
            Avaliações
          </p>
          <h2 className="font-['Oswald'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase text-[#211d1b]">
            O Que Nossos<br /><span className="text-[#f4eb24]" style={{ WebkitTextStroke: '1px #211d1b' }}>Clientes Dizem</span>
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card bg-white p-6 border border-[#211d1b]/10"
              data-testid={`review-${index}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#f4eb24" className="text-[#f4eb24]" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-[#211d1b]/80 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              {/* Author */}
              <p className="font-bold text-[#211d1b]">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-[#211d1b] text-[#eaebea] pt-24 pb-32 md:pb-12" data-testid="footer">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Logo and Company Name */}
        <div className="text-center mb-16">
          <img 
            src={ASSETS.logo} 
            alt="Auto Socorro Goianápolis" 
            className="h-20 md:h-24 mx-auto mb-6"
          />
          <h3 className="font-['Oswald'] text-xl md:text-2xl font-bold uppercase tracking-wider">
            Auto Socorro Goianápolis<br />e Agro Serviços LTDA
          </h3>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          {/* Phone 1 */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <Phone size={24} className="text-[#f4eb24]" />
            <a 
              href={`tel:+${PHONE_1}`} 
              className="text-lg hover:text-[#f4eb24] transition-colors"
              data-testid="footer-phone-1"
            >
              {PHONE_DISPLAY_1}
            </a>
          </div>

          {/* Phone 2 */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <Phone size={24} className="text-[#f4eb24]" />
            <a 
              href={`tel:+${PHONE_2}`} 
              className="text-lg hover:text-[#f4eb24] transition-colors"
              data-testid="footer-phone-2"
            >
              {PHONE_DISPLAY_2}
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <MapPin size={24} className="text-[#f4eb24]" />
            <span className="text-lg">Goianápolis - GO</span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center lg:items-start gap-2">
            <Clock size={24} className="text-[#f4eb24]" />
            <span className="text-lg">Atendimento 24 horas</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#eaebea]/10 mt-16 pt-8">
          <p className="text-center text-[#eaebea]/60 text-sm">
            © {new Date().getFullYear()} Auto Socorro Goianápolis e Agro Serviços LTDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Floating Action Buttons
const FloatingActions = () => {
  return (
    <>
      {/* Mobile Fixed Bottom Bar */}
      <div 
        className="mobile-bottom-bar fixed bottom-0 left-0 w-full z-50 flex border-t border-[#211d1b]/20 lg:hidden"
        data-testid="mobile-bottom-bar"
      >
        <a
          href={`tel:+${PHONE_1}`}
          className="w-1/2 bg-[#211d1b] text-[#f4eb24] font-bold uppercase tracking-widest py-5 flex items-center justify-center gap-2"
          data-testid="mobile-call-btn"
        >
          <Phone size={20} />
          <span>Ligar</span>
        </a>
        <a
          href={`https://wa.me/${PHONE_1}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/2 bg-[#25D366] text-white font-bold uppercase tracking-widest py-5 flex items-center justify-center gap-2"
          data-testid="mobile-whatsapp-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${PHONE_1}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pulse-animation fixed bottom-8 right-8 z-50 hidden lg:flex w-16 h-16 bg-[#25D366] rounded-full items-center justify-center text-white shadow-lg hover:bg-[#1da851] transition-colors bounce-animation"
        data-testid="desktop-whatsapp-btn"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DifferentiatorsSection />
        <GallerySection />
        <CoverageAreaSection />
        <EmergencyCallSection />
        <ReviewsSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);
  return (
    <div
      className="min-h-screen pt-20"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-8 backdrop-blur-md border-b border-opacity-20 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          background: "rgba(240, 237, 228, 0.95)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/vanaheim-logo.png"
            alt="Vanaheim Software Development"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1
              className="text-xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              VANAHEIM
            </h1>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              SOFTWARE DEVELOPMENT
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a
            href="#services"
            className="hover:opacity-70 transition-opacity"
            style={{ color: "var(--primary)" }}
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:opacity-70 transition-opacity"
            style={{ color: "var(--primary)" }}
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:opacity-70 transition-opacity"
            style={{ color: "var(--primary)" }}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 md:px-8 py-16 md:py-24 section-with-logo">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex justify-center">
            <Image
              src="/vanaheim-logo.png"
              alt="Vanaheim Tree Logo"
              width={240}
              height={240}
              className="hero-logo"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Growing Digital Solutions
          </h2>
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Professional software development services that grow with your
            business. From concept to deployment, I create robust, scalable
            solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Start Your Project
            </a>
            <a href="#services" className="btn-outline">
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="px-6 md:px-8 py-16 md:py-24"
        style={{ background: "var(--card-background)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: "var(--accent)" }}
              >
                <span className="text-2xl text-white">🌐</span>
              </div>
              <h4
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--primary)" }}
              >
                Web Applications
              </h4>
              <p style={{ color: "var(--text-muted)" }}>
                Modern, responsive web applications built with cutting-edge
                technologies. From simple websites to complex web platforms.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: "var(--accent)" }}
              >
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h4
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--primary)" }}
              >
                Courses & Workshops
              </h4>
              <p style={{ color: "var(--text-muted)" }}>
                Comprehensive programming courses and hands-on workshops to grow
                your development skills. From beginner fundamentals to advanced
                techniques.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ background: "var(--accent)" }}
              >
                <span className="text-2xl text-white">⚙️</span>
              </div>
              <h4
                className="text-xl font-semibold mb-3"
                style={{ color: "var(--primary)" }}
              >
                Custom Software
              </h4>
              <p style={{ color: "var(--text-muted)" }}>
                Tailored software solutions designed to solve your specific
                business challenges and streamline your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            About Vanaheim
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-lg mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                Like the mighty tree in our logo, great software grows from
                strong roots. With deep expertise in modern technologies and a
                commitment to quality, I help businesses flourish in the digital
                landscape.
              </p>
              <p
                className="text-lg mb-6"
                style={{ color: "var(--text-muted)" }}
              >
                Every project is approached with careful planning, clean code
                practices, and a focus on long-term sustainability. Your success
                is my success.
              </p>
              <div className="flex flex-wrap gap-3">
                <span
                  className="px-3 py-1 text-sm rounded-full"
                  style={{
                    background: "var(--border)",
                    color: "var(--primary)",
                  }}
                >
                  React
                </span>
                <span
                  className="px-3 py-1 text-sm rounded-full"
                  style={{
                    background: "var(--border)",
                    color: "var(--primary)",
                  }}
                >
                  Next.js
                </span>
                <span
                  className="px-3 py-1 text-sm rounded-full"
                  style={{
                    background: "var(--border)",
                    color: "var(--primary)",
                  }}
                >
                  Vue
                </span>
                <span
                  className="px-3 py-1 text-sm rounded-full"
                  style={{
                    background: "var(--border)",
                    color: "var(--primary)",
                  }}
                >
                  TypeScript
                </span>
                <span
                  className="px-3 py-1 text-sm rounded-full"
                  style={{
                    background: "var(--border)",
                    color: "var(--primary)",
                  }}
                >
                  Python
                </span>
                <span
                  className="px-3 py-1 text-sm rounded-full"
                  style={{
                    background: "var(--border)",
                    color: "var(--primary)",
                  }}
                >
                  C#
                </span>
                <span
                  className="px-3 py-1 text-sm rounded-full"
                  style={{
                    background: "var(--border)",
                    color: "var(--primary)",
                  }}
                >
                  PHP
                </span>
                <span
                  className="px-3 py-1 text-sm rounded-full"
                  style={{
                    background: "var(--border)",
                    color: "var(--primary)",
                  }}
                >
                  Laravel
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/vanaheim-logo.png"
                  alt="Vanaheim Philosophy"
                  width={280}
                  height={280}
                  className="drop-shadow-xl opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 md:px-8 py-16 md:py-24"
        style={{ background: "var(--card-background)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            Lets Grow Together
          </h3>
          <p className="text-lg mb-8" style={{ color: "var(--text-muted)" }}>
            Ready to plant the seeds of your next digital project? Lets discuss
            how we can bring your vision to life.
          </p>
          <div className="card p-8 max-w-2xl mx-auto">
            <p className="text-lg mb-6" style={{ color: "var(--primary)" }}>
              Contact me to discuss your project requirements and get a
              personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@vanaheim.dev" className="btn-primary">
                Send Email
              </a>
              <a href="#" className="btn-outline">
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center px-6 md:px-8 py-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Image
            src="/vanaheim-logo.png"
            alt="Vanaheim"
            width={24}
            height={24}
            className="opacity-80"
          />
          <span style={{ color: "var(--primary)" }}>
            VANAHEIM SOFTWARE DEVELOPMENT
          </span>
        </div>
        <p style={{ color: "var(--text-muted)" }}>
          © 2025 Vanaheim Software Development. Growing digital solutions with
          deep roots.
        </p>
      </footer>
    </div>
  );
}

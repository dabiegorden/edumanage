"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  BookOpen,
  Users,
  UserCheck,
  Shield,
  Sparkles,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.querySelector(".navbar")?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const navbar = document.querySelector(".navbar");
    navbar?.addEventListener("mousemove", handleMouseMove);
    return () => navbar?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        isOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const userRoles = [
    { name: "Students", icon: BookOpen, gradient: "from-blue-500 to-cyan-500" },
    { name: "Teachers", icon: Users, gradient: "from-purple-500 to-pink-500" },
    {
      name: "Parents",
      icon: UserCheck,
      gradient: "from-green-500 to-emerald-500",
    },
    { name: "Admin", icon: Shield, gradient: "from-red-500 to-orange-500" },
  ];

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <nav
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80" : "bg-black/60"
      } backdrop-blur-xl border-b border-white/10`}
    >
      {/* Dynamic glow effect */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-300 hover:opacity-50"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                K.Nas
              </span>

              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white transition-all duration-300 font-medium text-lg group py-2 px-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
            ))}
          </div>

          {/* Desktop Login Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {userRoles.map((role, index) => (
              <button
                key={role.name}
                className="group relative flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-6 h-6 bg-gradient-to-r ${role.gradient} rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}
                >
                  <role.icon className="w-3 h-3 text-white" />
                </div>
                <span className="hidden lg:inline text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {role.name}
                </span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur`}
                ></div>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="menu-button group relative p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Menu
                  className={`w-6 h-6 text-gray-300 group-hover:text-white transition-all duration-300 ${
                    isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  } absolute`}
                />
                <X
                  className={`w-6 h-6 text-gray-300 group-hover:text-white transition-all duration-300 ${
                    isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                  } absolute`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu md:hidden absolute top-20 left-0 right-0 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-xl border-b border-white/10 mx-4 rounded-2xl mt-4 overflow-hidden">
          <div className="px-6 py-8 space-y-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="group flex items-center space-x-3 text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-4 transition-all duration-300"></div>
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Login Buttons */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <p className="text-sm font-semibold text-gray-400 mb-4 flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Login As:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {userRoles.map((role, index) => (
                  <button
                    key={role.name}
                    className="group relative flex flex-col items-center justify-center space-y-2 p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                    onClick={handleLinkClick}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${role.gradient} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                    >
                      <role.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {role.name}
                    </span>
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur`}
                    ></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

"use client";

import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Send,
} from "lucide-react";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setIsVisible(true);

    // Generate particles after hydration
    const generatedParticles = [...Array(8)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 5 + Math.random() * 3,
    }));
    setParticles(generatedParticles);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const footerSections = [
    {
      title: "Platform",
      links: [
        "For Students",
        "For Teachers",
        "For Parents",
        "For Administrators",
        "Features",
        "Pricing",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "API Reference",
        "Help Center",
        "Video Tutorials",
        "Webinars",
        "Blog",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press Kit",
        "Partners",
        "Success Stories",
        "Contact",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Community Forum",
        "System Status",
        "Security",
        "Privacy Policy",
        "Terms of Service",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "hello@edumanagepro.com",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      gradient: "from-green-400 to-emerald-400",
    },
    {
      icon: MapPin,
      text: "123 Education St, Learning City, LC 12345",
      gradient: "from-purple-400 to-pink-400",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      gradient: "from-blue-600 to-blue-500",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      gradient: "from-sky-500 to-blue-400",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      gradient: "from-blue-700 to-blue-600",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      gradient: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <footer id="contact" className="relative bg-black overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 35%, rgba(16, 185, 129, 0.1) 70%, transparent 100%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className={`grid lg:grid-cols-6 gap-12 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="group cursor-pointer">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-black text-white">
                  EduManage
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Pro
                  </span>
                </span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg font-light hover:text-white transition-colors duration-300">
              Empowering educational institutions with comprehensive management
              solutions that connect students, teachers, parents, and
              administrators in one powerful platform.
            </p>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-4 cursor-pointer"
                >
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                  >
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6 group">
              <div className="relative">
                <h3 className="text-xl font-bold text-white">
                  {section.title}
                </h3>
                {/* <div
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${section.gradient} group-hover:w-full transition-all duration-500`}
                ></div> */}
              </div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-300 relative group/link inline-block font-medium"
                    >
                      <span className="relative z-10">{link}</span>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover/link:opacity-10 rounded transition-opacity duration-300`}
                      ></div>
                      <ArrowRight className="w-4 h-4 inline-block ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div
            className={`flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 gap-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                Stay
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent ml-2">
                  Updated
                </span>
              </h3>
              <p className="text-gray-300 text-lg font-light">
                Get the latest updates and educational insights delivered to
                your inbox.
              </p>
            </div>

            <div className="flex w-full md:w-auto space-x-4">
              <div className="relative flex-1 md:w-80">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
              <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  Subscribe
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div
            className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="text-gray-400 text-lg font-light">
              © 2024 EduManage Pro. All rights reserved.
            </div>

            <div className="flex space-x-8 text-lg">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 relative group font-medium"
                  >
                    <span className="relative z-10">{link}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 rounded transition-opacity duration-300"></div>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-15 animate-pulse"></div>
      <div
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </footer>
  );
};

export default Footer;

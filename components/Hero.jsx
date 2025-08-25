"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, BookOpen, Users, BarChart3, Sparkles } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);

    // Generate particles after hydration to avoid mismatch
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 3,
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

  const stats = [
    {
      number: "2,500+",
      label: "Students",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "150+",
      label: "Teachers",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-8">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-50 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 35%, rgba(16, 185, 129, 0.1) 70%, transparent 100%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
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
          className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Hero text */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3 animate-spin" />
            <span className="text-sm font-semibold text-gray-300 tracking-widest uppercase">
              Next Generation Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Empowering
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Education
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 font-light text-gray-300">
              Through Technology
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            A comprehensive school management system designed for modern
            education.
            <span className="block mt-2 text-blue-400 font-medium">
              Connect students, teachers, parents, and administrators in one
              powerful platform.
            </span>
          </p>

          {/* CTA Button */}
          <div className="mb-20">
            <button className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                Get Started Today
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-25 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-40 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-gray-400 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mb-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
          <span className="text-sm font-medium">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

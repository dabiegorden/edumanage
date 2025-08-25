"use client";

import React, { useState, useEffect } from "react";
import { Target, Eye, Award, Users, ArrowRight } from "lucide-react";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);

    // Generate particles after hydration
    const generatedParticles = [...Array(12)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 4 + Math.random() * 3,
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

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To revolutionize education through innovative technology that connects, empowers, and inspires learning communities.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "Creating a world where quality education is accessible, engaging, and transformative for every learner.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Our Excellence",
      description:
        "Committed to delivering exceptional educational technology solutions that exceed expectations and drive success.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Our Community",
      description:
        "Building strong partnerships between educators, students, parents, and administrators for collective growth.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const achievements = [
    {
      number: "10+",
      label: "Years Experience",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      number: "500+",
      label: "Schools Served",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "100K+",
      label: "Students Impacted",
      gradient: "from-green-400 to-blue-500",
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black py-20 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 35%, rgba(16, 185, 129, 0.1) 70%, transparent 100%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
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
          className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight flex items-center gap-2 justify-center">
            About
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              K.Nas
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            We are dedicated to transforming education through innovative
            technology solutions that bring together the entire school
            community.
            <span className="block mt-2 text-cyan-400 font-medium">
              Empowering the future of learning.
            </span>
          </p>
        </div>

        {/* Story Section */}
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center mb-32 transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Empowering Education
              <span className="block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Since 2014
              </span>
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
              <p className="hover:text-white transition-colors duration-300">
                K.Nas was born from a simple yet powerful vision: to create a
                comprehensive school management system that truly understands
                the needs of modern education.
              </p>
              <p className="hover:text-white transition-colors duration-300">
                Our team of educators and technologists came together to build a
                platform that doesn't just manage data, but creates meaningful
                connections between students, teachers, parents, and
                administrators.
              </p>
              <p className="hover:text-white transition-colors duration-300">
                Today, we're proud to serve hundreds of educational institutions
                worldwide, helping them streamline operations, enhance
                communication, and improve educational outcomes.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 text-center">
                  <div className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors duration-300">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative text-center space-y-6 cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="flex items-center justify-center mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  >
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl text-center transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Ready to Transform
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Your School?
                </span>
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
                Join thousands of educators who trust K. Nas Pro for their
                school management needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {/* <button className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-black bg-white rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center group-hover:text-white transition-colors duration-300">
                    Schedule a Demo
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button> */}
                <button className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-white/5 backdrop-blur-xl rounded-full border-2 border-white/20 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black">
                  <span className="relative flex items-center">
                    Contact Sales
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-36 h-36 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-25 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-44 h-44 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-10 w-28 h-28 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default About;

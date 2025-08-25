"use client";

import { useState, useEffect } from "react";
import {
  BookOpen,
  Users,
  UserCheck,
  Shield,
  Calendar,
  BarChart3,
  MessageSquare,
  Award,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const Features = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsVisible(true);

    // Generate particles after hydration
    const generatedParticles = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 3 + Math.random() * 4,
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

  const userTypes = [
    {
      title: "For Students",
      description:
        "Access courses, submit assignments, track progress, and connect with peers in an intuitive learning environment.",
      image: "/assets/students-learning.jpg",
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Course enrollment and management",
        "Assignment submission portal",
        "Grade tracking and analytics",
        "Interactive discussion forums",
        "Resource library access",
        "Calendar and scheduling",
      ],
    },
    {
      title: "For Teachers",
      description:
        "Create engaging courses, manage student progress, and streamline your teaching workflow with powerful tools.",
      image: "/assets/teacher-classroom.jpg",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Course creation and management",
        "Student assessment tools",
        "Grade book management",
        "Attendance tracking",
        "Communication tools",
        "Progress analytics",
      ],
    },
    {
      title: "For Parents",
      description:
        "Stay connected with your child's educational journey through real-time updates and comprehensive insights.",
      image: "/assets/parent-child.jpg",
      icon: UserCheck,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Real-time progress monitoring",
        "Attendance notifications",
        "Grade reports and analytics",
        "Teacher communication",
        "Event and schedule updates",
        "Behavioral reports",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Admin Dashboard",
      description:
        "Comprehensive administrative tools for managing the entire school ecosystem.",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Automated timetable generation and resource allocation optimization.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Data-driven insights to improve educational outcomes and institutional efficiency.",
      gradient: "from-green-400 to-blue-500",
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description:
        "Seamless communication between all stakeholders in the education process.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Award,
      title: "Achievement Tracking",
      description:
        "Recognition and reward system to motivate student excellence.",
      gradient: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section
      id="features"
      className="relative min-h-screen bg-black py-20 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-40 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.15) 35%, rgba(16, 185, 129, 0.1) 70%, transparent 100%)`,
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
          className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"
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
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Designed for
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Every Role
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Our comprehensive platform caters to the unique needs of students,
            teachers, parents, and administrators.
            <span className="block mt-2 text-purple-400 font-medium">
              Seamlessly integrated for maximum efficiency.
            </span>
          </p>
        </div>

        {/* User Type Features */}
        <div className="space-y-32 mb-32">
          {userTypes.map((userType, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-16 transition-all duration-1000 delay-${
                index * 200
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {/* Image */}
              <div className="flex-1 group">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500 group-hover:scale-105">
                    <Image
                      src={userType.image || "/placeholder.svg"}
                      alt={userType.title}
                      width={600}
                      height={320}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="absolute top-6 left-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${userType.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                    >
                      <userType.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${userType.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                  ></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                    {userType.title}
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed font-light">
                    {userType.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {userType.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 group cursor-default"
                    >
                      <div
                        className={`w-3 h-3 bg-gradient-to-r ${userType.gradient} rounded-full shadow-lg group-hover:shadow-xl group-hover:scale-125 transition-all duration-300`}
                      />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/5 backdrop-blur-xl rounded-full border border-white/10 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-2xl">
                  <span
                    className={`absolute inset-0 bg-gradient-to-r ${userType.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></span>
                  <span className="relative flex items-center">
                    Explore {userType.title.split(" ")[1]} Features
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div
          className={`bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Additional
              <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Features
              </span>
            </h3>
            <p className="text-xl text-gray-300 font-light">
              Comprehensive tools to enhance the educational experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed font-light group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-15 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl opacity-25 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Features;

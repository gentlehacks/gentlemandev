"use client"
import { useState } from "react";
import About from "@/components/About"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import Services from "@/components/Services"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <div className="w-full flex-1 flex-col w-full text-gray-100">
      <Header />
      <HeroSection />
      <Services />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
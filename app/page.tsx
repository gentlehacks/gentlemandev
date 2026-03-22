"use client"
import { useState } from "react";
import About from "@/components/About"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import MobileMenu from "@/components/MobileMenu";
import { AnimatePresence } from "motion/react";

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  return (
    <div className="w-full flex-1 flex-col w-full text-gray-100">
      <Header
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <AnimatePresence>


        {showMobileMenu && (
          <MobileMenu
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
          />
        )}
      </AnimatePresence>
      <HeroSection />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
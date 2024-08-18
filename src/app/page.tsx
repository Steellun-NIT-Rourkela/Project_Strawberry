
"use client";

import React, { useEffect } from 'react';
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "../app/components/Navbar";
import About from './components/About';
import Team from './components/Team';
import GI from './components/GI';
import Edge from './components/Edge';

export default function Home() {
  useEffect(() => {
    // Optional: Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <Hero />
     
     
      <section id="about">
        <About/>
      </section>
      <section id="gi">
        <GI />
      </section>
      <section id="edge">
        <Edge />
      </section>
      <section id="team">
        <Team />
      </section>
     
      <section id="contact">
        <Contact />
      </section>
      
      
      <Footer />
    </div>
  );
}



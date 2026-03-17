import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import aboutArt from "../assets/about-art2.jpg";
import ctaTexture from "../assets/cta-texture.jpg";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-bg-light">
      {/* Abstract Background Textures */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={aboutArt}
          className="absolute -top-[10%] -left-[10%] w-[60%] opacity-[0.03] blur-3xl rotate-12"
          alt=""
        />
        <img
          src={ctaTexture}
          className="absolute top-[40%] -right-[10%] w-[50%] opacity-[0.03] blur-2xl -rotate-6"
          alt=""
        />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};

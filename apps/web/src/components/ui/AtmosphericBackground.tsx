"use client";

import React from "react";
import { motion } from "framer-motion";

export function AtmosphericBackground() {
  return (
    <div className="atmos-bg pointer-events-none">
      <div className="atmos-glow" />
      <div className="atmos-wave opacity-30" />
      
      {/* Subtle light lines/waves */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#AAC0E1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M-100 200 C 200 100, 400 300, 800 200 S 1200 100, 1600 200"
          stroke="url(#line-grad)"
          strokeWidth="1"
          fill="transparent"
          animate={{
            d: [
              "M-100 200 C 200 100, 400 300, 800 200 S 1200 100, 1600 200",
              "M-100 250 C 200 150, 400 350, 800 250 S 1200 150, 1600 250",
              "M-100 200 C 200 100, 400 300, 800 200 S 1200 100, 1600 200",
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Soft glowing bubbles/clouds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full blur-[100px] opacity-10"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.15, 0.05],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

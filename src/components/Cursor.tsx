"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    // Only run on devices with a fine pointer (desktop)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering an interactive element
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("magnetic")
      ) {
        setIsHovering(true);
        setHoverText("");
      } 
      // Check if hovering an image/gallery item
      else if (
        target.tagName.toLowerCase() === "img" ||
        target.classList.contains("explore-hover")
      ) {
        setIsHovering(true);
        setHoverText("EXPLORE");
      } 
      else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Don't render cursor on touch devices
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      width: 8,
      height: 8,
      backgroundColor: "var(--color-gold)",
      mixBlendMode: "normal" as const,
    },
    hover: {
      x: mousePosition.x - (hoverText ? 40 : 30),
      y: mousePosition.y - (hoverText ? 40 : 30),
      width: hoverText ? 80 : 60,
      height: hoverText ? 80 : 60,
      backgroundColor: hoverText ? "var(--color-gold)" : "transparent",
      border: hoverText ? "none" : "1px solid var(--color-gold)",
      mixBlendMode: hoverText ? "normal" as const : "difference" as const,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] flex items-center justify-center text-primary-dark font-sans text-[10px] tracking-widest uppercase font-semibold"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 15, 
          mass: 0.1 
        }}
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rich_black: {
          DEFAULT: "#02111b",
          100: "#000406",
          200: "#01070b",
          300: "#010b11",
          400: "#020e17",
          500: "#02111b",
          600: "#094a76",
          700: "#1082cf",
          800: "#4db0f2",
          900: "#a6d7f8",
        },
        onyx: {
          DEFAULT: "#3f4045",
          100: "#0d0d0e",
          200: "#191a1c",
          300: "#26262a",
          400: "#323338",
          500: "#3f4045",
          600: "#63656d",
          700: "#888a93",
          800: "#b0b1b7",
          900: "#d7d8db",
        },
        raisin_black: {
          DEFAULT: "#30292f",
          100: "#090809",
          200: "#131012",
          300: "#1c181b",
          400: "#252025",
          500: "#30292f",
          600: "#5d4f5a",
          700: "#8a7687",
          800: "#b1a4af",
          900: "#d8d1d7",
        },
        paynes_gray: {
          DEFAULT: "#5d737e",
          100: "#15161C",
          150: "#1C1E26",
          200: "#252e32",
          300: "#38454c",
          400: "#4b5c65",
          500: "#5d737e",
          600: "#79919c",
          700: "#9bacb5",
          800: "#bcc8ce",
          900: "#dee3e6",
        },
        white: {
          DEFAULT: "#fcfcfc",
          100: "#323232",
          200: "#656565",
          300: "#979797",
          400: "#cacaca",
          500: "#fcfcfc",
          600: "#fdfdfd",
          700: "#fdfdfd",
          800: "#fefefe",
          900: "#fefefe",
        },
      },
      keyframes: {
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-6px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        accordionOpen: {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionClose: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0px" },
        },
        dialogOverlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        dialogContentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -45%) scale(0.95)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
        drawerSlideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        drawerSlideRightAndFade: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(100%)" },
        },
      },
    },
    animation: {
      hide: "hide 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideDownAndFade: "slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideLeftAndFade: "slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideUpAndFade: "slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      slideRightAndFade:
        "slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      // Accordion
      accordionOpen: "accordionOpen 150ms cubic-bezier(0.87, 0, 0.13, 1)",
      accordionClose: "accordionClose 150ms cubic-bezier(0.87, 0, 0.13, 1)",
      // Dialog
      dialogOverlayShow:
        "dialogOverlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      dialogContentShow:
        "dialogContentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      // Drawer
      drawerSlideLeftAndFade:
        "drawerSlideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      drawerSlideRightAndFade: "drawerSlideRightAndFade 150ms ease-in",
    },
    plugins: [forms],
  },
} satisfies Config;

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                "2xl": "1400px",
            },
        },
        fontFamily: {
            sans: ["var(--font-roboto)", ...fontFamily.sans],
            display: ["var(--font-lora)", "serif"],
        },
        fontSize: {
            "3xs": "0.5rem", // 8px
            "2xs": "0.625rem", // 10px
            xs: "0.75rem", // 12px
            sm: "0.875rem", // 14px
            md: "1rem", // 16px
            lg: "1.125rem", // 18px
            xl: "1.25rem", // 20px
            "2xl": "1.5rem", // 24px
            "3xl": "1.875rem", // 30px
            "4xl": "2.25rem", // 36px
            "5xl": "3rem", // 48px
            "6xl": "3.75rem", // 60px
            "7xl": "4.5rem", // 72px
            "8xl": "6rem", // 96px
            "9xl": "8rem", // 128px
        },
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: {
                    DEFAULT: "hsl(var(--foreground))",
                    light: "hsl(var(--foreground-light))",
                },
                heading: "hsl(var(--heading))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "bounce-skills": {
                    "0%": {
                        transform: "translate(0)",
                    },
                    "20%": {
                        transform: "translateY(-6px)",
                    },
                    "40%": {
                        transform: "translate(0)",
                    },
                    "60%": {
                        transform: "translateY(-3px)",
                    },
                    "80%": {
                        transform: "translate(0)",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "bounce-skills": "bounce-skills 0.6s",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

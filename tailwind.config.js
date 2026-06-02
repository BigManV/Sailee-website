export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: "hsl(var(--card))",
                "card-foreground": "hsl(var(--card-foreground))",
                primary: "hsl(var(--primary))",
                "primary-foreground": "hsl(var(--primary-foreground))",
                secondary: "hsl(var(--secondary))",
                "secondary-foreground": "hsl(var(--secondary-foreground))",
                muted: "hsl(var(--muted))",
                "muted-foreground": "hsl(var(--muted-foreground))",
                accent: "hsl(var(--accent))",
                "accent-foreground": "hsl(var(--accent-foreground))",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))"
            },
            borderRadius: {
                lg: "1rem",
                xl: "1.5rem",
                "2xl": "2rem"
            },
            boxShadow: {
                glow: "0 20px 60px rgba(37, 99, 235, 0.18)"
            },
            animation: {
                marquee: "marquee 40s linear infinite",
                aurora: "aurora 24s linear infinite",
                blink: "blink 1s step-end infinite",
                float: "float 6s ease-in-out infinite"
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(calc(-50% - 0.5rem))" }
                },
                aurora: {
                    "0%": { backgroundPosition: "50% 50%, 50% 50%" },
                    "50%": { backgroundPosition: "350% 50%, 350% 50%" },
                    "100%": { backgroundPosition: "50% 50%, 50% 50%" }
                },
                blink: {
                    "50%": { opacity: "0" }
                },
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" }
                }
            },
            fontFamily: {
                sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
            }
        }
    },
    plugins: []
};

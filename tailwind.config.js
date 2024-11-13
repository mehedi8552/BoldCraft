/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
			},
			fontFamily: {
				primary: ['var(--font-family-primary)', 'sans-serif'],
			},
			borderRadius: {
				sm: 'var(--border-radius-sm)',
				md: 'var(--border-radius-md)',
				lg: 'var(--border-radius-lg)',
			},
			boxShadow: {
				sm: 'var(--shadow-sm)',
				md: 'var(--shadow-md)',
				lg: 'var(--shadow-lg)',
			},
			backgroundImage: {
				'footer': "url('/src/assets/image/footer-bg.jpg')",
				'footer-pattern': "url('/src/assets/image/footer-pattern.png')",
				'page-header': "url('/src/assets/image/page-header-bg.jpg')",
				'portfolio-bg': "url('/src/assets/image/portfolio-bg.png')",
				'banner': "url('/src/assets/image/bg-image-1.jpg')",
				'banner-service': "url('/src/assets/image/bg-image-2.jpg')",
				'service-pattern': "url('/src/assets/image/service-bg-pattern.png')",
			},
			screens: {
				'xl': '1200px',
				'lg': '992px',
				'md': '768px',
				'sm': '576px',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("tailwindcss"),
		function ({ addUtilities }) {
			addUtilities({
				'.text-stroke': {
					'-webkit-text-stroke': '1px #000',
				},
				'.group-hover\\:text-stroke-orange:hover': {
					'-webkit-text-stroke': '1px #ff5c00',
				},
			});
		},
	],
}


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
			  'infinite-scroll': 'infinite-scroll 15s linear infinite',
			  'zoomIn': 'zoomIn 0.2s ease-out forwards',
			  'zoomOut': 'zoomOut 0.3s ease-out forwards',
			  'slidein': "slidein 1s ease forwards",
			  'slidein100': "slidein 1s ease 100ms forwards",
			  'slidein200': "slidein 1s ease 200ms forwards",
			  'slidein300': "slidein 1s ease 300ms forwards",
			  'slidein400': "slidein 1s ease 400ms forwards",
			  'slidein500': "slidein 1s ease 400ms forwards",
			},
			keyframes: {
			  'infinite-scroll': {
				from: { transform: 'translateX(0)' },
				to: { transform: 'translateX(-100%)' },
			  },
			  'zoomIn': {
				from: { transform: 'scale(1)' },
				to: { transform: 'scale(1.05)' },
			  },
			  'zoomOut': {
				from: { transform: 'scale(1.05)' },
				to: { transform: 'scale(1)' },
			  },
			  'slidein': {
				from: {
				  opacity: '0',
				  transform: 'translateY(-20px)',
				},
				to: {
				  opacity: '1',
				  transform: 'translateY(0)',
				},
			  },	  
			},
			colors: {
				'primary': '#A587E6',
				'secondary': '#F7C36E'
			}
		},
	},
	plugins: [
        require('flowbite/plugin')
    ]
}

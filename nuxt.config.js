export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'wunschauto',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap',
			},
		]
	},

  // Global CSS: https://go.nuxtjs.dev/config-css
	css: [
			{
				src: '@/assets/styles/main.scss',
			}
	],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{
			src: '@/plugins/vue-awesome-swiper',
			mode: 'client'
		},
	],

  // Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module'
	],

  // Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios'
	],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}

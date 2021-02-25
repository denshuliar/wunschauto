const payloadShared = {
	section_navbar: {
		image: {
			url: 'https://wunschauto.onrender.com/_nuxt/img/logowhite.0698d1e.png',
			page_links: [
			{
				title: 'Leistungen'
			},
			{
				title: 'FAQs'
			},
			{
				title: 'Über mich'
			},
			],
			button: 'Kontakt'
		}
	},
	section_footer: {
		image: {
			url: 'https://wunschauto.onrender.com/_nuxt/img/footerlogo.b4e19b6.png'
		},
		title: 'Wunschauto ist Ihre Plattform für einen reibungslosen Autokauf- und verkauf',
		page_links: [
			{
				title: 'Über uns',
			},
			{
				title: 'Leistungen',
			},
			{
				title: 'FAQs',
			},
			{
				title: 'Kontakt',
			},
		],
		legal_links: [
			{
				title: 'AGB'
			},
			{
				title: 'Datenschutz'
			},
			{
				title: 'Impressum'
			},
		]
	}
  }

const getPayloadShared = () => {
	return payloadShared
}

export default {
	getPayloadShared
}
<template>
    <div>
		<AppHeader :payload="payloadHome" />

        <HomeSectionPromo :payload="payloadHome" />
        <HomeSectionReferenzen :payload="payloadHome" />
        <HomeSectionBenefits :payload="payloadHome" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	async asyncData ({ store }) {
		await store.dispatch('payload-home/getPayloadHome')
	},

	computed: {
		...mapGetters({
			payloadHome: 'payload-home/payloadHome',
		})
	},
}
</script>

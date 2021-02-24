<template>
    <div class="container">
        <HomeSectionPromo
			:payload="payloadHome.section_contact"
		/>

        <HomeSectionCredentials
			:payload="payloadHome.section_contact"
		/>

        <HomeSectionBenefits
			:payload="payloadHome.section_contact"
		/>
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
			payloadHome: 'payload-home/payloadHome'
		})
	},

	created () {
		console.log(this.payloadHome)
	}
}
</script>

<style lang="scss">

</style>

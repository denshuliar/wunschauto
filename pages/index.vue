<template>
    <div>
		<AppHeader
			:logo="payloadHome.section_head.image.url"
			:list="payloadHome.section_head.navigationList"
			:button-text="payloadHome.section_contact.button"
		/>

        <HomeSectionPromo
			:head="payloadHome.section_head"
			:header-button="payloadHome.section_contact.button"
		/>

        <HomeSectionReferenzen
			:referenzens="payloadHome.section_referenzen"
		/>

        <HomeSectionBenefits
			:vorteiles="payloadHome.section_vorteile"
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

<style lang="scss" scoped>

</style>

<template>
    <div>
		<AppHeader :payload="allPayloads" />

        <HomeSectionPromo :payload="payloadHome" />

        <ClientOnly>
			<HomeSectionReferenzen :payload="payloadHome" />
		</ClientOnly>

        <HomeSectionBenefits :payload="payloadHome" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters({
			payloadHome: 'payload-home/payloadHome',
			payloadShared: 'payload-shared/payloadShared',
		}),

		allPayloads () {
			return {
				...this.payloadHome,
				...this.payloadShared
			}
		},
	},
}
</script>

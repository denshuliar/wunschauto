<template>
    <section class="section HomeSectionBenefits">
        <AppSectionTitle
            color="light"
            :subtitle="vorteiles.subtitle"
            :title="vorteiles.title"
        />

        <b-container>
            <b-row>
                <b-col
                    v-for="(vorteileItem, index) in vorteiles.vorteile"
                    :key="index"
                >
                    <HomeBenefitsItem
                        :item="vorteileItem"
						:index="index"
                    />
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
	props: {
		vorteiles: {
			type: Array,
			default: () => [],
		},
	},
}
</script>

<style lang="scss" scoped>
	@import "~/assets/styles/common/variables.scss";

    .HomeSectionBenefits {
        background-color: $dark-navy
    }
</style>

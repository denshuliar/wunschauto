<template>
    <section class="section HomeSectionBenefits">
        <AppSectionTitle
            color="light"
            :subtitle="payload.section_vorteile.subtitle"
            :title="payload.section_vorteile.title"
        />

        <b-container>
            <b-row>
                <b-col
                    v-for="(item, index) in payload.section_vorteile.vorteile"
                    :key="index"
                >
                    <HomeSectionBenefitsItem
                        :item="item"
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
		payload: {
			type: Object,
			default: () => {},
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

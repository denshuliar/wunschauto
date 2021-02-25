<template>
    <section class="section HomeSectionReferenzen">
        <b-container>
            <AppSectionTitle
                :title="referenzens.title"
                :text="referenzens.subtitle"
            />

			<HomeReferenzenSwiper :referenzen="referenzens.referenzen" />
        </b-container>
    </section>
</template>

<script>
export default {
    props: {
		referenzens: {
			type: Array,
			default: () => [],
		},
	}
}
</script>

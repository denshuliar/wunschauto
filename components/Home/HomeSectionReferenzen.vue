<template>
    <section class="section HomeSectionReferenzen">
        <b-container>
            <AppSectionTitle
                :title="payload.section_referenzen.title"
                :text="payload.section_referenzen.subtitle"
            />

			<HomeSectionReferenzenSwiper :referenzen="payload.section_referenzen.referenzen" />
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
	}
}
</script>

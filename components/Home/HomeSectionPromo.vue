<template>
    <section
        class="HomeSectionPromo d-flex justify-content-center align-items-center"
        :style="{ 'background-image': 'url(' + payload.section_head.background_image.url + ')' }"
    >
        <b-container>
            <AppLogo
				class="d-flex justify-content-center"
                :path="payload.section_head.image.url"
            />

            <AppPromoTitle
                :title="payload.section_head.title"
                :subtitle="payload.section_head.subtitle"
            />

            <div class="d-flex justify-content-center top-40">
                <AppButton :text="payload.section_head.button_1" />

                <AppButton
                    :text="payload.section_head.button_2"
					color="blue"
                />
            </div>
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
    .HomeSectionPromo {
        background-repeat: no-repeat;
        background-size: cover;
        flex-direction: column;
        background-position: 50%;
        width: 100%;
        height: 800px;
        box-shadow: inset 0 0 0 2000px rgb(17 17 17 / 30%)
    }
</style>

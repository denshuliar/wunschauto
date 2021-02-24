<template>
    <header
        class="HomeSectionPromo"
        :style="{ 'background-image': 'url(' + head.background_image.url + ')' }"
    >
		<AppHeader
			:logo="head.image.url"
			:list="head.navigationList"
			:buttonText="headerButton"
		/>

        <b-container>
            <AppLogo
            class="d-flex justify-content-center"
                :path='head.image.url'
            />

            <AppPromoTitle
                :title='head.title'
                :subtitle='head.subtitle'
            />

            <div class="d-flex justify-content-around">
                <AppButton
                    :text='head.button_1'
                />

                <AppButton
                    :text='head.button_2'
                />
            </div>
        </b-container>
    </header>
</template>

<script>
export default {
    props: [
		'head',
		'headerButton'
	],

    created () {
        console.log(this.headerButton)
    }
}

</script>

<style lang="scss" scoped>
    .HomeSectionPromo {
        display: flex;
        justify-content: center;
        align-items: center;
        background-repeat: no-repeat;
        background-size: cover;
        flex-direction: column;
        background-position: 50%;
        width: 100%;
        height: 800px;
        box-shadow: inset 0 0 0 2000px rgb(17 17 17 / 30%)
    }
</style>

<template>
	<div class="AppPromoTitle text-center">
		<h1
			v-if="title"
			class="AppPromoTitle__title"
			v-html="title"
		/>

        <h5
            v-if="subtitle"
            class="AppPromoTitle__subtitle"
            v-html="subtitle"
        />
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},

		subtitle: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss" scoped>
	@import "~/assets/styles/common/variables.scss";

	.AppPromoTitle {
		&__title {
			color: $white;
			font-family: $font-primary;
			padding-top: 27px;
			font-size: 37px;
			font-style: italic;
		}

		&__subtitle {
			color: $white;
			font-family: $font-primary;
			font-size: 17px;
		}
	}
</style>

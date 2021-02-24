<template>
	<div
		class="AppPromoTitle text-center"
	>
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
			default: ''
		},
		subtitle: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss" scoped></style>

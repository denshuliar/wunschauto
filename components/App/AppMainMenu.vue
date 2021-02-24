<template>
	<ul
		class="AppMainMenu"
	>
		<AppMainMenuItem
			v-for="(item, index) in list"
			:key="index"
			:item="item"
		/>
	</ul>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style lang="scss" scoped>
	.AppMainMenu {
		display: flex;
		justify-content: space-around;
	}
</style>

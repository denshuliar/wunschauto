<template>
	<b-nav class="AppMainMenu d-flex justify-content-around">
		<AppMainMenuItem
			v-for="(item, index) in list"
			:key="index"
			:item="item"
		/>
	</b-nav>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => [],
		},
	},
}
</script>

<template>
	<ul class="AppMainMenu d-flex justify-content-around list--reset">
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
			default: () => [],
		},
	},
}
</script>

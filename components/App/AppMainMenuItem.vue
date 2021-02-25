<template>
	<b-nav-item class="AppMainMenu__item">
		<NuxtLink
			:to="item.name"
			class="AppMainMenu__link"
		>
			{{ item.name }}
		</NuxtLink>
	</b-nav-item>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			default: () => {},
		},
	},
}
</script>

<style lang="scss" scoped>
	@import "~/assets/styles/common/variables.scss";

	.AppMainMenu {
		&__item {
			font-family: $font-primary;
			padding: 0 25px;
		}

		&__link {
			font-size: 17px;
			padding: 8px;
			text-transform: uppercase;
			transition: all .3s;
			color: rgba(255, 255, 255, 0.5);

			&:hover {
				color: rgba(255, 255, 255, 0.7);
				text-decoration: none;
			}
		}
	}

	.nav-link {
		padding: 0;
	}
</style>

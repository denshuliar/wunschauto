<template>
	<li class="AppMainMenu__item">
		<NuxtLink
			:to="item.name"
			class="AppMainMenu__link"
		>
			{{ item.name }}
		</NuxtLink>
	</li>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			default: () => {}
		}
	}
}
</script>

<style lang="scss" scoped>
	.AppMainMenu {
		&__link {
			font-size: 14px;
			font-weight: 500;
			text-transform: uppercase;
			letter-spacing: .2px;
			transition: all .3s;
			&:hover {
				opacity: 0.6;
				text-decoration: none;
			}
		}
	}
	.AppMainMenu--horizontal {
		.AppMainMenu__item:not(:last-of-type) {
			margin-right: 30px;
		}
	}
	.AppMainMenu--light {
		.AppMainMenu__link {
			color: #FFFFFF;
		}
	}
	.AppMainMenu--vertical {
		.AppMainMenu__item:not(:last-of-type) {
			margin-bottom: 14px;
		}
	}
	.AppMainMenu--dark {
		.AppMainMenu__link {
			color: #0F294A;
		}
	}
	.AppHeader__fixed, .AppHeader__dark {
		.AppMainMenu__link {
			color: #0F294A;
		}
	}
</style>

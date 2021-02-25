<template>
	<button
		class="AppButton"
		:class="[
			`AppButton--${color}`,
		]"
	>
		<span>{{ text }}</span>
    </button>
</template>

<script>
export default {
    props: {
		text: {
			type: String,
			default: '',
		},

		color: {
			type: String,
			default: 'red',
		},
	}
}
</script>

<style lang="scss" scoped>
	@import "~/assets/styles/common/variables.scss";

    .AppButton {
		position: relative;
		margin: 0 15px;
		padding: 18px 60px;
		color: $white;
		font-family: $font-primary;
		text-align: center;
		text-transform: uppercase;
		overflow: hidden;
		font-size: 18px;
		border-radius: 60px;
		border: 0;
		transition: all .5s linear;
    }

	.AppButton {
		&--red {
			background: $red-gradient;
			z-index: 1;

			&::before {
				position: absolute;
				content: "";
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background: $red-gradient-invert;
				z-index: -1;
				transition: opacity .5s linear;
				opacity: 0;
			}

			&:hover::before {
				opacity: 1;
			}
		}

		&--blue {
			background-color: $dark-navy;
			transition: all .2s ease-out;
		}

		&--blue:hover {
			background-color: $navy;
		}
	}
</style>

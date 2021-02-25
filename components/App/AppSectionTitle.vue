<template>
	<div
		class="AppSectionTitle text-center"
		:class="[
			`AppSectionTitle--${color}`,
		]"
	>
		<p
			v-if="subtitle"
			class="AppSectionTitle__subtitle"
			v-html="subtitle"
		/>

		<h3
			v-if="title"
			class="AppSectionTitle__title"
			v-html="title"
		/>

        <p
            v-if="text"
            class="AppSectionTitle__text"
            v-html="text"
        />
	</div>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: 'dark',
		},

		title: {
			type: String,
			default: '',
		},

		subtitle: {
			type: String,
			default: '',
		},

		text: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss" scoped>
	@import "~/assets/styles/common/variables.scss";

	.AppSectionTitle {
		&__title {
			font-family: $font-secondary;
			padding: 20px 0 60px;
			font-size: 42px;
		}

		&__subtitle {
			font-family: $font-third;
			padding: 60px 0 0;
			font-size: 18px;
			font-weight: 600;
		}

		&__text {
			font-size: 17px;
			font-weight: 600;
		}

		&--dark {
			.AppSectionTitle__title {
				color: $dark-navy;
			}

			.AppSectionTitle__subtitle {
				color: $dark-navy;
			}

			.AppSectionTitle__text {
				color: $dark-navy;
			}
		}

		&--light {
			.AppSectionTitle__title {
				color: $white;
			}

			.AppSectionTitle__subtitle {
				color: $white;
			}

			.AppSectionTitle__text {
				color: $white;
			}
		}
	}
</style>

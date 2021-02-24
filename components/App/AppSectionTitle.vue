<template>
	<div
		class="AppSectionTitle text-center"
		:class="[
			`AppSectionTitle--${color}`,
		]"
	>
		<p
			v-if="text"
			class="AppSectionTitle__text"
			v-html="text"
		/>

		<h3
			v-if="title"
			class="AppSectionTitle__title"
			v-html="title"
		/>

        <p
            v-if="subtitle"
            class="AppSectionTitle__subtitle"
            v-html="subtitle"
        />
	</div>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			default: 'dark'
		},

		title: {
			type: String,
			default: ''
		},

		subtitle: {
			type: String,
			default: ''
		},

		text: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss" scoped>
	.AppSectionTitle {
		padding: 80px 0;
	}

	.AppSectionTitle {
		&__title {
			padding: 20px 0 60px;
			font-family: Lora, serif !important;
			font-size: 42px;
			font-weight: 500;
			color: #182540;
		}

		&__subtitle {
			padding-bottom: 30px;
			font-size: 17px;
			font-weight: 600;
			color: #182540;
		}

		&--dark {
			.AppSectionTitle__title {
				color: #182540;
			}
			.AppSectionTitle__subtitle {
				color: #182540;
			}
			.AppSectionTitle__text {
				color: #182540;
			}
		}
		&--light {
			.AppSectionTitle__title {
				color: #fff;
			}
			.AppSectionTitle__subtitle {
				color: #fff;
			}
			.AppSectionTitle__text {
				color: #fff;
			}
		}
	}
</style>

<template>
    <b-card class="HomeSectionBenefitsItem">
		<div class="d-flex align-items-center justify-content-start">
			<h4 class="HomeSectionBenefitsItem__number">
				{{ index + 1 }}
			</h4>

			<div class="HomeSectionBenefitsItem__icon">
				<b-avatar
					:src="item.image.url"
					alt="Icon"
					size="90px"
				/>
			</div>
		</div>

		<h3 class="HomeSectionBenefitsItem__title text-left">
			{{ item.title }}
		</h3>

		<p class="HomeSectionBenefitsItem__text text-left">
			{{ item.description }}
		</p>
    </b-card>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			default: () => {},
		},

		index: {
			type: Number,
			default: null,
		},
	},
}
</script>

<style lang="scss" scoped>
	@import "~/assets/styles/common/variables.scss";
	.HomeSectionBenefitsItem {
		border: none;
		background: transparent;
	}

	.HomeSectionBenefitsItem {
		&__number {
			font-family: $font-primary;
			margin-right: 8px;
			font-size: 80px;
			font-weight: 700;
			color: rgba(255, 255, 255, 0.16);
		}

		&__title {
			color: $white;
			font-family: $font-secondary;
			padding-top: 20px;
			font-weight: 500;
			font-size: 26px;
			line-height: 1.5;
		}

		&__text {
			color: $white;
			padding-top: 26px;
			font-size: 17px;
			line-height: 2;
		}
	}
</style>

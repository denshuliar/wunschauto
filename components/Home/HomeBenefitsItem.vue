<template>
    <div class="HomeBenefitsItem">
		<div class="d-flex align-items-center justify-content-start">
			<h4 class="HomeBenefitsItem__number">
				{{ index + 1 }}
			</h4>

			<div class="HomeBenefitsItem__icon">
				<b-img :src="item.image.url" alt="Icon" />
			</div>
		</div>

		<h3 class="HomeBenefitsItem__title text-left">
			{{ item.title }}
		</h3>

		<p class="HomeBenefitsItem__text text-left">
			{{ item.description }}
		</p>
    </div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			default: () => {}
		},

		index: {
			type: Number,
			default: null
		}
	}
}
</script>

<style lang="scss" scoped>
	@import "~/assets/styles/common/variables.scss";

	.HomeBenefitsItem {
		&__number {
			font-family: $font-primary;
			font-size: 80px;
			font-weight: 700;
			margin-right: 8px;
			color: rgba(255, 255, 255, 0.16);
		}

		&__title {
			color: $white;

			font-family: $font-secondary;
			font-weight: 500;
			font-size: 26px;
			padding-top: 20px;
			line-height: 1.5;
		}

		&__text {
			color: $white;
			font-size: 17px;
			line-height: 2;
			padding-top: 26px;
		}
	}
</style>

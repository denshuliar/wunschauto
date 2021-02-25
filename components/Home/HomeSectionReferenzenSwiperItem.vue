<template>
	<b-card class="HomeSectionReferenzenSwiperItem p-4">
		<div class="HomeSectionReferenzenSwiperItem__img">
			<b-avatar
				:src="item.image.url"
				alt="Cars"
				size="140px"
			/>
		</div>

		<p class="HomeSectionReferenzenSwiperItem__price">
			{{ item.price }}
		</p>

		<p class="HomeSectionReferenzenSwiperItem__model">
			{{ item.title }}
		</p>

		<p class="HomeSectionReferenzenSwiperItem__text">
			{{ item.description }}
		</p>

		<p class="HomeSectionReferenzenSwiperItem__client">
			{{ item.subtitle }}
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
	},
}
</script>

<style lang="scss" scoped>
	@import "~/assets/styles/common/variables.scss";

	.HomeSectionReferenzenSwiperItem {
		box-shadow: 0 10px 40px 0 rgba(24, 37, 64, 10%);
		border-radius: 5px;
		border: none;
	}

	.HomeSectionReferenzenSwiperItem {
		&__img {
			max-width: 140px;
			max-height: 140px;
			overflow: hidden;
			border-radius: 50%;

			img {
				width: 100%;
				height: 100%;
			}
		}

		&__price {
			font-family: $font-secondary;
			color: $dark-navy;
			padding-top: 20px;
			font-size: 26px;
		}

		&__model {
			font-family: $font-primary;
			color: $grey;
			font-size: 17px;
		}

		&__text {
			font-family: $font-primary;
			color: $dark-navy;
			padding: 30px 0;
			font-size: 17px;
			line-height: 2;
		}

		&__client {
			font-family: $font-primary;
			color: $red;
			font-size: 17px;
			font-weight: 600;
		}
	}
</style>

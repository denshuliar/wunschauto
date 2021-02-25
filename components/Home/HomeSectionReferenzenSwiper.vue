<template>
	<section class="section HomeSectionReferenzenSwiper">
		<swiper
			ref="mySwiperRef"
			class="swiper"
			:options="swiperOptions"
			:auto-update="true"
			:auto-destroy="true"
			:delete-instance-on-destroy="true"
			:cleanup-styles-on-destroy="false"
		>
			<swiper-slide
				v-for="(item, index) in referenzen"
				:key="index"
			>
				<HomeSectionReferenzenSwiperItem :item="item" />
			</swiper-slide>
		</swiper>

		<button
			class="swiper-button-prev"
			@click="swipePrevSlide"
		>
			<b-img
				src="~/assets/images/arrow-left.svg"
				fluid
				alt="Logo"
			/>
		</button>

		<button
			class="swiper-button-next"
			@click="swipeNextSlide"
		>
			<b-img
				src="~/assets/images/arrow-right.svg"
				fluid
				alt="Logo"
			/>
		</button>
	</section>
</template>

<script>
export default {
	props: {
		referenzen: {
			type: Object,
			default: () => {},
		},
	},

	data () {
		return {
			swiperOptions: {
				slidesPerView: 3,
				loop: false,
				spaceBetween: 20,
			},
		}
	},

	methods: {
		swipePrevSlide () {
			this.$refs.mySwiperRef.$swiper.slidePrev()
		},

		swipeNextSlide () {
			this.$refs.mySwiperRef.$swiper.slideNext()
		},
	},
}
</script>

<style lang="scss" scoped>
	.swiper-container {
		padding: 15px 0;
	}

	.swiper-button-prev {
		position: absolute;
		top: 50%;
		left: -50px;
		width: 30px;
		height: 30px;
		z-index: 50000000;
		border: none;
		transform: translateY(-50%);

		img {
			max-width: 100px;
			height: inherit;
		}
	}

	.swiper-button-prev::after,	.swiper-button-next::after {
		content: '';
	}

	.swiper-button-next {
		position: absolute;
		top: 50%;
		right: -50px;
		width: 30px;
		height: 30px;
		border: none;
		transform: translateY(-50%);

		img {
			max-width: 100px;
			height: inherit;
		}
	}
</style>

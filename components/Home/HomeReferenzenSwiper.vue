<template>
	<section class="section HomeReferenzenSwiper" style="height: 1000px;">
		<swiper
			v-if="showSwiper"
			class="swiper"
			ref="mySwiperRef"
			:options="swiperOption"
			:auto-update="true"
			:auto-destroy="true"
			:delete-instance-on-destroy="true"
			:cleanup-styles-on-destroy="false"
		>
			<swiper-slide
				v-for="(item, index) in referenzen"
				:key="index"
			>
				<HomeReferenzenSwiperItem :item="item" />
			</swiper-slide>
		</swiper>

		<button class="swiper-button-next" @click="swipeNext">
			<b-img src="~/assets/images/arrow-right.svg" fluid alt="Logo" />
		</button>

		<button class="swiper-button-prev" @click="swipePrev">
			<b-img src="~/assets/images/arrow-left.svg" fluid alt="Logo" />
		</button>
	</section>
</template>

<script>
export default {
	props: {
		referenzen: {
			type: Array,
			default: () => [],
		},
	},

	data () {
		return {
			showSwiper: true,
			swiperOption: {
				slidesPerView: 3,
				loop: false,
				spaceBetween: 20,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		}
	},

	methods: {
		swipeNext () {
			this.$refs.mySwiperRef.$swiper.slideNext()
		},

		swipePrev () {
			this.$refs.mySwiperRef.$swiper.slidePrev()
		}
	},
}
</script>

<style lang="scss" scoped>
	.swiper-button-prev {
		position: absolute;
		left: -50px;
		z-index: 50000000;
		top: 50%;
		transform: translateY(-50%);
		border: none;
		width: 30px;
		height: 30px;

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
		right: -50px;
		top: 50%;
		transform: translateY(-50%);
		border: none;
		width: 30px;
		height: 30px;

		img {
			max-width: 100px;
			height: inherit;
		}
	}
</style>

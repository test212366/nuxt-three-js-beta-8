<style scoped>

	.slider__item {
		margin: 14px;
		background-color: #46464654;
		border-radius: 20px;
		padding: 20px;
		 
		backdrop-filter: blur(2px);
	}
	.slider__logo {
		border: 1px solid #383838;
		border-radius: 10px;
		height: 45px;
		width: 45px;
	}
	.slider__wrapper-logo {
		display: flex;
		align-items: center;

	}
	.slider__name {
		margin-left: 15px;
		color: #fff;
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 1px;
	}
	.slider__name span {
		font-weight: 400;
		font-size: 11px;
		color: #aeaeae;
	}
	.slider__price {
		font-size: 16px;
		margin:  20px 0;
		font-weight: 600;
		letter-spacing: 1px;
		color: #fff;
	}
	.slider__statistic {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
	}
	.slider__percent {
		color: #099607;
		font-weight: 500;
		letter-spacing: 1px;
		font-size: 16px;
	}
	.slider__percent svg {
		transform: rotate(90deg);
		fill: #099607;
	}
	.change__hours {
		font-size: 12px;
		color: #aeaeae;
		margin-top: 10px;
		
	}
	.price__per {
		font-size: 16px;
		color: #fff;
		letter-spacing: 1px;
		text-align: end;
	}
	.container h4 {
		font-size: 35px;
 
		font-weight: 600;
		letter-spacing: 1px;		
		margin-bottom: 30px;
		background: linear-gradient(270deg, #9CE6B6 50.1%, #D0F29F 103.6%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	@media screen and (max-width: 1110px) { 
		.container h4 {
			font-size: 27px;
		}
	
	}
	@media screen and (max-width: 690px) {
		.container h4 {
			font-size: 23px;
		}
		.slider__name {
			font-size: 11px;
		}
		.slider__name span {
			font-size: 9px;
		}
		.slider__logo {
			height: 35px;
			width: 35px;
		}
		.slider__price {
			font-size: 13px;
			margin-top: 6px;
			margin-bottom: 8px;
		}
		.slider__percent {
			font-size: 12px;
		}
		.slider__percent svg {
			height: 8px;
			width: 8px;
		}
		.change__hours {
			font-size: 10px;
		}
		.price__per {
			font-size: 11px;
		}
	}

</style>


<template>
	<section>
		<div class="container">
			<h4>
				Top Crypto Now
			</h4>
		</div>
		<Swiper
			:modules="[SwiperAutoplay, SwiperEffectCreative]"
			:slides-per-view="1.3"
			:loop="true"
			:centeredSlides="true"
			:autoplay="{
				delay: 8000,
				disableOnInteraction: true,
			}"
			:breakpoints="{ 1270: {slidesPerView:4.5}, 1110: {slidesPerView: 3.7},900: {slidesPerView: 3.2}, 600: {slidesPerView: 2.6}, 440: {slidesPerView: 1.6} } "


			:creative-effect="{
				prev: {
				shadow: false,
				translate: ['-20%', 0, -1],
				},
				next: {
				translate: ['100%', 0, 0],
				},
			}"
		>
		<SwiperSlide v-for="slide in 16" :key="slide">
			<div class="slider__item">
				<div class="slider__wrapper-logo">
					<div class="slider__logo">

					</div>
					<p class="slider__name">BTC <span>(Bitcoin)</span> </p>

				</div>
				<p class="slider__price">$62.554.396.339</p>
				<div class="slider__statistic">
					<div>
						<p class="slider__percent">(-7.25%) <svg fill="#000000" height="12px" width="12px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
							viewBox="0 0 242.132 242.132" xml:space="preserve">
						<path id="XMLID_238_" d="M237.738,216.525L89.246,68.033l42.426-42.426c4.29-4.29,5.573-10.742,3.252-16.347
							C132.602,3.655,127.132,0,121.065,0H15C6.716,0,0,6.716,0,15v106.066c0,6.067,3.655,11.537,9.26,13.858
							c1.856,0.769,3.805,1.142,5.737,1.142c3.904,0,7.741-1.524,10.61-4.394l42.427-42.427l148.492,148.492
							c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.607-4.394C243.596,231.88,243.596,222.383,237.738,216.525z M30,30
							h54.853L57.429,57.424c0,0.001-0.001,0.001-0.002,0.002c-0.001,0.001-0.002,0.002-0.003,0.002L30,84.853V30z"/>
						</svg></p>
						<p class="change__hours">24H Change</p>
					</div>
					<div>
						<p class="price__per">$2.700</p>
						<p class="change__hours">24H Volume</p>
					</div>

				</div>
				<Graph/>
			</div>
		
		</SwiperSlide>
	</Swiper>

	</section>

</template>


<script >

</script>

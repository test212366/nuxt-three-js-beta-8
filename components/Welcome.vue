<script lang="ts">

</script>

<template> 
	<section class="social">

		<p>Instagram</p>
		<p>Facebook</p>
		<p>Telegram</p>
		<p>Vkontacte</p>
	</section>
	<section class="welcome">
		<div class="welcome__wrapper">
			<h1>FASTEST Way Follow Markets.</h1>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo corporis voluptatibus suscipit! Vitae est, et nam perferendis harum minima perferendis harum minima    </p>
			<button class="header__connnect-wall"> Connect Wallet</button>
		</div>
		<div class="down__mouse">
			<svg  width="30" height="46" viewBox="0 0 20 36" fill="#b6b6b6" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10V26C18 30.4183 14.4183 34 10 34C5.58172 34 2 30.4183 2 26V10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10V26C20 31.5228 15.5228 36 10 36C4.47715 36 0 31.5228 0 26V10ZM10.8108 19.2676H9.18918V30.4225H10.8108V19.2676Z" fill="#b6b6b6"/>
			</svg>
			<div class="mouse__text">
				<p>Scroll Down</p>
				<p>TO DISCOVER MORE</p>
			</div>
		</div>
		


	</section>


</template>


<style scoped>
	.welcome h1 {
		font-size: 56px;
		background: linear-gradient(270deg, #9CE6B6 50.1%, #D0F29F 103.6%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		/* color: #fff; */
		max-width: 620px;
		line-height: 80px;
		font-weight: 600;
		letter-spacing: 1.5px;
	}
	
	.welcome__wrapper {
		margin-top: 200px;
	}
	.welcome__wrapper p {
		margin-top: 40px;
		line-height: 25px;
		font-size: 14px;
		max-width: 550px;
		color: #b6b6b6;
	}
	.welcome {
		position: relative;
		height: 80vh;
	}
	.social {
		position: absolute;
		left: -60px;
		bottom: 30%;
		transform: rotate(-90deg) translateY(-50%);
		display: flex;
		color: #b6b6b6;
	}

	.social p {
		font-size: 12px;
		margin-left: 20px;
	}
	.down__mouse {
		position: absolute;
		left: 0;
		bottom: 150px;
		display: flex;
		align-items: center;

	}
	.header__connnect-wall {
		padding: 17px 24px;
		border-radius: 15px;
		background: linear-gradient(270deg, #9CE6B6 50.1%, #D0F29F 103.6%);
		margin-top: 60px;
		border: none;
 
		color: #000000;
		font-weight: 600;
		display: flex;
		align-items: center;
		font-size: 13px;
	}
	.mouse__text {
		margin-left: 15px;
	}
 
	.mouse__text p:first-child {
		color: #b6b6b6;
		font-size: 15px;
		font-weight: 600;
	}
	.mouse__text p:last-child {
		color: #606060;
		font-size: 10px;
		margin-top: 5px;
		font-weight: 600;
	}


	@media screen and (max-width: 1480px) {
		.social {
			left: -130px;
		}
	}
	@media screen and (max-width: 1110px) { 
		.welcome h1 {
			font-size: 45px;
			line-height: 58px;
			max-width: 500px;
		}
		.social {
			left: -113px;
		}
		.social p {
			font-size: 10px;
		}
		.welcome__wrapper p {
			font-size: 12px;
			max-width: 500px;
			line-height: 25px;
		}
		.header__connnect-wall {
			font-size: 12px;
		}
		.down__mouse svg {
			height: 36px;
			width: 20px;
		}
		.mouse__text p:first-child {
			font-size: 12px;
		}
		.mouse__text p:nth-child(2) {
			font-size: 8px;
		}
	}
	@media screen and (max-width: 690px) {
		.welcome__wrapper h1 {
			font-size: 35px;
			max-width: 400px;
			line-height: 50px;
			margin-bottom: 0px;
		}
		.welcome__wrapper p {
			font-size: 11px;
			max-width: 400px;
			line-height: 20px;
			margin-top: 25px;
			/* margin-bottom: 24px; */
		}
		.header__connnect-wall {
			font-size: 10px;
		}
	}
	@media screen and (max-width: 440px) {
		.social {
			left: unset;
			right: -120px;
			transform: rotate(90deg);
		}
	}
</style>
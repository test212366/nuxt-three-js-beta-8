<style scoped>
	footer {
		display: flex;
		align-items: center;
		color: #fff;
		justify-content: space-between;
		padding-bottom: 50px;
	}
	.logo {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}
	.logo p {
		font-size: 20px;
		background: linear-gradient(270deg, #9CE6B6 50.1%, #D0F29F 103.6%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 600;
		margin-left: 10px;
		letter-spacing: .6px;
		/* margin-bottom: 10px; */
	}
	.logo svg {
		fill: #D0F29F;
		
	}
	.footer__description {
		max-width: 400px;
		color: #8e8a8a;
		font-size: 13px;
		line-height: 22px;
		margin-bottom: 40px;
	}
	.footer__section {
		padding-top: 60px;
		border-top: 1px solid #2e2e2e;
	}
	.footer__email {
		font-size: 13px;
	 
	}
	.footer__select {
		height: 155px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.footer__select p {
		font-size: 12px;
		color: #8e8a8a;

	}
	.footer__select p:first-child {
		font-size: 16px;
		color: #fff;
	}
	@media screen and (max-width: 1110px) { 
		.logo p{
			font-size: 14px;
		}
		.logo svg {
			height: 25px;
			width: 25px;
		}
		.footer__description {
			font-size: 12px;
			max-width: 300px;
		}
		.footer__select p {
			font-size: 10px;
		}
		.footer__select p:first-child {
			font-size: 15px;
		}
	
	}
	@media screen and (max-width: 690px) {
		.footer__description {
			display: none;
		}
		.container {
			position: relative;

		}
	 
		.footer__email {
			display: none;
		}
		.container div:first-child {
			display: none
		}
		.footer__select p:first-child {
			font-size: 14px;
		}
		.footer__select p {
			font-size: 12px;
		}
	}
</style>


<template> 
	<section class="footer__section" >

		<footer class="container">
			<div>
					<div class="logo">
						<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="35px" height="35px"><path d="M 11.984375 4 A 1.0001 1.0001 0 0 0 11.292969 4.2929688 L 3.2929688 12.292969 A 1.0001 1.0001 0 0 0 3 13 L 3 36 A 1.0001 1.0001 0 0 0 3.2929688 36.707031 L 13.292969 46.707031 A 1.0001 1.0001 0 0 0 15 46 L 15 25.414062 L 24.292969 34.707031 A 1.0001 1.0001 0 0 0 25.707031 34.707031 L 35 25.414062 L 35 46 A 1.0001 1.0001 0 0 0 36.707031 46.707031 L 46.707031 36.707031 A 1.0001 1.0001 0 0 0 47 36 L 47 13 A 1.0001 1.0001 0 0 0 46.707031 12.292969 L 38.707031 4.2929688 A 1.0001 1.0001 0 0 0 37.292969 4.2929688 L 25 16.585938 L 12.707031 4.2929688 A 1.0001 1.0001 0 0 0 11.984375 4 z M 12 6.4140625 L 24 18.414062 L 24 31.585938 L 5.4140625 13 L 12 6.4140625 z M 38 6.4140625 L 44.585938 13 L 26 31.585938 L 26 18.414062 L 38 6.4140625 z M 5 15.414062 L 13 23.414062 L 13 43.585938 L 5 35.585938 L 5 15.414062 z M 45 15.414062 L 45 35.585938 L 37 43.585938 L 37 23.414062 L 45 15.414062 z"/></svg>
					<p>
						Crypto
					</p>
					</div>

					<p class="footer__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, libero!</p>
					<p class="footer__email">info@gmail.com</p>
				</div>
				<div class="footer__select">
					<p>Product</p>
				 
						<p>BlockQuaote</p>
						<p>Security</p>
						<p>API</p>
						<p>Intreset</p>
				 
				</div>
				<div class="footer__select">
					<p>Cryptocurrency</p>
				 
						<p>Bolom</p>
						<p>Litecoin</p>
						<p>Bathroom</p>
						<p>Hope</p>
				 
				</div>
				<div class="footer__select">
					<p>Product</p>
				 
						<p>Trade</p>
						<p>FAQ</p>
						<p>API</p>
						<p>Intreset</p>
			 
				</div>
	 
		</footer>
	</section>


</template>
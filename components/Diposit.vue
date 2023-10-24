<style scoped>

.calculator__wrapper h5{
		font-size: 35px;
		margin-bottom: 20px;
		line-height: 50px;
		font-weight: 600;
		/* letter-spacing: 1px; */
		background: linear-gradient(270deg, #9CE6B6 50.1%, #D0F29F 103.6%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
 
	.calculator__wrapper p {
		color: #ababab;
		font-size: 14px;
		line-height: 25px;
		max-width: 540px;
		margin-bottom: 50px;
	}
	.title__first {
		margin-top: 40px;
		margin-bottom: 20px !important;
	}
 
	.calc__learn {
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
	.deposit {
		margin-top: 50px;
		margin-bottom: 200px;
	}

	@media screen and (max-width: 1110px) { 
		.calculator__wrapper h5 {
			font-size: 27px;
			line-height: 40px;
			text-align: center;
		}
		.calculator__wrapper {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
		}
		.title__first {
			font-size: 12px !important;
			text-align: center;

		}
		.calculator__wrapper p:nth-child(3) {
			font-size: 12px !important;
			text-align: center;
 
		}
		.calc__learn {
			font-size: 12px; 

		}
	 
	
	}
	@media screen and (max-width: 690px) {
		.calculator__wrapper h5 {
			font-size: 23px;
			line-height: 30px;
		}
		.calculator__wrapper p {
			font-size: 11px !important;
		} 
		.calc__learn  {
			font-size: 10px;
		}
		#sec {
			font-size: 11px !important;
			margin-bottom: 0;
		}
		.deposit {
			margin-bottom: 100px;
		}
	}
</style>

<template>
	<section class="deposit">
		<div class="calculator__wrapper">
			<h5>Deposit Crypto Earn <br/> Interest</h5>
			<p class="title__first">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eius maiores minima ea reiciendis atque asperiores, officiis obcaecati, eos dolorum itaque accusantium, nisi earum id expedita? Iste, consequatur? Similique, asperiores?</p>
			<p id="sec">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum officia quo pariatur nam expedita, quisquam distinctio ea eligendi perferendis. Ex totam enim voluptate laborum atque hic facilis exercitationem consequuntur explicabo.</p>
			<button class="calc__learn">Learn More</button>
		</div>

	</section>


</template>
<script>


</script>
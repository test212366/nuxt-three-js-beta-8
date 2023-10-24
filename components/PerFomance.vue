<style scoped>

	.block {
		height: 60px;
		width: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: transparent;
		border: 2px solid #595959;
		border-radius: 10px;
	}
	.block path {
		stroke: #D0F29F;
	}
	.perfomance {
		display: flex;
		justify-content: space-between;
		margin-bottom: 200px;
	}
	.perf__title {
		margin: 20px 0;
		font-size: 22px;
		color: #fff;
		font-weight: 500;
		letter-spacing: 1px;
	}
	.perf__description {
		font-size: 12px;
		margin-bottom: 40px;
		line-height: 24px;
		color: #838383;
	}
	.perf__item {
		max-width: 370px;
		margin-right: 30px;
	}
	
	.calculator__wrapper h5{
		font-size: 35px;
		margin-bottom: 20px;
		line-height: 50px;
		text-align: end;
		font-weight: 600;
		/* letter-spacing: 1px; */
		background: linear-gradient(270deg, #9CE6B6 50.1%, #D0F29F 103.6%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
 
	.calculator__wrapper p {
		color: #ababab;
		text-align: end;
		font-size: 14px;
		line-height: 25px;
		max-width: 540px;
 
	}
	.title__first {
 
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

	.perf__items {
		max-width: 800px;
		display: flex;

		flex-wrap: wrap;
	}
	.calculator__wrapper {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: end;
	}
	@media screen and (max-width: 1270px) {
		.perf__items {
			max-width: 700px;
		}
		.perf__item {
			max-width: 290px;
		}
	}
	
	@media screen and (max-width: 1175px) {
		.calculator__wrapper h5 {
			font-size: 30px;
			line-height: 38px;
		}
		.title__first {
			font-size: 12px !important;
			line-height: 20px !important;
		}
	}
	@media screen and (max-width: 1110px) { 
		.perfomance {
			display: flex;
			flex-direction: column;
			align-items: center;
		 
			
		   /* flex-direction: column-reverse; */
		}
		.calculator__wrapper {
			display: flex;
			align-items: center;
			margin-top: 50px;
		}
		.calculator__wrapper h5 {
			text-align: center;
		}
		.calculator__wrapper p {
			text-align: center;
		}
		.perf__item {
			margin-right: 0;
		}
		
		.perf__items {
			justify-content: space-between;
		}
		.perf__item:nth-child(2) p{
			text-align: end;
		}
		.perf__item:nth-child(2) {
			display: flex;
			flex-direction: column;
			align-items: end;
		}
		.perf__item:nth-child(4) {
			display: flex;
			flex-direction: column;
			align-items: end;
		}
		.perf__item:nth-child(4) p{
			text-align: end;
		}
		.block svg {
			width: 35px;
			height: 35px;
		}
	}
	@media screen and (max-width: 690px) {
		.calculator__wrapper h5 {
			font-size: 23px;
			line-height: 30px;
		}
		.title__first {
			font-size: 11px !important;
		} 
		.calc__learn  {
			margin-top: 25px;
			font-size: 10px;
		}
		.perf__description {
			font-size: 11px;
			line-height: 20px;
		 
		}
		.perf__item {
			max-width: 250px;
		}
		.perf__title {
			font-size: 20px;
			margin-bottom: 10px;
		}
		.block {
			height: 46px;
			width: 46px;
		}
		.block svg{
			height: 25px;
			width: 25px;
		}
	 
	}
	@media screen and (max-width: 605px) {
		.perf__item {
			 width: 100%;
			 max-width: unset;
			 display: flex;
			 flex-direction: column;
			 align-items: center;
		}
		.perf__description {
			max-width: 350px;
			text-align: center;
		} 
		.perf__item:nth-child(4) {
			/* display: flex; */
			/* flex-direction: column; */
			align-items: center;
		}
		.perf__item:nth-child(4) p{
			text-align: center;
		}
		.perf__item:nth-child(2) {
			/* display: flex; */
			/* flex-direction: column; */
			align-items: center;
		}
		.perf__item:nth-child(2) p{
			text-align: center;
		}
	}
</style>

<template>
	<section class="perfomance">
		<div class="perf__items">
			<div class="perf__item">
				<div class="block">
					<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21 7L14.4142 13.5858C13.6332 14.3668 12.3668 14.3668 11.5858 13.5858L10.4142 12.4142C9.63316 11.6332 8.36683 11.6332 7.58579 12.4142L3 17M21 7H15M21 7V13" stroke="#067c02" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<p class="perf__title">Valu Perfomance</p>
				<p class="perf__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem repellendus architecto, illo autem repellendus architecto, illo </p>

			</div>
			<div class="perf__item">
				<div class="block">
					<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21 7L14.4142 13.5858C13.6332 14.3668 12.3668 14.3668 11.5858 13.5858L10.4142 12.4142C9.63316 11.6332 8.36683 11.6332 7.58579 12.4142L3 17M21 7H15M21 7V13" stroke="#067c02" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<p class="perf__title">Valu Perfomance</p>
				<p class="perf__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem repellendus architecto, illo autem repellendus architecto, illo </p>

			</div>
			<div class="perf__item">
				<div class="block">
					<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21 7L14.4142 13.5858C13.6332 14.3668 12.3668 14.3668 11.5858 13.5858L10.4142 12.4142C9.63316 11.6332 8.36683 11.6332 7.58579 12.4142L3 17M21 7H15M21 7V13" stroke="#067c02" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<p class="perf__title">Valu Perfomance</p>
				<p class="perf__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem repellendus architecto, illo autem repellendus architecto, illo </p>

			</div>
			<div class="perf__item">
				<div class="block">
					<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21 7L14.4142 13.5858C13.6332 14.3668 12.3668 14.3668 11.5858 13.5858L10.4142 12.4142C9.63316 11.6332 8.36683 11.6332 7.58579 12.4142L3 17M21 7H15M21 7V13" stroke="#067c02" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<p class="perf__title">Valu Perfomance</p>
				<p class="perf__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque autem repellendus architecto, illo autem repellendus architecto, illo </p>

			</div>
		</div>
		<div class="calculator__wrapper">
			<h5>Deposit Crypto Earn <br/> Interest</h5>
			<p class="title__first">Lorem ipsum dolor sit amet consectetur  aecati, eos dolorum itaque accusantium, nisi earum id expedita? Iste, consequatur? Similique, asperiores?</p>
			 <button class="calc__learn">Learn More</button>
		</div>


	</section>


</template>


<script>

</script>
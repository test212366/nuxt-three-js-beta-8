<style scoped>
	.container {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		max-width: 1300px;
		padding: 0 50px;
		margin: 0 auto;
		z-index: 10;
	}
	header {
		display: flex;
		margin-top: 35px;
		align-items: center;
		justify-content: space-between;
	 
	}
	.header__logo {
		display: flex;
		align-items: center;
	}
	.header__logo p {
		font-size: 20px;
		background: linear-gradient(270deg, #9CE6B6 50.1%, #D0F29F 103.6%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 600;
		margin-left: 10px;
		letter-spacing: .6px;
	}
	.header__logo svg {
		fill: #D0F29F;
	}
	.header__nav {
		display: flex;
		align-items: center;
	}
	.header__nav li {
		color: #cbcbcb;
		list-style: none;
		margin-left: 40px;
		font-size: 13.5px;
		
	}
	.menu {
		display: none;
	}
	.header__register {
		padding: 9px 24px;
		border-radius: 10px;
		background-color: transparent;
		border: 2px solid #333333;
		margin-right: 20px;
		color: #d3d3d3;
		display: flex;
		align-items: center;
		font-size: 12px;
	}
	.header__register svg {
		margin-right: 7px;
	}
	.wrapper__buttons {
		display: flex;
		align-items: center;
	}
	.header__connnect-wall {
		padding: 9px 24px;
		border-radius: 10px;
		background: linear-gradient(270deg, #9CE6B6 50.1%, #D0F29F 103.6%);
		
		border: none;
 
		/* color: #000000; */
		font-weight: 600;
		display: flex;
		align-items: center;
		font-size: 12px;
	}
	.header__connnect-wall svg {
		margin-left: 7px;

	}
	@media screen and (max-width: 1110px) {
		.header__logo p {
			font-size: 15px;
		}
		.header__logo svg {
			height: 25px;
			width: 25px;
		}
		.header__nav li {
			font-size: 11px;
		}
		.wrapper__buttons button {
			font-size: 10px;
		}
		.header__connnect-wall {
			height: 35px;
		}
	}
	@media screen and (max-width: 1000px) {
		header nav {
			display: none;
		}
		.wrapper__buttons {
			display: none;
		}
		.menu {
			display: flex;
			flex-direction: column;
			height: 17px;
			justify-content: space-between;
		}
		.menu div {
			height: 2px;
			/* margin-top: 2px; */
			width: 25px;
			border-radius: 20px;
			background-color: #9e9e9e;
		}
	}
	@media screen and (max-width: 440px) {
		.container {
			padding: 0 20px;

		}
	}
</style>


<template>
	<section class="container">

		<header  >
			<div class="header__logo">
				<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="35px" height="35px"><path d="M 11.984375 4 A 1.0001 1.0001 0 0 0 11.292969 4.2929688 L 3.2929688 12.292969 A 1.0001 1.0001 0 0 0 3 13 L 3 36 A 1.0001 1.0001 0 0 0 3.2929688 36.707031 L 13.292969 46.707031 A 1.0001 1.0001 0 0 0 15 46 L 15 25.414062 L 24.292969 34.707031 A 1.0001 1.0001 0 0 0 25.707031 34.707031 L 35 25.414062 L 35 46 A 1.0001 1.0001 0 0 0 36.707031 46.707031 L 46.707031 36.707031 A 1.0001 1.0001 0 0 0 47 36 L 47 13 A 1.0001 1.0001 0 0 0 46.707031 12.292969 L 38.707031 4.2929688 A 1.0001 1.0001 0 0 0 37.292969 4.2929688 L 25 16.585938 L 12.707031 4.2929688 A 1.0001 1.0001 0 0 0 11.984375 4 z M 12 6.4140625 L 24 18.414062 L 24 31.585938 L 5.4140625 13 L 12 6.4140625 z M 38 6.4140625 L 44.585938 13 L 26 31.585938 L 26 18.414062 L 38 6.4140625 z M 5 15.414062 L 13 23.414062 L 13 43.585938 L 5 35.585938 L 5 15.414062 z M 45 15.414062 L 45 35.585938 L 37 43.585938 L 37 23.414062 L 45 15.414062 z"/></svg>
				<p>
					Crypto
				</p>
			</div>
			<nav>
				<ul class="header__nav">
					<li>Buy crypto</li>
					<li>Markets</li>
					<li>Turbo</li>
					<li>Earn</li>
					<li>Finance</li>
					<li>NFT</li>

				</ul>
			</nav>
			<div class="wrapper__buttons">
				<button class="header__register"><svg fill="#d3d3d3" height="12px" width="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
						viewBox="0 0 330 330" xml:space="preserve">
					<g>
						<path d="M305,149.998H121.215l44.392-44.392c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-69.998,69.998
							c-5.858,5.857-5.858,15.355,0,21.213l69.998,70.002c2.929,2.929,6.767,4.394,10.606,4.394c3.838-0.001,7.678-1.465,10.606-4.393
							c5.857-5.858,5.858-15.355,0-21.213l-44.394-44.396H305c8.284,0,15-6.716,15-15C320,156.714,313.284,149.998,305,149.998z"/>
						<path d="M155,300H40V30h115c8.284,0,15-6.716,15-15s-6.716-15-15-15H25c-8.284,0-15,6.716-15,15v300c0,8.284,6.716,15,15,15h130
							c8.284,0,15-6.716,15-15S163.284,300,155,300z"/>
					</g>
					</svg> Register</button>
				<button class="header__connnect-wall"> <p>Connect Wallet</p> <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M3 8V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg></button>

			</div>
			<div class="menu">
				<div></div>
				<div></div>
				<div></div>

			</div>
		</header>
	</section>
 

</template>


<script lang="ts">




</script>
<script setup lang="ts">

	//!СДЕЛАТЬ ЭФФЕКТ У HOLOEFFECT СИНИЙ ЭФФЕКТ И ТД КАК В 9 ПРОЕКТЕ ПО THREE JS 
</script>

<template> 
	<!-- <h1>test</h1> -->

	<Header />
	<section class="container">
		<WebGL />
		<Welcome />
	</section>
	<Slider />
	<section class="container">
		<Calculator />
		<Diposit/>
		<PerFomance />
		<Install />
	</section>
	<Footer />
</template>


<style  >
	.active__header {
		background-color: red;
	}
	.container {
		max-width: 1300px;
		padding: 0 50px;
		margin: 0 auto;
	}

	body {
		overscroll-behavior: none;
		background-color: #000;
	}
 
	* {
		font-family: Montserrat;
		margin: 0;
		box-sizing: border-box;
 
		padding: 0;
	}
	*::-webkit-scrollbar {
		width: 6px;
	}

	/* Track */
	*::-webkit-scrollbar-track {
		background: #0d0d0d;
	}

	/* Handle */
	*::-webkit-scrollbar-thumb {
		background: rgb(9, 26, 6);
 
	}

 
	@font-face {
		font-weight: 400;
		font-family: Montserrat;
		src: url("../assets/font/Montserrat-Regular.ttf");
	}
	@font-face {
		font-weight: 500;
		font-family: Montserrat;
		src: url("../assets/font/Montserrat-Medium.ttf");
	}
	@font-face {
		font-weight: 600;
		font-family: Montserrat;
		src: url("../assets/font/Montserrat-Bold.ttf");
	}
	@font-face {
		font-weight: 800;
		font-family: Montserrat;
		src: url("../assets/font/Montserrat-Black.ttf");
	}
	@font-face {
		font-weight: 300;
		font-family: Montserrat;
		src: url("../assets/font/Montserrat-Light.ttf");
	}
	canvas {
		display: block;
	}

	@media screen and (max-width: 440px) {
		.container {
		 
			padding: 0 20px;
	 
		}
	}
</style>
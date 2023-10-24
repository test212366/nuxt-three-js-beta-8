
<script setup lang="ts">

	import { WebGLScene } from '../class/WebGL'
 
	const AimWebGL: Ref<HTMLCanvasElement | null> = ref(null)

	onMounted(() => {
		new WebGLScene({
			dom: AimWebGL.value 
		})
	})
 
	
</script>

<template> 
	<div id="canvas" ref="AimWebGL">

	</div>
</template>

<style scoped>
	
	#canvas {
		position: fixed;
		top: 0;
		height: 100vh;
		left: 0;
		right: 0;
		z-index: -1;
		transition: .5s ease all;
	}


</style>
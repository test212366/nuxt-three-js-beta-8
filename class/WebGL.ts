	
	import * as THREE from 'three'
	import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
	import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader' 
	// import GUI from 'lil-gui'
	import gsap from 'gsap'
	//@ts-ignore
	import fragmentShader from '../shaders/fragment.frag';
 	//@ts-ignore
	import vertexShader from '../shaders/vertex.vert'
	//@ts-ignore
	import hand from '../assets/hand.glb'
	//@ts-ignore
	import bitcoin from '../assets/bitcoin.glb'

	import env from '../assets/env.jpg'
import { HoloEffect } from './HoloEffect'
	

	import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer'
	import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass'
	import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass'
	import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass'

	// const header = document.getElementById('header')

 	export class WebGLScene {
		scene: any
		container: any
		width: any
		height: any
		renderer: any
		renderTarget: any
		camera: any
		controls: any
		time: number
		dracoLoader: any
		gltf: any
		isPlaying: boolean
		//@ts-ignore
		gui: GUI 
		imageAspect!: number
		material: any
		geometry: any
		plane: any
		aspect: any
		  modelMaterial: any
		  pmremGenerator: any
		  envMap: any
		arrayMesh: any
		  renderScene: any
		  bloomPass: any
		  holoEffect: any
		  composer: any
		  bitcoin: any
		  modelHand: any
		
		constructor(options: any) {
			
			this.scene = new THREE.Scene()
			
			this.container = options.dom
			this.arrayMesh = []
			this.width = this.container.offsetWidth
			this.height = this.container.offsetHeight
			this.aspect = this.width / this.height
			
			
			// // for renderer { antialias: true }
			this.renderer = new THREE.WebGLRenderer({ antialias: true })
			this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
			this.renderTarget = new THREE.WebGLRenderTarget(this.width, this.height)
			this.renderer.setSize(this.width ,this.height )
			this.renderer.setClearColor(0xeeeeee, 1)
			this.renderer.useLegacyLights = true
			this.renderer.outputEncoding = THREE.sRGBEncoding
	

			
			this.renderer.setSize( window.innerWidth, window.innerHeight )

			this.container.appendChild(this.renderer.domElement)
	


			this.camera = new THREE.PerspectiveCamera( 70,
				this.width / this.height,
				0.01,
				10
			)
	
			this.camera.position.set(0, 0, 2) 
			this.controls = new OrbitControls(this.camera, this.renderer.domElement)
			this.time = 0


			this.dracoLoader = new DRACOLoader()
			this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
			this.gltf = new GLTFLoader()
			this.gltf.setDRACOLoader(this.dracoLoader)

			this.isPlaying = true
			
		 


			this.gltf.load(bitcoin, (gltf: any) => {
	 
				this.pmremGenerator = new THREE.PMREMGenerator(this.renderer)
				this.pmremGenerator.compileEquirectangularShader()

				this.envMap = new THREE.TextureLoader().load(env, (texture:any) => {
					this.envMap = this.pmremGenerator.fromEquirectangular(texture).texture
					this.modelMaterial = new THREE.MeshStandardMaterial({
						metalness: 1,
						roughness: 0.28
					})
					this.modelMaterial.envMap = this.envMap

					this.modelMaterial.onBeforeCompile = (shader:any) => {

						shader.uniforms.uTime = {value: 0}
						shader.fragmentShader = `
						uniform float uTime;
						mat4 rotationMatrix(vec3 axis, float angle) {
							axis = normalize(axis);
							float s = sin(angle);
							float c = cos(angle);
							float oc = 1.0 - c;
							
							return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
											oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
											oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
											0.0,                                0.0,                                0.0,                                1.0);
					  }
					  
					  vec3 rotate(vec3 v, vec3 axis, float angle) {
						  mat4 m = rotationMatrix(axis, angle);
						  return (m * vec4(v, 1.0)).xyz;
					  }
	
	
	
						` + shader.fragmentShader
					  shader.fragmentShader = shader.fragmentShader.replace(
							`#include <envmap_physical_pars_fragment>`,
							`
							#if defined( USE_ENVMAP )
								vec3 getIBLIrradiance( const in vec3 normal ) {
									#if defined( ENVMAP_TYPE_CUBE_UV )
										vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
										vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
										return PI * envMapColor.rgb * envMapIntensity;
									#else
										return vec3( 0.0 );
									#endif
								}
								vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
									#if defined( ENVMAP_TYPE_CUBE_UV )
										vec3 reflectVec = reflect( - viewDir, normal );
										// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
										reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
										reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
										
										reflectVec = rotate(reflectVec, vec3(1.0, 0.0, 0.0), uTime * 0.05);
										
										vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
										return envMapColor.rgb * envMapIntensity;
									#else
										return vec3( 0.0 );
									#endif
								}
							#endif
							`
					  )
						
					this.modelMaterial.userData.shader = shader
					}



					gltf.scene.traverse((o:any) => {
						if(o.isMesh) {
							// o.position.set(0,-10,10)
							// o.rotation.x = .2
							// o.rotation.z = -.6
							o.material = this.modelMaterial
							let scale = 0.4
							if(this.width < 900) scale = .3
							if(this.width < 550) scale = .2
							o.scale.set(scale, 0.15, scale)
							this.arrayMesh.push(o)
						}
					})
	 
					this.gltf.load(hand, (gltf: any) => {
						this.modelHand = gltf.scene
						let scale = .035
						if(this.width < 900) scale = .025
						if(this.width < 550) scale = .02


						this.modelHand.scale.set(scale,scale,scale)
						this.modelHand.rotation.x = .5
						this.modelHand.rotation.y = .8


						this.modelHand.traverse((o:any) => {
							if(o.isMesh) {
								// o.position.set(0,-10,10)
								// o.rotation.x = .2
								// o.rotation.z = -.6
								o.material = this.modelMaterial
				  
							}
						})
			 
						this.scene.add(this.modelHand)
					})
 
					this.bitcoin = gltf.scene
					let positionX = .8
					if(this.width < 1160) positionX = .5
					if(this.width < 550) positionX = .25

					this.bitcoin.position.set(positionX,.2,.3)
					this.scene.add(this.bitcoin)
					this.initPost()
					this.addObjects()		 
					this.resize()
					this.render()
					this.setupResize()
					this.eventScroll()

				})
				 
			})



		 

 
		}
		initPost() {
			this.renderScene = new RenderPass(this.scene, this.camera)
			this.bloomPass = new UnrealBloomPass(new THREE.Vector2(this.width, this.height), 
			1.5,0.4, 0.85)
			// this.bloomPass.threshold = this.settings.bloomThreshold
			// this.bloomPass.strength = this.settings.bloomStrength
			// this.bloomPass.radius = this.settings.bloomRadius
	
	
			//use new postproseccing effect
			this.holoEffect = new ShaderPass(HoloEffect)
			 
			this.composer = new EffectComposer(this.renderer)
			this.composer.addPass(this.renderScene)
			this.composer.addPass(this.bloomPass)
	
			//use new postproseccing effect
			this.composer.addPass(this.holoEffect)
			this.holoEffect.uniforms.uSize.value = new THREE.Vector2(this.width, this.height)
		}

		settings() {
			let that = this
		 
			this.settings = {
					//@ts-ignore
				progress: 0
			}
			//@ts-ignore
			this.gui = new GUI()
			this.gui.add(this.settings, 'progress', 0, 1, 0.01)
		}

	setupResize() {
		window.addEventListener('resize', this.resize.bind(this))
	}

	resize() {
		this.width = this.container.offsetWidth
		this.height = this.container.offsetHeight
		this.renderer.setSize(this.width, this.height)
		this.camera.aspect = this.width / this.height


		this.imageAspect = 853/1280
		let a1, a2
		if(this.height / this.width > this.imageAspect) {
			a1 = (this.width / this.height) * this.imageAspect
			a2 = 1
		} else {
			a1 = 1
			a2 = (this.height / this.width) / this.imageAspect
		} 


		this.material.uniforms.resolution.value.x = this.width
		this.material.uniforms.resolution.value.y = this.height
		this.material.uniforms.resolution.value.z = a1
		this.material.uniforms.resolution.value.w = a2

		this.camera.updateProjectionMatrix()



	}


	addObjects() {
		let that = this
		this.material = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				resolution: {value: new THREE.Vector4()}
			},
			vertexShader,
			fragmentShader
		})
		
		this.geometry = new THREE.PlaneGeometry(3 * this.aspect ,3)
		this.plane = new THREE.Mesh(this.geometry, this.material)
		this.scene.add(this.plane)
 
	}



	addLights() {
		const light1 = new THREE.AmbientLight(0xeeeeee, 0.5)
		this.scene.add(light1)
	
	
		const light2 = new THREE.DirectionalLight(0xeeeeee, 0.5)
		light2.position.set(0.5,0,0.866)
		this.scene.add(light2)
	}

	stop() {
		this.isPlaying = false
	}

	play() {
		if(!this.isPlaying) {
			this.isPlaying = true
			this.render()
		}
	}
	eventScroll() {
		let icoScale = .75
		if(this.width < 1600) icoScale = .6 
		if(this.width < 500) icoScale = .45 
		let scale = .035
		if(this.width < 900) scale = .025
		if(this.width < 550) scale = .02


		document.addEventListener('scroll', e => {
			const scrollY = window.scrollY / 690
		 
			this.modelHand.rotation.y = .8 + scrollY / 4
			this.modelHand.scale.set(scale - scrollY / 300,scale - scrollY / 300,scale - scrollY / 300)
			this.bitcoin.position.set(this.bitcoin.position.x,.2 + scrollY / 2, this.bitcoin.position.z)
		})
	}
	render() {
			if(!this.isPlaying) return

			this.time += 0.05
			this.material.uniforms.time.value = this.time
 
				if(this.modelMaterial.userData.shader) {
					this.arrayMesh.forEach((mesh:any) => {
						mesh.material.userData.shader.uniforms.uTime.value = this.time
			
						this.holoEffect.uniforms.uTime.value = this.time
					 
					})
			 
				}
				if(this.bitcoin) {
					this.bitcoin.rotation.x = this.time / 15
					this.bitcoin.rotation.y = this.time / 15
					// this.modelHand.position.set(.4,-.7,1.)
					if(this.modelHand) {
						let positionX = .7,
							positionY = -1.,
							forcePosition = 6


						if(this.width < 1160) {
							positionX = .4
							positionY = -.8
							forcePosition = 10
						} 
						if(this.width < 550) {
							positionX = .1
							forcePosition = 13

							positionY = -.5
						}
						this.modelHand.position.set(positionX + Math.sin(this.time / 10) / 8, positionY + Math.sin(this.time / 10) / forcePosition,.4)
					}   
					// 
				}
			//this.renderer.setRenderTarget(this.renderTarget)
			// this.renderer.render(this.scene, this.camera)
		this.composer.render(this.scene, this.camera)

			//this.renderer.setRenderTarget(null)
	
			requestAnimationFrame(this.render.bind(this))
		}
 
	}
 
 
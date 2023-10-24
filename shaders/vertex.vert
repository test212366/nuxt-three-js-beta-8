uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec2 pixels;
uniform vec3 uMin;
varying vec3 vNormal;
varying vec3 v_wordPosition;
float PI = 3.1415926;
void main () {
	vUv = uv;
	vPosition = position;
	vNormal = normal;
	v_wordPosition = (modelMatrix * vec4(position, 1.0)).xyz;

	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
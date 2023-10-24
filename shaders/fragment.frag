uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
uniform vec3 uLight;
varying vec3 v_wordPosition;
varying vec3 vNormal;



float PI = 3.1415926;



vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

vec2 fade(vec2 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec2 P){
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x,gy.x);
  vec2 g10 = vec2(gx.y,gy.y);
  vec2 g01 = vec2(gx.z,gy.z);
  vec2 g11 = vec2(gx.w,gy.w);
  vec4 norm = 1.79284291400159 - 0.85373472095314 * 
    vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}


float getScatter(vec3 cameraPos, vec3 dir, vec3 lightPos, float d) {
	vec3 q = cameraPos - lightPos;


	float b = dot(dir, q);
	float c = dot(q, q);

	float t = c - b * b;
	float s = 1.0 / sqrt(max(0.001, t));
	float l = s * (atan((d + b) * s) - atan(b * s));
	return pow(max(0.0, l / 150.0), 0.4);

}


void main() {
 
	vec2 uv = gl_FragCoord.xy / resolution.xy;
	float myNoise = cnoise(vUv  + time / 10.);

	vec3 purleColor = vec3(0., 1., .0);
	vec3 lightPurpleColor = vec3(.0, 0., .7);
	
	vec3 mixPurple = mix(lightPurpleColor, purleColor, .5);

	vec3 backgroundColor = vec3(0.);
	vec3 gradientColor = mix( backgroundColor,mixPurple, myNoise );

	gl_FragColor = vec4(gradientColor, 1.);








	vec3 cameraToWorld = v_wordPosition - cameraPosition;
	vec3 cameraToWorldDir = normalize(cameraToWorld);

	float cameraToWorldDistance = length(cameraToWorld);



	vec3 lightToWorld = normalize(uLight - v_wordPosition);


	float diffusion = max(1.,dot(vNormal, lightToWorld));
	float dist = length(uLight - vPosition);

	float scatter = getScatter(cameraPosition, cameraToWorldDir,uLight, cameraToWorldDistance);


	float final = diffusion * scatter;

	// gradientColor.b = scatter / 1.5;


	// gradientColor = mix( vec3(0., 0., final - .0), gradientColor, .4);



	gl_FragColor = vec4( gradientColor, 1.);

}